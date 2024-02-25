// TODO
// fix camera centering 
// spice up background
// add more lights

// IMPORTS
import * as THREE from 'three';
import Garden from './garden.js';
import Plant from './garden.js';
import Building from './garden.js';
import Grid from './grid.js';

// initialize garden objects
const tree = new Plant(2, 2, 'tree', 10);
const rock = new Garden(1, 1, 'rock', 3);
const house = new Building(4, 4, 'house', 25);
const flower = new Plant(1, 1, 'flower', 5);
const path = new Garden(5, 1, 'path', 15);

// make grid
const grid = new Grid(10, 10);

// SCENE SET UP
const scene = new THREE.Scene();
scene.background = new THREE.Color("#b5e6df");
scene.fog = new THREE.Fog( "#ffffff", 10, 55 );
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 7;
camera.position.y = -.5;
camera.rotateX(0.25);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// VARIABLES
var size = 10;
var colorGrid1= "#75d45f";
var colorGrid2= "#6ec25b";
var alternate;
if (size % 2 == 0)
{
  alternate = false;
}
else { alternate = true }; 
// SCENE SET UP COMPLETE

// GRID POPULATION
var cubesArray = [];
const cubeGroup = new THREE.Group();

for (var i = 0; i < size; i++)
{
  var row = [];
  for(var j = 0; j < size; j++)
  {
      var geometry = new THREE.BoxGeometry(1, 1, 1);
      var material = new THREE.MeshLambertMaterial({ color: colorGrid2 });
      if (alternate)
      {
        material = new THREE.MeshLambertMaterial({ color: colorGrid1 });
        alternate = false;
      }
      else { alternate = true; }
      var cube = new THREE.Mesh(geometry, material);
      cube.position.set(i, j, 0);
      cubeGroup.add(cube);
      row.push(cube);
  }
  if (size % 2 == 0)
  {
    alternate = !alternate;
  }
  cubesArray.push(row);
}

cubeGroup.position.set(-size / 2, -size / 2, 0);

var block = new THREE.BoxGeometry(1,1,1);

// GRID MANIPULATION
scene.add(cubeGroup);
cubeGroup.rotation.z = 0;  
cubeGroup.rotation.x = 0;
var reference = cubeGroup;
camera.position.set(cubeGroup.position.x , cubeGroup.position.y, size + 10);

// LIGHTS
var light = new THREE.AmbientLight("#bbf2f0",2);
var directionalLight = new THREE.DirectionalLight(0xffffff, 3);

directionalLight.position.set(0, 0, 10);
directionalLight.rotation.z = 45;

scene.add(directionalLight);
scene.add(light);
// var helper = new THREE.DirectionalLightHelper(directionalLight);
// scene.add(helper);

// CAMERA MOVEMENT
let oldx = camera.position.x;
let oldy = camera.position.y;
window.onmousemove = function(ev)
{
      let changex =ev.x - oldx;
      let changey = ev.y - oldy;
      camera.position.x += changex/2000;
      camera.position.y -= changey/2000;
      oldx = ev.x;
      oldy = ev.y;
}

//RAYCASTING

//Returns the cube 2D array in a series [row,column] format
var flatCubes =  cubesArray.reduce((acc, val) => acc.concat(val), []);
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var index = null;
window.addEventListener('mousemove', function(event) 
{
  // Calculate mouse position in normalized device coordinates (-1 to +1) for both components
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}, false);

function rayCastHandler()
{
  raycaster.setFromCamera(mouse,camera);
  var intersects = raycaster.intersectObjects(flatCubes);

  for (var i = 0; i < intersects.length; i++)
  {
    var intObj = intersects[i].object;
    index = null;
    for (var j = 0; j < cubesArray.length;j++)
    {
      var sub = cubesArray[j].indexOf(intObj);
      if (sub !== -1)
      {
        index = [j,sub];
        break;
      }
    }
    console.log(index);
  }
}

// WINDOW SIZE ADAPTIVE
window.onresize = function(e)
{
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth,window.innerHeight);
}

window.addEventListener('click', function(event) 
{
  if (index !== null)
  {
    // place object at index cubesArray[index].position
  }
}, false);

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate the cube
  rayCastHandler();
  // Render the scene with the camera
  renderer.render(scene, camera);
}

// Start the animation loop
animate();

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Create a GLTFLoader
const loader = new GLTFLoader();

// Load your model
loader.load(
  'untitqled.glb',
  function (gltf) {
    // When the model is loaded, add it to the existing scene
    gltf.scene.position.set(0, 0, 10);

    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);