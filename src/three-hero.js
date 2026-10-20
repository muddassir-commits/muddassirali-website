import * as THREE from 'three';

/**
 * Three.js 3D Interactive Holographic Neural Core
 * Inspired by Awwwards, Godly & 21st.dev
 * Features:
 * - 3D Geodesic Icosahedron Wireframe with glowing vertex particles
 * - Orbiting floating particle field (600+ stars/nodes)
 * - Inertial mouse tracking with smooth lerp physics
 * - Multi-layered depth and rotation
 * - Retina DPR handling & visibility-based pause
 */

export function initThreeHero(containerId = 'three-hero-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const width = container.clientWidth || window.innerWidth;
  const height = container.clientHeight || window.innerHeight;

  // Scene, Camera, Renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.z = 7;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  container.appendChild(renderer.domElement);

  // Colors for Ultra-Clean Light / White Theme
  const primaryColor = new THREE.Color(0x2563eb);   // Royal Blue
  const indigoColor = new THREE.Color(0x4f46e5);    // Electric Indigo
  const emeraldColor = new THREE.Color(0x059669);   // Deep Emerald
  const slateColor = new THREE.Color(0x94a3b8);     // Light Slate

  // 1. Central Geodesic Wireframe Sphere
  const sphereGeo = new THREE.IcosahedronGeometry(2.1, 3);
  const wireframeMat = new THREE.MeshBasicMaterial({
    color: primaryColor,
    wireframe: true,
    transparent: true,
    opacity: 0.22
  });
  const sphereMesh = new THREE.Mesh(sphereGeo, wireframeMat);
  scene.add(sphereMesh);

  // 2. Inner Glowing Core
  const innerGeo = new THREE.IcosahedronGeometry(1.4, 2);
  const innerMat = new THREE.MeshBasicMaterial({
    color: indigoColor,
    wireframe: true,
    transparent: true,
    opacity: 0.15
  });
  const innerMesh = new THREE.Mesh(innerGeo, innerMat);
  scene.add(innerMesh);

  // 3. Vertices Points on Outer Sphere
  const pointsMat = new THREE.PointsMaterial({
    color: primaryColor,
    size: 0.065,
    transparent: true,
    opacity: 0.75
  });
  const pointsMesh = new THREE.Points(sphereGeo, pointsMat);
  scene.add(pointsMesh);

  // 4. Orbiting Data Cloud Particles (600 particles)
  const particleCount = 450;
  const particleGeo = new THREE.BufferGeometry();
  const posArray = new Float32Array(particleCount * 3);
  const colorArray = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    const r = 2.8 + Math.random() * 2.8;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    posArray[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    posArray[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    posArray[i * 3 + 2] = r * Math.cos(phi);

    // Color mixing
    const chosenColor = Math.random() > 0.6 ? indigoColor : (Math.random() > 0.3 ? primaryColor : emeraldColor);
    colorArray[i * 3] = chosenColor.r;
    colorArray[i * 3 + 1] = chosenColor.g;
    colorArray[i * 3 + 2] = chosenColor.b;
  }

  particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  particleGeo.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

  const particleMat = new THREE.PointsMaterial({
    size: 0.045,
    vertexColors: true,
    transparent: true,
    opacity: 0.6
  });
  const particleCloud = new THREE.Points(particleGeo, particleMat);
  scene.add(particleCloud);

  // 5. Outer Ring
  const ringGeo = new THREE.RingGeometry(3.2, 3.25, 64);
  const ringMat = new THREE.MeshBasicMaterial({
    color: slateColor,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.25
  });
  const ringMesh = new THREE.Mesh(ringGeo, ringMat);
  ringMesh.rotation.x = Math.PI / 2.5;
  scene.add(ringMesh);

  // Mouse tracking state
  let targetX = 0;
  let targetY = 0;
  let mouseX = 0;
  let mouseY = 0;

  function onMouseMove(e) {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    targetX = ((x / rect.width) * 2 - 1) * 0.8;
    targetY = -((y / rect.height) * 2 - 1) * 0.8;
  }

  window.addEventListener('mousemove', onMouseMove);

  // Resize handler
  function onResize() {
    if (!container) return;
    const newWidth = container.clientWidth;
    const newHeight = container.clientHeight;
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);
  }

  window.addEventListener('resize', onResize);

  let isRunning = true;
  let frameId = null;

  document.addEventListener('visibilitychange', () => {
    isRunning = !document.hidden;
    if (isRunning && !frameId) {
      animate();
    }
  });

  // Animation Loop
  let clock = new THREE.Clock();

  function animate() {
    if (!isRunning) {
      frameId = null;
      return;
    }

    const elapsed = clock.getElapsedTime();

    // Smooth lerp mouse rotation
    mouseX += (targetX - mouseX) * 0.05;
    mouseY += (targetY - mouseY) * 0.05;

    // Autonomous rotation combined with mouse tilt
    sphereMesh.rotation.y = elapsed * 0.12 + mouseX * 0.6;
    sphereMesh.rotation.x = elapsed * 0.08 + mouseY * 0.6;

    innerMesh.rotation.y = -elapsed * 0.18 + mouseX * 0.4;
    innerMesh.rotation.x = -elapsed * 0.12 + mouseY * 0.4;

    pointsMesh.rotation.y = sphereMesh.rotation.y;
    pointsMesh.rotation.x = sphereMesh.rotation.x;

    particleCloud.rotation.y = elapsed * 0.05 + mouseX * 0.3;
    particleCloud.rotation.x = -elapsed * 0.03 + mouseY * 0.3;

    ringMesh.rotation.z = elapsed * 0.06;
    ringMesh.rotation.y = mouseX * 0.2;

    renderer.render(scene, camera);
    frameId = requestAnimationFrame(animate);
  }

  animate();

  return function cleanup() {
    isRunning = false;
    if (frameId) cancelAnimationFrame(frameId);
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('resize', onResize);
    if (container.contains(renderer.domElement)) {
      container.removeChild(renderer.domElement);
    }
  };
}
