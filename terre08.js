let argChiffre1 = process.argv[2];
let argChifrre2 = process.argv[3];

if(argChifrre2 < 0){
    console.log("Erreur, l'exposant ne peut pas être négatif")
}else if(parseInt(argChiffre1,10) || parseInt(argChifrre2,10) >= 0){ // parseInt permet de recuperer le bon type d'argument.
    console.log(argChiffre1 ** argChifrre2); 
}else{
    console.log("Veuillez rentrer un chiffre et son exposant !");
}


