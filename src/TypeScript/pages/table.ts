import { handleNotificaiton } from "../notification/notification.js";
import { MainTools, player1, player2, mixedTurn, finalTurnText } from "../tools/tools.js";


export let scoresX: number = 0;
export let scoresO: number = 0;
export let isPlay: boolean = false;


// who's winner?? "X" || "O" || "Draw"
export let winner: "X" | "O" | "Draw"; 


// All list of names the patterns
interface listNamesOfPatterns {
        // horizontal
        horizontalRow1: number,
        horizontalRow2: number,
        horizontalRow3: number,

        // vertical
        verticalRow1: number,
        verticalRow2: number,
        verticalRow3: number,

        // diagonal
        diagonalRow1: number,
        diagonalRow2: number
}

export const patternXNames: listNamesOfPatterns = {
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
}

export const patternsONames: listNamesOfPatterns = {
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
}

// main Function
export const tableLoop = (): void => {

    // Main Table || Main Board of tic-tac-toe GAME
    const mainTable = document.querySelector("#main-table") as HTMLDivElement;

    // Turn Element Txt
    const turnXO = document.querySelector("#TurnXO") as HTMLHeadingElement;

    // Get Dialog element
    const dialogWinner = document.querySelector("#winnerDialog") as HTMLElement;

    // id's element for boxes
    const idBoxElements: any[] = ["box1", "box2", "box3", "box4", "box5", "box6", "box7", "box8", "box9"];

    // patterns in tic-tac-toe
    const patterns: Array<number>[] = [ 
            [ 0, 1, 2 ], // horizontal row 1
            [ 3, 4, 5 ], // horizontal row 2
            [ 6, 7, 8 ], // horizontal row 3

            [ 0, 3, 6 ], // vertical row 1
            [ 1, 4, 7 ], // vertical row 2
            [ 2, 5, 8] , // vertical row 3

            [ 0, 4, 8 ], // diagonal row 1
            [ 2, 4, 6 ]  // diagonal row 2
        ];

    // checking if enabled buttons
    let isEnabled: boolean = true;

    /** 
     * is the user usedTool? 
     * if true return "X" 
     * if it is not return "O" 
     */ 
    let isUsedTool: boolean;

    // Choose a tool connected to isUsedTool boolean.
    const usedTool: string[] = ["X", "O"];
    console.log(mixedTurn)

    // current Turn
    const currentTurn: string = turnXO.innerText = `Turn: _X_ or _O_`


    const allBoxes: NodeList =  document.querySelectorAll(`#main-table div`) as NodeList;
    

    idBoxElements.map((boxElement, index) => {
        boxElement = document.createElement("div");
        const textXO = document.createElement("h1");

        function styleBoxElement(): void {
            boxElement.className = `bg-[#26262b] w-full flex justify-center items-center text-4xl h-full m-auto rounded-xl cursor-pointer hover:bg-[#323239] sm:w-full sm:h-full`
            boxElement.id = idBoxElements[index] //"boxes" 
        }

        function styleTextXO():void {
            textXO.className = `text-4xl`;
            textXO.id = "text-XO"
        }

        const callStyleOfBox: void = styleBoxElement();
        
        const appendBoxElement = mainTable.append(boxElement);
        
        boxElement.addEventListener("click", (): void => {
            if(isPlay) {
                // add a text to the boxes
                boxElement.textContent = isUsedTool ? usedTool[0] || "" : usedTool[1] || "";

                // changing a color of text
                boxElement.className += ` ${isUsedTool  ? "text-[#00f5d4]" : "text-[#7b2cbf]"}`

                // changing a text depends on isUsedTool
                turnXO.textContent = `Turn: ${isUsedTool ? usedTool[1] || "" : usedTool[0] || ""}`

                // changing a isUsedTool boolean
                isUsedTool ? isUsedTool = false : isUsedTool = true;

                // for patterns winning
                patterns.forEach((Arrays, indexOfArrays) => {
                    Arrays.forEach((ArraysValue, indexOfArraysValue) => {

/*-----------------------------------------------------------------------Horizontal Pattern-------------------------------------------------------------------------------*/

                        // HORIZONTAL ROW 1
                        function horizontalRow1Pattern(): void {
                            if (indexOfArrays == 0) {
                                if (index == ArraysValue) {
                                    const valueText = listElementBox[ArraysValue]?.textContent
                                    if (valueText === "X") {
                                        patternXNames.horizontalRow1++;
                                        if (patternXNames.horizontalRow1 == 3) {
                                            scoresX++;
                                            winner = "X";
                                            const callHandleNotificaiton = handleNotificaiton();
                                            setTimeout(() => {
                                                dialogWinner.style.display = "flex"
                                            }, 500);
                                        }
                                    }
                                }
                            };

                            if (indexOfArrays == 0) {
                                if (index == ArraysValue) {
                                    const valueText = listElementBox[ArraysValue]?.textContent
                                    if (valueText === "O") {
                                        patternsONames.horizontalRow1++;
                                        if (patternsONames.horizontalRow1 == 3) {
                                            scoresO++;
                                            winner = "O";
                                            const callHandleNotificaiton = handleNotificaiton();
                                            setTimeout(() => {
                                                dialogWinner.style.display = "flex"
                                            }, 500);
                                        }
                                    }
                                }
                            };
                        };
                        horizontalRow1Pattern()

                        // HORIZONTAL ROW 2
                        function horizontalRow2Pattern(): void {
                            if (indexOfArrays == 1) {
                                if (index == ArraysValue) {
                                    const valueText = listElementBox[ArraysValue]?.textContent
                                    if (valueText === "X") {
                                        patternXNames.horizontalRow2++;
                                        if (patternXNames.horizontalRow2 == 3) {
                                            scoresX++;
                                            winner = "X";
                                            const callHandleNotificaiton = handleNotificaiton();
                                            setTimeout(() => {
                                                dialogWinner.style.display = "flex"
                                            }, 500);
                                        }
                                    }
                                }
                            };

                            if (indexOfArrays == 1) {
                                if (index == ArraysValue) {
                                    const valueText = listElementBox[ArraysValue]?.textContent
                                    if (valueText === "O") {
                                        patternsONames.horizontalRow2++;
                                        if (patternsONames.horizontalRow2 == 3) {
                                            scoresO++;
                                            winner = "O";
                                            const callHandleNotificaiton = handleNotificaiton();
                                            setTimeout(() => {
                                                dialogWinner.style.display = "flex"
                                            }, 500);
                                        }
                                    }
                                }
                            };
                        };

                        horizontalRow2Pattern()
                        
                        // HORIZONTAL ROW 3
                        function horizontalRow3Pattern(): void {
                            if (indexOfArrays == 2) {
                                if (index == ArraysValue) {
                                    const valueText = listElementBox[ArraysValue]?.textContent
                                    if (valueText === "X") {
                                        patternXNames.horizontalRow3++;
                                        if (patternXNames.horizontalRow3 == 3) {
                                            scoresX++;
                                            winner = "X";
                                            const callHandleNotificaiton = handleNotificaiton();
                                            setTimeout(() => {
                                                dialogWinner.style.display = "flex"
                                            }, 500);
                                        }
                                    }
                                }
                            };

                            if (indexOfArrays == 2) {
                                if (index == ArraysValue) {
                                    const valueText = listElementBox[ArraysValue]?.textContent
                                    if (valueText === "O") {
                                        patternsONames.horizontalRow3++;
                                        if (patternsONames.horizontalRow3 == 3) {
                                            scoresO++;
                                            winner = "O";
                                            const callHandleNotificaiton = handleNotificaiton();
                                            setTimeout(() => {
                                                dialogWinner.style.display = "flex"
                                            }, 500);
                                        }
                                    }
                                }
                            };
                        };
                        horizontalRow3Pattern()

/*-----------------------------------------------------------------------Vertical Pattern-------------------------------------------------------------------------------*/

                        // VERTICAL ROW 1
                        function verticalRow1Pattern(): void {
                            if (indexOfArrays == 3) {
                                if (index == ArraysValue) {
                                    const valueText = listElementBox[ArraysValue]?.textContent
                                    if (valueText === "X") {
                                        patternXNames.verticalRow1++;
                                        if (patternXNames.verticalRow1 == 3) {
                                            scoresX++;
                                            winner = "X";
                                            const callHandleNotificaiton = handleNotificaiton();
                                            setTimeout(() => {
                                                dialogWinner.style.display = "flex"
                                            }, 500);
                                        }
                                    }
                                }
                            };

                            if (indexOfArrays == 3) {
                                if (index == ArraysValue) {
                                    const valueText = listElementBox[ArraysValue]?.textContent
                                    if (valueText === "O") {
                                        patternsONames.verticalRow1++;
                                        if (patternsONames.verticalRow1 == 3) {
                                            scoresO++;
                                            winner = "O";
                                            const callHandleNotificaiton = handleNotificaiton();
                                            setTimeout(() => {
                                                dialogWinner.style.display = "flex"
                                            }, 500);
                                        }
                                    }
                                }
                            };
                        };
                        verticalRow1Pattern()

                        // VERTICAL ROW 2
                        function verticalRow2Pattern(): void {
                            if (indexOfArrays == 4) {
                                if (index == ArraysValue) {
                                    const valueText = listElementBox[ArraysValue]?.textContent
                                    if (valueText === "X") {
                                        patternXNames.verticalRow2++;
                                        if (patternXNames.verticalRow2 == 3) {
                                            scoresX++;
                                            winner = "X";
                                            const callHandleNotificaiton = handleNotificaiton();
                                            setTimeout(() => {
                                                dialogWinner.style.display = "flex"
                                            }, 500);
                                        }
                                    }
                                }
                            };

                            if (indexOfArrays == 4) {
                                if (index == ArraysValue) {
                                    const valueText = listElementBox[ArraysValue]?.textContent
                                    if (valueText === "O") {
                                        patternsONames.verticalRow2++;
                                        if (patternsONames.verticalRow2 == 3) {
                                            scoresO++;
                                            winner = "O";
                                            const callHandleNotificaiton = handleNotificaiton();
                                            setTimeout(() => {
                                                dialogWinner.style.display = "flex"
                                            }, 500);
                                        }
                                    }
                                }
                            };
                        };

                        verticalRow2Pattern()

                        // VERTICA; ROW 3
                        function verticalRow3Pattern(): void {
                            if (indexOfArrays == 5) {
                                if (index == ArraysValue) {
                                    const valueText = listElementBox[ArraysValue]?.textContent
                                    if (valueText === "X") {
                                        patternXNames.verticalRow3++;
                                        if (patternXNames.verticalRow3 == 3) {
                                            scoresX++;
                                            winner = "X";
                                            const callHandleNotificaiton = handleNotificaiton();
                                            setTimeout(() => {
                                                dialogWinner.style.display = "flex"
                                            }, 500);
                                        }
                                    }
                                }
                            };

                            if (indexOfArrays == 5) {
                                if (index == ArraysValue) {
                                    const valueText = listElementBox[ArraysValue]?.textContent
                                    if (valueText === "O") {
                                        patternsONames.verticalRow3++;
                                        if (patternsONames.verticalRow3 == 3) {
                                            scoresO++;
                                            winner = "O";
                                            const callHandleNotificaiton = handleNotificaiton();
                                            setTimeout(() => {
                                                dialogWinner.style.display = "flex"
                                            }, 500);
                                        }
                                    }
                                }
                            };
                        };

                        verticalRow3Pattern()

/*-----------------------------------------------------------------------Diagonal Pattern-------------------------------------------------------------------------------*/

                        // DIAGONAL ROW 1
                        function diagonalRow1Patter(): void {
                            if (indexOfArrays == 6) {
                                if (index == ArraysValue) {
                                    const valueText = listElementBox[ArraysValue]?.textContent
                                    if (valueText === "X") {
                                        patternXNames.diagonalRow1++;
                                        if (patternXNames.diagonalRow1 == 3) {
                                            scoresX++;
                                            winner = "X";
                                            const callHandleNotificaiton = handleNotificaiton();
                                            setTimeout(() => {
                                                dialogWinner.style.display = "flex"
                                            }, 500);
                                        };
                                    };
                                };
                            };

                            if (indexOfArrays == 6) {
                                if (index == ArraysValue) {
                                    const valueText = listElementBox[ArraysValue]?.textContent
                                    if (valueText === "O") {
                                        patternsONames.diagonalRow1++;
                                        if (patternsONames.diagonalRow1 == 3) {
                                            scoresO++;
                                            winner = "O";
                                            const callHandleNotificaiton = handleNotificaiton();
                                            setTimeout(() => {
                                                dialogWinner.style.display = "flex"
                                            }, 500);
                                        }
                                    }
                                }
                            };
                        };

                        diagonalRow1Patter()

                        // DIAGONAL ROW 2
                        function diagonalRow2Patter(): void {
                            if (indexOfArrays == 7) {
                                if (index == ArraysValue) {
                                    const valueText = listElementBox[ArraysValue]?.textContent
                                    if (valueText === "X") {
                                        patternXNames.diagonalRow2++;
                                        if (patternXNames.diagonalRow2 == 3) {
                                            scoresX++;
                                            winner = "X";
                                            const callHandleNotificaiton = handleNotificaiton();
                                            setTimeout(() => {
                                                dialogWinner.style.display = "flex"
                                            }, 500);
                                        }
                                    }
                                }
                            };

                            if (indexOfArrays == 7) {
                                if (index == ArraysValue) {
                                    const valueText = listElementBox[ArraysValue]?.textContent
                                    if (valueText === "O") {
                                        patternsONames.diagonalRow2++;
                                        if (patternsONames.diagonalRow2 == 3) {
                                            scoresO++;
                                            winner = "O";
                                            const callHandleNotificaiton = handleNotificaiton();
                                            setTimeout(() => {
                                                dialogWinner.style.display = "flex"
                                            }, 500);
                                        }
                                    }
                                }
                            };
                        };
                        diagonalRow2Patter()
                    });
                })
            };
        });
    })

    // All List of box Elements
    const box1 = document.querySelector("#box1") as HTMLDivElement;
    const box2 = document.querySelector("#box2") as HTMLDivElement;
    const box3 = document.querySelector("#box3") as HTMLDivElement;
    const box4 = document.querySelector("#box4") as HTMLDivElement;
    const box5 = document.querySelector("#box5") as HTMLDivElement;
    const box6 = document.querySelector("#box6") as HTMLDivElement;
    const box7 = document.querySelector("#box7") as HTMLDivElement;
    const box8 = document.querySelector("#box8") as HTMLDivElement;
    const box9 = document.querySelector("#box9") as HTMLDivElement

    // all list of elements boxes with array
    const listElementBox: Element[] = [box1, box2, box3, box4, box5, box6, box7, box8, box9]

    // container buttons
    const containerButtons = document.querySelector("#containerButtons") as HTMLDivElement;

    // id's for buttons
    const idButtons: string[] = ["RestartButton", "PlayButton"];

    // innerText for buttons
    const listNameButtons: string[] = ["Restart", "Play"];

    const toolsDialog = document.querySelector("#toolsDialog") as HTMLElement;

    // loop for buttons
    for (let numberOfLoop = 0; numberOfLoop < idButtons.length; numberOfLoop++) {

        // createElement button
        const buttonElement = document.createElement("button");

        // function style for button
        function styleButtonElement(): void {
            buttonElement.className = "w-30 h-10 bg-[#00F5D4] text-[#121214] text-xl rounded-sm font-bold cursor-pointer md:w-33 hover:bg-[#00D1B5]";
            buttonElement.id = idButtons[numberOfLoop] || "";
            buttonElement.innerText = listNameButtons[numberOfLoop] || ""
        }

        // call funtion style
        const callStyleButton = styleButtonElement();

        // append button
        const appendButtonElement = containerButtons.append(buttonElement);

        switch(numberOfLoop) {
            // addEvenListener "click"
            case 1:
                buttonElement.addEventListener("click", () => {
                    if(isEnabled){
                        toolsDialog.style.display = "flex"
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
                "default"
                break;
        };
    };
}