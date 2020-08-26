/*
Pig Rules:

Rule 1: There are two players with one cube shaped die (6 sides).
Rule 2: Each player takes turns rolling the single die.
Rule 3: Everytime the player rolls the die, they add the rolled number to the total. 
  (Ex: If they roll 6 and then roll a 5, the total is now 11).
Rule 4: 

*/

Math.ceil(Math.random()*6)


Game

Player 1

player 2

//business logic for game
function PigDiceGame() {
  this.players = [];
  this.winningScore = 100
  this.playerTurn = 1;
}

