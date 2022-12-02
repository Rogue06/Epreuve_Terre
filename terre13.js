// erreur si argument absent
if (process.argv[2] === undefined) {
    console.log("Veuillez exécuter ce script en fournissant un argument.");
    process.exit(1);
}

// erreur si il existe plus d'un argument
if (process.argv[3] !== undefined) {
    console.log("Veuillez exécuter ce script en fournissant un seul argument.");
    process.exit(1);
}

// erreur si le caractère ":" n'est pas trouvé dans l'argument
if (!process.argv[2].includes(":")) {
    console.log("Veuillez saisir une heure dans le système horaire sur 12 heures (08:23AM, 11:47PM, ...).");
    process.exit(1);
}

// à ce stade, on est sûr qu'il y a exactement un argument et qu'il contient au moins un caractère ":"
const horaire = process.argv[2];

// comme il existe au moins un caractère ":", le split retourne au moins 2 valeurs
const [heures12, minutesAndMeridiem, troisiemeValeur] = horaire.split(":");
    
// remarque : tu noteras le conditionnel "devrait" dans les commentaires suivants, c'est ce qu'on s'attend à avoir mais on ne l'a pas encore vérifié !
// entier devrait valoir '08', '11', ...
// minutesAndMeridiem devrait être de la forme '23AM', '47PM', ... donc 2 chiffres suivis de 2 lettres, go pour un slice !
const minutes = minutesAndMeridiem.slice(0,2); // devrait valoir '23', '47', ...
const meridiem = minutesAndMeridiem.slice(2); // devrait valoir 'AM' ou 'PM' (inutile de dire quand s'arrêter, on part de l'index 2 et on prend ce qui reste)

let entierHeures = parseInt(heures12, 10);
let entierMinutes = parseInt(minutes, 10);

// erreur si entierHeures n'est pas un nombre ou s'il n'est pas compris entre 1 et 12
if(isNaN(entierHeures) || entierHeures <= 0 || entierHeures > 12) {
    console.log("veuillez saisir un horaire compris entre 01h à 12h");
    process.exit(1);
}

// erreur si entierMinutes n'est pas un nombre ou s'il n'est pas compris entre 0 et 59
if(isNaN(entierMinutes) || entierMinutes < 0 || entierMinutes > 59) {
    console.log("veuillez saisir un horaire dont les minutes sont comprises entre 00 et 59");
    process.exit(1);
}

// erreur si meridiem n'est pas 'AM' ou 'PM'
if(meridiem !== 'AM' && meridiem !== 'PM') {
    console.log("veuillez saisir un horaire se terminant par 'AM' ou 'PM'");
    process.exit(1);
}

// sauf oubli de ma part, à partir d'ici, on est certain du format saisi !

// il reste à calculer les heures dans le système sur 24 heures
let heures24;

// si l'argument contient 'PM', il faut ajouter 12
if(meridiem === 'PM') {
    heures24 = entierHeures + 12;
} else if(entierHeures === 12) { // pas besoin de vérifier que la valeur est "AM", on en est sûr car ça a été validé
    heures24 = 0;
} else { // rien à faire si 'AM' et heure fournie entre 1 et 11
    heures24 = entierHeures;
}

// affichage du résultat
// remarque : heures24 étant un entier, si l'argument saisi contenait un "0" comme "08:23AM", heures24 vaut 8 et non "08" donc le résultat affiche "8:23"
console.log(heures24+":"+minutes);
