

//HEADER 
//fonction qui permet de créer un nouvel élement dans un élément parent
function creerElement(selecteurParent, newElementTag, txt ) {
    const parent = document.querySelector(selecteurParent);
    const newElement = document.createElement(newElementTag);
    if (newElementTag === "div") {
        newElement.classList.add("titres")
    }

    if (txt){
        newElement.textContent = txt;
    }
    parent.appendChild(newElement);
}
const conteneur = creerElement(".entete", "div")

//création titres h1, h2
creerElement( ".titres", "h1", "Johanne Schatz" );
creerElement( ".titres", "h2", "développeuse web en recherche d'alternance");



//boutons call to action : contact et CV
function myButtonLink(selecteur, contenu, adresse) {
    const button = document.querySelector(selecteur);
    const lien = document.createElement("a");
    lien.textContent = contenu;
    lien.href = adresse;
    button.appendChild(lien);
}

myButtonLink(".contactButton", "contact", "./contact.html" );
myButtonLink(".cvButton", "cv", "./cvJohanneSCHATZ_11-08-2022.pdf" );



// MENU PRINCIPAL
//ajout des liens de navigation menu principal : Accueil, Qui je suis, D'où je viens, Où je vais
const mainMenu = document.querySelector("nav");

// Accueil
const navAccueil = document.createElement("a");
navAccueil.textContent = "Accueil";
navAccueil.href = "./index.html";
mainMenu.appendChild(navAccueil);

//navAccueil.classList.add("")

// Qui je suis
const navAPropos = document.createElement("a");
navAPropos.textContent = "Qui je suis";
navAPropos.href = "./aPropos.html";
mainMenu.appendChild(navAPropos);

//Mes projets
const navParcours = document.createElement("a");
navParcours.textContent = "Mes projets";
navParcours.href = "./mesProjets.html";
mainMenu.appendChild(navParcours);

//Séparateur
function separateur(parent) {
    const trait = document.createTextNode(' | ');
    parent.appendChild(trait);
}

separateur(navAPropos);
separateur(navAccueil);

//FOOTER
creerElement( ".piedPage", "p", "Copyright 2022 @ Johanne Schatz - All rights reserved" );
