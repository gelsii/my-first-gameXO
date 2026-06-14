export declare let scoresX: number;
export declare let scoresO: number;
export declare let isPlay: boolean;
export declare let winner: "X" | "O" | "Draw";
export declare let tieScore: {
    score: number;
};
export declare let isDrawGame: {
    draw: boolean;
};
interface listNamesOfPatterns {
    horizontalRow1: number;
    horizontalRow2: number;
    horizontalRow3: number;
    verticalRow1: number;
    verticalRow2: number;
    verticalRow3: number;
    diagonalRow1: number;
    diagonalRow2: number;
}
export declare const patternXNames: listNamesOfPatterns;
export declare const patternsONames: listNamesOfPatterns;
export declare const tableLoop: () => void;
export {};
//# sourceMappingURL=table.d.ts.map