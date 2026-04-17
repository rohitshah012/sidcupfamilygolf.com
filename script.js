const nav = document.querySelector("#nav");
const body = document.body;
const menuButton = document.querySelector("#menu-btn");
const menuIcon = menuButton ? menuButton.querySelector("i") : null;
const navLinks = document.querySelectorAll("#nav-links .nav-link");
const arrowButton = document.getElementById("arrow");
const pageTwo = document.getElementById("page2");
const cursor = document.querySelector(".cursor");
const cursorBlur = document.querySelector(".cursorBlur");
const coarsePointerQuery = window.matchMedia("(pointer: coarse)");
const mobileNavQuery = window.matchMedia("(max-width: 768px)");

function updateMenuState(isOpen) {
  if (!nav || !menuButton) {
    return;
  }

  nav.classList.toggle("open", isOpen);
  body.classList.toggle("menu-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));

  if (menuIcon) {
    menuIcon.className = isOpen ? "ri-close-line" : "ri-menu-3-line";
  }
}

function closeMenu() {
  updateMenuState(false);
}

if (menuButton) {
  menuButton.addEventListener("click", function () {
    const isOpen = !nav.classList.contains("open");
    updateMenuState(isOpen);
  });
}

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    closeMenu();
  });
});

document.addEventListener("click", function (event) {
  if (!nav || !menuButton || !mobileNavQuery.matches) {
    return;
  }

  if (!nav.contains(event.target)) {
    closeMenu();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeMenu();
  }
});

function handleMobileNavChange(event) {
  if (!event.matches) {
    closeMenu();
  }
}

if (typeof mobileNavQuery.addEventListener === "function") {
  mobileNavQuery.addEventListener("change", handleMobileNavChange);
} else if (typeof mobileNavQuery.addListener === "function") {
  mobileNavQuery.addListener(handleMobileNavChange);
}

if (!coarsePointerQuery.matches && cursor && cursorBlur) {
  document.addEventListener("mousemove", function (event) {
    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";
    cursorBlur.style.left = event.clientX - 150 + "px";
    cursorBlur.style.top = event.clientY - 150 + "px";
  });

  navLinks.forEach(function (link) {
    link.addEventListener("mouseenter", function () {
      cursor.style.scale = 3;
      cursor.style.border = "1px solid #fff";
      cursor.style.backgroundColor = "transparent";
    });

    link.addEventListener("mouseleave", function () {
      cursor.style.scale = 1;
      cursor.style.border = "0 solid #95C11E";
      cursor.style.backgroundColor = "#95C11E";
    });
  });
}

if (arrowButton && pageTwo) {
  arrowButton.addEventListener("click", function () {
    pageTwo.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

const hasGsap =
  typeof window.gsap !== "undefined" &&
  typeof window.ScrollTrigger !== "undefined";

if (hasGsap) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to("#nav", {
    backgroundColor: "black",
    height: "80px",
    duration: 0.5,
    scrollTrigger: {
      trigger: "#nav",
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });

  gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: "#main",
      start: "top -25%",
      end: "top -75%",
      scrub: 2,
    },
  });

  gsap.from(".aboutUs img, .aboutus-in", {
    y: 90,
    opacity: 0,
    duration: 1.2,
    scrollTrigger: {
      trigger: ".aboutUs",
      start: "top 70%",
      end: "top 60%",
      scrub: 1,
    },
  });

  gsap.from(".card", {
    scale: 0.85,
    duration: 0.5,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".cards-container",
      start: "top 85%",
      end: "top 65%",
      scrub: 1,
    },
  });

  gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#page3",
      start: "top 65%",
      end: "top 45%",
      scrub: 4,
    },
  });

  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#page3",
      start: "top 65%",
      end: "top 45%",
      scrub: 4,
    },
  });

  gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      start: "top 75%",
      end: "top 65%",
      scrub: 3,
    },
  });
}
