import * as THREE from "./three.js-master/build/three.module.js";
import { GLTFLoader } from "./three.js-master/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "./three.js-master/examples/jsm/controls/OrbitControls.js";

//Variables for setup

let container;
let camera;
let renderer;
let scene;
let phone;



function init() {
  container = document.querySelector(".scene");

  //Create scene
  scene = new THREE.Scene();

  const fov = 35;
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1;
  const far = 1000;

  //Camera setup
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 5, 30);

  const ambient = new THREE.AmbientLight(0x404040, 4);
  scene.add(ambient);

  
  // const light = new THREE.AmbientLight(0xffffff,4 );
  // light.position.set(50, 20, 100);
  const light2 = new THREE.PointLight(0xffffff,2);
 
  light2.position.set(50, 50, 100);
  const light3 = new THREE.PointLight(0x404040,2);
 
  light2.position.set(0, 0, 100);
  scene.add(light2);


//  clock = new THREE.Clock();
  
  //Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  // Orbit Controls 
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.minPolarAngle=controls.maxPolarAngle=1.17079 
 controls.update();

//appending child
  container.appendChild(renderer.domElement);

  //Load Model
  let loader = new GLTFLoader();
  loader.load("old_nokia_phone_low_poly/scene.gltf", function(gltf) {
    phone = gltf.scene.children[0];
    phone.position.set(0.01, 3, 0.11);
    phone.scale.set(0.03, 0.03, 0.03);
    scene.add(gltf.scene);
  
    animate();
  });
}




function animate() {
 
  requestAnimationFrame(animate);
  phone.rotation.z += 0.03;

  
  
  renderer.render(scene, camera);
}

init();

function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener("resize", onWindowResize);
