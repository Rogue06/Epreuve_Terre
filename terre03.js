/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let x of f) {
  document.getElementById("demo").innerHTML += x;
} */

const { stringify } = require("querystring");



//filter() Crée un nouveau tableau avec tous les éléments d'un tableau qui ont passé un test.
//includes() Vérifie si un tableau contient l'élément spécifié
//isArray() Vérifie si un objet est un tableau.
//slice() Sélectionne une partie d'un tableau et retourne le nouveau tableau.
//some() Vérifie si l'un des éléments d'un tableau passe un test.
//splice() Ajoute/supprime des éléments d'un tableau

let tab = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

for(let i =0; i < tab.length; i++){


if(i === process.argv[2]){break} 

tab.shift();}
console.log(tab.join(""));

/**
 * process.argv permet de récupérer l'argument
 * boucle for  pour itérer sur tous les elements du tableau ( ici partir de A a Z)
 * if : dès que le prochain element est === a i on break 
 * puis shift() la fonction qui permet de supprimer les elements du tableau , qui se trouvent avant la lettre tapé.
 * le console log pour pour affichier le "résultat" 
 * le join permet de convertir un array en string et joindre tous les elements ensemble. 
 * ("")permet de supprimer les virgules et/ou  faire un espacement par ex : (" ")ou ajouter n'importe quel symbole...
 */




