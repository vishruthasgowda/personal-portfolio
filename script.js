// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// ================= CLOSE MOBILE MENU =================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// ================= DARK / LIGHT MODE =================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("light-mode")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});


// ================= COUNTER ANIMATION =================

const counters = document.querySelectorAll(".counter");

let counterStarted = false;


function startCounters() {

    if (counterStarted) return;

    const statsSection = document.querySelector(".stats-section");

    const sectionPosition =
        statsSection.getBoundingClientRect().top;

    const screenPosition =
        window.innerHeight;


    if (sectionPosition < screenPosition - 100) {

        counters.forEach(counter => {

            const target =
                parseInt(counter.getAttribute("data-target"));

            let count = 0;

            const increment =
                Math.ceil(target / 40);


            const updateCounter = () => {

                count += increment;

                if (count < target) {

                    counter.textContent = count;

                    setTimeout(updateCounter, 40);

                } else {

                    counter.textContent = target + "+";

                }

            };


            updateCounter();

        });


        counterStarted = true;

    }

}


window.addEventListener("scroll", startCounters);

startCounters();


// ================= NAVBAR SCROLL EFFECT =================

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.15)";

    } else {

        navbar.style.boxShadow =
            "none";

    }

});


// ================= SCROLL REVEAL =================

const revealElements =
    document.querySelectorAll(
        ".project-card, .skill-category, .highlight-card, .achievement-card, .timeline-item"
    );


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.1
        }

    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});