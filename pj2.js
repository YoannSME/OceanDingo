// Fonction pour générer une couleur aléatoire proche de l'environnement
function obtenirCouleurAleatoire() {
    // Générer une couleur aléatoire
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Fonction pour générer une couleur contrastée
function obtenirCouleurContraste(couleur) {
    const rgb = couleur.match(/\d+/g); // Extraire les valeurs RGB
    const r = 255 - parseInt(rgb[0]);
    const g = 255 - parseInt(rgb[1]);
    const b = 255 - parseInt(rgb[2]);
    return `rgb(${r}, ${g}, ${b})`; // Retourne la couleur inverse
}

// Fonction pour positionner l'élément aléatoirement et changer sa couleur
function positionnerElementAleatoire() {
    const element = document.querySelector('#monElement'); 

    // Obtenir la taille de la fenêtre de la page (viewport)
    const largeurFenetre = window.innerWidth;
    const hauteurFenetre = window.innerHeight;

    // Déterminer une position aléatoire dans la fenêtre
    const positionX = Math.random() * (largeurFenetre - element.offsetWidth); // Largeur disponible
    const positionY = Math.random() * (hauteurFenetre - element.offsetHeight); // Hauteur disponible

    // Appliquer cette position à l'élément
    element.style.left = `${positionX}px`;
    element.style.top = `${positionY}px`;

    // Obtenir une couleur aléatoire pour le bouton
    const couleur = obtenirCouleurAleatoire();

    // Appliquer une couleur qui se fond ou contraste avec l'environnement
    if (Math.random() < 0.5) {
        element.style.backgroundColor = couleur; // Adaptation avec une couleur aléatoire
    } else {
        element.style.backgroundColor = obtenirCouleurContraste(couleur); // Adaptation avec une couleur contrastée
    }
}

// Appel initial pour positionner l'élément
positionnerElementAleatoire();

// Bonus: Repositionner l'élément à chaque clic
document.querySelector('#monElement').addEventListener('click', function() {
    positionnerElementAleatoire();
});