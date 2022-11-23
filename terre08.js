let argChiffre1 = process.argv[2];
let argChifrre2 = process.argv[3];

if(argChifrre2 < 0){
    console.log("Erreur, l'exposant ne peut pas être négatif")
}else if(parseFloat(argChiffre1) || parseFloat(argChifrre2) >= 0){ // parseInt permet de recuperer le bon type d'argument, parseFloat pour recuperer le bon type et un entier décimale.
    console.log(argChiffre1 ** argChifrre2); 
}else{
    console.log("Veuillez rentrer un chiffre et son exposant !");
}


