//display a welcome message: 
alert("Bonjour et bievenue" + "\n" + "sur le site du jeu du Shifoumi" );

//ask a player name
var userName = prompt("Veuillez insérer votre nom");


var items=[
    "Pierre",
    "Feuille",
    "Ciseaux"
];



// user choice betwen :"Pierre, Feuille, Ciseaux"



function askUserChoice(){
    var userEnter = prompt(userName + ", veuillez saisir ci-dessous entre : \"pierre, feuille, ciseaux \" ");
    if (userEnter === "pierre"){
        return(items[0]);
    }
    else if (userEnter === "feuille"){
        return(items[1]);
    }
    else if(userEnter === "ciseaux"){
        return(items[3]);
    }
}

var userChoice=askUserChoice();
console.log(userChoice);


//compteur random choice

function randomChoice(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  console.log(randomChoice(3));
  // expected output: 0, 1 or 2



  function computerChoice(){
    
    if (randomChoice === 0){
        return(items[0]);
    }
    else if (randomChoice === 1){
        return(items[1]);
    }
    else if(randomChoice === 2){
        return(items[2]);
    }
}

console.log(computerChoice())
