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

    pointerX = e.clientX - rect.left;
    pointerY = e.clientY - rect.top;
});

canvas.addEventListener("pointerup", (e) => {
    e.preventDefault();

    onStartButtonClick();

    onMoneyButtonClick();
    onKabeButtonClick();
    onTowerButtonClick();
    onHelpButtonClick();
    onStartButtonClick();

    switch (mode) {
        case "menu":
            break;
        case "kabe":
            //ここまでok
            onKabe0ButtonClick();
            onKabe2ButtonClick();
            onKabe3ButtonClick();
            placeCheck();
            break;
        case "tower":
            onTower3ButtonClick();
            onTower4ButtonClick();
            onTower5ButtonClick();
            onTower6ButtonClick();
            placeCheck();
            break;
        case "money":
            onMoneyLevelUpButtonClick();
            break;
    }

    isPointerDown = false;
});
