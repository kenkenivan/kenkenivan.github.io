const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* Scroll Animation */

const cards = document.querySelectorAll(
    ".project-card, .contact-card, .skill, .glass"
);

window.addEventListener("scroll", () => {

    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < triggerBottom){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }

    });

});

/* Initial Animation State */

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s ease";
});