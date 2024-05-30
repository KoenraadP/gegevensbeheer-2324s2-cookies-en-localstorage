"use strict";

// greeting paragraph koppelen aan variabele
let greetingParagraph = document.getElementById("greeting");

// alle language links verzamelen
// alle elementen verzamelen met de class language-link
let languageLinks = document.querySelectorAll(".language-link");

// alle links hetzelfde click event geven
languageLinks.forEach(element => {
    element.addEventListener("click",function(e){
        // preventDefault --> pagina niet herladen bij klikken
        e.preventDefault();
        // gekozen taal opslaan in variabele
        // ophalen via id van aangeklikte element (e)
        let chosenLanguage = e.target.id;
        // even testen
        console.log(chosenLanguage);
    })
});
