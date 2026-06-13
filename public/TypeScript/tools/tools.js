export let player1;
export let player2;
export let mixedTurn;
export let finalTurnText;
export const MainTools = () => {
    const Player1Text = document.querySelector("#Player1Text");
    const toolsDialog = document.querySelector("#toolsDialog");
    const turnXO = document.querySelector("#TurnXO");
    const mixedTools = ["X", "O"];
    let Turn;
    function mixingATools() {
        Turn = mixedTools[Math.floor(Math.random() * mixedTools.length)] || "";
        Player1Text.innerText = `Turn: ${Turn}`;
        finalTurnText = Turn;
        setTimeout(() => {
            clearInterval(interval);
            mixedTurn = Turn === mixedTools[0] ? true : false;
            setTimeout(() => {
                toolsDialog.style.display = "none";
            }, 1800);
        }, 5000);
        return '';
    }
    const interval = setInterval(() => {
        const callFunction = mixingATools();
    }, 10);
};
//# sourceMappingURL=tools.js.map