'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const ShaderBackground = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const animationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Get container size (not window size)
    const rect = container.getBoundingClientRect()
    let width = rect.width
    let height = rect.height

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: false 
    })
    renderer.setSize(width, height, false)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 1)

    // Canvas styling - ensure full coverage
    const canvas = renderer.domElement
    canvas.style.position = 'absolute'
    canvas.style.inset = '0'
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.display = 'block'
    canvas.setAttribute('aria-hidden', 'true')

    container.appendChild(canvas)

    // 21st.dev shader material - matching the screenshot
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

        #define S(a,b,t) smoothstep(a,b,t)

        mat2 Rot(float a) {
          float s = sin(a);
          float c = cos(a);
          return mat2(c, -s, s, c);
        }

        vec2 hash(vec2 p) {
          p = vec2(dot(p, vec2(2127.1, 81.17)), dot(p, vec2(1269.5, 283.37)));
          return fract(sin(p) * 43758.5453);
        }

        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          vec2 u = f * f * (3.0 - 2.0 * f);
          
          float n = mix(
            mix(dot(hash(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
                dot(hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
            mix(dot(hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
                dot(hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x), u.y);
          return 0.5 + 0.5 * n;
        }

        void main() {
          vec2 uv = gl_FragCoord.xy / iResolution.xy;
          float ratio = iResolution.x / iResolution.y;
          
          vec2 tuv = uv;
          tuv -= 0.5;
          
          // Rotate with time for diagonal streaks
          float degree = noise(vec2(iTime * 0.1, tuv.x * tuv.y));
          tuv.y *= 1.0 / ratio;
          tuv *= Rot(radians((degree - 0.5) * 720.0 + 180.0));
          tuv.y *= ratio;
          
          // Wave distortion for organic movement
          float frequency = 5.0;
          float amplitude = 30.0;
          float speed = iTime * 2.0;
          tuv.x += sin(tuv.y * frequency + speed) / amplitude;
          tuv.y += sin(tuv.x * frequency * 1.5 + speed) / (amplitude * 0.5);
          
          // Create the streaks effect
          vec3 layer1 = vec3(0.0);
          vec3 layer2 = vec3(0.0);
          
          for(float i = 0.0; i < 3.0; i++) {
            // Horizontal/diagonal streaks - cyan/blue
            float t = abs(1.0 / ((tuv.x + noise(tuv * 1.5 + iTime * 0.25)) * (80.0 + i * 20.0)));
            layer1 += t * vec3(0.3, 0.5, 1.0);  // Blue tint
            
            // Vertical/diagonal streaks - purple/magenta
            t = abs(1.0 / ((tuv.y + noise(tuv * 1.8 - iTime * 0.2)) * (80.0 + i * 20.0)));
            layer2 += t * vec3(0.8, 0.3, 1.0);  // Purple tint
          }
          
          vec3 col = layer1 + layer2;
          
          // Add glow around the streaks
          float glow = pow(length(layer1 + layer2) * 0.2, 1.5);
          col += glow * vec3(0.4, 0.5, 1.0);
          
          // Boost brightness to match screenshot (adjust between 1.8-2.8)
          col *= 2.2;
          
          // Color grading for more vibrant streaks
          col = pow(col, vec3(1.1));
          
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    })

    // Geometry
    const geometry = new THREE.PlaneGeometry(2, 2)
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // Animation with real time
    const startTime = performance.now()

    const animate = () => {
      const currentTime = (performance.now() - startTime) / 1000
      material.uniforms.iTime.value = currentTime
      renderer.render(scene, camera)

      if (!prefersReducedMotion) {
        animationFrameRef.current = requestAnimationFrame(animate)
      }
    }

    animate()

    // Resize handling with ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0]
      if (!entry) return

      const newWidth = entry.contentRect.width
      const newHeight = entry.contentRect.height

      if (newWidth > 0 && newHeight > 0) {
        width = newWidth
        height = newHeight
        renderer.setSize(width, height, false)
        material.uniforms.iResolution.value.set(width, height)
      }
    })

    resizeObserver.observe(container)

    // Cleanup
    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      resizeObserver.disconnect()
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none mix-blend-screen opacity-90"
      aria-hidden="true"
    />
  )
}

export default ShaderBackground
