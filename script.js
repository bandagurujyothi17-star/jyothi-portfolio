// ===============================
// Typing Effect
// ===============================

const roles = [
    "Computer Science Student",
    "Web Developer",
    "Programmer",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const roleElement = document.querySelector(".text h2");

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        roleElement.textContent = currentRole.substring(0, charIndex++);
    } else {

        roleElement.textContent = currentRole.substring(0, charIndex--);
    }

    let speed = 120;

    if (isDeleting) speed = 60;

    if (!isDeleting && charIndex === currentRole.length + 1) {

        isDeleting = true;
        speed = 1500;
    }

    if (isDeleting && charIndex === 0) {

        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function(e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({

            behavior: 'smooth'

        });

    });

});


// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===============================
// Scroll Reveal Animation
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll(".card, .project, .skill").forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease";

    observer.observe(el);

});


// ===============================
// Navbar Background Change
// ===============================

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {

        nav.style.background = "rgba(0,0,0,0.35)";

    } else {

        nav.style.background = "rgba(255,255,255,0.15)";

    }

});
