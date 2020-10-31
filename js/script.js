/*----- Constants -----*/

const COLOR = {
  'null': 'gainsboro',
  '1': '#8C3A58',
  '-1': '#1B3C59'
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
const boardEl = document.getElementById('board');
const sqrEl = document.querySelectorAll('section div div');
const replayBtn = document.getElementById('replay');



/*----- Event listeners -----*/




/*----- Functions -----*/

function init() {
  board = [null, null, null, null, null, null, null, null, null],
  turn = 1,
  winner = null;
  }

init();
