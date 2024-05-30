"use strict";

// huidige cookies opvragen en tonen in console
console.log(document.cookie);

// welcome alinea koppelen aan variabele
let welcomeParagraph = document.getElementById("welcome");

// gebruikersnaam ophalen uit userName cookie
let userName = GetCookie("userName");

// function to get the value
// of a specific cookie
function GetCookie(cookieName){
    // lege string klaarzetten om waarde in op te slaan
    let cookieValue = "";
    // alle cookies ophalen
    // voorbeeld: loggedIn=true; userName=creo; ...
    let cookies = document.cookie;
    // cookies apart in array stoppen met split
    cookies = cookies.split("; ");
    // alle cookies doorlopen met foreach en
    // de naam vergelijken met de opgegeven parameter cookieName
    cookies.forEach(element => {
        // een cookie ziet er op dit moment zo uit: "loggedIn=true"
        // if (element.startsWith(cookieName))
        // iedere cookie splitsen op naam en waarde
        let splitCookie = element.split("=");
        // controleren of naam overeen komt met opgegeven parameter
        if (splitCookie[0] == cookieName) {
            cookieValue = splitCookie[1];
        }
    });
    // waarde van cookie als return
    return cookieValue;
}