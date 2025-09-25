function myMenuFunction() {
  const menuBtn = document.getElementById("myNavMenu");
  menuBtn.classList.toggle("responsive");
}

window.onscroll = function () {
  headerShadow();
};

const headerShadow = function () {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
};

let typingEffect = new Typed(".typedText", {
  strings: ["a Developer.", "a Designer."],
  loop: true,
  typeSpeed: 100,
  backSpeed: 60,
  backDelay: 1500,
});

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 150 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 250 });
sr.reveal(".featured-image", { delay: 200 });

sr.reveal(".projects-box", { interval: 200 });

sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2500,
  delay: 400,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2500,
  delay: 400,
  reset: true,
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

const section = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;
  section.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");
    const navLinks = document.querySelectorAll(".nav-menu a[href*=" + sectionId + "]");
    navLinks.forEach((link) => {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link.classList.add("active-link");
      } else {
        link.classList.remove("active-link");
      }
    });
  });
}
window.addEventListener("scroll", scrollActive);
