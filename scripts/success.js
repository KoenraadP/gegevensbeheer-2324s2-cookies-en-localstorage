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
    // even testen
    console.log(cookies);
}