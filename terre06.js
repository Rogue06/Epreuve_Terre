/**
 * Créez un programme qui affiche l’inverse de la chaîne de caractères donnée en argument.

Exemples d’utilisation :
$> node exo.js “Hello world!”
!dlrow olleH

$> node exo.js “lehciM”
Michel

Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.
 */

function reverseString (s) {
    return s
    .split("") // Convertir la chaine en tableau / convert string to array
    .reverse() // inverser le tableau / reverse array
    .join("")  // puis, convertir le tableau à nouveau en chaine / finally, convert array back to string
    ;
}

console.log(
    reverseString(
    process.argv
        .slice(2)  // remove executable (nodejs) and script (test.js)
        .join(" ") // convert array of arguments to string and restore spaces between them
    )
);