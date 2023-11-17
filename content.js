// Exemple pour masquer des éléments ayant une classe spécifique
const ads = document.querySelectorAll('.ad');
ads.forEach(ad => {
  ad.style.display = 'none';
});
