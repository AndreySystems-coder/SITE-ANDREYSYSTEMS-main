const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const currentYear = document.querySelector("#currentYear");
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

document.body.classList.remove("is-loading");
document.body.classList.add("is-ready");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  const rect = element.getBoundingClientRect();

  if (rect.top < window.innerHeight * 0.92) {
    element.classList.add("is-visible");
    return;
  }

  observer.observe(element);
});

const parallaxElements = Array.from(document.querySelectorAll(".parallax-slow"));
let ticking = false;

const updateParallax = () => {
  ticking = false;

  if (motionQuery.matches) {
    return;
  }

  const viewportCenter = window.innerHeight / 2;

  parallaxElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const elementCenter = rect.top + rect.height / 2;
    const distance = elementCenter - viewportCenter;
    const offset = Math.max(-18, Math.min(18, distance * -0.035));
    element.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
  });
};

const requestParallax = () => {
  if (!ticking) {
    window.requestAnimationFrame(updateParallax);
    ticking = true;
  }
};

if (parallaxElements.length) {
  updateParallax();
  window.addEventListener("scroll", requestParallax, { passive: true });
  window.addEventListener("resize", requestParallax);
}

const quoteForm = document.querySelector("#quoteForm");
const instagramDirect = "https://www.instagram.com/direct/t/andrey.pradilosilva";

if (quoteForm) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    window.open(instagramDirect, "_blank", "noopener,noreferrer");
  });
}
