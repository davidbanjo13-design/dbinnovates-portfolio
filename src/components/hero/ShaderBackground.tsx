'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const ShaderBackground = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const frameIdRef = useRef<number | null>(null)
  const sceneRef = useRef<{
    renderer: THREE.WebGLRenderer
    scene: THREE.Scene
    camera: THREE.OrthographicCamera
    material: THREE.ShaderMaterial
    startTime: number
  } | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const container = containerRef.current
    const rect = container.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    // Create scene
    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

    // Create renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Style canvas
    const canvas = renderer.domElement
    canvas.style.position = 'absolute'
    canvas.style.inset = '0'
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.setAttribute('aria-hidden', 'true')

    container.appendChild(canvas)

    // Shader material with 21st.dev-inspired fragment shader
    const material = new THREE.ShaderMaterial({
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector2(width, height) },
      },
      vertexShader: `
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float iTime;
        uniform vec2 iResolution;

        // Hash function for better randomness
        float hash(vec2 p) {
          vec3 p3 = fract(vec3(p.xyx) * 0.13);
          p3 += dot(p3, p3.yzx + 3.333);
          return fract((p3.x + p3.y) * p3.z);
        }

        // Improved noise function
        float noise(vec2 x) {
          vec2 i = floor(x);
          vec2 f = fract(x);
          
          float a = hash(i);
          float b = hash(i + vec2(1.0, 0.0));
          float c = hash(i + vec2(0.0, 1.0));
          float d = hash(i + vec2(1.0, 1.0));
          
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
        }

        // Fractal Brownian Motion for organic patterns
        float fbm(vec2 x) {
          float v = 0.0;
          float a = 0.5;
          vec2 shift = vec2(100.0);
          mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
          
          for (int i = 0; i < 6; ++i) {
            v += a * noise(x);
            x = rot * x * 2.0 + shift;
            a *= 0.5;
          }
          return v;
        }

        void main() {
          vec2 uv = gl_FragCoord.xy / iResolution.xy;
          vec2 p = (gl_FragCoord.xy * 2.0 - iResolution.xy) / min(iResolution.x, iResolution.y);
          
          float time = iTime * 0.4;
          
          // Create flowing aurora/nebula effect
          vec2 q = vec2(0.0);
          q.x = fbm(p + vec2(0.0, time * 0.3));
          q.y = fbm(p + vec2(5.2, time * 0.25));
          
          vec2 r = vec2(0.0);
          r.x = fbm(p + 1.0 * q + vec2(1.7, time * 0.2));
          r.y = fbm(p + 1.0 * q + vec2(8.3, -time * 0.15));
          
          float f = fbm(p + r);
          
          // Vibrant color palette - cyan, purple, blue
          vec3 color = mix(
            vec3(0.101961, 0.619608, 0.666667),  // Dark cyan
            vec3(0.666667, 0.666667, 0.498039),  // Warm white
            clamp((f * f) * 4.0, 0.0, 1.0)
          );
          
          color = mix(
            color,
            vec3(0.0, 0.0, 0.164706),  // Deep blue
            clamp(length(q), 0.0, 1.0)
          );
          
          color = mix(
            color,
            vec3(0.666667, 1.0, 1.0),  // Bright cyan
            clamp(length(r.x), 0.0, 1.0)
          );
          
          // Add shooting stars/particles effect
          vec2 particleUV = p * 3.0;
          particleUV.x += time * 0.5;
          float stars = smoothstep(0.98, 1.0, noise(particleUV * 10.0));
          color += vec3(stars) * 2.0;
          
          // Boost brightness significantly
          color = pow(color, vec3(0.8)) * 1.5;
          
          // Add extra glow
          float glow = (f * f * f + 0.6 * f * f + 0.5 * f);
          color += glow * vec3(0.2, 0.4, 0.6);
          
          gl_FragColor = vec4(color, 1.0);
        }
      `,
      transparent: false,
    })

    // Create plane geometry
    const geometry = new THREE.PlaneGeometry(2, 2)
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // Store refs
    const startTime = performance.now()
    sceneRef.current = { renderer, scene, camera, material, startTime }

    // Animation loop
    const animate = () => {
      if (!sceneRef.current) return

      const now = performance.now()
      const elapsed = (now - sceneRef.current.startTime) / 1000
      sceneRef.current.material.uniforms.iTime.value = elapsed

      sceneRef.current.renderer.render(sceneRef.current.scene, sceneRef.current.camera)

      if (!prefersReducedMotion) {
        frameIdRef.current = requestAnimationFrame(animate)
      }
    }

    // Start animation
    animate()

    // Handle resize with ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      if (!sceneRef.current) return

      const entry = entries[0]
      const newWidth = entry.contentRect.width
      const newHeight = entry.contentRect.height

      sceneRef.current.renderer.setSize(newWidth, newHeight)
      sceneRef.current.material.uniforms.iResolution.value.set(newWidth, newHeight)
    })

    resizeObserver.observe(container)

    // Cleanup
    return () => {
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current)
      }

      resizeObserver.disconnect()

      if (sceneRef.current) {
        sceneRef.current.renderer.dispose()
        geometry.dispose()
        material.dispose()
        if (canvas.parentNode) {
          canvas.parentNode.removeChild(canvas)
        }
      }

      sceneRef.current = null
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0"
      aria-hidden="true"
    />
  )
}

export default ShaderBackground
