// main.js
import * as THREE from 'three';
import { MindARThree } from 'mindar-face-three';
import { setupLights, addFaceMesh, setupMaterial } from './sceneSetup.js';
import { setupColorButtons } from './colorButton.js';
import { setupModelVisibility } from './modelVisibility.js';

document.addEventListener('DOMContentLoaded', () => {
  const mindarThree = new MindARThree({
    container: document.querySelector("#container"),
  });

  const { renderer, scene, camera } = mindarThree;

  setupLights(scene);

  const faceMesh = addFaceMesh(mindarThree);
  const shinyMaterial = setupMaterial();
  faceMesh.material = shinyMaterial;
  scene.add(faceMesh);

  const start = async () => {
    await mindarThree.start();
    renderer.setAnimationLoop((time) => {
      renderer.render(scene, camera);
    });
  };
  start();

  setupColorButtons(faceMesh);
  setupModelVisibility();
});
