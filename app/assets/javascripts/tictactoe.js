// Code your JavaScript / jQuery solution here
var turn = 0;
var WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function player() {
    const token = (turn % 2) ? "O" : "X";
    nextTurn();
    return token;
}

function nextTurn() { return ++turn }

function updateState(htmlTd) { return htmlTd.innerHTML = player() }

function setMessage(message) { return $("div#message").html(message) }

function checkWinner() {
    let cells = $("table tr td");
    let winnerCombIdx = WINNING_COMBINATIONS.find((winning_row) => {
        return winning_row.every((index) => (cells[index].textContent === 'X') || winning_row.every((index) => cells[index].textContent === 'O'))
    });

    if (!!winnerCombIdx) { setMessage(`Player ${cells[winnerCombIdx[0]].textContent} Won!`) }
    return !!winnerCombIdx;
}

function doTurn() {

}

function attachListeners() {

}