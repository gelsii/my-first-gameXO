import { handleNotificaiton } from "../notification/notification.js";
import {
  MainTools,
  player1,
  player2,
  mixedTurn,
  finalTurnText,
} from "../tools/tools.js";
import { valuePatternNames } from "./valuePatternNames.js";
import { returnPatternXNames } from "./returnPatternXNames.js";

export let scoresX: number = 0;
export let scoresO: number = 0;
export let isPlay: boolean = false;

// who's winner?? "X" || "O" || "Draw"
export let winner: string;

export let tieScore: { score: number } = { score: 0 };

export let isDraw: { draw: boolean } = { draw: false };

// All list of names the patterns
interface listNamesOfPatterns {
  // horizontal
  horizontalRow1: number;
  horizontalRow2: number;
  horizontalRow3: number;

  // vertical
  verticalRow1: number;
  verticalRow2: number;
  verticalRow3: number;

  // diagonal
  diagonalRow1: number;
  diagonalRow2: number;
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
  diagonalRow2: 0,
};

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
  diagonalRow2: 0,
};

// main Function
export const tableLoop = (): void => {
  // Main Table || Main Board of tic-tac-toe GAME
  const mainTable = document.querySelector("#main-table") as HTMLDivElement;

  // Turn Element Txt
  const turnXO = document.querySelector("#TurnXO") as HTMLHeadingElement;

  const dialogWinner = document.querySelector("#winnerDialog") as HTMLElement;

  // id's element for boxes
  const idBoxElements: any[] = [
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
  const patterns: Array<number>[] = [
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
  let isEnabled: boolean = true;

  /**
   * is the user usedTool?
   * if true return "X"
   * if it is not return "O"
   */
  let isUsedTool: boolean;

  type chooseTool = "X" | "O";

  // Choose a tool connected to isUsedTool boolean.
  const usedTool: string[] = ["X", "O"];

  // current Turn
  const currentTurn: string = (turnXO.innerText = `Turn: _X_ or _O_`);

  const allBoxes: NodeList = document.querySelectorAll(
    `#main-table div`,
  ) as NodeList;

  idBoxElements.map((boxElement, index) => {
    boxElement = document.createElement("div");

    function styleBoxElement(): void {
      boxElement.className = `bg-[#26262b] w-18 flex justify-center items-center text-4xl h-18 m-auto rounded-xl cursor-pointer hover:bg-[#323239] 2xs:w-22 2xs:h-23 xs:w-25 xs:h-25 sm:w-30 sm:h-30 sm:text-5xl`;
      boxElement.id = idBoxElements[index]; //"boxes"
    }

    const callStyleOfBox: void = styleBoxElement();

    const appendBoxElement = mainTable.append(boxElement);

    boxElement.addEventListener("click", (): void => {
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

        // patterns winning
        patterns.forEach((Arrays, indexOfArrays) => {
          Arrays.forEach((ArraysValue, indexOfArraysValue) => {
            /*-----------------------------------------------------------------------Pattern-------------------------------------------------------------------------------*/

            for (
              let loopOfnumber = 0;
              loopOfnumber < patterns.length;
              loopOfnumber++
            ) {
              function winnerGame(): void {
                const valueText = listElementBox[ArraysValue]?.textContent || "X"

                function showDialog(): void {
                  handleNotificaiton();
                  setTimeout(() => {
                    dialogWinner.style.display = "flex";
                  }, 500);
                }

                function isSameIndexToLoop(indexArray: number, numberLoop: number, ArrayValue: number, indexs: number, valueText: string, ): void {
                  if(indexArray == numberLoop && indexs == ArrayValue) {
                    checkValueOfText(valueText);
                  }
                }

                function checkValueOfText(boxesText: string): void {
                  if(valueText === boxesText) {
                    returnPatternXNames(loopOfnumber, boxesText);
                    showWinner(valuePatternNames, loopOfnumber, valueText || "X");
                  }
                }

                function showWinner(patternsValue: Function, loopNumber: number, valueOfText: string ): void {
                  if(patternsValue(loopNumber, valueOfText) == 3) {
                      isDraw.draw = false;
                      winner = valueOfText;
                      valueText === "X" ? scoresX++ : scoresO++;
                      showDialog();
                  }
                }

                function isDrawGame(checkDraw: boolean, tieScore: number): boolean {
                  return checkDraw =  tieScore == 9 ? true : false;
                }

                function showDraw(tieScore: number): void {
                  if(isDrawGame(isDraw.draw, tieScore)) {
                    winner = "Draw";
                    showDialog();
                  }
                }

                isSameIndexToLoop(indexOfArrays, loopOfnumber, ArraysValue, index, valueText || "X");
                showDraw(tieScore.score);
              }
              const CalWinnerGame = winnerGame();
            }
          });
        });
      }
    });
  });

  // All List of box Elements
  const box1 = document.querySelector("#box1") as HTMLDivElement;
  const box2 = document.querySelector("#box2") as HTMLDivElement;
  const box3 = document.querySelector("#box3") as HTMLDivElement;
  const box4 = document.querySelector("#box4") as HTMLDivElement;
  const box5 = document.querySelector("#box5") as HTMLDivElement;
  const box6 = document.querySelector("#box6") as HTMLDivElement;
  const box7 = document.querySelector("#box7") as HTMLDivElement;
  const box8 = document.querySelector("#box8") as HTMLDivElement;
  const box9 = document.querySelector("#box9") as HTMLDivElement;

  // all list of elements boxes with array
  const listElementBox: Element[] = [
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
  const containerButtons = document.querySelector(
    "#containerButtons",
  ) as HTMLDivElement;

  // id's buttons
  const idButtons: string[] = ["RestartButton", "PlayButton"];

  // innerText buttons
  const listNameButtons: string[] = ["Restart", "Play"];

  const toolsDialog = document.querySelector("#toolsDialog") as HTMLElement;

  // loop for buttons
  for (let numberOfLoop = 0; numberOfLoop < idButtons.length; numberOfLoop++) {
    // element button
    const buttonElement = document.createElement("button");

    // function style
    function styleButtonElement(): void {
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
