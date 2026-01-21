// 1. Handle "Play Now" button clicks
const playButtons = document.querySelectorAll('.game button');

playButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        // If the button contains a link, we let it work. 
        // If there is NO link (like on your Projects page), we show the alert.
        const link = button.querySelector('a');
        if (!link) {
            event.preventDefault();
            alert('🚀 This project is currently in development! Stay tuned.');
        }
    });
});

// 2. Add a "Glass" effect to the header when scrolling
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = 'rgba(15, 23, 42, 0.95)';
        header.style.padding = '10px 50px'; // Shrink header slightly
    } else {
        header.style.background = 'rgba(15, 23, 42, 0.8)';
        header.style.padding = '15px 50px';
    }
});

// 3. Scroll Reveal Animation
// This makes the game cards "pop" up as you scroll to them
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.game').forEach(game => {
    // Set initial "hidden" state
    game.style.opacity = '0';
    game.style.transform = 'translateY(30px)';
    game.style.transition = 'all 0.6s ease-out';
    
    // Start watching the element
    observer.observe(game);
});
