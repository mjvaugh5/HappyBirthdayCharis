document.addEventListener('DOMContentLoaded', () => {
    // Add falling sand effect
    createSandParticles();
    // Add Giannis quotes
    const giannisQuotes = [
        "Hard work beats talent when talent doesn't work hard.",
        "I'm just trying to get better each day.",
        "I'm a winner. I'm not here to be second or third.",
    ];
    
    // Display random Giannis quote every 5 seconds
    setInterval(() => {
        const quoteIndex = Math.floor(Math.random() * giannisQuotes.length);
        document.querySelector('.subtitle').textContent = giannisQuotes[quoteIndex];
    }, 5000);
});

function createSandParticles() {
    for (let i = 0; i < 100; i++) {
        const sand = document.createElement('div');
        sand.classList.add('confetti');
        sand.style.left = Math.random() * 100 + 'vw';
        sand.style.animationDelay = Math.random() * 5 + 's';
        sand.style.animationDuration = (Math.random() * 2 + 3) + 's';
        document.body.appendChild(sand);
    }
} 