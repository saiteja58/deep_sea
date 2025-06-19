fetch("creatures.json")
  .then((res) => res.json())
  .then((creatures) => {
    const container = document.getElementById("sea-container");

    creatures.forEach((creature) => {
      const div = document.createElement("div");
      div.className = "creature";
      div.style.top = `${creature.depth}px`;
      div.style.left = creature.left || "50%"; // Default center if not specified

      div.innerHTML = `
        <img src="${creature.image}" alt="${creature.name}" />
        <h3>${creature.name}</h3>
        <p>${creature.description}</p>
        <small>${creature.depth} meters</small>
      `;

      container.appendChild(div);
    });
  });

let welcomeHeight = 0;

window.addEventListener("load", () => {
  const welcome = document.getElementById("welcome-screen");
  if (welcome) {
    welcomeHeight = welcome.offsetHeight;
  }
});

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const depth = Math.floor(Math.max(0, scrollY - welcomeHeight)); // Depth starts after welcome screen
  document.getElementById("depthDisplay").textContent = depth;

  const welcome = document.getElementById("welcome-screen");
  if (welcome) {
    welcome.style.opacity = 1 - Math.min(scrollY / 300, 1);
  }
});


