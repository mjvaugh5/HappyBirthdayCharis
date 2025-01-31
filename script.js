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
        themeToggle.textContent = document.body.classList.contains('beach-theme') ? '🏀' : '��️';
    });

    // Make giraffes appear more frequently
    setInterval(() => {
        createHiddenGiraffe();
    }, 5000);

    // Add basketball hoop to the card
    const hoop = document.createElement('img');
    hoop.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTggMmgydjJoNFYyaDJ2MmgxYzEuMSAwIDIgLjkgMiAydjEyYzAgMS4xLS45IDItMiAySDdjLTEuMSAwLTItLjktMi0yVjZjMC0xLjEuOS0yIDItMmgxVjJ6bTkgMTNjMC0yLjgtMi4yLTUtNS01cy01IDIuMi01IDUgMi4yIDUgNSA1IDUtMi4yIDUtNXoiIGZpbGw9IiMwMDQ3MUIiLz48L3N2Zz4=';
    hoop.className = 'hoop';
    document.querySelector('.card').appendChild(hoop);

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
    }, 3000);
}

function createBasketball() {
    const ball = document.createElement('div');
    ball.textContent = '🏀';
    ball.className = 'basketball';
    ball.style.position = 'absolute';
    ball.style.left = '50%';
    ball.style.top = '50%';
    ball.style.animation = 'shoot-score 1.5s ease-out forwards';
    
    document.querySelector('.card').appendChild(ball);
    
    // Play swish sound after ball goes through hoop
    setTimeout(() => {
        playSwishSound();
    }, 750);
    
    setTimeout(() => ball.remove(), 1500);
}

function playSwishSound() {
    const swish = new Audio('data:audio/wav;base64,UklGRjIAAABXQVZFZm10IBIAAAABAAEAQB8AAEAfAAABAAgAAABmYWN0BAAAAAAAAABkYXRhAAAAAA==');
    swish.play().catch(() => {}); // Catch error if browser blocks autoplay
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