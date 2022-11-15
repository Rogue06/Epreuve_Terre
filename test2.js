let dividende = parseInt(process.argv[2]);
let diviseur = parseInt(process.argv[3]);
const quotient = Math.trunc(dividende / diviseur);
const reste = (dividende - (quotient * diviseur));


if(dividende > diviseur && diviseur > 0){
    console.log("resultat : " +quotient);
    console.log("reste : " +reste);
}else{
    console.log("erreur");
}


/**if(entier > entier2 && entier2 > 1){
Math.trunc(entier / entier2);
entier %= entier2;
    console.log("resultat : " +entier2);
    console.log("reste : " +entier);
}else if(entier2 <= 1){
    console.log("erreur");
}else{
    console.log("erreur");
} */