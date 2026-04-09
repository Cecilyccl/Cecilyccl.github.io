const currentPage = document.body.dataset.page;
const navLinks = document.querySelectorAll(".site-nav a");
const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");

navLinks.forEach((link) => {
  const href = link.getAttribute("href");
  const isActive =
    (currentPage === "home" && href === "index.html") ||
    href === `${currentPage}.html`;

  if (isActive) {
    link.classList.add("active");
  }

  link.addEventListener("click", () => {
    header.classList.remove("nav-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

menuToggle?.addEventListener("click", () => {
  const open = header.classList.toggle("nav-open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
    rootMargin: "0px 0px -30px 0px",
  }
);

document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.transitionDelay = `${index * 40}ms`;
  observer.observe(element);
});
