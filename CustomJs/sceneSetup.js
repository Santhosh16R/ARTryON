// sceneSetup.js
import * as THREE from 'three';

export function setupLights(scene) {
  // Hemisphere light for ambient lighting
  const ambientLight = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 0.5);
  scene.add(ambientLight);

  // Directional light for shininess and specular highlights
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(0, 10, 10);
  scene.add(directionalLight);
}

export function addFaceMesh(mindarThree) {
  const faceMesh = mindarThree.addFaceMesh();
  return faceMesh;
}

export function setupMaterial() {

   // const normalMap = new THREE.TextureLoader().load('../textures/lipnormalpng.png'); // Replace with your normal map
    const texture = new THREE.TextureLoader().load('./textures/liptransparent2.png');
    const normalMap = new THREE.TextureLoader().load('./textures/lipnormalpng.png'); // Replace with your normal map

normalMap.wrapS = THREE.RepeatWrapping;
normalMap.wrapT = THREE.RepeatWrapping;
normalMap.repeat.set(10, 10);



    // Create a Phong material with the normal map
const shinyMaterial = new THREE.MeshPhongMaterial({
    map: texture,
    normalMap: normalMap, // Add the normal map here
    color: 0x000000,//0x0000ff
    specular: 0x888888,
    shininess: 50,
    transparent: true
});


 
 
  return shinyMaterial;
}
