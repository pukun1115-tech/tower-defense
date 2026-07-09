function drawMoneyButton() {
    drawRect(1, (tate + 2.5), 2, 1, "#dddd00");

    ctx.fillStyle = "#000000";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("お金", tileSize * 2, (tate + 3) * tileSize);
    
    if (mode !== "money") return;
    
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 0.05 * tileSize;
    ctx.strokeRect(tileSize, (tate + 2.5) * tileSize, 2 * tileSize, tileSize);
    
}

function drawKabeButton() {
    ctx.fillStyle = "#00dd00";
    ctx.fillRect(tileSize * 4, (tate + 2.5) * tileSize, tileSize * 2, tileSize);

    ctx.fillStyle = "#000000";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("壁", tileSize * 5, (tate + 3) * tileSize);

    if (mode !== "kabe") return;

    ctx.strokeStyle = "#ffffff";
    ctx.strokeWidth = 0.05 * tileSize;
    ctx.strokeRect(4 * tileSize, (tate + 2.5) * tileSize, 2 * tileSize, tileSize);
}

function drawTowerButton() {
    ctx.fillStyle = "#0000ff";
    ctx.fillRect(tileSize * 7, (tate + 2.5) * tileSize, tileSize * 2, tileSize);

    ctx.fillStyle = "#000000";
    ctx.font = `${fontSize * 0.8}px sans-serif`;
    ctx.fillText("タワー", tileSize * 8, (tate + 3) * tileSize);

    if (mode !== "tower") return;

    ctx.strokeStyle = "#ffffff";
    ctx.strokeWidth = 0.05 * tileSize;
    ctx.strokeRect(7 * tileSize, (tate + 2.5) * tileSize, 2 * tileSize, tileSize);
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

function drawKabe0Button() {
    drawRect(1, (tate + 0.5), 4, 1.5, "#ffffff");
    ctx.fillStyle = "#000000";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("壊す", 2 * tileSize, (tate + 1.25) * tileSize);
    ctx.fillText("+5$", 4 * tileSize, (tate + 1.25) * tileSize);
}

function drawKabe2Button() {
    drawRect(6, (tate + 0.5), 4, 1.5, "#ffffff");
    ctx.fillStyle = "#000000";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("箱", 7 * tileSize, (tate + 1.25) * tileSize);
    ctx.fillText("-10$", 9 * tileSize, (tate + 1.25) * tileSize);
}

function drawKabe3Button() {
    drawRect(11, (tate + 0.5), 4, 1.5, "#ffffff");
    ctx.fillStyle = "#000000";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("土台", 12 * tileSize, (tate + 1.25) * tileSize);
    ctx.fillText("-15$", 14 * tileSize, (tate + 1.25) * tileSize);
}
