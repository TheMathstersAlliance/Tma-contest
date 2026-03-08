const targetDate = new Date("April 18, 2026 09:00:00").getTime();
const secondEl = document.getElementById("seconds");

setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    document.getElementById("days").innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerText = Math.floor((diff % (1000 * 60)) / 1000);

    // Glow Pulse
    secondEl.classList.add("pulse-glow");
    setTimeout(() => secondEl.classList.remove("pulse-glow"), 500);
}, 1000);
function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);
reveal(); // Run on start

// Mobile Menu Toggle
document.getElementById('menuBtn').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('active');
});

// Floating Register Button
const floatBtn = document.getElementById('floatBtn');
window.addEventListener('scroll', () => {
    window.scrollY > 500 ? floatBtn.style.display = 'block' : floatBtn.style.display = 'none';

});
