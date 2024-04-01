// colorButtons.js

let faceMeshlocal;

export function setupColorButtons(faceMesh) {
  faceMeshlocal = faceMesh;
  document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM content loaded");

    const colorButtons = document.querySelectorAll('.color-button');
    console.log("Found buttons:", colorButtons);

    colorButtons.forEach(button => {
      button.addEventListener('click', function () {
        const colorValue = this.getAttribute('data-color');
        console.log("Button clicked. Color value:", colorValue);

        faceMesh.material.color.setHex(parseInt(colorValue, 16));
        faceMesh.material.needsUpdate = true;

        console.log("Colour updated");
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM content loaded");

  const colorButtons = document.querySelectorAll('.color-button');
  console.log("Found buttons:", colorButtons);

  colorButtons.forEach(button => {
    button.addEventListener('click', function () {
      const colorValue = this.getAttribute('data-color');
      console.log("Button clicked. Color value:", colorValue);

      faceMeshlocal.material.color.setHex(parseInt(colorValue, 16));
      faceMeshlocal.material.needsUpdate = true;


    });
  });
});


let k = false;
export function lipartoggle() {
  faceMeshlocal.material.opacity = 0;
  faceMeshlocal.material.needsUpdate = true;
  // if (k === false) {
  //   faceMeshlocal.material.opacity = 0;
  //   faceMeshlocal.material.needsUpdate = true;

  //   k = true;

  // }else{
  //   faceMeshlocal.material.opacity = 1;
  //   faceMeshlocal.material.needsUpdate = true;
  //   k = false;
  // }



}

window.lipartoggle = lipartoggle;


