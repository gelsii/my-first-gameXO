import { valuePatternNames } from "./valuePatternNames";
import { handleNotificaiton } from "../notification/notification";
import { scoresO, scoresX, winner, tieScore } from "./table.js";
// Get Dialog element
const dialogWinner = document.querySelector("#winnerDialog");
/*
export function winnerDoing(loopOfnumber: number, valueText: "X" | "O") {
  winner =
    tieScore.score == 9 &&
    valuePatternNames(loopOfnumber, valueText || "O") != 3
      ? "Draw"
      : valueText;
  valueText === "X" && winner !== "Draw" ? scoresX++ : scoresO++;
  handleNotificaiton();
  setTimeout(() => {
    dialogWinner.style.display = "flex";
  }, 500);
} */
//# sourceMappingURL=winnerDoing.js.map