document.addEventListener('DOMContentLoaded', () => {
    createSandParticles();
    setupInteractions();
    
    const quotes = [
        "Happy Birthday from your favorite Buck! 🦌",
        "Time to celebrate like we won the Finals! 🏆",
        "Birthday energy level: FREAK MODE 💪",
        "Charis in 6! 🏀",
        "19 is your championship year! 👑"
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

function setupInteractions() {
    // Theme toggle
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('beach-theme');
        themeToggle.textContent = document.body.classList.contains('beach-theme') ? '🏀' : '🏖️';
    });

    // Hidden giraffes that appear randomly
    setInterval(() => {
        createHiddenGiraffe();
    }, 10000);

    // Basketball creation on image click
    const giannisImg = document.querySelector('.giannis-img');
    giannisImg.addEventListener('click', createBasketball);
}

function createHiddenGiraffe() {
    const giraffe = document.createElement('div');
    giraffe.textContent = '🦒';
    giraffe.className = 'hidden-giraffe';
    giraffe.style.left = Math.random() * 80 + 10 + '%';
    giraffe.style.top = Math.random() * 80 + 10 + '%';
    
    document.querySelector('.card').appendChild(giraffe);
    
    setTimeout(() => {
        giraffe.style.opacity = '1';
    }, 100);
    
    giraffe.addEventListener('click', () => {
        giraffe.style.transform = 'scale(2)';
        giraffe.style.opacity = '0';
        setTimeout(() => giraffe.remove(), 500);
    });
    
    setTimeout(() => {
        if (giraffe.parentElement) {
            giraffe.remove();
        }
    }, 5000);
}

function createBasketball() {
    const ball = document.createElement('div');
    ball.textContent = '🏀';
    ball.className = 'basketball';
    ball.style.position = 'absolute';
    ball.style.left = '50%';
    ball.style.top = '50%';
    ball.style.animation = 'bounce-diagonal 1s ease-in-out';
    
    document.querySelector('.card').appendChild(ball);
    
    setTimeout(() => ball.remove(), 1000);
}

function createSandParticles() {
    // Create fewer particles for a cleaner look
    for (let i = 0; i < 30; i++) {
        const sand = document.createElement('div');
        sand.classList.add('confetti');
        sand.style.left = Math.random() * 100 + 'vw';
        sand.style.animationDelay = Math.random() * 5 + 's';
        sand.style.opacity = Math.random() * 0.3 + 0.1;
        document.body.appendChild(sand);
    }
} 