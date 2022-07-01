//ajout d'un menu secondaire de navigation dans mesProjets.html
// MENU PROJETS
//ajout des liens de navigation : Développement, Cinéma, et Écriture
const projectsMenu = document.querySelector(".projectsNav");

// Développement
const navDev = document.createElement("a");
navDev.textContent = "Développement";
navDev.href = "projetsDev.html";
projectsMenu.appendChild(navDev);

//Cinéma
const navCine = document.createElement("a");
navCine.textContent = "Cinéma";
navCine.href = "projetsCine.html";
projectsMenu.appendChild(navCine);

//Écriture
/*const navWrite = document.createElement("a");
navWrite.textContent = "Écriture";
navWrite.href = "projetsEcrire.html";
projectsMenu.appendChild(navWrite);
*/
//Séparateur
function separateur(parent) {
    const trait = document.createTextNode(' | ');
    parent.appendChild(trait);
}

separateur(navDev);
//separateur(navCine);
//separateur(navWrite);