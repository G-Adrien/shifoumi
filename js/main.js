//display a welcome message: 
alert("Bonjour et bievenue" + "\n" + "sur le site du jeu du Shifoumi" );

//ask a player name
var userName = prompt("Veuillez insérer votre nom");


// user entrer a choice betwen :"Pierre, Feuille, Ciseaux"

//array for store different choices
var items=[
    "Pierre",
    "Feuille",
    "Ciseaux"
];

var userChoice= -1;

while(userChoice < 0){ 
    var userEnter = prompt(userName + ", veuillez saisir ci-dessous entre : \"pierre, feuille, ciseaux \" ");

    if (userEnter === "pierre"){
        userChoice=items[0];
    }
    else if (userEnter === "feuille"){
        userChoice=items[1];
    }
    else if(userEnter === "ciseaux"){
        userChoice=items[2];
    }
    else{
        alert("Erreur, entrée invalide");
    }
}


//compteur random choice
function randomChoice(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

// console.log(randomChoice(3));
// expected output: 0, 1 or 2

var result=randomChoice(3);
computerChoice=items[result];
   

//define the winner
function win(){
    alert("Vous avez choisis : " + userChoice + ".  L'ordinateur a choisis : " + computerChoice + ".  Félicitation :) , vous avez gagné !");
}

function lose(){alert("Vous avez choisis : " + userChoice + ".  L'ordinateur a choisis : " + computerChoice + ".  Dommage :/ , vous avez perdu.");
}

function egality(){alert("Vous avez choisis : " + userChoice  +".  L'ordinateur a choisis : " + computerChoice + ".  Egalité , personne n'a gagné.");
}


// set the rules of the game
if (userChoice === computerChoice){
    egality();
}
else if(userChoice === "Pierre" && computerChoice === "Ciseaux"){
    win();
}
else if(userChoice === "Ciseaux" && computerChoice === "Feuille"){
    win();
}
else if(userChoice === "Feuille" && computerChoice === "Pierre"){
    win();
}
else{
    lose();
}
