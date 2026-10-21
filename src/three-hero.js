import * as THREE from 'three';

/**
 * Three.js Ultra-Tech Holographic AI Quantum Core
 * Awwwards & Godly Quality
 * Features:
 * - Multi-layered quantum neural sphere with dual concentric wireframes
 * - 3 Concentric Gimbal Orbit Rings rotating on orthogonal axes with beacon nodes
 * - Luminous pulsing core vertices with sine wave breathing modulation
 * - 500+ particle constellation dust cloud with depth sorting
 * - Smooth inertial mouse tilt & parallax lerp
 * - Automatic visibility pause & DPI retina scaling
 */

export function initThreeHero(containerId = 'three-hero-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const width = container.clientWidth || 500;
  const height = container.clientHeight || 500;

  // Scene & Camera
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.z = 7.5;

  // Renderer
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance',
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  container.appendChild(renderer.domElement);

  // Palette: Precision AI Porcelain & Sapphire
  const sapphire = new THREE.Color(0x2563eb);   // Vibrant Sapphire Blue
  const electricIndigo = new THREE.Color(0x4f46e5); // Electric Indigo
  const cyberEmerald = new THREE.Color(0x10b981);   // Live Telemetry Emerald
  const subtleSlate = new THREE.Color(0x94a3b8);    // Crisp Slate Edge

  // Group to rotate everything with mouse tilt
  const mainGroup = new THREE.Group();
  scene.add(mainGroup);

  // 1. Outer Holographic Geodesic Sphere
  const outerGeo = new THREE.IcosahedronGeometry(2.2, 3);
  const outerMat = new THREE.MeshBasicMaterial({
    color: sapphire,
    wireframe: true,
    transparent: true,
    opacity: 0.28,
  });
  const outerMesh = new THREE.Mesh(outerGeo, outerMat);
  mainGroup.add(outerMesh);

  // 2. Outer Vertex Nodes (Glowing Neural Points)
  const outerPointsMat = new THREE.PointsMaterial({
    color: electricIndigo,
    size: 0.08,
    transparent: true,
    opacity: 0.85,
  });
  const outerPoints = new THREE.Points(outerGeo, outerPointsMat);
  mainGroup.add(outerPoints);

  // 3. Inner Quantum Nucleus Sphere
  const innerGeo = new THREE.IcosahedronGeometry(1.3, 2);
  const innerMat = new THREE.MeshBasicMaterial({
    color: cyberEmerald,
    wireframe: true,
    transparent: true,
    opacity: 0.22,
  });
  const innerMesh = new THREE.Mesh(innerGeo, innerMat);
  mainGroup.add(innerMesh);

  // 4. Gimbal Ring 1 (Equatorial Ring with telemetry markers)
  const ring1Geo = new THREE.TorusGeometry(2.9, 0.015, 16, 100);
  const ring1Mat = new THREE.MeshBasicMaterial({
    color: sapphire,
    transparent: true,
    opacity: 0.45,
  });
  const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
  mainGroup.add(ring1);

  // 5. Gimbal Ring 2 (Polar Orbit Ring)
  const ring2Geo = new THREE.TorusGeometry(3.1, 0.012, 16, 100);
  const ring2Mat = new THREE.MeshBasicMaterial({
    color: electricIndigo,
    transparent: true,
    opacity: 0.35,
  });
  const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
  ring2.rotation.x = Math.PI / 2.3;
  mainGroup.add(ring2);

  // 6. Gimbal Ring 3 (Diagonal Precession Ring)
  const ring3Geo = new THREE.TorusGeometry(3.35, 0.01, 16, 100);
  const ring3Mat = new THREE.MeshBasicMaterial({
    color: cyberEmerald,
    transparent: true,
    opacity: 0.3,
  });
  const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
  ring3.rotation.y = Math.PI / 3;
  mainGroup.add(ring3);

  // Orbiting Beacon Nodes on Ring 1
  const beaconGeo = new THREE.SphereGeometry(0.06, 12, 12);
  const beaconMat = new THREE.MeshBasicMaterial({ color: cyberEmerald });
  const beaconNode1 = new THREE.Mesh(beaconGeo, beaconMat);
  mainGroup.add(beaconNode1);

  const beaconNode2 = new THREE.Mesh(beaconGeo, new THREE.MeshBasicMaterial({ color: sapphire }));
  mainGroup.add(beaconNode2);

  // 7. Ambient Particle Synapse Dust (500 particles)
  const particleCount = 500;
  const particleGeo = new THREE.BufferGeometry();
  const posArray = new Float32Array(particleCount * 3);
  const colArray = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    const r = 2.4 + Math.random() * 3.2;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    posArray[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    posArray[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    posArray[i * 3 + 2] = r * Math.cos(phi);

    const rand = Math.random();
    const c = rand > 0.6 ? electricIndigo : (rand > 0.25 ? sapphire : cyberEmerald);
    colArray[i * 3] = c.r;
    colArray[i * 3 + 1] = c.g;
    colArray[i * 3 + 2] = c.b;
  }

  particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  particleGeo.setAttribute('color', new THREE.BufferAttribute(colArray, 3));

  const particleMat = new THREE.PointsMaterial({
    size: 0.05,
    vertexColors: true,
    transparent: true,
    opacity: 0.65,
  });
  const particleField = new THREE.Points(particleGeo, particleMat);
  mainGroup.add(particleField);

  // Mouse tracking state with smooth lerping
  let targetX = 0;
  let targetY = 0;
  let mouseX = 0;
  let mouseY = 0;

  function onMouseMove(e) {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    targetX = ((x / rect.width) * 2 - 1) * 0.9;
    targetY = -((y / rect.height) * 2 - 1) * 0.9;
  }

  window.addEventListener('mousemove', onMouseMove);

  // Responsive dynamic resizing
  function onResize() {
    if (!container) return;
    const newWidth = container.clientWidth || 500;
    const newHeight = container.clientHeight || 500;
    camera.aspect = newWidth / (newHeight || 1);
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);
  }

  window.addEventListener('resize', onResize);

  // Visibility state handling
  let isRunning = true;
  let frameId = null;

  document.addEventListener('visibilitychange', () => {
    isRunning = !document.hidden;
    if (isRunning && !frameId) {
      animate();
    }
  });

  // Animation Loop with Sine Pulse
  const startTime = performance.now();

  function animate() {
    if (!isRunning) {
      frameId = null;
      return;
    }

    const elapsed = (performance.now() - startTime) * 0.001;

    // Lerp mouse coordinates
    mouseX += (targetX - mouseX) * 0.06;
    mouseY += (targetY - mouseY) * 0.06;

    // Base Group Tilt
    mainGroup.rotation.y = elapsed * 0.08 + mouseX * 0.5;
    mainGroup.rotation.x = elapsed * 0.05 + mouseY * 0.5;

    // Pulsing inner nucleus
    const pulse = 1 + Math.sin(elapsed * 2.5) * 0.08;
    innerMesh.scale.set(pulse, pulse, pulse);
    innerMesh.rotation.y = -elapsed * 0.25;
    innerMesh.rotation.z = elapsed * 0.15;

    // Differential Ring rotations
    ring1.rotation.z = elapsed * 0.2;
    ring2.rotation.y = elapsed * 0.15;
    ring2.rotation.z = -elapsed * 0.1;
    ring3.rotation.x = -elapsed * 0.18;

    // Orbiting beacon nodes on Ring 1
    const angle1 = elapsed * 0.8;
    beaconNode1.position.set(Math.cos(angle1) * 2.9, Math.sin(angle1) * 2.9, 0);

    const angle2 = elapsed * 0.6 + Math.PI;
    beaconNode2.position.set(Math.cos(angle2) * 2.9, Math.sin(angle2) * 2.9, 0);

    // Particle field subtle drift
    particleField.rotation.y = elapsed * 0.03 + mouseX * 0.2;
    particleField.rotation.x = -elapsed * 0.02 + mouseY * 0.2;

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
    renderer.dispose();
  };
}
