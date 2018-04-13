/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, dice, roundTotal, activePlayer;
//dice = Math.floor(Math.random() * 6) + 1; //geerate random number from 1-6

// keep track of the active player. 0 means inactive and 1 means active

//document.querySelector("#current-" + activePlayer ).textContent = dice;// textContent can only set plain text

//document.querySelector("#current-" + activePlayer ).innerHTML= "<em>" + dice + "</em>"; //innerHTML will put html to selected elenent 
(function () { //this function will exexute on page loading or initialixation
	reset();
})();


//manipulate the CSS

document.querySelector(".btn-roll").onclick = function () {
	//console.log("current active player is " + activePlayer);
	dice = Math.floor(Math.random() * 6) + 1;
	var diceDOM = document.querySelector(".dice");
	diceDOM.style.display = 'block'; //unhide the dice
	diceDOM.src = 'dice-' + dice + '.png';
	if (dice === 1) {
		document.getElementById("current-" + activePlayer).textContent = '0';
		
		nextPlayer();

	} else {

		roundTotal += dice;
		document.getElementById("current-" + activePlayer).textContent = roundTotal;
	}
}

document.querySelector(".btn-hold").onclick = function () {
	scores[activePlayer] += roundTotal;
	//console.log('global score of player ' + activePlayer + ' is ' + scores[activePlayer]);
	document.getElementById("current-" + activePlayer).textContent = '0';
	document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
	if(scores[activePlayer]>=20){
		document.getElementById("name-" + activePlayer).textContent = 'WINNER!';
			document.querySelector(".dice").style.display = "none";
		document.querySelector(".player-" + activePlayer + "-panel").classList.remove('active');
		document.querySelector(".player-" + activePlayer + "-panel").classList.add('winner');
		document.querySelector(".btn-hold").disabled;
	}
	else{
		nextPlayer();
	}
	
	//console.log("current active player is " + activePlayer);
	//document.querySelector(".dice").style.display = "none";
	//console.log("global score player " + activePlayer + " = " + scores[activePlayer]);



}


document.querySelector(".btn-new").addEventListener('click',reset) ; 


function reset() {
	activePlayer = 0;
	roundTotal = 0;
	scores = [0, 0];
	document.querySelector(".dice").style.display = "none";
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.querySelector(".player-0-panel").classList.remove('winner');
	document.querySelector(".player-1-panel").classList.remove('winner');
	document.querySelector(".player-0-panel").classList.remove('active');
	document.querySelector(".player-1-panel").classList.remove('active');
	document.querySelector(".player-0-panel").classList.add('active');
	document.getElementById("name-0" ).textContent = 'Player 1';
	document.getElementById("name-1" ).textContent = 'Player 2';
	
}

function nextPlayer() {
document.querySelector(".dice").style.display = "none";
	document.querySelector(".player-" + activePlayer + "-panel").classList.toggle('active');
	//activePlayer === 0 ? activePlayer =1:activePlayer = 0;
	if (activePlayer === 0) {
		activePlayer = 1;
        } 
	else if (activePlayer === 1) {
		activePlayer = 0;
}
document.querySelector(".player-" + activePlayer + "-panel").classList.toggle('active');
	roundTotal = 0;
}
