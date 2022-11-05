/**
 * AFFICHEUR D'ARGUMENT 
 * 
 * Créez un programme qui affiche les arguments qu’il reçoit ligne par ligne, peu importe le nombre d’arguments.


Exemples d’utilisation :
$> ruby exo.rb je suis solide !
je
suis
solide
!

 */

const process = require("process");

let args = process.argv.slice(2);
/**
 * AUTRE SOLUTION (moins conventionelle), à la place de process.argv.slice(2);
 *args.shift(); permet de supprimer l'index 0
 * args.shift(); permet de supprimer l'index 1
 */

args.forEach((val) => {
  console.log(`${val}`);
});

// ajouter index si on souhaite numéroter les arguments dans le terminal
