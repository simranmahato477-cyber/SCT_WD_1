const navbar = document.getElementById("navbar");
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const navigationItems = document.querySelectorAll(".nav-link");

function updateNavbarStyle() {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

function toggleMobileMenu() {
  const isOpen = navLinks.classList.toggle("active");

  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "✕" : "☰";
}

function closeMobileMenu() {
  navLinks.classList.remove("active");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "☰";
}

window.addEventListener("scroll", updateNavbarStyle);

menuButton.addEventListener("click", toggleMobileMenu);

navigationItems.forEach((item) => {
  item.addEventListener("click", closeMobileMenu);
});

updateNavbarStyle();