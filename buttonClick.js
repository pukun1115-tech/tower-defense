function onMoneyButtonClick() {
    if (!isPointerDown) return;
    if (
        pointerX > tileSize &&
        pointerX < 3 * tileSize &&
        pointerY > (tate + 2.5) * tileSize &&
        pointerY < (tate + 3.5) * tileSize
    ) {
        updateMoney(123);
    }
}

function onKabeButtonClick() {
    if (!isPointerDown) return;
    if (
        pointerX > 4 * tileSize &&
        pointerX < 6 * tileSize &&
        pointerY > (tate + 2.5) * tileSize &&
        pointerY < (tate + 3.5) * tileSize
    ) {
        mode = "kabe";
    }
}

function onTowerButtonClick() {
    if (!isPointerDown) return;
    if (
        pointerX > 7 * tileSize &&
        pointerX < 9 * tileSize &&
        pointerY > (tate + 2.5) * tileSize &&
        pointerY < (tate + 3.5) * tileSize
    ) {
        mode = "tower";
        updateMoney(1000);
    }
}
function onSaveButtonClick() {
    if (!isPointerDown) return;
    if(
        pointerX > 10 * tileSize &&
        pointerX < 12 * tileSize &&
        pointerY > (tate + 2.5) * tileSize &&
        pointerY < (tate + 3.5) * tileSize
    ) {
        updateMoney(-100);
    }
}
function onResetButtonClick() {
    if (!isPointerDown) return;
    if (
        pointerX > 15 * tileSize &&
        pointerX < 18 * tileSize &&
        pointerY > (tate + 2.5) * tileSize &&
        pointerY < (tate + 3.5) * tileSize
    ) {
        updateMoney(100);
        resize();
    }
}
