let totalOfMatches = 50;
let nbToRemove;

/* Étape 1
Faire une fonction qui prend en paramètre le nombre d'allumettes à enlever du reste.
Pour rappel, un nom de fonction doit décrire clairement ce que fait celle-ci. */

function removeMatches(nbToRemove){
    totalOfMatches -= nbToRemove;
}

/* Étape 2
Demander a l'utilisateur combien d'allumettes il souhaite retirer tant 
qu’il y a des allumettes dans le tas. Pour rappel, on a 50 allumettes au départ. */

while (totalOfMatches > 0){
    nbToRemove = prompt("Combien d'allumettes souhaites tu retirer ?");
}

console.log(nbToRemove)