// déclaration des variables
const horaire = process.argv[2];
let [heures, minutesAndMeridiem] = horaire.split(":");
//passer de string à entier pour calcul entre chiffres
let entierHeures = parseInt(heures, 10);
// reperer si PM ou AM 



// validation des données
if(entierHeures >= 12 && entierHeures <= 24) {
    console.log("veuillez rentrer un horaire inférieur à 12h");
    process.exit(1);
}else if(process.argv[2] === null || process.argv[3]){
    console.log("Veuillez rentrer un horaire compris entre 01:00PM/AM et 11:59PM/AM")
}

// traitement

// calcul des heures

if(horaire.includes('PM') === true || horaire.includes('pm') === true){
    heures = entierHeures + 12;
}

    // affichage du résultat

let minutesSliced = minutesAndMeridiem.slice(0,2);
  console.log(heures+ ":" +minutesSliced);

    //console.log("veuillez rentrer un horaire au bon format, exemple hh:mm(am/pm)")

