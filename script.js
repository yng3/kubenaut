const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

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
for (let i = 0; i < 8; i++) {
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

// Depth Effect on Mouse Move
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    document.querySelector('.interface').style.transform = `translateZ(20px) rotateY(${x}deg) rotateX(${y}deg)`;
});
