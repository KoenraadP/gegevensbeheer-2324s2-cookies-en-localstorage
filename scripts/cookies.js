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
form.addEventListener("submit",function(){
    // username en password uitlezen
    let userName = userNameInput.value;
    let password = passwordInput.value;
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