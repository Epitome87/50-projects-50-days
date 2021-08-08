const panels = document.querySelectorAll('.panel');

// Add a click event that will set the clicked panel as active, the rest as not
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

// Helper function to remove the "active" class from every panel
const removeActiveClasses = () => {
  panels.forEach((panel) => panel.classList.remove('active'));
};
