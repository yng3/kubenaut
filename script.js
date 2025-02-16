const canvas = document.getElementById('cyber-world');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
    constructor(x, y, size, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
            this.speedX *= -1;
        }
        if (this.y + this.size > canvas.height || this.y - this.size < 0) {
            this.speedY *= -1;
        }
    }

    draw() {
        ctx.fillStyle = 'rgba(255, 0, 255, 0.5)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

const particles = [];
for (let i = 0; i < 200; i++) {
    particles.push(new Particle(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        Math.random() * 5 + 1,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
    ));
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animate);
}

animate();
