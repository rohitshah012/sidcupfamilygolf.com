gsap.to("#nav", {
  backgroundColor: "black",
  height: "80px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -75%",
    scrub: 2,
  },
});

const nav = document.querySelector("#nav");
const menuButton = document.querySelector("#menu-btn");
const navItems = document.querySelectorAll("#nav h4");
const arrowButton = document.getElementById("arrow");
const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

if (menuButton) {
  menuButton.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

if (!isTouchDevice) {
  const cursor = document.querySelector(".cursor");
  const cursorBlur = document.querySelector(".cursorBlur");

  document.addEventListener("mousemove", function (event) {
    cursor.style.left = event.x + "px";
    cursor.style.top = event.y + "px";
    cursorBlur.style.left = event.x - 150 + "px";
    cursorBlur.style.top = event.y - 150 + "px";
  });

  navItems.forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      cursor.style.scale = 3;
      cursor.style.border = "1px solid #fff";
      cursor.style.backgroundColor = "transparent";
    });

    item.addEventListener("mouseleave", function () {
      cursor.style.scale = 1;
      cursor.style.border = "0 solid #95C11E";
      cursor.style.backgroundColor = "#95C11E";
    });
  });
}

navItems.forEach(function (item) {
  item.addEventListener("click", function () {
    nav.classList.remove("open");
    if (menuButton) {
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
});

gsap.from(".aboutUs img, .aboutus-in", {
  y: 90,
  opacity: 0,
  duration: 1.2,
  scrollTrigger: {
    trigger: ".aboutUs",
    scroller: "body",
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
    scroller: "body",
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
    scroller: "body",
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
    scroller: "body",
    start: "top 65%",
    end: "top 45%",
    scrub: 4,
  },
});

if (arrowButton) {
  arrowButton.addEventListener("click", function () {
    document.querySelector(".page2").scrollIntoView({ behavior: "smooth" });
  });
}

gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    start: "top 75%",
    end: "top 65%",
    scrub: 3,
  },
});
