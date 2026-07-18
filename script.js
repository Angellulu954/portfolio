// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");
navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});
nav.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Terminal typing effect
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const typedTextEl = document.getElementById("typedText");
const fullText = "exploring_ai_ml() // building real-world software";

if (prefersReducedMotion) {
  typedTextEl.textContent = fullText;
} else {
  let i = 0;
  const typeSpeed = 38;
  function typeChar() {
    if (i < fullText.length) {
      typedTextEl.textContent += fullText.charAt(i);
      i++;
      setTimeout(typeChar, typeSpeed);
    }
  }
  setTimeout(typeChar, 500);
}

// Scroll reveal
const revealEls = document.querySelectorAll(".skill-grid, .project-card, .contact-card");
revealEls.forEach(el => el.classList.add("reveal"));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));
