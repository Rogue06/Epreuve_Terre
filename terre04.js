/**
 * Créez un programme qui permet de déterminer si l’argument donné est un entier pair ou impair..


Exemples d’utilisation :
$> ruby exo.rb 2
pair

$> ruby exo.rb 5
impair


$> ruby exo.rb Bonjour
Tu ne me la mettras pas à l’envers.

$> ruby exo.rb
Tu ne me la mettras pas à l’envers.


Attention : gérez aussi les entiers négatifs.

 */

let saisie1 = process.argv[2];
let entier = parseInt(saisie1, 10); // permet de "parser" la string récuperé suur argv[2] et la parser en entier 

if(saisie1 % 2 == 0){
    console.log("pair");
    
}else if(saisie1 % 2 == 1 || saisie1 % 2 == -1){ // gestion des entiers pos et neg 
    console.log("impair"); 
}else{
    console.log("Tu as cru que tu allais t'en tirer comme ça ? :) ");
}



