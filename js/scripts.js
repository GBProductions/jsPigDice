//BUSINESS LOGIC FOR GAME


function PigDiceGame() {
  this.players = [] 
}

//DICE RANDOMIZER

let rollDice = function() {
  return Math.ceil(Math.random()*6)
}

function Player(name, turn) {
  this.roll = 0;
  this.turnScore = 0;
  this.totalScore = 0;
  this.turn = turn;
  this.playerName = name
}

PigDiceGame.prototype.addPlayers = function(player) {
  this.players = player
}

PigDiceGame.prototype.endTurn = function() {
  let i = pigDiceGame.findPlayer()
  if (i === 0) {
    pigDiceGame.players[0].turn = false
    pigDiceGame.players[1].turn = true
  } else {
    pigDiceGame.players[1].turn = false
    pigDiceGame.players[0].turn = true
  }
}

PigDiceGame.prototype.rollOne = function() {
  //let rollDice = Math.ceil(Math.random()*6)
  this.roll = rollDice()
  if (this.roll === 1) {
    this.turnScore = 0;
    return ("Sorry " + this.playerName + ", you rolled the forbidden number, your turn is over!");
    this.endTurn
  } else {
   this.turnScore += this.roll
  }
  return this.turnScore;
}

let pigDice = new Player();
console.log(pigDice.rollOne());


PigDiceGame.prototype.findPlayer = function() {
  for (let i=0; i < this.players.length; i++) {
    if (this.players[i].turn === true) {
      return i
    }
  }
}


PigDiceGame.prototype.hold = function() {
  this.totalScore += this.turnScore;
  this.turnScore = 0;
  return ("Good hold" + this.playerName + "your turn is over!")
}

// let pigDice = new Player();
// console.log(pigDice.hold());

PigDiceGame.prototype.checkForWinner = function() {
  if (this.totalScore > 99) {
    return("Congratulations" + this.playerName + ", You win!!!")
  }
}

PigDiceGame.prototype.newGame = function() {
  this.roll = 0;
  this.turnScore = 0;
  this.totalScore = 0;
  this.playerName ="";
}





// PigDiceGame.prototype.takeTurn = function() {
//   let turnScore = 0 
//   let turnOver = false;

//   while (!turnOver) {
//     let roll = this.randomizer();
//     if (roll === 1) {
//       turnOver = true;
//       console.log("11111")
//     }else if (player.playerHold) {
//       this.totalScore += this.currentScore;
//       turnOver = true
//     }else {
//       if (player.playerRoll) {
//       this.currentScore += this.randomizer;
//       turnOver = false      
//       }
//     }
//   }
//   return this.totalScore
// }
  


//USER INTERFACE LOGIC

$(document).ready(function() {
  let pigDiceGame = new PigDiceGame();
  
});
  





$("playerName").submit(function(event) {
  ("form#playerNames").submit(function(event) {
    event.PreventDefault(); 
    const player1Name = $("input#playerName1").val();
    const player2Name = $("input#playerName2").val();
    let playerOne = new Player(player1Name, true);
    let playerTwo = new Player(player2Name, false);
    pigDiceGame.addPlayers(playerOne)
    pigDiceGame.addPlayers(playerTwo)
    console.log(player1name);
  });
});








// roll 
// Player 1 - object

// player 2 - object

// Dice - object
//     randomNumber function?

// takeTurn method
// Display current player turn

// total  score display


// PigDiceGame.prototype.changeTurn = function (){
//   if (this.playerTurn === 1){
//     this.playerTurn = 2;
//   }else {
//     this.playerTurn = 1;
//   }
// }

// Player - object
//     roll function?
//     hold function?

//   switch(this.playerTurn){
//   case 1:
//     if (roll === 1){
//       this.changeTurn();
//       this.players[0].currentScore = 0;
//       return roll;
//     } else {
//       this.players[0].currentScore += roll;
//       return roll;
//     };
//   case 2:
//     if (roll === 1){
//       this.changeTurn();
//       this.players[1].currentScore = 0;
//       return roll;
//     } else {
//       this.players[1].currentScore += roll;
//       return roll;
//     };
// };


// Pig Rules:
// Rule 1: There are two players with one cube shaped die (6 sides).
// Rule 2: Each player takes turns rolling the single die.
// Rule 3: Every player begins their turn with a roll of the die. If they roll a one (1) at anytime, their turn is immediately over, and they receive no points for that turn.
// Rule 4: If the player receives any number other than one (1) they may choose to keep that number, or roll again.  If they roll again, they add the new rolled number to their total. (Ex: If they roll 6 and then roll a 5, the total is now 11).
// Rule 4: A players turn ends when they decide to bank their number and add it to their personal total (or they roll a one(1) and receive no points).
// Rule 5: The first player to 100 points in their personal total wins.