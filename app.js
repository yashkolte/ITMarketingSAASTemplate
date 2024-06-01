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

rotateAnimate = document.querySelectorAll("a");

rotateAnimate.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    gsap.to("a i", {
      rotate: 0,
    });
    link.addEventListener("mouseleave", () => {
      gsap.to("a div:first-child", {
        marginRight: 0,
      });
    });
  });
  link.addEventListener("mouseenter", () => {
    gsap.to("a i", {
      rotate: "45deg;",
    });
  });
  link.addEventListener("mouseenter", () => {
    gsap.to("a div:first-child", {
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
  },
});

tl.to(".gsapCircleAnimate", {
  y: -100,
  duration: 1,
  ease: "none",
});

let tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".gsapProjectAnimate",
    start: "top center",
    end: "bottom center",
    scrub: 1,
    // markers: true, // Remove this line if you don't want to see the markers
  },
});

tl1.to(
  ".gsapProjectCardAnimate",
  {
    y: -100,
    duration: 1,
    ease: "none",
    opacity: 1,
  },
  "same"
);

tl1.to(
  ".gsapProjectCardAnimate2",
  {
    y: -200,
    duration: 1,
    ease: "none",
  },
  "same"
);

tl1.to(
  ".gsapProjectCardAnimateSecond2",
  {
    y: -200,
    duration: 1,
    ease: "none",
  },
  "same0"
);

const arr = ["Content Creation", "SEO", "SEM", "Social Media Management", "Website Design", "Website Development", "Email Marketing", "CMS", "UI/UX"];

// Create a random index
const randomIndex = Math.floor(Math.random() * arr.length);

// Get the random item
const randomItem = arr[randomIndex];

if(randomItem == "Content Creation") {
  document.querySelector(".spinColorChange").style.backgroundColor = "#b3e8f3";
  document.querySelector(".spinColorChange").style.color = "#fff";
} else if(randomItem == "SEO") {
  document.querySelector(".spinColorChange").style.backgroundColor = "#4CAF50";
  document.querySelector(".spinColorChange").style.color = "#fff";
} else if(randomItem == "SEM") {
  document.querySelector(".spinColorChange").style.backgroundColor = "#b7adf3";
  document.querySelector(".spinColorChange").style.color = "#fff";
} else if(randomItem == "Social Media Management") {
  document.querySelector(".spinColorChange").style.backgroundColor = "#f0b5d0";
  document.querySelector(".spinColorChange").style.color = "#fff";
}
 else if(randomItem == "Website Design") {
  document.querySelector(".spinColorChange").style.backgroundColor = "#E87777";
  document.querySelector(".spinColorChange").style.color = "#fff";
}
 else if(randomItem == "Website Development") {
  document.querySelector(".spinColorChange").style.backgroundColor = "#dabbbb";
  document.querySelector(".spinColorChange").style.color = "#fff";
}
 else if(randomItem == "Email Marketing") {
  document.querySelector(".spinColorChange").style.backgroundColor = "#ddd6e1";
  document.querySelector(".spinColorChange").style.color = "#fff";
}
 else if(randomItem == "CMS") {
  document.querySelector(".spinColorChange").style.backgroundColor = "#d2cbaf";
  document.querySelector(".spinColorChange").style.color = "#fff";
}
 else if(randomItem == "UI/UX") {
  document.querySelector(".spinColorChange").style.backgroundColor = "#cffdbc";
  document.querySelector(".spinColorChange").style.color = "#fff";
}

console.log(randomItem);

function spin() {
  // gsap.to("#matter-container", {
  //   rotate: 360 * 5,
  //   duration: 1,
  //   ease: "slow(0.7,0.7,false)",
  // });

  gsap.from(".animateTag", {
    opacity: 1,
    x: -800,
    duration: 1,
    ease: "slow(0.7,0.7,false)",
  });
  gsap.to("animateTag", {
    opacity: 1,
  });
  gsap.to(".spinColorChange", {
    duration: 1,
    scale: 18,
    ease: "slow(0.7,0.7,false)",
    delay: 1,
  });

  // Set the countdown to 10 minutes from now
  var countDownDate = new Date().getTime() + 10 * 60 * 1000;

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="freeServiceParaText"
    document.getElementById(
      "freeServiceParaText"
    ).innerHTML = `
    <div style="flex">
    <p class="text-black">You have ${minutes} m ${seconds} s to get Registered</p>
    <a href="#contact" class="block rounded-full bg-white px-6 h-[70%] py-3 text-sm flex items-center justify-between gap-4 text-black">Sign
  Up <i class='ri-arrow-right-up-line block w-min'></i></a>
  </div>`;

  document.getElementById("spinBtn").disabled = true;

    // If the countdown is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("freeServiceParaText").innerHTML = "Time Out, Please Retry After Some Time";
    }
  }, 1000);

  document.querySelector("#freeServiceSubText").innerHTML = `Congratutations, You Get`;
  document.querySelector("#freeServiceSubText").classList.add("text-black");
  document.querySelector("#freeServiceAfterParaText").innerHTML = `for free`;

  document.querySelector(
    "#freeServiceText"
  ).innerHTML = `${randomItem} Service`;

  document.querySelector(
    "#freeServiceText"
  ).classList.add("text-black");
}
