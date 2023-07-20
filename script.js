// it is important to run with command-line 'npx vite'
// to properly run the site with webgl and 3d objects in it
"use strict";
import * as THREE from "three";
import { Sphere } from "three";
import WebGL from "three/addons/capabilities/WebGL.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
scene.background = null;
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

var renderer = new THREE.WebGLRenderer({ alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.TorusGeometry(1, 0.4, 12, 48);
const material = new THREE.MeshBasicMaterial({ color: 0xfa8072 });

const torus = new THREE.Mesh(geometry, material);

torus.position.x = -9;
torus.position.z = -4.5;

scene.add(torus);

const geometry2 = new THREE.TorusGeometry(1, 0.4, 12, 48);
const material2 = new THREE.MeshBasicMaterial({ color: 0xfa8072 });

const torus2 = new THREE.Mesh(geometry2, material2);

torus2.position.x = -1;
torus2.position.y = 4;
torus2.position.z = -1.5;

scene.add(torus2);

const geometry3 = new THREE.TorusGeometry(1, 0.4, 12, 48);
const material3 = new THREE.MeshBasicMaterial({ color: 0xfa8072 });

const torus3 = new THREE.Mesh(geometry2, material2);

torus3.position.x = -2.5;
torus3.position.y = -3;
torus3.position.z = -3.6;

scene.add(torus3);

const geometry4 = new THREE.TorusGeometry(1, 0.4, 12, 48);
const material4 = new THREE.MeshBasicMaterial({ color: 0xfa8072 });

const torus4 = new THREE.Mesh(geometry2, material2);

torus4.position.x = 12;
torus4.position.y = 2;
torus4.position.z = -7;

scene.add(torus4);

const geometry5 = new THREE.TorusGeometry(1, 0.4, 12, 48);
const material5 = new THREE.MeshBasicMaterial({ color: 0xfa8072 });

const torus5 = new THREE.Mesh(geometry5, material5);

torus5.position.x = 1;
torus5.position.y = 0;
torus5.position.z = 0;

scene.add(torus5);

const geometry6 = new THREE.TorusGeometry(1, 0.4, 12, 48);
const material6 = new THREE.MeshBasicMaterial({ color: 0xfa8072 });

const torus6 = new THREE.Mesh(geometry6, material6);

torus6.position.x = 7;
torus6.position.y = -5;
torus6.position.z = -4;

scene.add(torus6);

const wireGeometry = new THREE.SphereGeometry(100, 100, 100);

const wireframe = new THREE.WireframeGeometry(wireGeometry);

const line = new THREE.LineSegments(wireframe);
line.material.depthTest = true;
line.material.opacity = 0.5;
line.material.transparent = true;

scene.add(line);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;

  torus2.rotation.x += 0.005;
  torus2.rotation.y += 0.005;

  torus3.rotation.x += 0.005;
  torus3.rotation.y += 0.005;

  torus4.rotation.x += 0.005;
  torus4.rotation.y += 0.005;

  torus5.rotation.x += 0.005;
  torus5.rotation.y += 0.005;

  torus6.rotation.x += 0.005;
  torus6.rotation.y += 0.005;

  line.rotation.x += 0.00022;
  line.rotation.y += 0.00023;
  line.rotation.z += 0.0001;

  renderer.render(scene, camera);
}

if (WebGL.isWebGLAvailable()) {
  // Initiate function or other initializations here
  animate();
} else {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById("container").appendChild(warning);
}

const controls = new OrbitControls(camera, renderer.domElement);
const loader = new GLTFLoader();
