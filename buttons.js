function drawMoneyButton() {
    ctx.fillStyle = "#dddd00";
    ctx.fillRect(tileSize, (tate + 2.5) * tileSize, tileSize * 2, tileSize);

    ctx.fillStyle = "#000000";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("お金", tileSize * 2, (tate + 3) * tileSize);
}

function drawKabeButton() {
    ctx.fillStyle = "#00dd00";
    ctx.fillRect(tileSize * 4, (tate + 2.5) * tileSize, tileSize * 2, tileSize);

    ctx.fillStyle = "#000000";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("壁", tileSize * 5, (tate + 3) * tileSize);
}

function drawTowerButton() {
    ctx.fillStyle = "#0000ff";
    ctx.fillRect(tileSize * 7, (tate + 2.5) * tileSize, tileSize * 2, tileSize);

    ctx.fillStyle = "#000000";
    ctx.font = `${fontSize * 0.8}px sans-serif`;
    ctx.fillText("タワー", tileSize * 8, (tate + 3) * tileSize);
}

function drawSaveButton() {
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(tileSize * 10, (tate + 2.5) * tileSize, tileSize * 2, tileSize);

    ctx.fillStyle = "#000000";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("SAVE", tileSize * 11, (tate + 3) * tileSize);
}

function drawResetButton() {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(15 * tileSize, (tate + 2.5) * tileSize, 3 * tileSize, tileSize);

    ctx.fillStyle = "#ff0000";
    ctx.font = `${fontSize}px Impact`;
    ctx.fillText("Reset", 16.5 * tileSize, (tate + 3) * tileSize);
}


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
    if(!isPointerDown) return;
    if(
        pointerX > 7 * tileSize &&
        pointerX < 9 * tileSize &&
        pointerY > (tate + 2.5) * tileSize &&
        pointerY < (tate + 3.5) * tileSize
    ) {
        mode = "tower";
    }
}
function onSaveButtonClick() {
    if(!isPointerDown) return;
}
function onResetButtonClick() {
    if(!isPointerDown) return;
    if(
        pointerX > 15 * tileSize &&
        pointerX < 18 * tileSize &&
        pointerY > (tate + 2.5) * tileSize &&
        pointerY < (tate + 3.5) * tileSize
    ){
        updateMoney(1);
        resize();
    }
}
