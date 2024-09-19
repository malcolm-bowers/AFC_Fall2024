
// Function to generate a random direction for pop-out
function randomDirection() {
  const x = Math.random() * 2 - 1; // Random number between -1 and 1
  const y = Math.random() * 2 - 1;
  return { x, y };
} 

// Function to create and animate icons
function popIcons(event) {
  const container = document.getElementById("icon-container");
  const rectContainer = container.getBoundingClientRect();

  for (let i = 0; i < 5; i++) {
    const newIcon = event.target.cloneNode(true);
    const { x, y } = randomDirection();

    // Set custom properties for direction (for animation)
    newIcon.style.setProperty("--x", x);
    newIcon.style.setProperty("--y", y);
    newIcon.classList.add("popped-icon");
    // Position new icons at the original icon's location relative to the container
    const rect = event.target.getBoundingClientRect();
    const left = rect.left - rectContainer.left;
    const top = rect.top - rectContainer.top;

    newIcon.style.left = `${left}px`;
    newIcon.style.top = `${top}px`;

    // Append the new icon to the container
    container.appendChild(newIcon);

    // Remove the icon from the DOM after the animation ends
    setTimeout(() => {
      newIcon.remove();
    }, 800);
  }
}

// Attach the hover event to the main icon
const mainIcon = document.getElementById("main-icon");
mainIcon.addEventListener("mouseover", popIcons);