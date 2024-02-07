// script.js

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav a');
    const contentSections = document.querySelectorAll('#content > section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            contentSections.forEach(section => {
                section.style.display = 'none';
            });

            targetSection.style.display = 'block';
        });
    });
});
