/**
 * Créez un programme qui affiche le résultat et le reste d’une division entre deux nombres.


Exemples d’utilisation :
$> python exo.py 5 2
résultat: 2
reste: 1


$> python exo.py 10 0
erreur.


$> python exo.py 3 5
erreur.
 */


let a = process.argv[2];
let entier = parseInt(a, 10);


let b = process.argv[3];
let entier2 = parseInt(b, 10);

if(entier > entier2 && entier2 > 1){
Math.trunc(entier / entier2); // fonction Math.trunc qui permet de tronquer les chiffres apres la virgule
entier %= entier2;
    console.log("resultat : " +entier2);
    console.log("reste : " +entier);
}else if(entier2 <= 1){
    console.log("erreur");
}else{
    console.log("erreur");
}