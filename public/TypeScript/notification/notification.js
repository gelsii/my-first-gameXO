import { scoresO, scoresX, isPlay, winner, patternXNames, patternsONames, tieScore, isDraw, } from "../tables/table.js";
// Update Scores of players
const updateTextScores = () => {
    const scoresDialog = document.querySelector("#scoresDialog");
    scoresDialog.innerText = `Scores: X-${scoresX} ---- O-${scoresO}`;
};
/**
 * changeTextWinner function name
 * change the text of winnerTxt
 * then if the winner is X change InnerText of the element a message Wins
 * and if the O is wins change InnerText of the element a message Wins
 */
const changeTextWinner = () => {
    const winnerText = document.querySelector("#winnerTxt");
    switch (winner) {
        case "X":
            winnerText.innerText = "X is Win --- O is Lose";
            winnerText.style.fontSize = "2.25rem";
            break;
        case "O":
            winnerText.innerText = "X is Lose --- O is Win";
            winnerText.style.fontSize = "2.25rem";
            break;
        case "Draw":
            winnerText.innerText = "Draw a Game";
            winnerText.style.fontSize = "2.5rem";
            break;
        default:
            winnerText.innerText = "";
            break;
    }
};
/**
 * chaging a text in dialog continue
 */
const changeTextContinue = () => {
    const textContinueDialog = document.querySelector("#textContinueDialog");
    switch (winner) {
        case "X":
            textContinueDialog.innerText =
                "The game has ended. X wins and O loses this round. Would you like to play again and see if the result changes?";
            break;
        case "O":
            textContinueDialog.innerText =
                "The game has ended. O wins and X loses this round. Would you like to play again and challenge your opponent once more?";
            break;
        case "Draw":
            textContinueDialog.innerText =
                "The game has ended in a draw. Neither X nor O was able to secure a victory. Would you like to start a new round and try again?";
            break;
        default:
            textContinueDialog.innerText = "";
            break;
    }
};
/**
 * handle the close button
 * then refresh the site
 */
const handleClosing = () => {
    const closeGame = document.querySelector("#closeGame");
    // main Container of the continuePop.html
    const continueDialog = document.querySelector("#continueDialog");
    closeGame.addEventListener("click", () => {
        continueDialog.style.display = "none";
        location.reload();
    });
};
/**
 * handle a button Play Again
 * remove the all text in the boxes
 * then make the patternsNames values is 0
 */
const handlePlayAgain = () => {
    // get the button element
    const playAgain = document.querySelector("#playAgain");
    playAgain.addEventListener("click", () => {
        // get all boxes element
        const boxes = document.querySelectorAll("#main-table div");
        boxes.forEach((element) => {
            element.textContent = "";
        });
        // get the main Element of winnerPop
        const continueDialog = document.querySelector("#continueDialog");
        // hide the element
        continueDialog.style.display = "none";
        /**
         * all patterns name in object is reset to 0
         */
        const resetPatternsNumbers = 0;
        function horizontal() {
            // X tools
            patternXNames.horizontalRow1 = resetPatternsNumbers; // horizontal row 1
            patternXNames.horizontalRow2 = resetPatternsNumbers; // horizontal row 2
            patternXNames.horizontalRow3 = resetPatternsNumbers; // horizontal row 3
            // O tools
            patternsONames.horizontalRow1 = resetPatternsNumbers; // horizontal row 1
            patternsONames.horizontalRow2 = resetPatternsNumbers; // horizontal row 2
            patternsONames.horizontalRow3 = resetPatternsNumbers; // horizontal row 3
        }
        function vertical() {
            // X tools
            patternXNames.verticalRow1 = resetPatternsNumbers; // vertical row 1
            patternXNames.verticalRow2 = resetPatternsNumbers; // vertical row 2
            patternXNames.verticalRow3 = resetPatternsNumbers; // vertical row 3
            // O tools
            patternsONames.verticalRow1 = resetPatternsNumbers; // vertical row 1
            patternsONames.verticalRow2 = resetPatternsNumbers; // vertical row 2
            patternsONames.verticalRow3 = resetPatternsNumbers; // vertical row 3
        }
        function diagonal() {
            // X tools
            patternXNames.diagonalRow1 = resetPatternsNumbers; // diagonal row 1
            patternXNames.diagonalRow2 = resetPatternsNumbers; // diagonal row 2
            // X tools
            patternsONames.diagonalRow1 = resetPatternsNumbers; // diagonal row 1
            patternsONames.diagonalRow2 = resetPatternsNumbers; // diagonal row 2
        }
        function tie() {
            tieScore.score = 0;
        }
        const backToFalse = (isDrawGame.draw = false);
        // call all function of pattern name changes
        const callHorizontal = horizontal();
        const callVertical = vertical();
        const callDiagonal = diagonal();
        const callTie = tie();
    });
};
// handle the notification
export const handleNotificaiton = () => {
    const winnerDialog = document.querySelector("#winnerDialog");
    const exitDialogWinner = document.querySelector("#exitDialogWinner");
    // call all the function
    const callChangeTextWinner = changeTextWinner();
    const callUpdateTextScores = updateTextScores();
    const callHandlePlayAgain = handlePlayAgain();
    const callChangeTextContinue = changeTextContinue();
    /**
     * eventListener "click" for open the continuePop
     * continues game?
     * if true show another dialog
     * if not exit and restart the game
     */
    exitDialogWinner.addEventListener("click", () => {
        winnerDialog.style.display = "none";
        // main Container of the continuePop.html
        const continueDialog = document.querySelector("#continueDialog");
        // show the element
        continueDialog.style.display = "flex";
        const callHandleClose = handleClosing();
    });
};
//# sourceMappingURL=notification.js.map