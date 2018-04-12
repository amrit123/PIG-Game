/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, dice, roundTotal, ativePlayer;
scores = [0, 0]; // this array will store the global total of each player.initialized by o
roundTotal = 0; //this will store the total score for each round
dice = Math.floor(Math.random() * 6) + 1; //geerate random number from 1-6
 // keep track of the active player. 0 means inactive and 1 means active

//document.querySelector("#current-" + activePlayer ).textContent = dice;// textContent can only set plain text

//document.querySelector("#current-" + activePlayer ).innerHTML= "<em>" + dice + "</em>"; //innerHTML will put html to selected elenent 
(function() {
 document.querySelector(".dice").style.display = "none";
	activePlayer = 0;
})();
 //manipulate the CSS

document.querySelector(".btn-roll").onclick = function () {
	
	dice = Math.floor(Math.random() * 6) + 1;
	console.log("current active player  "+ activePlayer + " dice value " + dice );
	var diceDOM=document.querySelector(".dice");
	diceDOM.style.display = 'block'; //unhide the dice
	diceDOM.src ='dice-'+ dice + '.png';
	if(dice===1){
		scores[activePlayer]=0;
		document.querySelector("#current-" + activePlayer).textContent = 0;
		document.querySelector("#score-" + activePlayer).textContent = 0;
		
		
		if(activePlayer===0){
			activePlayer=1;
		}
		else if(activePlayer===1){
			activePlayer=0;
			}
		
		
		
	}
	else{
	document.querySelector("#current-" + activePlayer).textContent = dice;
	roundTotal = scores[activePlayer] + dice;
	document.querySelector("#score-" + activePlayer).textContent = roundTotal;
	scores[activePlayer]=roundTotal;
		console.log("dice roll " + dice +" , player 1 total = "+ scores[0]+ " , player 2 total= " + scores[1]);
		if(scores[activePlayer]> 20){
		console.log("player " + (activePlayer+1) + " wins");
		}
}
}
document.querySelector(".btn-new").onclick = function () {
	//dice = Math.floor(Math.random() * 6) + 1;
	document.querySelector(".dice").style.display = "none";
	document.querySelector("#current-0").textContent = 0;
	document.querySelector("#current-1").textContent = 0;
	document.querySelector("#score-0").textContent = 0;
	document.querySelector("#score-1").textContent = 0;
	activePlayer = 0;
	
}
document.querySelector(".btn-hold").onclick = function () {	
	console.log("current active player is "+ activePlayer);
	if(activePlayer===0){
			activePlayer=1;
		
		}
		else if(activePlayer===1){
			activePlayer=0;
			
			}
	roundTotal=0;
		console.log("new active player is "+ activePlayer);
		}
