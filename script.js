document.addEventListener('DOMContentLoaded', () => {
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
    const body = document.body;
    const giannisImg = document.querySelector('.giannis-img');
    const hoop = document.createElement('img');
    const scoreboardLabel = document.querySelector('.scoreboard-label');
    const scoreElement = document.querySelector('.score');
    let savedScore = '';  // To store the score while in sand mode

    // Add basketball hoop with proper image
    hoop.src = 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAzL3B4NzcyMDgwLWltYWdlLWpvYjE3NzUucG5n.png';
    hoop.className = 'hoop';
    document.querySelector('.card').appendChild(hoop);

    // Add click event listener to toggle theme
    themeToggle.addEventListener('click', () => {
        // Toggle the sand-background class on body
        body.classList.toggle('sand-background');
        
        // Update elements based on current theme
        if (body.classList.contains('sand-background')) {
            themeToggle.textContent = '🏀';
            giannisImg.src = 'https://media.gq.com/photos/619296e483072c4f5debff15/master/w_1600,c_limit/giannis-antetokounmpo-gq-men-of-the-year-2021-01-NEW.jpg';
            scoreboardLabel.textContent = 'CHILL';
            savedScore = scoreElement.textContent;  // Save current score
            scoreElement.textContent = '--';        // Show dashes instead
            hoop.style.display = 'none';
            giannisImg.removeEventListener('click', createBasketball);
        } else {
            themeToggle.textContent = '🏖️';
            giannisImg.src = 'https://hoopshype.com/wp-content/uploads/sites/92/2024/03/22890369.jpg?w=1200';
            scoreboardLabel.textContent = 'BUCKETS';
            scoreElement.textContent = savedScore;  // Restore the saved score
            hoop.style.display = 'block';
            giannisImg.addEventListener('click', createBasketball);
        }
    });

    // Basketball creation on image click (initial setup)
    giannisImg.addEventListener('click', createBasketball);

    document.querySelector('.emoji-sand').addEventListener('click', function() {
        // Toggle the sand background
        document.body.classList.toggle('sand-background');
    });
}

let score = 0;

function createBasketball() {
    const ball = document.createElement('div');
    ball.textContent = '🏀';
    ball.className = 'basketball';
    
    const giannisImg = document.querySelector('.giannis-img');
    const rect = giannisImg.getBoundingClientRect();
    const cardRect = document.querySelector('.card').getBoundingClientRect();
    
    ball.style.position = 'absolute';
    ball.style.left = `${rect.left - cardRect.left + rect.width/2}px`;
    ball.style.top = `${rect.top - cardRect.top + rect.height/2}px`;
    ball.style.animation = 'shoot-score 1s ease-out forwards';
    
    document.querySelector('.card').appendChild(ball);
    
    // Play swish sound and update score when ball goes through hoop
    setTimeout(() => {
        const swish = new Audio('basketball-swish-sound-effect-made-with-Voicemod.mp3');
        swish.play();
        score++;
        updateScore();
    }, 500);
    
    setTimeout(() => ball.remove(), 1000);
}

function updateScore() {
    const scoreElement = document.querySelector('.score');
    scoreElement.textContent = score.toString().padStart(2, '0');
    
    // Add flash effect when score updates
    scoreElement.style.textShadow = '0 0 20px #FF0000';
    setTimeout(() => {
        scoreElement.style.textShadow = '0 0 10px rgba(255,0,0,0.7)';
    }, 100);
} 