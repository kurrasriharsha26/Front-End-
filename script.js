// Dark Mode Toggle
const toggle = document.getElementById("darkToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Typing Effect
const roles = ["Web Developer", "AI Enthusiast", "Frontend Designer", "Problem Solver"];
let i = 0, j = 0, currentRole = "", isDeleting = false;
const typing = document.querySelector(".typing");

function type() {
  currentRole = roles[i];
  if (isDeleting) {
    typing.textContent = currentRole.substring(0, j--);
    if (j < 0) { isDeleting = false; i = (i+1) % roles.length; }
  } else {
    typing.textContent = currentRole.substring(0, j++);
    if (j > currentRole.length) { isDeleting = true; }
  }
  setTimeout(type, isDeleting ? 100 : 150);
}
type();
