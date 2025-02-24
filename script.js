// script.js (JavaScript for Interactivity)
document.addEventListener("DOMContentLoaded", () => {
    console.log("Hospital Landing Page Loaded");

    // Smooth scrolling fix for Safari
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });
});


