import { handleNotificaiton } from "../notification/notification.js";
import { MainTools, player1, player2, mixedTurn, finalTurnText, } from "../tools/tools.js";
export let scoresX = 0;
export let scoresO = 0;
export let isPlay = false;
// who's winner?? "X" || "O" || "Draw"
export let winner;
export let tieScore = { score: 0 };
export let isDrawGame = { draw: false };
export const patternXNames = {
    // horizontal row
    horizontalRow1: 0,
    horizontalRow2: 0,
    horizontalRow3: 0,
    // vertical row
    verticalRow1: 0,
    verticalRow2: 0,
    verticalRow3: 0,
    // diagonal row
    diagonalRow1: 0,
    diagonalRow2: 0,
};
export const patternsONames = {
    // horizontal row
    horizontalRow1: 0,
    horizontalRow2: 0,
    horizontalRow3: 0,
    // vertical row
    verticalRow1: 0,
    verticalRow2: 0,
    verticalRow3: 0,
    // diagonal row
    diagonalRow1: 0,
    diagonalRow2: 0,
};
// main Function
export const tableLoop = () => {
    // Main Table || Main Board of tic-tac-toe GAME
    const mainTable = document.querySelector("#main-table");
    // Turn Element Txt
    const turnXO = document.querySelector("#TurnXO");
    // Get Dialog element
    const dialogWinner = document.querySelector("#winnerDialog");
    // id's element for boxes
    const idBoxElements = [
        "box1",
        "box2",
        "box3",
        "box4",
        "box5",
        "box6",
        "box7",
        "box8",
        "box9",
    ];
    // patterns in tic-tac-toe
    const patterns = [
        [0, 1, 2], // horizontal row 1
        [3, 4, 5], // horizontal row 2
        [6, 7, 8], // horizontal row 3
        [0, 3, 6], // vertical row 1
        [1, 4, 7], // vertical row 2
        [2, 5, 8], // vertical row 3
        [0, 4, 8], // diagonal row 1
        [2, 4, 6], // diagonal row 2
        [0, 1, 2, 3, 4, 5, 6, 7, 8], // tie Score
    ];
    // checking if enabled buttons
    let isEnabled = true;
    /**
     * is the user usedTool?
     * if true return "X"
     * if it is not return "O"
     */
    let isUsedTool;
    // Choose a tool connected to isUsedTool boolean.
    const usedTool = ["X", "O"];
    console.log(mixedTurn);
    // current Turn
    const currentTurn = (turnXO.innerText = `Turn: _X_ or _O_`);
    const allBoxes = document.querySelectorAll(`#main-table div`);
    idBoxElements.map((boxElement, index) => {
        boxElement = document.createElement("div");
        function styleBoxElement() {
            boxElement.className = `bg-[#26262b] w-18 flex justify-center items-center text-4xl h-18 m-auto rounded-xl cursor-pointer hover:bg-[#323239] 2xs:w-22 2xs:h-23 xs:w-25 xs:h-25 sm:w-30 sm:h-30 sm:text-5xl`;
            boxElement.id = idBoxElements[index]; //"boxes"
        }
        const callStyleOfBox = styleBoxElement();
        const appendBoxElement = mainTable.append(boxElement);
        boxElement.addEventListener("click", () => {
            if (isPlay) {
                // add a text to the boxes
                boxElement.textContent = isUsedTool
                    ? usedTool[0] || ""
                    : usedTool[1] || "";
                // changing a color of text
                boxElement.className += ` ${isUsedTool ? "text-[#00f5d4]" : "text-[#7b2cbf]"}`;
                // changing a text depends on isUsedTool
                turnXO.textContent = `Turn: ${isUsedTool ? usedTool[1] || "" : usedTool[0] || ""}`;
                // changing a isUsedTool boolean
                isUsedTool ? (isUsedTool = false) : (isUsedTool = true);
                function valuePatternNames(number, XO) {
                    switch (number) {
                        case 0:
                            XO
                                ? (number = patternXNames.horizontalRow1)
                                : (number = patternsONames.horizontalRow1);
                            break;
                        case 1:
                            XO
                                ? (number = patternXNames.horizontalRow2)
                                : (number = patternsONames.horizontalRow2);
                            break;
                        case 2:
                            XO
                                ? (number = patternXNames.horizontalRow3)
                                : (number = patternsONames.horizontalRow3);
                            break;
                        case 3:
                            XO
                                ? (number = patternXNames.verticalRow1)
                                : (number = patternsONames.verticalRow1);
                            break;
                        case 4:
                            XO
                                ? (number = patternXNames.verticalRow2)
                                : (number = patternsONames.verticalRow2);
                            break;
                        case 5:
                            XO
                                ? (number = patternXNames.verticalRow3)
                                : (number = patternsONames.verticalRow3);
                            break;
                        case 6:
                            XO
                                ? (number = patternXNames.diagonalRow1)
                                : (number = patternsONames.diagonalRow1);
                            break;
                        case 7:
                            XO
                                ? (number = patternXNames.diagonalRow2)
                                : (number = patternsONames.diagonalRow2);
                            break;
                        default:
                            "walang default";
                            break;
                    }
                    return number || 0;
                }
                // patterns winning
                patterns.forEach((Arrays, indexOfArrays) => {
                    Arrays.forEach((ArraysValue, indexOfArraysValue) => {
                        /*-----------------------------------------------------------------------Pattern-------------------------------------------------------------------------------*/
                        for (let loopOfnumber = 0; loopOfnumber < patterns.length; loopOfnumber++) {
                            function mainPattern() {
                                if (indexOfArrays == loopOfnumber) {
                                    if (index == ArraysValue) {
                                        const valueText = listElementBox[ArraysValue]?.textContent;
                                        if (valueText === "X") {
                                            switch (loopOfnumber) {
                                                case 0:
                                                    patternXNames.horizontalRow1++;
                                                    break;
                                                case 1:
                                                    patternXNames.horizontalRow2++;
                                                    break;
                                                case 2:
                                                    patternXNames.horizontalRow3++;
                                                    break;
                                                case 3:
                                                    patternXNames.verticalRow1++;
                                                    break;
                                                case 4:
                                                    patternXNames.verticalRow2++;
                                                    break;
                                                case 5:
                                                    patternXNames.verticalRow3++;
                                                    break;
                                                case 6:
                                                    patternXNames.diagonalRow1++;
                                                    break;
                                                case 7:
                                                    patternXNames.diagonalRow2++;
                                                    break;
                                                case 8:
                                                    tieScore.score++;
                                                    break;
                                                default:
                                                    "walang default";
                                                    break;
                                            }
                                            if (valuePatternNames(loopOfnumber, true) == 3) {
                                                scoresX++;
                                                winner = "X";
                                                isDrawGame.draw = true;
                                                const callHandleNotificaiton = handleNotificaiton();
                                                setTimeout(() => {
                                                    dialogWinner.style.display = "flex";
                                                }, 500);
                                            }
                                        }
                                        else {
                                            if (valueText === "O") {
                                                switch (loopOfnumber) {
                                                    case 0:
                                                        patternsONames.horizontalRow1++;
                                                        break;
                                                    case 1:
                                                        patternsONames.horizontalRow2++;
                                                        break;
                                                    case 2:
                                                        patternsONames.horizontalRow3++;
                                                        break;
                                                    case 3:
                                                        patternsONames.verticalRow1++;
                                                        break;
                                                    case 4:
                                                        patternsONames.verticalRow2++;
                                                        break;
                                                    case 5:
                                                        patternsONames.verticalRow3++;
                                                        break;
                                                    case 6:
                                                        patternsONames.diagonalRow1++;
                                                        break;
                                                    case 7:
                                                        patternsONames.diagonalRow2++;
                                                        break;
                                                    case 8:
                                                        tieScore.score++;
                                                        break;
                                                    default:
                                                        "walang default";
                                                        break;
                                                }
                                                if (valuePatternNames(loopOfnumber, false) == 3) {
                                                    scoresO++;
                                                    winner = "O";
                                                    isDrawGame.draw = true;
                                                    const callHandleNotificaiton = handleNotificaiton();
                                                    setTimeout(() => {
                                                        dialogWinner.style.display = "flex";
                                                    }, 500);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            const callMainPattern = mainPattern();
                        }
                        function tiePattern() {
                            if (indexOfArrays == 8) {
                                if (index == ArraysValue) {
                                    if (boxElement.innerText === usedTool[0] ||
                                        boxElement.innerText === usedTool[1]) {
                                        if (tieScore.score == 9) {
                                            winner = "Draw";
                                            if (isDrawGame.draw && winner === "Draw") {
                                                const callHandleNotificaiton = handleNotificaiton();
                                                setTimeout(() => {
                                                    dialogWinner.style.display = "flex";
                                                }, 500);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        tiePattern();
                    });
                });
            }
            console.log(patternsONames.diagonalRow2);
        });
    });
    // All List of box Elements
    const box1 = document.querySelector("#box1");
    const box2 = document.querySelector("#box2");
    const box3 = document.querySelector("#box3");
    const box4 = document.querySelector("#box4");
    const box5 = document.querySelector("#box5");
    const box6 = document.querySelector("#box6");
    const box7 = document.querySelector("#box7");
    const box8 = document.querySelector("#box8");
    const box9 = document.querySelector("#box9");
    // all list of elements boxes with array
    const listElementBox = [
        box1,
        box2,
        box3,
        box4,
        box5,
        box6,
        box7,
        box8,
        box9,
    ];
    // container buttons
    const containerButtons = document.querySelector("#containerButtons");
    // id's buttons
    const idButtons = ["RestartButton", "PlayButton"];
    // innerText buttons
    const listNameButtons = ["Restart", "Play"];
    const toolsDialog = document.querySelector("#toolsDialog");
    // loop for buttons
    for (let numberOfLoop = 0; numberOfLoop < idButtons.length; numberOfLoop++) {
        // element button
        const buttonElement = document.createElement("button");
        // function style
        function styleButtonElement() {
            buttonElement.className =
                "w-30 h-10 bg-[#00F5D4] text-[#121214] text-xl rounded-sm font-bold cursor-pointer md:w-33 hover:bg-[#00D1B5]";
            buttonElement.id = idButtons[numberOfLoop] || "";
            buttonElement.innerText = listNameButtons[numberOfLoop] || "";
        }
        // call funtion style
        const callStyleButton = styleButtonElement();
        // append button
        const appendButtonElement = containerButtons.append(buttonElement);
        switch (numberOfLoop) {
            // addEvenListener "click"
            case 1:
                buttonElement.addEventListener("click", () => {
                    if (isEnabled) {
                        toolsDialog.style.display = "flex";
                        const callMainTools = MainTools();
                        setTimeout(() => {
                            isUsedTool = mixedTurn;
                            isEnabled = false;
                            isPlay = true;
                            turnXO.textContent = `Turn: ${finalTurnText}`;
                        }, 5100);
                    }
                });
                break;
            default:
                "default";
                break;
        }
    }
};
//# sourceMappingURL=table.js.map