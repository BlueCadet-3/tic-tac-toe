/*----- Constants -----*/

const COLOR = {
  'null': 'gainsboro',
  '1': 'Blue',
  '-1': 'Green'
}

const MOVES = []

const WIN_COMBO = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], 
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]              
]

const WIN_MSG = [
  'Three in a row! Way to go!', 'Pat yourself on the back...you did it!'
]

const LOSE_MSG = [
  'You blew it!', 'The impossible happened...you lost.'
]

const DRAW_MSG = [
  'Draw!', `Cat's game!`
]

/*----- App State (variables) -----*/

let board;
let turn;
let winner;

/*----- Cached Element References -----*/

const msgEl = document.getElementById('msg');
const sqrEl = document.querySelectorAll('section > div > div');
const button = document.getElementById('replay');

/*----- Event listeners -----*/

document.querySelector('section').addEventListener('click', getClick);
document.getElementById('replay').addEventListener('click', init);

/*----- Functions -----*/

function init() {
  board = new Array(9).fill(null);
  turn = 1;
  winner = null;
  button.style.display = 'none';
  render();
}
  
function render() {
  board.forEach(function(sqr, idx) {
    sqrEl[idx].style.background = COLOR[sqr];
  });
  if (winner === 'T') {
    msgEl.innerHTML = `Cat's game!`;
    button.style.display = null;
  } else if (winner) {
    msgEl.innerHTML = `You did it ${COLOR[winner].toUpperCase()}!`;
    button.style.display = null;  
  } else {
    msgEl.innerHTML = `${COLOR[turn].toUpperCase()}'s Turn`;
  }
}

/* Handle a player clicking a square */

function getClick(evt) {
  /* Extract index from HTML element */
  const sqr = evt.target.id;
  MOVES.push(sqr);
  console.log(sqr);
  /* If the board has a value at the index, immediately return since square is taken */
  if (MOVES[evt.target.id]) return;
  getWinner();
  /* If winner is not null, return because the game is over */
}

  /* Update board array at the index with the value of turn */

  /* Flip turns by multiplying turn by -1 */
  turn *= -1;

  /* Set winner variable if there is one */

    /* Loop through each winning combo array */

    /* Total up the three board positions using the three indexes in the current combo */

    /* Convert the total to an absolute value */

    /* If the total equals 3, there is a winner */

      /* Set winner to the board's value at the index specified by the first index in the combo array, exit the loop */

  /* If there is no winner, check if there's a tie */

    /* Set winner to 'T' if there are no more nulls in the board array */

  
  /* All state has been updated, so render the state to the page (step 4.2) */
  render();


/* Handle a player clicking the replay button */

  /* Do step 4.1 (initialize state variables) and 4.2 (render) */


// function getWinner() {
//   for (let i = 0; i < sqrEl.length; i++) {
//     console.log(i);
//   };
// }


function getWinner() {
  let check = WIN_COMBO.some(combo => (
    Math.abs(moves[combination[0]] + moves[combination[1]] + moves[combination[2]]) === 3)
  );
  if (check) winner = turn;
}

init();