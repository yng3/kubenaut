const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');
const enterButton = document.getElementById('enter');
const interfaceBox = document.getElementById('interface');
const cyberspace = document.getElementById('cyberspace');
const floatingElements = document.querySelectorAll('.floating-element');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Hide Landing Page & Enter Cyberspace
enterButton.addEventListener('click', () => {
    interfaceBox.style.opacity = "0";  // Fade out
    interfaceBox.style.transform = "scale(1.2)";

    setTimeout(() => {
        interfaceBox.style.display = "none";  // Completely remove from visibility
        cyberspace.style.opacity = "1";  // Fade in
        cyberspace.style.transform = "scale(1)";

        // Reveal floating elements gradually
        floatingElements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add("active");
            }, index * 800);
        });
    }, 1000);
});

// Ensure Interface Doesn't Pop Back Up
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        interfaceBox.style.display = "none";
    }
});

// Prevent UI from glitching when resizing
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
