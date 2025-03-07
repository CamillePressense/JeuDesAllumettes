const TOTALOFMATCHES = 50;

// Tant qu'il y a des allumettes, je demande à l'utilisateur un nombre entre 1 et 6 et je renvoie cette valeur.

function askNbToRemove(nbOfMatches, player){
    let userNbToRemove;
    if(nbOfMatches > 0){
        userNbToRemove = Number(prompt(`${player} Combien d'allumettes souhaites tu retirer? Choisis un nombre entre 1 et 6.`));
        while (!(userNbToRemove > 0 && userNbToRemove <= 6)){
            userNbToRemove = prompt("On a dit entre 1 et 6 ! Combien d'allumettes souhaites tu retirer ?")
        }
    }
    return userNbToRemove;
}
// Je déduis du nombre d'allumettes restantes la quantité choisie par l'utilisateur et renvoie le total restant.

function removeMatches(totalOfMatches, nbOfMatches){
    let totalRemaining;
    totalOfMatches -= nbOfMatches;
    totalRemaining = totalOfMatches;
    console.log(`Il reste ${totalRemaining} allumettes.`)
    return totalRemaining;
}

// Je définis le déroulement du jeu à deux joueurs, et la victoire quand la dernière allumette a été prise.

function gamePlay(){
    let player1NbOfMatches;
    let player2NbOfMatches;
    let remainder = TOTALOFMATCHES;
    
    while (remainder > 0){
        player1NbOfMatches = askNbToRemove(remainder, "Joueur 1");
        remainder = removeMatches(remainder, player1NbOfMatches);

        if (remainder <= 0){
            alert("Bravo Joueur 1, tu as récupéré la dernière allumette. Tu as gagné!")
        }
        player2NbOfMatches = askNbToRemove(remainder, "Joueur 2");
        remainder = removeMatches(remainder, player2NbOfMatches);

        if (remainder <= 0){
            alert("Bravo Joueur 2, tu as récupéré la dernière allumette. Tu as gagné!")
        }
    }    
}

// Je lance le jeu 

gamePlay();
