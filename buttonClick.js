function onMoneyButtonClick() {
    if (!isPointerDown) return;
    if (
        pointerX > tileSize &&
        pointerX < 3 * tileSize &&
        pointerY > (tate + 2.5) * tileSize &&
        pointerY < (tate + 3.5) * tileSize
    ) {
        mode = "money";
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
        //
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
        resize();
    }
}
function onKabe0ButtonClick() {
    if (!isPointerDown) return;
    if (
        pointerX > tileSize &&
        pointerX < 5 * tileSize &&
        pointerY > (tate + 0.5) * tileSize &&
        pointerY < (tate + 2) * tileSize
    ) {
        oku = 0;
        updateMoney(100);
    }
}
function onKabe2ButtonClick() {
    if (
        pointerX > 6 * tileSize &&
        pointerX < 10 * tileSize &&
        pointerY > (tate + 0.5) * tileSize &&
        pointerY < (tate + 2) * tileSize
    ) {
        oku = 2
    }
}
function onKane3ButtonClick() {
    //
}
