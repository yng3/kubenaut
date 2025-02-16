const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');
const enterButton = document.getElementById('enter');
const interfaceBox = document.getElementById('interface');
const cyberspace = document.getElementById('cyberspace');
const floatingElements = document.querySelectorAll('.floating-element');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Light Orbs Floating in Background
class LightOrb {
    constructor(x, y, radius, color, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.speedX *= -1;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.speedY *= -1;
        }
    }

    draw() {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(this.x, this.y, this.radius / 4, this.x, this.y, this.radius);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        
        ctx.fillStyle = gradient;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}

const orbs = [];
for (let i = 0; i < 10; i++) {
    orbs.push(new LightOrb(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        Math.random() * 80 + 50,
        `rgba(${Math.random() * 255}, ${Math.random() * 255}, 255, 0.4)`,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
    ));
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    orbs.forEach(orb => {
        orb.update();
        orb.draw();
    });
    requestAnimationFrame(animate);
}

animate();

// Activate the Cyberspace Experience on Click
enterButton.addEventListener('click', () => {
    interfaceBox.style.opacity = "0";
    interfaceBox.style.transform = "scale(1.2)";

    setTimeout(() => {
        interfaceBox.style.display = "none";
        cyberspace.style.opacity = "1";
        cyberspace.style.transform = "scale(1)";

        // Reveal floating elements with delay
        floatingElements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add("active");
            }, index * 800);
        });

    }, 1000);
});

// Mouse Move Effect for Depth
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 40;
    const y = (e.clientY / window.innerHeight - 0.5) * 40;

    cyberspace.style.transform = `translateX(${x}px) translateY(${y}px)`;
});

// Click Interaction for Floating Elements
floatingElements.forEach(element => {
    element.addEventListener('click', () => {
        element.style.transform = 'scale(1.2)';
        element.style.backgroundColor = 'rgba(255, 100, 255, 0.6)';
        setTimeout(() => {
            element.style.transform = 'scale(1)';
            element.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        }, 500);
    });
});

// Resize canvas when window resizes
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
