const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function createHeart() {
    const x = Math.random() * canvas.width;
    const y = canvas.height + 20;
    const size = Math.random() * 20 + 10;
    const speed = Math.random() * 2 + 1;
    hearts.push({ x, y, size, speed });
}

function drawHeart(heart) {
    ctx.beginPath();
    ctx.moveTo(heart.x, heart.y);
    ctx.bezierCurveTo(heart.x + heart.size / 2, heart.y - heart.size,
        heart.x + heart.size * 1.5, heart.y + heart.size / 3,
        heart.x, heart.y + heart.size);
    ctx.bezierCurveTo(heart.x - heart.size * 1.5, heart.y + heart.size / 3,
        heart.x - heart.size / 2, heart.y - heart.size,
        heart.x, heart.y);
    ctx.fillStyle = "rgba(255, 105, 180, 0.6)";
    ctx.fill();
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach((heart, index) => {
        heart.y -= heart.speed;
        drawHeart(heart);
        if (heart.y + heart.size < 0) hearts.splice(index, 1);
    });
    requestAnimationFrame(animate);
}

setInterval(createHeart, 300);
animate();

document.getElementById("giftBtn").addEventListener("click", function () {
    const phone = "923443066788";
    const message = encodeURIComponent("Mera gift de do ab... 😘");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
});