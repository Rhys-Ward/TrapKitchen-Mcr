import * as THREE from "./three.js-master/build/three.module.js";
import { GLTFLoader } from "./three.js-master/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "./three.js-master/examples/jsm/controls/OrbitControls.js";

const canvas = document.querySelector(".webgl");
const scene = new THREE.Scene();
// geometry

let root;
const loader = new GLTFLoader();
loader.load("old_nokia_phone_low_poly/scene.gltf", function (gltf) {
  console.log(gltf);
 root = gltf.scene;

 
//   root.position.set(1, -0.1, 0.11);
  root.scale.set(0.005, 0.005, 0.005);
//   root.rotation.x = Math.PI / -8;
//   root.rotation.y = Math.PI / -12;
 
gltf.scene.traverse( function ( child ) {

} );

var box = new THREE.Box3().setFromObject( root );
box.center( root.position ); 
root.position.multiplyScalar( - 1 );

var pivot = new THREE.Group();
scene.add( pivot );
pivot.add( root );

var axesHelper = new THREE.AxesHelper( 100 );
scene.add( axesHelper );
 
//   const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });




  scene.add(root);
});


//material

const light = new THREE.AmbientLight(0xffffff, 3);
// light.position.set(2, 2, 5);
scene.add(light);



// const geomtry = new THREE.BoxGeometry(1,1,1)
// const material = new THREE.MeshBasicMaterial({
//     color: 'green'
// })

// const boxMesh = new THREE.Mesh(geomtry,material)
// scene.add(boxMesh)
// BOILERPLATE

const sizes = {
  width: window.clientWidth,
  height: window.clientHeight,
};

const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  110
);
camera.position.set(1, 1, 2);
scene.add(camera);

const renderer = new THREE.WebGLRenderer({ canvas: canvas });
// const renderer = new THREE.WebGLRenderer({alpha: true})
renderer.setClearColor(0xffffff, 0);

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.gammaOutput = true;
renderer.render(scene, camera);




// resize on reload
// let resized = false;
// canvas.addEventListener("resize", function () {
//   resized = true;
//   const width = window.innerWidth;
//   const height = window.innerHeight;
//   renderer.setSize(sizes.width, sizes.height);
//   camera.aspect = width / height;
//   camera.updateProjectionMatrix();
// });
function resizeCanvasToDisplaySize() {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    if (canvas.width !== width ||canvas.height !== height) {
      // you must pass false here or three.js sadly fights the browser
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
  
      // set render target sizes here
    }
  }
//controls orbit
const controls = new OrbitControls(camera, canvas.domElement);

controls.enablePan = false;

controls.autoRotate = true;
controls.autoRotateSpeed = 6.5;
controls.enableZoom = false;
controls.minPolarAngle=controls.maxPolarAngle=1.17079 // LOCK Y AXIS 
// controls.horizontalRotationEnabled = true;
// controls.rotationSpeed = 0.05;



function animate() {
    

    // time *= 0.001;  // seconds

    resizeCanvasToDisplaySize();
  
  
 controls.update();
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}




animate();