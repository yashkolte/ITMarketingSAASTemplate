function toggleAccordion(event) {
  const header = event.currentTarget;
  const content = header.nextElementSibling;
  content.classList.toggle("show");
}

var cursor = document.querySelector(".cursor");
var circle = document.querySelector(".circle");
(cursorScale = document.querySelectorAll(".sectionBackground")),
  (mouseX = 0),
  (mouseY = 0);

gsap.to({}, 0.016, {
  repeat: -1,

  onRepeat: function () {
    gsap.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY,
      },
    });
  },
});

window.addEventListener("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

cursorScale.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    cursor.classList.add("hidden");
    // circle.style.display = "none";
  });
  link.addEventListener("mousemove", () => {
    cursor.classList.remove("hidden");
    // circle.style.display = "flex";
    // }
  });
});

const text = document.querySelector(".text p");

text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 9.5}deg)">${char}</span>`
  )
  .join("");

rotateAnimate = document.querySelectorAll("button");

rotateAnimate.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    gsap.to("button i", {
      rotate: 0,
    });
    link.addEventListener("mouseleave", () => {
      gsap.to("button div:first-child", {
        marginRight: 0,
      });
    });
  });
  link.addEventListener("mouseenter", () => {
    gsap.to("button i", {
      rotate: "45deg;",
    });
  });
  link.addEventListener("mouseenter", () => {
    gsap.to("button div:first-child", {
      marginRight: "10px",
    });
  });
});

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".backgroundImage",
    start: "top center",
    end: "bottom center",
    scrub: 1,
    markers: true, // Remove this line if you don't want to see the markers
  },
});

tl.to(".gsapCircleAnimate", {
  y: -100,
  duration: 1,
  ease: "none",
});
