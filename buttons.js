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
    ctx.fillStyle = "#ff0000"
    ctx.fillRect(tileSize * 10, (tate + 2.5) * tileSize, tileSize * 2, tileSize);

    ctx.fillStyle = "#000000";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("SAVE", tileSize * 11, (tate + 3) * tileSize);
}

function drawResetButton() {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect( tileSize * 15, (tate + 2.5) * tileSize, tileSize * 2, tileSize);
}

function onMoneyButtonClick() { }
function onKabeButtonClick() { }
function onTowerButtonClick() { }
function onSaveButton() { }
