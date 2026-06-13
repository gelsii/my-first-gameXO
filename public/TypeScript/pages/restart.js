let RestartButton;
const handleRestart = () => {
    // addEventListener "click"
    RestartButton.addEventListener("click", () => {
        const reloadPage = location.reload();
    });
};
export const Restart = () => {
    // main function
    RestartButton = document.querySelector("#RestartButton");
    // call handler button
    const callHandleRestart = handleRestart();
};
//# sourceMappingURL=restart.js.map