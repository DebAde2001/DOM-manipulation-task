// init function initializes scores,current score and active player 
let scores, currentScore, activePlayer, gamePlaying; 
function init () {
    scores = [0,0];
    currentScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector("#score--0").textContent = "0";
    document.querySelector("#score--1").textContent = "0";
    document.querySelector("#current--0").textContent = "0";
    document.querySelector("#current--1").textContent = "0";
    document.querySelector(".player--0").classList.add("player--active");
    document.querySelector(".player--1").classList.remove("player--active");
}
init()

// Switch player function switches the active player if he rolls 1 and resets the current score to 0,
// It also toggles the active player class
function switchPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    console.log('next player');
    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = "0";
    document.querySelector(".player--0").classList.toggle("player--active");
    document.querySelector(".player--1").classList.toggle("player--active");
}

// Roll dice section: Generates a random number btw 1 and 6 and displays dice roll
// If the active player does not roll 1 it adds dice roll to the current score
// And if the active player rolls 1 it switches player
document.querySelector(".btn--roll").addEventListener('click', function roll() {
    if(gamePlaying) {
        let dice = Math.trunc(Math.random() * 6) +1;
        document.querySelector(".dice").src = `./Image/dice-${dice}.png`;
        console.log(dice);
        if(dice != 1) {
            currentScore += dice;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        } else {
            document.querySelector(`#current--${activePlayer}`).textContent = 0;
            switchPlayer();
        }
    } 
});

// This section: 1. Adds up the player's current score to his total score once he clicks on hold
// 2. Declares the player that score 100 or more winner by changing the background color and font 
//    colour,if he scores less than 100 it switches to the next player
document.querySelector(".btn--hold").addEventListener("click", function() {
    if(gamePlaying) {
        scores[activePlayer] += currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 100) {
            document.querySelector('.player--active').style.backgroundColor = "#2f2f2f";
            document.querySelector('.player--active').style.color = "#c7365f";
            console.log("Winner");
            gamePlaying = false;
        } else{
            switchPlayer();
        }  
    }
});

// Function newGame resets the game to its default state by setting all score to 0 and 
// sets player 1 as starting player
document.querySelector('.btn--new').addEventListener(('click'), function newGame() {
    document.querySelector('.player--active').style.backgroundColor = "";
    document.querySelector('.player--active').style.color = "";
    console.log('reset');
    init();
});