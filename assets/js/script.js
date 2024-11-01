document.addEventListener('DOMContentLoaded', function() {
    // Configuration
    const config = {
        itemsPerPage: 9,
        animationDuration: 300
    };

    // Sélecteurs
    const elements = {
        nav: document.querySelector('nav'),
        links: document.querySelectorAll('nav a'),
        content: document.querySelector('.content')
    };

    // Fonctions
    function initializeNavigation() {
        elements.links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                // Votre logique ici
            });
        });
    }

    // Animation
    function animate(element, properties) {
        element.style.transition = `all ${config.animationDuration}ms ease`;
        Object.assign(element.style, properties);
    }

    // Pour un défilement encore plus fluide avec offset pour la navbar
    document.querySelector('.btn-secteur').addEventListener('click', function(e) {
        e.preventDefault();
        const divisionsSection = document.querySelector('#divisions');
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = divisionsSection.offsetTop - navbarHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });

    // Effet au scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Initialisation
    initializeNavigation();
});