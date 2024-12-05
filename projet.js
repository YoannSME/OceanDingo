let score = 0;
const container = document.getElementById('game-container');
const logo = document.getElementById('hidden-logo');
function placeLogoRandomly() {
    const container = document.getElementById('game-container');
    const logo = document.getElementById('hidden-logo');

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Générer des positions aléatoires
    const randomX = Math.random() * (containerWidth - logo.offsetWidth);
    const randomY = Math.random() * (containerHeight - logo.offsetHeight);

    // Appliquer les positions
    logo.style.left = `${randomX}px`;
    logo.style.top = `${randomY}px`;
}

// Ajouter un gestionnaire de clic
document.getElementById('hidden-logo').addEventListener('click', () => {
    score++;
    document.getElementById('score').textContent = score;
    placeLogoRandomly(); // Repositionner le logo
});

// Initialiser le jeu
window.onload = placeLogoRandomly;
