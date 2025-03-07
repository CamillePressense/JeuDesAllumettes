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

// Je demande combien il y a de joueurs et renvoie la liste des joueurs.

function asKNbOfPlayer(){
    let listOfPlayer = [];
    let nbOfPlayer = Number(prompt("Combien de joueurs êtes vous ?"));
    for ( let i = 1 ;  i <= nbOfPlayer; i++){
        listOfPlayer.push(`Joueur ${i}`)
    }
    return listOfPlayer
}



// Je définis le déroulement du jeu à deux joueurs, et la victoire quand la dernière allumette a été prise.

function gamePlay(){
    let listOfPlayer = asKNbOfPlayer()
    let remainder = TOTALOFMATCHES;
    let playerNbOfMatches;

    while (remainder > 0){
    for (player of listOfPlayer) {
            playerNbOfMatches = askNbToRemove(remainder, player);
            remainder = removeMatches(remainder, playerNbOfMatches);

            if (remainder <= 0){
                alert(`Bravo ${player}, tu as récupéré la dernière allumette. Tu as gagné!`) 
            }
        }        
    }    
}

// Je lance le jeu 

gamePlay();
