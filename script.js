// ==================== Mobile Menu Toggle ====================
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active"); // Open/close menu
  hamburger.classList.toggle("open");  // Animate hamburger to X
});

// Close menu when a nav link is clicked & smooth scroll
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault(); // Prevent default anchor behavior

    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }

    navLinks.classList.remove("active");
    hamburger.classList.remove("open");
  });
});

// ==================== Active Link Highlight ====================
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80; // offset for navbar
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.classList.remove("active-link");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active-link");
    }
  });
});

// ==================== GSAP Animations ====================
gsap.registerPlugin(ScrollTrigger);

// Hero Section
gsap.from(".hero-text h1", {
  opacity: 0,
  y: -50,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".hero-text p", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 0.3,
  ease: "power3.out"
});

gsap.from(".hero-text .cta", {
  opacity: 0,
  scale: 0.8,
  duration: 0.8,
  delay: 0.6,
  ease: "back.out(1.7)"
});

gsap.from(".hero-image img", {
  opacity: 0,
  scale: 0,
  duration: 1,
  delay: 0.8,
  ease: "back.out(1.7)"
});

// Sections Animation
gsap.utils.toArray("section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out"
  });

  // Cards inside sections
  gsap.utils.toArray(section.querySelectorAll(".skill-card, .service-card, .project-card")).forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 90%"
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: i * 0.2,
      ease: "power3.out"
    });
  });
});

// Social Links Animation
gsap.utils.toArray(".social-links a").forEach((link, i) => {
  gsap.from(link, {
    scrollTrigger: {
      trigger: link,
      start: "top 90%"
    },
    opacity: 0,
    y: 20,
    duration: 0.6,
    delay: i * 0.1,
    ease: "power3.out"
  });
});
