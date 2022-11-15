
// on veut récupérer la valeur à l'index 2, pas avec "slice" donc
let saisie1 = process.argv[2];
console.log(saisie1);
console.log(typeof saisie1);
// caster saisie1 en int
let entier = parseInt(saisie1, 10);
console.log(entier);
console.log(typeof entier);

if(saisie1 % 2 == 0){
    console.log("pair");
    
}else if(saisie1 % 2 == 1){
    console.log("impair");
}
    
typeof saisie1 != "number" 
console.log("ceci n'est pas un chiffre");