import { tableLoop } from "./TypeScript/pages/table.js";
import { Restart } from "./TypeScript/pages/restart.js";

const mainContainer = document.querySelector("#main-container") as HTMLDivElement;

const displayHTML = async () => {
    try {
        const table = await fetch("/src/pages/table.html");
        const displayTable = await table.text()

        const notification = await fetch("/src/notifications/winnerPop.html");
        const displayNotification = await notification.text();

        const continuesGameNotif = await fetch("/src/notifications/continuePop.html");
        const displayContinuesGameNotif = await continuesGameNotif.text();

        const tools = await fetch("/src/tools/tools.html");
        const displayTools = await tools.text();

        /*const AiDialog = await fetch("src/notifications/dialogAI.html");
        const displayAiDialog = await AiDialog.text();*/

            if(mainContainer){
            mainContainer.innerHTML += displayTable + displayNotification + displayContinuesGameNotif + displayTools;/*+displayAiDialog*/

            const callTableLopp = tableLoop();
            const callRestartFunction = Restart();
        }
    } catch (error) {
        throw new Error("404 Error");
    }
}

displayHTML()