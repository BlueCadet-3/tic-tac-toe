/*----- Constants -----*/

const COLOR = {
  'null': 'gainsboro',
  '1': 'Blue',
  '-1': 'Green'
}

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

/*----- Event listeners -----*/

document.querySelector('section').addEventListener('click', getClick);
document.getElementById('replay').addEventListener('click', init);

/*----- Functions -----*/

function init() {
  board = [null, null, null, null, null, null, null, null, null],
  turn = 1,
  winner = 1
  render();
}
  
function render() {
  board.forEach(function(sqr, idx) {
    sqrEl[idx].style.background = COLOR[sqr];
  });
  if (winner === 'T') {
    msgEl.innerHTML = `Cat's game!`;
  } else if (winner) {
    msgEl.innerHTML = `You did it ${COLOR[winner].toUpperCase()}!`;
  } else {
    msgEl.innerHTML = `${COLOR[turn].toUpperCase()}'s Turn`;
  }
}

function getClick(evt) {
  const idx = parseInt(evt.target.id);
  getWinner();
}

function getWinner() {
  for (let i = 0; i < sqrEl.length; i++) {
    console.log(i);
  };
}

init();