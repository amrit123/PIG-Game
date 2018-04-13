
/*
 CHALLENGES
Change the game to follow these rules:
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/



var scores, dice,dice1, roundTotal, activePlayer, isGamePlaying, winningScore, dicePrevious,defaultWinningScore;
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
console.log("default winning score" + defaultWinningScore);
	if (isGamePlaying) {
		dice = Math.floor(Math.random() * 6) + 1;
		dice1= Math.floor(Math.random() * 6) + 1;
		console.log("active player =" + activePlayer);
		console.log("dice 1:" + dice +" dice 2:"+ dice1);
		if ((dice === 1)||(dice1===1)) {
			
			document.getElementById("current-" + activePlayer).textContent = '0';
			

			nextPlayer();
			
		} else {
			
			var diceDOM = document.querySelector(".dice");
			var diceDOM1 = document.querySelector(".dice1");
			
			diceDOM.style.display = 'block'; //unhide the dice
			diceDOM1.style.display = 'block'; 
			diceDOM.src = 'dice-' + dice + '.png';
			diceDOM1.src = 'dice-' + dice1 + '.png';
			roundTotal += dice+dice1;
				document.getElementById("current-" + activePlayer).textContent = roundTotal;
			
		}


	}

}

document.querySelector(".btn-hold").onclick = function () {
	dicePrevious = 0;
	if (isGamePlaying) {
		console.log(" winning score " + defaultWinningScore);
		scores[activePlayer] += roundTotal;
		//console.log('global score of player ' + activePlayer + ' is ' + scores[activePlayer]);
		document.getElementById("current-" + activePlayer).textContent = '0';
		document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

		if (scores[activePlayer] >= defaultWinningScore) {
			document.getElementById("name-" + activePlayer).textContent = 'WINNER!';
			document.querySelector(".dice").style.display = "none";
			document.querySelector(".dice1").style.display = "none";
			document.querySelector(".player-" + activePlayer + "-panel").classList.remove('active');
			document.querySelector(".player-" + activePlayer + "-panel").classList.add('winner');
			isGamePlaying = false;

		} else {
			nextPlayer();
		}
	}
}


document.querySelector(".btn-new").addEventListener('click', reset);


function reset() {
	activePlayer = 0;
	roundTotal = 0;
	scores = [0, 0];
	isGamePlaying = true;
	defaultWinningScore=50;
	document.querySelector(".winningScore").value=defaultWinningScore;
	document.querySelector(".dice").style.display = "none";
	document.querySelector(".dice1").style.display = "none";
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.querySelector(".player-0-panel").classList.remove('winner');
	document.querySelector(".player-1-panel").classList.remove('winner');
	document.querySelector(".player-0-panel").classList.remove('active');
	document.querySelector(".player-1-panel").classList.remove('active');
	document.querySelector(".player-0-panel").classList.add('active');
	document.getElementById("name-0").textContent = 'Player 1';
	document.getElementById("name-1").textContent = 'Player 2';

}

function nextPlayer() {
	document.querySelector(".dice").style.display = "none";
	document.querySelector(".dice1").style.display = "none";
	document.querySelector(".player-" + activePlayer + "-panel").classList.toggle('active');
	//activePlayer === 0 ? activePlayer =1:activePlayer = 0;
	if (activePlayer === 0) {
		activePlayer = 1;
	} else if (activePlayer === 1) {
		activePlayer = 0;
	}
	document.querySelector(".player-" + activePlayer + "-panel").classList.toggle('active');
	roundTotal = 0;
}


document.querySelector(".winningScore").onblur = function () {
	console.log("winningScore");
	winningScore = document.querySelector(".winningScore").value;
	defaultWinningScore=winningScore;
	console.log(winningScore);
}
