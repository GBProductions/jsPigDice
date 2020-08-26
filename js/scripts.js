/*

Pig Rules:

Rule 1: There are two players with one cube shaped die (6 sides).
Rule 2: Each player takes turns rolling the single die.
Rule 3: Every player begins their turn with a roll of the die. If they roll a one (1) at anytime, their turn is immediately over, and they receive no points for that turn.
Rule 4: If the player receives any number other than one (1) they may choose to keep that number, or roll again.  If they roll again, they add the new rolled number to their total. (Ex: If they roll 6 and then roll a 5, the total is now 11).
Rule 4: A players turn ends when they decide to bank their number and add it to their personal total (or they roll a one(1) and receive no points).
Rule 5: The first player to 100 points in their personal total wins.

*/

Math.ceil(Math.random()*6)

//BUSINESS LOGIC FOR GAME
PigDiceGame - object
    changeTurn function?
    playerRoll function?
    playerHold function?
    

function PigDiceGame() {
  this.players = [];
  this.winningScore = 100
  this.playerTurn = 1;
}

//BUSINESS LOGIC FOR PLAYERS
Player - object
    roll function?
    hold function?


function Player(){
  this.currentScore = 0;
  this.totalScore = 0;
};

//USER INTERFACE LOGIC

function diceDisplay/numberDisplay
function checkForWinner
function scoreDisplay

$(document).ready(function() {
  let pigDice = new PigDiceGame();
  let playerOne = new Player();
  let playerTwo = new Player();

}
  

roll 
Player 1 - object

player 2 - object

Dice - object
    randomNumber function?

takeTurn method
Display current player turn

total  score display



