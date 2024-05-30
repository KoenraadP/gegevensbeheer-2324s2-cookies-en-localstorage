"use strict";

// greeting paragraph koppelen aan variabele
let greetingParagraph = document.getElementById("greeting");

// alle language links verzamelen
// alle elementen verzamelen met de class language-link
let languageLinks = document.querySelectorAll(".language-link");

// op basis van localStorage keuze
// de greeting automatisch aanpassen bij inladen
let chosenLanguage = localStorage.getItem("language");
greetingParagraph.innerText = SetGreeting(chosenLanguage);

// alle links hetzelfde click event geven
languageLinks.forEach(element => {
    element.addEventListener("click",function(e){
        // preventDefault --> pagina niet herladen bij klikken
        e.preventDefault();
        // gekozen taal opslaan in variabele
        // ophalen via id van aangeklikte element (e)
        let chosenLanguage = e.target.id;
        // greeting paragraph aanpassen
        greetingParagraph.innerText = SetGreeting(chosenLanguage);
        // keuze bewaren in localStorage
        localStorage.setItem("language",chosenLanguage);
    })
});

// function die een welkom string
// als return heeft op basis van
// gekozen language in parameter
function SetGreeting(language){
    // variabele voor uiteindelijke boodschap
    let message = "";
    // op basis van gekozen taal (parameter) message invullen
    switch (language) {
        case "fr":
            message = "Bonjour!"
            break;
        case "en":
            message = "Good morning!"
            break;
        default:
            message = "Goedemorgen!"
            break;
    }
    // gekozen message als return
    return message;
}