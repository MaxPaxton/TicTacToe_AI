var origBoard; //an array of my board
const huPlayer = 'O'; //the simble for human selections
const aiPlayer = 'X'; //the simble for the AI selection
// for now an Array hold all the winning combos, but this will disapear later
const winComb = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8]
    [6,4,2]
]

const cells = document.querySelectorAll('.cell'); // makes an array of all the classes with 'cell' as the name
//---------------------------------------------------------//

startGame();

//---------------FUNCTIONS---------------------------------//
function startGame(){
    document.querySelector(".endgame").style.display= "none";
    origBoard = Array.from(Array(9).keys());
    for(var i = 0;i < cells.length ; i++){
        cells[i].innerText = '';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', turnClick,false);
    }
}

function turnClick(square){
    turn(square.target.id, huPlayer);
}

function turn(squareId, player){
    origBoard[squareId] = player;
    document.getElementById(squareId).innerText= player;
    let gameWon = checkWin(origBoard, player);
    if (gameWon) gameOver(gameWon);

}

function checkWin(board,player){
    let plays = board.reduce((a,e,i) =>
    (e===player)) ? a.concat(i) : a,[];
    gameWon = null;
    //for (let [index,win] of iWinCombos.entries()){
    //    if(win.every())
    //}

}