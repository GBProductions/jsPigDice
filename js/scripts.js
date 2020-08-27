//BUSINESS LOGIC FOR GAME

//DICE RANDOMIZER
let rollDice = function() {
  return Math.ceil(Math.random()*6)
}

function Player() {
  this.roll = 0;
  this.turnScore = 0;
  this.turn = turn;
  this.playerName;
}

Player.prototype.rollOne = function(){
  if (this.roll === 1) {
  this.turnscore = 0;
  return ("Sorry" + this.playerName + ", you rolled the forbidden number, your turn is over!")
  } else {
    this.turnScore += this.roll
  }
}

Player.prototype.hold = function() {
  this.totalScore += this.turnScore;
  this.turnScore = 0;
  return ("Good hold" + this.playerName + "your turn is over!")
}

Player.prototype.checkForWinner = function() {
  if (this.totalScore > 99) {
    return("Congratulations" + this.playerName + ", You win!!!")
  }
}

Player.prototype.newGame = function() {
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
  let pigDice = new PigDiceGame();
  let playerOne = new Player();
  let playerTwo = new Player();
}
  





$("playerName").submit(function(event) {
  ("form#playerNames").submit(function(event)) {
    event.PreventDefault(); 
    const 

  }








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













