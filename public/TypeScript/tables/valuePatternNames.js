import { patternXNames, patternsONames, tieScore } from "./table.js";
export function valuePatternNames(number, XO) {
    switch (number) {
        case 0:
            XO === "X"
                ? (number = patternXNames.horizontalRow1)
                : (number = patternsONames.horizontalRow1);
            break;
        case 1:
            XO === "X"
                ? (number = patternXNames.horizontalRow2)
                : (number = patternsONames.horizontalRow2);
            break;
        case 2:
            XO === "X"
                ? (number = patternXNames.horizontalRow3)
                : (number = patternsONames.horizontalRow3);
            break;
        case 3:
            XO === "X"
                ? (number = patternXNames.verticalRow1)
                : (number = patternsONames.verticalRow1);
            break;
        case 4:
            XO === "X"
                ? (number = patternXNames.verticalRow2)
                : (number = patternsONames.verticalRow2);
            break;
        case 5:
            XO === "X"
                ? (number = patternXNames.verticalRow3)
                : (number = patternsONames.verticalRow3);
            break;
        case 6:
            XO === "X"
                ? (number = patternXNames.diagonalRow1)
                : (number = patternsONames.diagonalRow1);
            break;
        case 7:
            XO === "X"
                ? (number = patternXNames.diagonalRow2)
                : (number = patternsONames.diagonalRow2);
            break;
        default:
            "walang default";
            break;
    }
    return number || 0;
}
//# sourceMappingURL=valuePatternNames.js.map