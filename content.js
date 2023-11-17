// Sélectionner tous les éléments de la page avec la classe advertisement
let ads = document.querySelectorAll('.advertisement');

// Parcourir tous les éléments et les masquer
ads.forEach(ad => {
  ad.style.display = 'none';
});