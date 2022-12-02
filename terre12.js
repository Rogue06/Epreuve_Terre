
// validation des données
if(process.argv[2] === undefined || process.argv[3]!== undefined){
    console.log("Veuillez rentrer un horaire compris entre 01:00PM/AM et 11:59PM/AM");
}else {
    // déclaration des variables
    const horaire = process.argv[2];
    let [heures, minutesAndMeridiem] = horaire.split(":");
    //passer de string à entier pour calcul entre chiffres
    let entierHeures = parseInt(heures, 10);


if(entierHeures >= 12 && entierHeures <= 24) {
    console.log("veuillez rentrer un horaire inférieur à 12h");
    process.exit(1);
    // traitement 
    // calcul des heures
} else if(horaire.includes('PM') === true || horaire.includes('pm') === true){ // reperer si PM ou AM 
        heures = entierHeures + 12;


   // affichage du résultat
        let minutesSliced = minutesAndMeridiem.slice(0,2);
        console.log(heures+ ":" +minutesSliced);
}
}











