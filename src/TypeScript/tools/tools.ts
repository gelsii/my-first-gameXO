export let player1: string;
export let player2: string;

export let mixedTurn: boolean;

export let finalTurnText: string;

export const MainTools = (): void => {
    const Player1Text = document.querySelector("#Player1Text") as HTMLHeadingElement;
    const toolsDialog = document.querySelector("#toolsDialog") as HTMLElement;
    const turnXO = document.querySelector("#TurnXO") as HTMLHeadingElement;

    const mixedTools: string[] = ["X", "O"];

    let Turn: string;

    function mixingATools(): TimerHandler {
        Turn = mixedTools[Math.floor(Math.random() * mixedTools.length)] || "";

        Player1Text.innerText = `Turn: ${Turn}`
        finalTurnText = Turn;

        setTimeout(() => {
                clearInterval(interval)
                mixedTurn = Turn === mixedTools[0] ? true : false;
                setTimeout(() => {
                    toolsDialog.style.display = "none"
                }, 1800);
        }, 5000)

        return ''
    }

    const interval = setInterval(() => {
        const callFunction = mixingATools();
    }, 10);
}