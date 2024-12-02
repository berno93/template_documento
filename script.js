// Base HTML
document.addEventListener("DOMContentLoaded", () => {
  fetch("/base.html") // Chemin relatif à la racine
    .then((response) => {
      if (!response.ok) throw new Error("Erreur lors du chargement de la base");
      return response.text();
    })
    .then((data) => {
      document.getElementById("base").innerHTML = data;
    })
    .catch((error) => console.error(error));
});

// Navbar
document.addEventListener("DOMContentLoaded", () => {
  fetch("/navbar.html") // Chemin relatif à la racine
    .then((response) => {
      if (!response.ok) throw new Error("Erreur lors du chargement de la base");
      return response.text();
    })
    .then((data) => {
      document.getElementById("Navbar").innerHTML = data;
    })
    .catch((error) => console.error(error));
});