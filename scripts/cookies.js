"use strict";

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
        document.cookie = "loggedIn=true"
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