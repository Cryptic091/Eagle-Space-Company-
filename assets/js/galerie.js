// galerie.js
document.addEventListener('DOMContentLoaded', function() {
    // Sélection des éléments
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('imageModal');
    const modalImg = modal.querySelector('.modal-content');
    const modalCaption = modal.querySelector('.modal-caption');
    const closeBtn = modal.querySelector('.close-modal');
    const nextBtn = modal.querySelector('.next-btn');
    const prevBtn = modal.querySelector('.prev-btn');
    
    let currentImageIndex = 0;
    let filteredItems = [...galleryItems];

    // Fonction pour filtrer les images
    function filterImages(category) {
        galleryItems.forEach(item => {
            item.classList.add('hidden');
            setTimeout(() => {
                if (category === 'all' || item.dataset.category === category) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.classList.remove('hidden');
                        item.classList.add('visible');
                    }, 50);
                } else {
                    item.style.display = 'none';
                }
            }, 300);
        });

        filteredItems = [...galleryItems].filter(item => 
            category === 'all' || item.dataset.category === category
        );
    }

    // Gestion des filtres
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterImages(button.dataset.filter);
        });
    });

    // Ouvrir le modal
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentImageIndex = index;
            const img = item.querySelector('img');
            const caption = item.querySelector('.gallery-overlay').innerHTML;
            
            modalImg.src = img.src;
            modalCaption.innerHTML = caption;
            modal.classList.add('active');
        });
    });

    // Fermer le modal
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Navigation dans le modal
    function showImage(index) {
        currentImageIndex = index;
        const item = filteredItems[index];
        const img = item.querySelector('img');
        const caption = item.querySelector('.gallery-overlay').innerHTML;
        
        modalImg.style.opacity = '0';
        setTimeout(() => {
            modalImg.src = img.src;
            modalCaption.innerHTML = caption;
            modalImg.style.opacity = '1';
        }, 300);
    }

    nextBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % filteredItems.length;
        showImage(currentImageIndex);
    });

    prevBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + filteredItems.length) % filteredItems.length;
        showImage(currentImageIndex);
    });

    // Navigation avec les flèches du clavier
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        
        if (e.key === 'ArrowRight') nextBtn.click();
        if (e.key === 'ArrowLeft') prevBtn.click();
        if (e.key === 'Escape') closeBtn.click();
    });
});