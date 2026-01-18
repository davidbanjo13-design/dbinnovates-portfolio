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
      antialias: false,
      alpha: true,
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

        // Noise function for organic movement
        float noise(vec2 p) {
          return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
        }

        float smoothNoise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          
          float a = noise(i);
          float b = noise(i + vec2(1.0, 0.0));
          float c = noise(i + vec2(0.0, 1.0));
          float d = noise(i + vec2(1.0, 1.0));
          
          return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
        }

        float fbm(vec2 p) {
          float value = 0.0;
          float amplitude = 0.5;
          float frequency = 1.0;
          
          for(int i = 0; i < 5; i++) {
            value += amplitude * smoothNoise(p * frequency);
            frequency *= 2.0;
            amplitude *= 0.5;
          }
          
          return value;
        }

        void main() {
          vec2 uv = gl_FragCoord.xy / iResolution.xy;
          vec2 p = uv * 2.0 - 1.0;
          p.x *= iResolution.x / iResolution.y;

          // Animated flowing gradient
          float t = iTime * 0.3;
          vec2 motion = vec2(
            fbm(p * 2.0 + vec2(t * 0.5, t * 0.3)),
            fbm(p * 2.0 + vec2(t * 0.3, -t * 0.5))
          );

          // Create color fields
          float field1 = fbm(p * 1.5 + motion + t * 0.2);
          float field2 = fbm(p * 2.0 - motion * 0.5 + t * 0.15);
          float field3 = fbm(p * 2.5 + motion * 0.3 - t * 0.1);

          // Cyan/Purple/Blue gradient matching your theme
          vec3 color1 = vec3(0.0, 0.94, 1.0); // accent-cyan
          vec3 color2 = vec3(0.58, 0.0, 1.0); // accent-purple
          vec3 color3 = vec3(0.0, 0.5, 1.0); // accent-blue

          vec3 color = mix(color1, color2, field1);
          color = mix(color, color3, field2);
          color += vec3(field3 * 0.2);

          // Add subtle vignette
          float vignette = 1.0 - length(p) * 0.3;
          color *= vignette;

          // Increase opacity for more visible effect
          float alpha = 0.35 + field1 * 0.15;

          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
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
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  )
}

export default ShaderBackground
