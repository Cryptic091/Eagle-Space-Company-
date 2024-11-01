// direction.js
document.addEventListener('DOMContentLoaded', function() {
    // Animation des barres de stats
    const bars = document.querySelectorAll('.bar');
    
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const value = bar.getAttribute('data-value');
                bar.style.width = `${value}%`;
                observer.unobserve(bar);
            }
        });
    }, observerOptions);

    bars.forEach(bar => {
        observer.observe(bar);
    });

    // Animation d'apparition des cartes
    const cards = document.querySelectorAll('.direction-card');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
});