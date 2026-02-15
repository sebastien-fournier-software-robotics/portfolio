import React, { useRef, useEffect } from "react";
import * as THREE from "three";

/**
 * 3D Orbiting Particle Sphere — Three.js (vanilla)
 *
 * Single sphere of particles with interactive hover effects:
 *   • Repulsion  — particles near the cursor push outward
 *   • Highlight  — opacity brightens on hover
 *   • Speed boost — rotation accelerates while hovering
 */

/* ---------- helpers ---------- */

/** Fibonacci-sphere distribution — near-uniform point spread */
function fibonacciSphere(count, radius) {
  const positions = new Float32Array(count * 3);
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2; // −1 → 1
    const r = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;

    positions[i * 3] = Math.cos(theta) * r * radius;
    positions[i * 3 + 1] = y * radius;
    positions[i * 3 + 2] = Math.sin(theta) * r * radius;
  }

  return positions;
}

/* ---------- config ---------- */

const SPHERE = {
  count: 700,
  radius: 1.9,
  color: "#000000",
  opacity: 1.0,
  size: 0.038,
  speed: { x: 0.06, y: 0.18, z: 0.03 },
};

// Hover interaction tuning
const REPULSE_RADIUS = 0.9;      // influence zone around hover point
const REPULSE_STRENGTH = 0.7;    // max outward push distance
const RESTORE_SPEED = 2.5;       // how fast particles snap back
const HOVER_SPEED_MUL = 4.0;     // rotation multiplier on hover
const SPEED_LERP = 3.0;          // easing speed for rotation transition

/* ---------- component ---------- */

export default function ParticleSphere() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const { count, radius, color, opacity, size, speed } = SPHERE;

    /* --- Scene / Camera / Renderer --- */
    const scene = new THREE.Scene();

    const width = container.clientWidth;
    const height = container.clientHeight;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    /* --- Particle group (so everything rotates together) --- */
    const group = new THREE.Group();
    scene.add(group);

    /* --- Build particles --- */
    const origPositions = fibonacciSphere(count, radius);
    const currentPositions = new Float32Array(origPositions.length);
    currentPositions.set(origPositions);

    const geometry = new THREE.BufferGeometry();
    const posAttr = new THREE.BufferAttribute(currentPositions, 3);
    geometry.setAttribute("position", posAttr);

    const material = new THREE.PointsMaterial({
      color,
      size,
      sizeAttenuation: true,
      transparent: true,
      opacity,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    group.add(points);

    /* --- Invisible sphere for raycasting --- */
    const hitSphere = new THREE.Mesh(
      new THREE.SphereGeometry(radius * 1.15, 32, 16),
      new THREE.MeshBasicMaterial({ visible: false })
    );
    group.add(hitSphere);

    /* --- Raycaster & mouse --- */
    const raycaster = new THREE.Raycaster();
    const mouseNDC = new THREE.Vector2(-10, -10); // start off-screen

    function onMouseMove(e) {
      const rect = container.getBoundingClientRect();
      mouseNDC.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseNDC.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    }
    window.addEventListener("mousemove", onMouseMove);

    /* --- Animation state --- */
    let currentSpeedMul = 1.0;
    const baseOpacity = opacity;
    const clock = new THREE.Clock();
    let animationId;

    function animate() {
      animationId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      /* — Raycast to detect hover — */
      raycaster.setFromCamera(mouseNDC, camera);
      const intersects = raycaster.intersectObject(hitSphere);

      let hoverLocal = null;
      const isHovering = intersects.length > 0;

      if (isHovering) {
        // Convert hit point into group's local space
        hoverLocal = group.worldToLocal(intersects[0].point.clone());
      }

      /* — Speed boost (smooth lerp) — */
      const targetMul = isHovering ? HOVER_SPEED_MUL : 1.0;
      currentSpeedMul += (targetMul - currentSpeedMul) * Math.min(delta * SPEED_LERP, 1);

      group.rotation.x += speed.x * delta * currentSpeedMul;
      group.rotation.y += speed.y * delta * currentSpeedMul;
      group.rotation.z += speed.z * delta * currentSpeedMul;

      /* — Highlight (opacity boost) — */
      const targetOpacity = isHovering ? Math.min(baseOpacity + 0.1, 1.0) : baseOpacity;
      material.opacity += (targetOpacity - material.opacity) * Math.min(delta * 4, 1);

      /* — Repulsion — */
      const pos = posAttr.array;
      for (let i = 0; i < count; i++) {
        const ix = i * 3;
        const ox = origPositions[ix];
        const oy = origPositions[ix + 1];
        const oz = origPositions[ix + 2];

        if (hoverLocal) {
          const dx = ox - hoverLocal.x;
          const dy = oy - hoverLocal.y;
          const dz = oz - hoverLocal.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < REPULSE_RADIUS && dist > 0.001) {
            // Push outward along the direction from hover → particle
            const factor = (1 - dist / REPULSE_RADIUS) * REPULSE_STRENGTH;
            const nx = dx / dist;
            const ny = dy / dist;
            const nz = dz / dist;

            const tx = ox + nx * factor;
            const ty = oy + ny * factor;
            const tz = oz + nz * factor;

            // Smooth toward displaced position
            pos[ix] += (tx - pos[ix]) * Math.min(delta * 8, 1);
            pos[ix + 1] += (ty - pos[ix + 1]) * Math.min(delta * 8, 1);
            pos[ix + 2] += (tz - pos[ix + 2]) * Math.min(delta * 8, 1);
          } else {
            // Outside influence → restore
            pos[ix] += (ox - pos[ix]) * Math.min(delta * RESTORE_SPEED, 1);
            pos[ix + 1] += (oy - pos[ix + 1]) * Math.min(delta * RESTORE_SPEED, 1);
            pos[ix + 2] += (oz - pos[ix + 2]) * Math.min(delta * RESTORE_SPEED, 1);
          }
        } else {
          // Not hovering → restore all
          pos[ix] += (ox - pos[ix]) * Math.min(delta * RESTORE_SPEED, 1);
          pos[ix + 1] += (oy - pos[ix + 1]) * Math.min(delta * RESTORE_SPEED, 1);
          pos[ix + 2] += (oz - pos[ix + 2]) * Math.min(delta * RESTORE_SPEED, 1);
        }
      }
      posAttr.needsUpdate = true;

      /* — Gentle camera sway (clamp to avoid wild movement when mouse is outside) — */
      const clampedX = Math.max(-1, Math.min(1, mouseNDC.x));
      const clampedY = Math.max(-1, Math.min(1, mouseNDC.y));
      camera.position.x += (clampedX * 0.5 - camera.position.x) * 0.02;
      camera.position.y += (clampedY * 0.3 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    }
    animate();

    /* --- Resize handling --- */
    function onResize() {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    window.addEventListener("resize", onResize);

    /* --- Cleanup --- */
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      hitSphere.geometry.dispose();
      hitSphere.material.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "550px",
        position: "relative",
      }}
    />
  );
}
