// Login Logic
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMsg = document.getElementById('errorMsg');

  if (email === "mrshenry@wifey.com" && password === "laibamattohenrykibegum") {
    window.location.href = "anniversary.html";
  } else {
    errorMsg.textContent = "Only Mrs. Henry Has Access To This Love 🥺";
  }
});

// Show/Hide Password
const togglePassword = document.getElementById('togglePassword');
const passwordField = document.getElementById('password');

togglePassword.addEventListener('click', function () {
  const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordField.setAttribute('type', type);
  togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
});

// Heart Animation
const canvas = document.getElementById('heartsCanvas');
const ctx = canvas.getContext('2d');
let hearts = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function createHeart() {
  return {
    x: Math.random() * canvas.width,
    y: -20,
    size: 10 + Math.random() * 20,
    speed: 1 + Math.random() * 2,
    alpha: 0.5 + Math.random() * 0.5
  };
}

function drawHeart(h) {
  ctx.globalAlpha = h.alpha;
  ctx.font = `${h.size}px serif`;
  ctx.fillText("💖", h.x, h.y);
  ctx.globalAlpha = 1;
}

function animateHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach((heart, index) => {
    heart.y += heart.speed;
    drawHeart(heart);
    if (heart.y > canvas.height) {
      hearts.splice(index, 1);
    }
  });
  if (Math.random() < 0.3) {
    hearts.push(createHeart());
  }
  requestAnimationFrame(animateHearts);
}

animateHearts();
