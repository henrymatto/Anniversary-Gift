const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function createHeart() {
  hearts.push({
    x: Math.random() * canvas.width,
    y: canvas.height + 20,
    size: Math.random() * 20 + 10,
    speed: Math.random() * 2 + 1
  });
}

function drawHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(255, 105, 180, 0.8)';
  hearts.forEach(h => {
    ctx.beginPath();
    ctx.arc(h.x, h.y, h.size, 0, Math.PI * 2);
    ctx.fill();
    h.y -= h.speed;
  });
  hearts = hearts.filter(h => h.y + h.size > 0);
}

setInterval(() => {
  createHeart();
  drawHearts();
}, 30);

const videos = [
  'assets/images/Memory-1.mp4',
  'assets/images/Memory-2.mp4',
  'assets/images/Memory-3.mp4'
];

let current = 0;
const player = document.getElementById('videoPlayer');

function loadVideo(index) {
  player.src = videos[index];
  player.play();
}

player.addEventListener('ended', () => {
  current = (current + 1) % videos.length;
  loadVideo(current);
});

function goToNext() {
  window.location.href = "card.html";
}

loadVideo(current);
