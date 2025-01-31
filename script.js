document.addEventListener('DOMContentLoaded', () => {
    // Add falling sand effect
    createSandParticles();
    
    // Updated Giannis quotes to be more birthday-appropriate
    const quotes = [
        "Happy Birthday from your favorite Buck! 🦌",
        "Time to celebrate like we won the Finals! 🏆",
        "Birthday energy level: FREAK MODE 💪"
    ];
    
    const quoteElement = document.querySelector('.quote');
    
    // Show random quote with fade effect
    setInterval(() => {
        quoteElement.style.opacity = '0';
        setTimeout(() => {
            quoteElement.textContent = quotes[Math.floor(Math.random() * quotes.length)];
            quoteElement.style.opacity = '1';
        }, 500);
    }, 4000);
});

function createSandParticles() {
    // Create fewer particles for a cleaner look
    for (let i = 0; i < 50; i++) {
        const sand = document.createElement('div');
        sand.classList.add('confetti');
        sand.style.left = Math.random() * 100 + 'vw';
        sand.style.animationDelay = Math.random() * 5 + 's';
        sand.style.opacity = Math.random() * 0.5 + 0.2;
        document.body.appendChild(sand);
    }
} 