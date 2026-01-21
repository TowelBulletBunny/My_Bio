// 1. Manual Carousel Interaction
const track = document.querySelector('.carousel-container');
const cards = document.querySelectorAll('.carousel-item');

if (track) {
    track.addEventListener('scroll', () => {
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            // Check if the card is roughly in the center of the viewport
            const center = window.innerWidth / 2;
            if (rect.left < center && rect.right > center) {
                card.classList.add('is-active');
            } else {
                card.classList.remove('is-active');
            }
        });
    });
}

// 2. Play Button Alert (from before, keeping your demo functionality)
const playButtons = document.querySelectorAll('.game button, .carousel-item button');
playButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const link = button.querySelector('a');
        if (!link) {
            event.preventDefault();
            alert('🎮 Project Loading... This demo build is coming soon!');
        }
    });
});

// 3. Page Fade-in Effect
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.8s ease-in';
window.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '1';
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '5px 60px';
        header.style.background = 'rgba(7, 11, 20, 0.95)';
    } else {
        header.style.padding = '10px 60px';
        header.style.background = 'rgba(15, 23, 42, 0.9)';
    }
});

