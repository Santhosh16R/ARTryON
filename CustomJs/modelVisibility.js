// modelVisibility.js

// export function setupModelVisibility() {
//   document.addEventListener("DOMContentLoaded", function () {
//     const list = ["glasses1", "glasses2","glasses3","glasses4","glasses5","glasses6", "hat1", "hat2", "earring"];
//     const visibles = [false, false, false, false, false];
//     const setVisible = (button, entities, visible) => {
//       if (visible) {
//         button.classList.add("selected");
//       } else {
//         button.classList.remove("selected");
//       }
//       entities.forEach((entity) => {
//         entity.setAttribute("visible", visible);
//       });
//     }

//     list.forEach((item, index) => {
//       const button = document.querySelector("#" + item);
//       const entities = document.querySelectorAll("." + item + "-entity");
//       setVisible(button, entities, visibles[index]);
//       button.addEventListener('click', () => {
//         visibles[index] = !visibles[index];
//         setVisible(button, entities, visibles[index]);
//       });
//     });
//   });

// }

export function setupModelVisibility() {
  document.addEventListener("DOMContentLoaded", function () {
    const list = ["glasses1", "glasses2", "glasses3", "glasses4", "glasses5", "glasses6", "hat1", "hat2", "earring"];
    let selectedIndex = -1;

    const setVisible = (button, entities, visible) => {
      button.classList.toggle("selected", visible);
      entities.forEach(entity => {
        entity.style.display = visible ? "block" : "none";
      });

      entities.forEach((entity) => {
                 entity.setAttribute("visible", visible);
               });

    };

    list.forEach((item, index) => {
      const button = document.querySelector("#" + item);
      const entities = document.querySelectorAll("." + item + "-entity");
      button.addEventListener('click', () => {
        if (selectedIndex !== index) {
          if (selectedIndex !== -1) {
            const prevButton = document.querySelector("#" + list[selectedIndex]);
            const prevEntities = document.querySelectorAll("." + list[selectedIndex] + "-entity");
            setVisible(prevButton, prevEntities, false);
          }
          selectedIndex = index;
          setVisible(button, entities, true);
        } else {
          selectedIndex = -1;
          setVisible(button, entities, false);
        }
      });
    });
  });
}


setupModelVisibility();

let buttonIdi, entityClassi;

export function setupModelVisibilityParams(buttonId, entityClass, initialVisibility) {
  const button = document.querySelector("#" + buttonId);
  const entities = document.querySelectorAll("." + entityClass);

  
  let isVisible = initialVisibility;

  const setVisible = () => {
    if (isVisible) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }

    if (entityClassi !=null) {
      // Hide all entities before showing the clicked ones
      entityClassi.forEach((entity) => {
        entity.setAttribute("visible", false);
      });

     
      console.log("fals");
    }

    // Show the entities that should be visible
    if (isVisible) {
      entities.forEach((entity) => {
        entity.setAttribute("visible", true);
      });
    }
    entityClassi = entities;
  
  };

 setVisible();

  button.addEventListener('click', () => {
    isVisible = !isVisible;
   // setVisible();
  });
}

window.setupModelVisibilityParams = setupModelVisibilityParams;

