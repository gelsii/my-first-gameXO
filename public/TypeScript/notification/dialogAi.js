export {};
/*
export let isAiPlaying: boolean = false;
export let HumanText: string;
export let AiText: string;
export let AiTurn: boolean;

const tools: string[] = ["X", "O"];
let interTools: any;

let isStop: boolean;

let isRunning: boolean = true;

const mixingATools = (): void => {
    HumanText = tools[Math.floor(Math.random() * tools.length)] || ""
    AiText = tools[Math.floor(Math.random() * tools.length)] || ""

    const playerHuman = document.querySelector("#playerHuman") as HTMLHeadingElement;
    const playerAi = document.querySelector("#playerAi") as HTMLHeadingElement;

    const dialogAi = document.querySelector("#dialogAi") as HTMLElement;
    const turnXO = document.querySelector("#TurnXO") as HTMLHeadingElement;

    const Turn = tools[Math.floor(Math.random() * tools.length)] || "";
    playerAi.innerText = `${AiText}`;
    playerHuman.innerText = `${HumanText}`;
    console.log(HumanText, AiText)

    
    setTimeout(() => {
        try {
            if(playerHuman != playerAi) {
                clearInterval(interTools)
                setTimeout(() => {
                    dialogAi.style.display = 'none'
                    turnXO.innerText = `Turn: ${Turn}`
                    setTimeout(() => {
                        clearInterval(interTools);
                        dialogAi.remove();
                        isRunning = false;
                        isAiPlaying = true;
                        AiTurn = Turn === Turn ? true : false;
                    }, 2000);
                }, 2800);
            } else {
                throw new Error("error mixing a tool")
            }
        } catch (error) {
            console.log(error)
        }
    }, 4000);
}

export const MainDialogAi = (): void => {
    if(isRunning) {
        interTools = setInterval(() => {
            const callMxingTools = mixingATools();
            //isStop ? clearInterval(interTools) : false;
        }, 50);
    };

} */ 
//# sourceMappingURL=dialogAi.js.map