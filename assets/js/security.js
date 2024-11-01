// Approche JavaScript plus robuste
document.addEventListener('DOMContentLoaded', function() {
    // Désactive le clic droit
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    // Désactive les raccourcis clavier de copie
    document.addEventListener('keydown', function(e) {
        if (
            (e.ctrlKey && (e.key === 'c' || e.key === 'C')) || // Ctrl+C
            (e.ctrlKey && (e.key === 'v' || e.key === 'V')) || // Ctrl+V
            (e.ctrlKey && (e.key === 'x' || e.key === 'X')) || // Ctrl+X
            (e.metaKey && (e.key === 'c' || e.key === 'C')) || // Cmd+C (Mac)
            (e.metaKey && (e.key === 'v' || e.key === 'V')) || // Cmd+V (Mac)
            (e.metaKey && (e.key === 'x' || e.key === 'X'))    // Cmd+X (Mac)
        ) {
            e.preventDefault();
        }
    });

    // Message personnalisé lors de la tentative de copie
    document.addEventListener('copy', function(e) {
        e.preventDefault();
        alert('La copie de contenu n\'est pas autorisée sur ce site.');
    });
});