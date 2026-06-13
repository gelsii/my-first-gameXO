/*
import { AiText, HumanText, MainDialogAi } from "../notification/dialogAi.js";
import { finalTurnText, MainTools } from "../tools/tools.js";

export let isPlayAi: boolean = true;
let PlayAI: Element;


const handleAIPlaying = (): void => {
    // addEventListener "click"
    const boxes = document.querySelectorAll("#main-table div") as NodeList;

    const randomizedTextBoxes = boxes[Math.floor(Math.random() * boxes.length)];

    if(randomizedTextBoxes) {
        randomizedTextBoxes.textContent = AiText;
    }
}

export const AIPlaying = (): void => {
    // main Function AiPlaying

    PlayAI = document.querySelector("#PlayAI") as HTMLButtonElement;

    const dialogAi = document.querySelector("#dialogAi") as HTMLElement
    const mainContainer = document.querySelector("#main-container") as HTMLDivElement;

    // call handler Ai Playing
    const callHandleAiPlaying = handleAIPlaying();


        if(isPlayAi) {
            dialogAi.style.display = "flex"
            const showDialog = MainDialogAi();
            isPlayAi = false;
        }
}*/