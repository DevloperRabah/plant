const eyeToggle = document.getElementById('eyeToggle');
const bodyElement = document.body;

eyeToggle.addEventListener('change', function() {
  if (this.checked) {
    bodyElement.classList.add('white');
  } else {
    bodyElement.classList.remove('white');
  }
});

const header = document.getElementById("header");

function animateTextColor() {
  setInterval(function() {
    const colors = ["red", "green", "blue", "yellow", "orange", "green"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    header.style.color = randomColor;
  }, 1000);
}

animateTextColor();
