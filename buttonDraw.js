function drawMoneyButton() {
    drawShikakuRect(1, (tate + 4.5), 2, 1, "#dddd00");

    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("お金", tileSize * 2, (tate + 5) * tileSize);

    if (mode !== "money") return;

    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 0.05 * tileSize;
    ctx.strokeRect(tileSize, (tate + 4.5) * tileSize, 2 * tileSize, tileSize);

}

function drawKabeButton() {
    ctx.fillStyle = "#00dd00";
    ctx.fillRect(tileSize * 4, (tate + 4.5) * tileSize, tileSize * 2, tileSize);

    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("壁", tileSize * 5, (tate + 5) * tileSize);

    if (mode !== "kabe") return;

    ctx.strokeStyle = "#ffffff";
    ctx.strokeWidth = 0.05 * tileSize;
    ctx.strokeRect(4 * tileSize, (tate + 4.5) * tileSize, 2 * tileSize, tileSize);
}

function drawTowerButton() {
    ctx.fillStyle = "#0000ff";
    ctx.fillRect(7 * tileSize, (tate + 4.5) * tileSize, 3 * tileSize, tileSize);

    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("タワー", 8.5 * tileSize, (tate + 5) * tileSize);

    if (mode !== "tower") return;

    ctx.strokeStyle = "#ffffff";
    ctx.strokeWidth = 0.05 * tileSize;
    ctx.strokeRect(7 * tileSize, (tate + 4.5) * tileSize, 3 * tileSize, tileSize);
}

function drawItemButton() {
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(tileSize * 11, (tate + 4.5) * tileSize, tileSize * 3, tileSize);

    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("アイテム", tileSize * 12.5, (tate + 5) * tileSize);

    if (mode !== "item") return;

    ctx.strokeStyle = "#ffffff";
    ctx.strokeWidth = 0.05 * tileSize;
    ctx.strokeRect(11 * tileSize, (tate + 4.5) * tileSize, 3 * tileSize, tileSize);
}

function drawResetButton() {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(15 * tileSize, (tate + 4.5) * tileSize, 3 * tileSize, tileSize);

    ctx.fillStyle = "#ff0000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px Impact`;
    ctx.fillText("Reset", 16.5 * tileSize, (tate + 5) * tileSize);
}

function drawKabe0Button() {
    drawShikakuRect(1, (tate + 2.5), 4, 1.5, "#ffffff");

    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("壊す", 2 * tileSize, (tate + 3.25) * tileSize);
}

function drawKabe2Button() {
    drawShikakuRect(6, (tate + 2.5), 4, 1.5, "#ffffff");

    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("箱", 7 * tileSize, (tate + 3.25) * tileSize);
    ctx.fillText("10$", 9 * tileSize, (tate + 3.25) * tileSize);
}

function drawKabe3Button() {
    drawShikakuRect(11, (tate + 2.5), 4, 1.5, "#ffffff");

    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("土台", 12 * tileSize, (tate + 3.25) * tileSize);
    ctx.fillText("15$", 14 * tileSize, (tate + 3.25) * tileSize);
}

function drawTower4Button() {
    drawShikakuRect(5, tate + 0.5, 3, 1, "#ffffff");
    drawCircle(5.5, tate + 1, 0.3, "#ffff00");

    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("20$", 7 * tileSize, (tate + 1) * tileSize);
}

function drawTower5Button() {
    drawShikakuRect(9, tate + 0.5, 3, 1, "#ffffff");
    drawCircle(9.5, tate + 1, 0.3, "#ff00ff");

    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("40$", 11 * tileSize, (tate + 1) * tileSize);
}

function drawMoneyLevelUpButton() {
    drawShikakuRect(1, tate + 0.5, 3, 1.5, "#ffffff");
    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("Level0", 2 * tileSize, (tate + 1.75) * tileSize);
}
