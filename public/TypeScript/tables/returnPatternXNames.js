import { patternXNames, patternsONames, tieScore } from "./table.js";
export const returnPatternXNames = (patternsNumber, isXO) => {
    switch (patternsNumber) {
        case 0:
            patternsNumber =
                isXO === "X"
                    ? patternXNames.horizontalRow1++
                    : patternsONames.horizontalRow1++;
            break;
        case 1:
            patternsNumber =
                isXO === "X"
                    ? patternXNames.horizontalRow2++
                    : patternsONames.horizontalRow2++;
            break;
        case 2:
            patternsNumber =
                isXO === "X"
                    ? patternXNames.horizontalRow3++
                    : patternsONames.horizontalRow3++;
            break;
        case 3:
            patternsNumber =
                isXO === "X"
                    ? patternXNames.verticalRow1++
                    : patternsONames.verticalRow1++;
            break;
        case 4:
            patternsNumber =
                isXO === "X"
                    ? patternXNames.verticalRow2++
                    : patternsONames.verticalRow2++;
            break;
        case 5:
            patternsNumber =
                isXO === "X"
                    ? patternXNames.verticalRow3++
                    : patternsONames.verticalRow3++;
            break;
        case 6:
            patternsNumber =
                isXO === "X"
                    ? patternXNames.diagonalRow1++
                    : patternsONames.diagonalRow1++;
            break;
        case 7:
            patternsNumber =
                isXO === "X"
                    ? patternXNames.diagonalRow2++
                    : patternsONames.diagonalRow2++;
            break;
        case 8:
            patternsNumber = tieScore.score++;
            break;
        default:
            0;
            break;
    }
    return patternsNumber;
};
//# sourceMappingURL=returnPatternXNames.js.map