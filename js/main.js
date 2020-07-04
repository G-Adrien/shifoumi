//display a welcome message: 
alert("Bonjour et bievenue" + "\n" + "sur le site du jeu du Shifoumi" );

//ask a player name
//var userName = prompt("Veuillez insérer votre nom");
var userName = "Adrien";

// user entrer a choice betwen :"Pierre, Feuille, Ciseaux"

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

console.log(userChoice);

//compteur random choice

function randomChoice(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

// console.log(randomChoice(3));
// expected output: 0, 1 or 2

var result=randomChoice(3);
computerChoice=items[result];
   
console.log(computerChoice);

//define the winner

function win(){
    alert("Vous avez choisis : " + userChoice + ".  L'ordinateur a choisis : " + computerChoice + ".  Félicitation :) , vous avez gagné !");
}

function lose(){
    alert("Vous avez choisis : " + userChoice + ".  L'ordinateur a choisis : " + computerChoice + ".  Dommage :/ , vous avez perdu.");
}

function egality(){
    alert("Vous avez choisis : " + userChoice  +".  L'ordinateur a choisis : " + computerChoice + ".  Egalité , personne n'a gagné.");
}

var userCount= 0;
var computerCount= 0;

while ((userCount <= 3) && (computerCount <= 3)) {
    if (userChoice === computerChoice){
    }
    else if(userChoice === "Pierre" && computerChoice === "Ciseaux"){
       userCount++;
    }
    else if(userChoice === "Ciseaux" && computerChoice === "Feuille"){
        userCount++;
    }
    else if(userChoice === "Feuille" && computerChoice === "Pierre"){
        userCount++;
    }
    else{
        computerCount++;
    }
    console.log(userCount)
    console.log(computerCount)
}

if(userCount < computerCount){
    lose()
}
else{
    win()
}
