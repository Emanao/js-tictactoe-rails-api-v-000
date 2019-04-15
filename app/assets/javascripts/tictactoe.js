// Code your JavaScript / jQuery solution here
var cells = $("table tr td");
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

function player() { return (turn % 2) ? "O" : "X"; }

function updateState(htmlTd) { return (htmlTd.innerHTML = player()) }

function setMessage(message) { return $("div#message").html(message) }

function checkWinner() {
    let winnerCombIdx = WINNING_COMBINATIONS.find((winning_row) =>
        ((winning_row.every((index) => (cells[index].innerHTML === 'X') ||
            winning_row.every((index) => cells[index].innerHTML === 'O')))));

    if (!!winnerCombIdx) {
        setMessage(`Player ${cells[winnerCombIdx[0]].innerHTML} Won!`)
    }
    return !!winnerCombIdx;
}

function doTurn(htmlTd) {
    updateState(htmlTd);
    turn++;
    if (checkWinner()) {
        resetBoard();
    } else if (turn === 9) {
        setMessage("Tie game.");
        resetBoard();
    }
}

function resetBoard() {
    turn = 0;
    Array.from(cells).map(s => s.innerHTML = "")
}

function attachListeners() {

}