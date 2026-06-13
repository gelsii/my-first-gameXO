import { handleNotificaiton } from "../notification/notification.js";
import { MainTools, player1, player2, mixedTurn, finalTurnText } from "../tools/tools.js";
export let scoresX = 0;
export let scoresO = 0;
export let isPlay = false;
// who's winner?? "X" || "O" || "Draw"
export let winner;
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
    diagonalRow2: 0
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
    diagonalRow2: 0
};
// main Function
export const tableLoop = () => {
    console.log("hoys");
    // Main Table || Main Board of tic-tac-toe GAME
    const mainTable = document.querySelector("#main-table");
    // Turn Element Txt
    const turnXO = document.querySelector("#TurnXO");
    // Get Dialog element
    const dialogWinner = document.querySelector("#winnerDialog");
    // id's element for boxes
    const idBoxElements = ["box1", "box2", "box3", "box4", "box5", "box6", "box7", "box8", "box9"];
    // patterns in tic-tac-toe
    const patterns = [
        [0, 1, 2], // horizontal row 1
        [3, 4, 5], // horizontal row 2
        [6, 7, 8], // horizontal row 3
        [0, 3, 6], // vertical row 1
        [1, 4, 7], // vertical row 2
        [2, 5, 8], // vertical row 3
        [0, 4, 8], // diagonal row 1
        [2, 4, 6] // diagonal row 2
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
    const currentTurn = turnXO.innerText = `Turn: _X_ or _O_`;
    const allBoxes = document.querySelectorAll(`#main-table div`);
    idBoxElements.map((boxElement, index) => {
        boxElement = document.createElement("div");
        const textXO = document.createElement("h1");
        function styleBoxElement() {
            boxElement.className = `bg-[#26262b] w-full flex justify-center items-center text-4xl h-full m-auto rounded-xl cursor-pointer hover:bg-[#323239] sm:w-full sm:h-full`;
            boxElement.id = idBoxElements[index]; //"boxes" 
        }
        function styleTextXO() {
            textXO.className = `text-4xl`;
            textXO.id = "text-XO";
        }
        const callStyleOfBox = styleBoxElement();
        const appendBoxElement = mainTable.append(boxElement);
        boxElement.addEventListener("click", () => {
            if (isPlay) {
                // add a text to the boxes
                boxElement.textContent = isUsedTool ? usedTool[0] || "" : usedTool[1] || "";
                // changing a color of text
                boxElement.className += ` ${isUsedTool ? "text-[#00f5d4]" : "text-[#7b2cbf]"}`;
                // changing a text depends on isUsedTool
                turnXO.textContent = `Turn: ${isUsedTool ? usedTool[1] || "" : usedTool[0] || ""}`;
                // changing a isUsedTool boolean
                isUsedTool ? isUsedTool = false : isUsedTool = true;
                // for patterns winning
                patterns.forEach((Arrays, indexOfArrays) => {
                    Arrays.forEach((ArraysValue, indexOfArraysValue) => {
                        /*-----------------------------------------------------------------------Horizontal Pattern-------------------------------------------------------------------------------*/
                        // HORIZONTAL ROW 1
                        function horizontalRow1Pattern() {
                            if (indexOfArrays == 0) {
                                if (index == ArraysValue) {
                                    const valueText = listElementBox[ArraysValue]?.textContent;
                                    if (valueText === "X") {
                                        patternXNames.horizontalRow1++;
                                        if (patternXNames.horizontalRow1 == 3) {
                                            scoresX++;
                                            winner = "X";
                                            const callHandleNotificaiton = handleNotificaiton();
                                            setTimeout(() => {
                                                dialogWinner.style.display = "flex";
                                            }, 500);
                                        }
                                    }
                                }
                            }
                            ;
                            if (indexOfArrays == 0) {
                                if (index == ArraysValue) {
                                    const valueText = listElementBox[ArraysValue]?.textContent;
                                    if (valueText === "O") {
                                        patternsONames.horizontalRow1++;
                                        if (patternsONames.horizontalRow1 == 3) {
                                            scoresO++;
                                            winner = "O";
                                            const callHandleNotificaiton = handleNotificaiton();
                                            setTimeout(() => {
                                                dialogWinner.style.display = "flex";
                                            }, 500);
                                        }
                                    }
                                }
                            }
                            ;
                        }
                        ;
                        horizontalRow1Pattern();
                        // HORIZONTAL ROW 2
                        function horizontalRow2Pattern() {
                            if (indexOfArrays == 1) {
                                if (index == ArraysValue) {
                                    const valueText = listElementBox[ArraysValue]?.textContent;
                                    if (valueText === "X") {
                                        patternXNames.horizontalRow2++;
                                        if (patternXNames.horizontalRow2 == 3) {
                                            scoresX++;
                                            winner = "X";
                                            const callHandleNotificaiton = handleNotificaiton();
                                            setTimeout(() => {
                                                dialogWinner.style.display = "flex";
                                            }, 500);
                                        }
                                    }
                                }
                            }
                            ;
                            if (indexOfArrays == 1) {
                                if (index == ArraysValue) {
                                    const valueText = listElementBox[ArraysValue]?.textContent;
                                    if (valueText === "O") {
                                        patternsONames.horizontalRow2++;
                                        if (patternsONames.horizontalRow2 == 3) {
                                            scoresO++;
                                            winner = "O";
                                            const callHandleNotificaiton = handleNotificaiton();
                                            setTimeout(() => {
                                                dialogWinner.style.display = "flex";
                                            }, 500);
                                        }
                                    }
                                }
                            }
                            ;
                        }
                        ;
                        horizontalRow2Pattern();
                        // HORIZONTAL ROW 3
                        function horizontalRow3Pattern() {
                            if (indexOfArrays == 2) {
                                if (index == ArraysValue) {
                                    const valueText = listElementBox[ArraysValue]?.textContent;
                                    if (valueText === "X") {
                                        patternXNames.horizontalRow3++;
                                        if (patternXNames.horizontalRow3 == 3) {
                                            scoresX++;
                                            winner = "X";
                                            const callHandleNotificaiton = handleNotificaiton();
                                            setTimeout(() => {
                                                dialogWinner.style.display = "flex";
                                            }, 500);
                                        }
                                    }
                                }
                            }
                            ;
                            if (indexOfArrays == 2) {
                                if (index == ArraysValue) {
                                    const valueText = listElementBox[ArraysValue]?.textContent;
                                    if (valueText === "O") {
                                        patternsONames.horizontalRow3++;
                                        if (patternsONames.horizontalRow3 == 3) {
                                            scoresO++;
                                            winner = "O";
                                            const callHandleNotificaiton = handleNotificaiton();
                                            setTimeout(() => {
                                                dialogWinner.style.display = "flex";
                                            }, 500);
                                        }
                                    }
                                }
                            }
                            ;
                        }
                        ;
                        horizontalRow3Pattern();
                        /*-----------------------------------------------------------------------Vertical Pattern-------------------------------------------------------------------------------*/
                        // VERTICAL ROW 1
                        function verticalRow1Pattern() {
                            if (indexOfArrays == 3) {
                                if (index == ArraysValue) {
                                    const valueText = listElementBox[ArraysValue]?.textContent;
                                    if (valueText === "X") {
                                        patternXNames.verticalRow1++;
                                        if (patternXNames.verticalRow1 == 3) {
                                            scoresX++;
                                            winner = "X";
                                            const callHandleNotificaiton = handleNotificaiton();
                                            setTimeout(() => {
                                                dialogWinner.style.display = "flex";
                                            }, 500);
                                        }
                                    }
                                }
                            }
                            ;
                            if (indexOfArrays == 3) {
                                if (index == ArraysValue) {
                                    const valueText = listElementBox[ArraysValue]?.textContent;
                                    if (valueText === "O") {
                                        patternsONames.verticalRow1++;
                                        if (patternsONames.verticalRow1 == 3) {
                                            scoresO++;
                                            winner = "O";
                                            const callHandleNotificaiton = handleNotificaiton();
                                            setTimeout(() => {
                                                dialogWinner.style.display = "flex";
                                            }, 500);
                                        }
                                    }
                                }
                            }
                            ;
                        }
                        ;
                        verticalRow1Pattern();
                        // VERTICAL ROW 2
                        function verticalRow2Pattern() {
                            if (indexOfArrays == 4) {
                                if (index == ArraysValue) {
                                    const valueText = listElementBox[ArraysValue]?.textContent;
                                    if (valueText === "X") {
                                        patternXNames.verticalRow2++;
                                        if (patternXNames.verticalRow2 == 3) {
                                            scoresX++;
                                            winner = "X";
                                            const callHandleNotificaiton = handleNotificaiton();
                                            setTimeout(() => {
                                                dialogWinner.style.display = "flex";
                                            }, 500);
                                        }
                                    }
                                }
                            }
                            ;
                            if (indexOfArrays == 4) {
                                if (index == ArraysValue) {
                                    const valueText = listElementBox[ArraysValue]?.textContent;
                                    if (valueText === "O") {
                                        patternsONames.verticalRow2++;
                                        if (patternsONames.verticalRow2 == 3) {
                                            scoresO++;
                                            winner = "O";
                                            const callHandleNotificaiton = handleNotificaiton();
                                            setTimeout(() => {
                                                dialogWinner.style.display = "flex";
                                            }, 500);
                                        }
                                    }
                                }
                            }
                            ;
                        }
                        ;
                        verticalRow2Pattern();
                        // VERTICA; ROW 3
                        function verticalRow3Pattern() {
                            if (indexOfArrays == 5) {
                                if (index == ArraysValue) {
                                    const valueText = listElementBox[ArraysValue]?.textContent;
                                    if (valueText === "X") {
                                        patternXNames.verticalRow3++;
                                        if (patternXNames.verticalRow3 == 3) {
                                            scoresX++;
                                            winner = "X";
                                            const callHandleNotificaiton = handleNotificaiton();
                                            setTimeout(() => {
                                                dialogWinner.style.display = "flex";
                                            }, 500);
                                        }
                                    }
                                }
                            }
                            ;
                            if (indexOfArrays == 5) {
                                if (index == ArraysValue) {
                                    const valueText = listElementBox[ArraysValue]?.textContent;
                                    if (valueText === "O") {
                                        patternsONames.verticalRow3++;
                                        if (patternsONames.verticalRow3 == 3) {
                                            scoresO++;
                                            winner = "O";
                                            const callHandleNotificaiton = handleNotificaiton();
                                            setTimeout(() => {
                                                dialogWinner.style.display = "flex";
                                            }, 500);
                                        }
                                    }
                                }
                            }
                            ;
                        }
                        ;
                        verticalRow3Pattern();
                        /*-----------------------------------------------------------------------Diagonal Pattern-------------------------------------------------------------------------------*/
                        // DIAGONAL ROW 1
                        function diagonalRow1Patter() {
                            if (indexOfArrays == 6) {
                                if (index == ArraysValue) {
                                    const valueText = listElementBox[ArraysValue]?.textContent;
                                    if (valueText === "X") {
                                        patternXNames.diagonalRow1++;
                                        if (patternXNames.diagonalRow1 == 3) {
                                            scoresX++;
                                            winner = "X";
                                            const callHandleNotificaiton = handleNotificaiton();
                                            setTimeout(() => {
                                                dialogWinner.style.display = "flex";
                                            }, 500);
                                        }
                                        ;
                                    }
                                    ;
                                }
                                ;
                            }
                            ;
                            if (indexOfArrays == 6) {
                                if (index == ArraysValue) {
                                    const valueText = listElementBox[ArraysValue]?.textContent;
                                    if (valueText === "O") {
                                        patternsONames.diagonalRow1++;
                                        if (patternsONames.diagonalRow1 == 3) {
                                            scoresO++;
                                            winner = "O";
                                            const callHandleNotificaiton = handleNotificaiton();
                                            setTimeout(() => {
                                                dialogWinner.style.display = "flex";
                                            }, 500);
                                        }
                                    }
                                }
                            }
                            ;
                        }
                        ;
                        diagonalRow1Patter();
                        // DIAGONAL ROW 2
                        function diagonalRow2Patter() {
                            if (indexOfArrays == 7) {
                                if (index == ArraysValue) {
                                    const valueText = listElementBox[ArraysValue]?.textContent;
                                    if (valueText === "X") {
                                        patternXNames.diagonalRow2++;
                                        if (patternXNames.diagonalRow2 == 3) {
                                            scoresX++;
                                            winner = "X";
                                            const callHandleNotificaiton = handleNotificaiton();
                                            setTimeout(() => {
                                                dialogWinner.style.display = "flex";
                                            }, 500);
                                        }
                                    }
                                }
                            }
                            ;
                            if (indexOfArrays == 7) {
                                if (index == ArraysValue) {
                                    const valueText = listElementBox[ArraysValue]?.textContent;
                                    if (valueText === "O") {
                                        patternsONames.diagonalRow2++;
                                        if (patternsONames.diagonalRow2 == 3) {
                                            scoresO++;
                                            winner = "O";
                                            const callHandleNotificaiton = handleNotificaiton();
                                            setTimeout(() => {
                                                dialogWinner.style.display = "flex";
                                            }, 500);
                                        }
                                    }
                                }
                            }
                            ;
                        }
                        ;
                        diagonalRow2Patter();
                    });
                });
            }
            ;
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
    const listElementBox = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
    // container buttons
    const containerButtons = document.querySelector("#containerButtons");
    // id's for buttons
    const idButtons = ["RestartButton", "PlayButton"];
    // innerText for buttons
    const listNameButtons = ["Restart", "Play"];
    const toolsDialog = document.querySelector("#toolsDialog");
    // loop for buttons
    for (let numberOfLoop = 0; numberOfLoop < idButtons.length; numberOfLoop++) {
        // createElement button
        const buttonElement = document.createElement("button");
        // function style for button
        function styleButtonElement() {
            buttonElement.className = "w-30 h-10 bg-[#00F5D4] text-[#121214] text-xl rounded-sm font-bold cursor-pointer md:w-33 hover:bg-[#00D1B5]";
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
        ;
    }
    ;
};
//# sourceMappingURL=table.js.map