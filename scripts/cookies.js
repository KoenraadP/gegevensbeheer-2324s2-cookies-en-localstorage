"use strict";

// huidige cookies opvragen en tonen in console
console.log(document.cookie);

// controleren of er een loggedIn cookie bestaat met de value true
if (GetCookie("loggedIn") == "true"){
    location.href = "success.html";
    // location.assign("success.html");
}

// correcte login data
let correctUserName = "creo";
let correctPassword = "creo";

// input vakjes koppelen aan variabelen
let userNameInput = document.getElementById("user-name");
let passwordInput = document.getElementById("password");

// form koppelen aan variabele
let form = document.getElementById("form");

// eventlistener toevoegen aan form
// zodat er code uitgevoerd wordt bij het versturen
form.addEventListener("submit",function(e){
    // standaard submit gedrag blokkeren
    // anders wordt de pagina gewoon herladen
    e.preventDefault();
    // username en password uitlezen
    let userName = userNameInput.value;
    let password = passwordInput.value;
    // controleren of ingevoerde gegevens juist zijn
    if (CheckLogin(userName, password)) {
        // cookie opslaan om te onthouden dat we succesvol ingelogd zijn
        // cookie vorm: "key=value"
        // expires --> cookie wordt op dit moment verwijderd
        // SameSite --> heeft met cross-website communicatie te maken, zoek dit gerust eens op
        document.cookie = "loggedIn=true;expires=Sun, 02 Jun 2024;path=/;SameSite=Lax";
        // tweede cookie: username opslaan
        document.cookie = "userName=" + userName + ";expires=Sun, 02 Jun 2024;path=/;SameSite=Lax";
        // naar volgende pagina gaan
        location.href = "success.html";
    }
});

// function die controleert of username
// en password correct zijn
// return true of false
function CheckLogin(userName, password){
    if (correctUserName == userName &&
        correctPassword == password) {
            return true;
        }
    // als gegevens niet correct zijn, false
    return false;
}

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