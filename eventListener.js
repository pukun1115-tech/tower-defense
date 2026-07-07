window.addEventListener("resize", resize);

canvas.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    isPointerDown = true;

    pointerX = e.clientX - rect.left;
    pointerY = e.clientY - rect.top;
})

canvas.addEventListener("pointermove", (e) => {
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    isPointerDown = true;

    pointerX = e.clientX - rect.left;
    pointerY = e.clientY - rect.top;
});

canvas.addEventListener("pointerup", (e) => {
    e.preventDefault();

    onMoneyButtonClick();
    onKabeButtonClick();
    onTowerButtonClick();
    onResetButtonClick();
    onSaveButtonClick();

    switch (mode) {
        case "menu":
            break;
        case "kabe":
            placeKabeCheck();
            break;
        case "money":
            break;
    }

    isPointerDown = false;
});
