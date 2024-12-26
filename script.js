// Page navigation
const pages = document.querySelectorAll('.page');
let currentPageIndex = 0;

document.querySelectorAll('.nav-btn.next').forEach(button => {
  button.addEventListener('click', () => {
    pages[currentPageIndex].classList.remove('active');
    currentPageIndex = Math.min(pages.length - 1, currentPageIndex + 1);
    pages[currentPageIndex].classList.add('active');
  });
});

document.querySelectorAll('.nav-btn.prev').forEach(button => {
  button.addEventListener('click', () => {
    pages[currentPageIndex].classList.remove('active');
    currentPageIndex = Math.max(0, currentPageIndex - 1);
    pages[currentPageIndex].classList.add('active');
  });
});

// Confetti Creation
const confettiContainer = document.getElementById('confetti-container');

function createConfetti() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');

  // Randomize position
  confetti.style.left = `${Math.random() * 100}%`;
  confetti.style.animationDuration = `${Math.random() * 2 + 3}s`;  // Vary duration

  confettiContainer.appendChild(confetti);

  // Remove confetti after animation ends
  confetti.addEventListener('animationend', () => confetti.remove());
}

// Generate confetti every 100ms
setInterval(createConfetti, 100);
