
let submit = document.getElementById("button")
submit.addEventListener("click", verifications)
function verifications() {
    emailCheck();
    Postalcode();
    numéroSécuritéSociale();
    numéroPassport();
    datePassport();
}
function emailCheck() {
    let email = document.getElementById("mail").value;
    if (verifemail(email)) {
    }
    else {
        alert("Email invalide")
    }
    return false;
}
function verifemail(email) {
    const verifemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    return verifemail.test(email);
}
function Postalcode() {
    let codePostal = document.getElementById("CodePostal").value;
    if (codePostal.length != 5) {
        alert("Code postal invalide")
        return;
    }
    else {
    }
}
function numéroSécuritéSociale() {
    let numéroSécu = document.getElementById("numéroSécu").value;

    if (verifSecu(numéroSécu)) {
    }
    else {
        alert("Numéro de Sécurité sociale invalide")
    }
    return false;
}
function verifSecu(numéroSécu) {
    let verifNumSecu = /^[12]\d{12}$/;
    return verifNumSecu.test(numéroSécu);
}
function numéroPassport() {
    let numéroPP = document.getElementById("numéroPassport").value;
    if (verifPassport(numéroPP)) {
    }
    else {
        alert("Numéro de passport invalide")
    }
    return false;
}
function verifPassport(numéroPP) {
    let vérifNumPP = /^[0-9]{2}[A-z]{2}[0-9]{5}$/;
    return vérifNumPP.test(numéroPP);
}
function datePassport() {
    let dateDélivrancePassport = document.getElementById("dateDélivrancePassport").value;
    let dateValiditéPassport = document.getElementById("dateValiditéPassport").value;
    if (dateDélivrancePassport > dateValiditéPassport) {
        alert("veillez ressaisir les dates")
    }
}




