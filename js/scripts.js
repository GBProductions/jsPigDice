/*

Pig Rules:

Rule 1: There are two players with one cube shaped die (6 sides).
Rule 2: Each player takes turns rolling the single die.
Rule 3: Every player begins their turn with a roll of the die. If they roll a one (1) at anytime, their turn is immediately over, and they receive no points for that turn.
Rule 4: If the player receives any number other than one (1) they may choose to keep that number, or roll again.  If they roll again, they add the new rolled number to their total. (Ex: If they roll 6 and then roll a 5, the total is now 11).
Rule 4: A players turn ends when they decide to bank their number and add it to their personal total (or they roll a one(1) and receive no points).
Rule 5: The first player to 100 points in their personal total wins.


*/


//BUSINESS LOGIC FOR GAME
// PigDiceGame - object
//     changeTurn function?
//     playerRoll function?
//     playerHold function?
    

function PigDiceGame() {
  this.players = [];
  this.winningScore = 100
  this.playerTurn = 1;
}

// PigDiceGame.prototype.changeTurn = function (){
//   if (this.playerTurn === 1){
//     this.playerTurn = 2;
//   }else {
//     this.playerTurn = 1;
//   }
// }

PigDiceGame.prototype.playerRoll = function(){
  let roll = randomizer(1, 6);

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

PigDiceGame.prototype.playerHold = function(){

}

function randomizer
  return Math.ceil(Math.random()*6)



//BUSINESS LOGIC FOR PLAYERS
// Player - object
//     roll function?
//     hold function?


function Player(){
  this.currentScore = 0;
  this.totalScore = 0;
};

this.prototype.takeTurn = function() {
  let turnScore = 0 
  let turnOver = false;

  while (!turnOver) {
    let roll = this.randomizer();
    if (roll === 1) {
      turnOver = true;
    }else if{
      let 
      if (player.hold) {
        this.totalScore += this.currentScore;
        turnOver = true
      }else {
        if (player.roll) {
        this.currentScore += this.randomizer;
        turnOver = false
      }
    }
  }
  return this.totalScore
}








//USER INTERFACE LOGIC

$(document).ready(function() {
  let pigDice = new PigDiceGame();
  let playerOne = new Player();
  let playerTwo = new Player();

}
  

// roll 
// Player 1 - object

// player 2 - object

// Dice - object
//     randomNumber function?

// takeTurn method
// Display current player turn

// total  score display