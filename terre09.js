

let argChiffre = process.argv[2];

if(process.argv[2] < 0 || process.argv[3] ){
    console.log("Erreur, veuillez rentrer qu'un seul entier et pas d'entier négatif")
}else if(parseInt(argChiffre,10) >= 0){ // parseInt permet de recuperer le bon type d'argument, parseFloat pour recuperer le bon type et un entier décimale.
    console.log(Math.sqrt(argChiffre))
}else{
    console.log("Veuillez rentrer un entier !");
}