/*let test = "Hello World It's Me";
let stringTab = test.split(" ");
console.log(stringTab); */

/**
 * Nom de Programme
 * Créez un programme qui affiche son nom de fichier.


Exemples d’utilisation :
$> node exo.js
exo.js

$> node crevette.js
crevette.js

 */

let chemin = __filename; // je donne à la variable le chemin du fichier
//let fileName = chemin.split(); //
console.log(__filename.slice(__dirname.length + 1));
