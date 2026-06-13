let RestartButton: Element;

const handleRestart = (): void => {
    // addEventListener "click"
    RestartButton.addEventListener("click", (): void => {
        const reloadPage = location.reload();
    })
}

export const Restart  = (): void => {
    // main function

    RestartButton = document.querySelector("#RestartButton") as HTMLButtonElement;

    // call handler button
    const callHandleRestart = handleRestart();
} 