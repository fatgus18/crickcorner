const typedText = document.getElementById('typed-text');
const text = "Welcome to CrickCorner";

let index = 0;

function typeWriter() {
  if (index < text.length) {
    typedText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

typeWriter();

const adminRole = document.getElementById('admin-role');
const playerRole = document.getElementById('player-role');
const adminForm = document.getElementById('admin-form');
const playerForm = document.getElementById('player-form');

adminRole.addEventListener('click', function(event) {
  event.preventDefault();
  adminRole.style.display = 'none';
  playerRole.style.display = 'none';
  adminForm.style.display = 'block';
});

playerRole.addEventListener('click', function(event) {
  event.preventDefault();
  adminRole.style.display = 'none';
  playerRole.style.display = 'none';
  playerForm.style.display = 'block';
});

function showAdminForm() {
  document.getElementById("admin-form").style.display = "block";
  document.getElementById("player-form").style.display = "none";
}

function showPlayerForm() {
  document.getElementById("admin-form").style.display = "none";
  document.getElementById("player-form").style.display = "block";
}
