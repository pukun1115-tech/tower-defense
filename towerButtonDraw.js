function drawTower3Button() {
    drawShikakuRect(1, tate + 0.5, 3, 1, "#ffffff");
    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("壊す", 2 * tileSize, (tate + 1) * tileSize);

    if (Game.oku !== 3) return;

    ctx.strokeStyle = "#00ffff";
    ctx.lineWidth = 0.05 * tileSize;
    ctx.strokeRect(1 * tileSize, (tate + 0.5) * tileSize, 3 * tileSize, 1 * tileSize);
}

function drawTower4Button() {
    drawShikakuRect(5, tate + 0.5, 3, 1, "#ffffff");
    drawCircle(5.5, tate + 1, towerTypes[4].size, towerTypes[4].color);
    if (Game.money < towerTypes[4].cost) {
        drawShikakuRect(5, tate + 0.5, 3, 1, "#00000080");
    }

    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText(`${towerTypes[4].cost}$`, 7 * tileSize, (tate + 1) * tileSize);

    if (Game.oku !== 4 || Game.money < towerTypes[4].cost) return;

    ctx.strokeStyle = "#00ffff";
    ctx.lineWidth = 0.05 * tileSize;
    ctx.strokeRect(5 * tileSize, (tate + 0.5) * tileSize, 3 * tileSize, 1 * tileSize);
}

function drawTower5Button() {
    drawShikakuRect(9, tate + 0.5, 3, 1, "#ffffff");
    drawCircle(9.5, tate + 1, towerTypes[5].size, towerTypes[5].color);
    if (Game.money < towerTypes[5].cost) {
        drawShikakuRect(9, tate + 0.5, 3, 1, "#00000080");
    }

    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText(`${towerTypes[5].cost}$`, 11 * tileSize, (tate + 1) * tileSize);

    if (Game.oku !== 5 || Game.money < towerTypes[5].cost) return;

    ctx.strokeStyle = "#00ffff";
    ctx.lineWidth = 0.05 * tileSize;
    ctx.strokeRect(9 * tileSize, (tate + 0.5) * tileSize, 3 * tileSize, 1 * tileSize);
}

function drawTower6Button() {
    drawShikakuRect(13, tate + 0.5, 3, 1, "#ffffff");
    drawCircle(13.5, tate + 1, towerTypes[6].size, towerTypes[6].color);
    if (Game.money < towerTypes[6].cost) {
        drawShikakuRect(13, tate + 0.5, 3, 1, "#00000080");
    }

    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText(`${towerTypes[6].cost}$`, 15 * tileSize, (tate + 1) * tileSize);

    if (Game.oku !== 6 || Game.money < towerTypes[6].cost) return;

    ctx.strokeStyle = "#00ffff";
    ctx.lineWidth = 0.05 * tileSize;
    ctx.strokeRect(13 * tileSize, (tate + 0.5) * tileSize, 3 * tileSize, 1 * tileSize);
}


function drawTower7Button() {
    drawShikakuRect(1, tate + 2.5, 3, 1, "#ffffff");
    drawCircle(1.5, tate + 3, towerTypes[7].size, towerTypes[7].color);
    if (Game.money < towerTypes[7].cost) {
        drawShikakuRect(1, tate + 2.5, 3, 1, "#00000080");
    }

    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText(`${towerTypes[7].cost}$`, 3 * tileSize, (tate + 3) * tileSize);

    if (Game.oku !== 7 || Game.money < towerTypes[7].cost) return;

    ctx.strokeStyle = "#00ffff";
    ctx.lineWidth = 0.05 * tileSize;
    ctx.strokeRect(1 * tileSize, (tate + 2.5) * tileSize, 3 * tileSize, 1 * tileSize);
}

function drawTower8Button() {
    drawShikakuRect(5, tate + 2.5, 3, 1, "#ffffff");
    drawCircle(5.5, tate + 3, towerTypes[8].size, towerTypes[8].color);
    if (Game.money < towerTypes[8].cost) {
        drawShikakuRect(5, tate + 2.5, 3, 1, "#00000080");
    }

    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText(`${towerTypes[8].cost}$`, 7 * tileSize, (tate + 3) * tileSize);

    if (Game.oku !== 8 || Game.money < towerTypes[8].cost) return;

    ctx.strokeStyle = "#00ffff";
    ctx.lineWidth = 0.05 * tileSize;
    ctx.strokeRect(5 * tileSize, (tate + 2.5) * tileSize, 3 * tileSize, 1 * tileSize);
}
