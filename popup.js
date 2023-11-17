// Dans votre fichier popup.js

// Récupérer les éléments du DOM
const defaultImage = document.getElementById('defaultImage');
const connectedImage = document.querySelector('.connected-img');
const toggleButton = document.getElementById('toggleButton');

// Fonction pour changer l'image
function toggleImage() {
  if (toggleButton.classList.contains('connected')) {
    defaultImage.style.display = 'inline';
    connectedImage.style.display = 'none';
  } else {
    defaultImage.style.display = 'none';
    connectedImage.style.display = 'inline';
  }
}

// Écouter les clics sur le bouton
toggleButton.addEventListener('click', function() {
  toggleButton.classList.toggle('connected');
  if (toggleButton.classList.contains('connected')) {
    toggleButton.textContent = 'Connected';
  } else {
    toggleButton.textContent = 'Disconnected';
  }
  toggleImage(); // Appeler la fonction pour changer l'image
});
