// Animation au défilement (Scroll Reveal)
const faders = document.querySelectorAll('.fade-in, .reveal');

const appearOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});



// Attendre que le contenu soit chargé
document.addEventListener('DOMContentLoaded', () => {
    const infoBlocks = document.querySelectorAll('.info-block');

    const revealOnScroll = () => {
        infoBlocks.forEach(block => {
            const blockTop = block.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (blockTop < windowHeight - 100) {
                block.style.opacity = "1";
                block.style.transform = "translateY(0)";
                block.style.transition = "all 0.8s ease-out";
            }
        });
    };

    // État initial (caché)
    infoBlocks.forEach(block => {
        block.style.opacity = "0";
        block.style.transform = "translateY(30px)";
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Lancer une fois au cas où on est déjà en bas
});