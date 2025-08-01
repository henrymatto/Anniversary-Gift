const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function random(min, max) {
    return Math.random() * (max - min) + min;
}

class Particle {
    constructor() {
        this.x = random(0, canvas.width);
        this.y = random(0, canvas.height);
        this.size = random(10, 20);
        this.speedY = random(0.5, 1.5);
        this.alpha = random(0.5, 1);
        this.emoji = ["💖", "✨", "💫", "🎂", "🌸"][Math.floor(Math.random() * 5)];
    }

    update() {
        this.y += this.speedY;
        if (this.y > canvas.height) {
            this.y = 0;
            this.x = random(0, canvas.width);
        }
    }

    draw() {
        ctx.font = `${this.size}px serif`;
        ctx.globalAlpha = this.alpha;
        ctx.fillText(this.emoji, this.x, this.y);
    }
}

function init() {
    particles = [];
    for (let i = 0; i < 60; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});
