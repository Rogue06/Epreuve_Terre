// déclaration des variables
const horaires = process.argv[2];
let [heures, minutes] = horaires.split(":");
let meridiem;


// validation des données
if (heures < 0 || heures >= 24) {
    console.log("veuillez rentrer un horaire au bon format, exemple 20:30 ");
    process.exit(1);
}

// traitement

// calcul am/pm
if (heures > 0 && heures < 12) {
    meridiem = 'am';
} else {
    meridiem = 'pm';
}
// calcul des heures
if(heures > 12 && heures < 24){
 
    heures = heures - 12;
}else if(heures <= 12){
    
    heures = heures;
}
    // affichage du résultat
    console.log(heures+":"+minutes+""+meridiem); 
    





 


