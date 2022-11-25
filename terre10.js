/**
 * Un nombre est premier s'il possède exactement 2 diviseurs qui sont 1 et lui même , si plus alors non
 * ex :6 est divisible par 1, et lui meme mais aussi  6 = 2 X 3 donc non !
 * 
 * Créez un programme qui affiche si un nombre est premier ou pas.


Exemples d’utilisation :
$> node exo.js 5
Oui, 5 est un nombre premier.

$> node exo.js 6
Non, 6 n’est pas un nombre premier.

Attention : 0 et 1 ne sont pas des nombres premiers. Gérez les erreurs d’arguments.

 */

const nombre = parseInt(process.argv[2], 10);

if (isNaN(nombre)) { //Si l'argument n'est pas reconnu comme étant un Int
    console.log("veuillez rentrer un entier naturel")// erreur !
} else if(nombre < 0) { // Si l'utilisateur saisie un chiffre inférieur a 0 (négatif)
   console.log("erreur")// erreur !
} else if(nombre === 0 || nombre === 1) { // Pour interdir la saisie d'entier 0 et 1.
   console.log("0 et 1 ne sont pas des nombres premiers")
}else{


for(let i = 2; i < nombre; i++){
    if(nombre % i === 0 ){
        console.log("le chiffre " +nombre+ " n'est pas un entier premier :(");
        break;
    }else if(i+1 === nombre) {
        console.log("le chiffre " +nombre+ " est bien un entier premier :)");
        
}
}
}

