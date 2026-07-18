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
    ctx.lineWidth = 0.05 * tileSize;
    ctx.strokeRect(4 * tileSize, (tate + 4.5) * tileSize, 2 * tileSize, tileSize);
}

function drawTowerButton() {
    /*
    ctx.fillStyle = "#0000ff";
    ctx.fillRect(7 * tileSize, (tate + 4.5) * tileSize, 3 * tileSize, tileSize);

    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("タワー", 8.5 * tileSize, (tate + 5) * tileSize);

    if (mode !== "tower") return;

    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 0.05 * tileSize;
    ctx.strokeRect(7 * tileSize, (tate + 4.5) * tileSize, 3 * tileSize, tileSize);
    */
}

function drawHelpButton() {
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(tileSize * 11, (tate + 4.5) * tileSize, tileSize * 3, tileSize);

    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("ヘルプ", tileSize * 12.5, (tate + 5) * tileSize);
}

function drawStartButton() {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(15 * tileSize, (tate + 4.5) * tileSize, 3 * tileSize, tileSize);

    ctx.fillStyle = "#ff0000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px Impact`;
    if (!inWave) {
        ctx.fillText("Wave" + (currentWave + 1), 16.5 * tileSize, (tate + 5) * tileSize);
    }
    else {
        if (start) {
            ctx.fillText("Stop", 16.5 * tileSize, (tate + 5) * tileSize);
        }
        else {
            ctx.fillText("Start", 16.5 * tileSize, (tate + 5) * tileSize);
        }
    }
}

function drawKabe0Button() {
    drawShikakuRect(1, (tate + 2.5), 4, 1.5, "#ffffff");

    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("壊す", 2 * tileSize, (tate + 3.25) * tileSize);

    if (oku !== 0) return;

    ctx.strokeStyle = "#00ffff";
    ctx.lineWidth = 0.05 * tileSize;
    ctx.strokeRect(1 * tileSize, (tate + 2.5) * tileSize, 4 * tileSize, 1.5 * tileSize);
}

function drawKabe2Button() {
    drawShikakuRect(6, (tate + 2.5), 4, 1.5, "#ffffff");
    if (money < 10) {
        drawShikakuRect(6, (tate + 2.5), 4, 1.5, "#00000080");
    }
    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("箱", 7 * tileSize, (tate + 3.25) * tileSize);
    ctx.fillText("10$", 9 * tileSize, (tate + 3.25) * tileSize);

    if (oku !== 2 || money < 10) return;

    ctx.strokeStyle = "#00ffff";
    ctx.lineWidth = 0.05 * tileSize;
    ctx.strokeRect(6 * tileSize, (tate + 2.5) * tileSize, 4 * tileSize, 1.5 * tileSize);
}

function drawKabe3Button() {
    drawShikakuRect(11, (tate + 2.5), 4, 1.5, "#ffffff");
    if (money < 15) {
        drawShikakuRect(11, (tate + 2.5), 4, 1.5, "#00000080");
    }
    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("土台", 12 * tileSize, (tate + 3.25) * tileSize);
    ctx.fillText("15$", 14 * tileSize, (tate + 3.25) * tileSize);

    if (oku !== 3 || money < 15) return;

    ctx.strokeStyle = "#00ffff";
    ctx.lineWidth = 0.05 * tileSize;
    ctx.strokeRect(11 * tileSize, (tate + 2.5) * tileSize, 4 * tileSize, 1.5 * tileSize);
}

function drawTower3Button() {
    drawShikakuRect(1, tate + 0.5, 3, 1, "#ffffff");
    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("壊す", 2 * tileSize, (tate + 1) * tileSize);

    if (oku !== 3) return;

    ctx.strokeStyle = "#00ffff";
    ctx.lineWidth = 0.05 * tileSize;
    ctx.strokeRect(1 * tileSize, (tate + 0.5) * tileSize, 3 * tileSize, 1 * tileSize);
}

function drawTower4Button() {
    drawShikakuRect(5, tate + 0.5, 3, 1, "#ffffff");
    drawCircle(5.5, tate + 1, 0.3, towerTypes[4].color);
    if (money < towerTypes[4].cost) {
        drawShikakuRect(5, tate + 0.5, 3, 1, "#00000080");
    }

    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText(`${towerTypes[4].cost}$`, 7 * tileSize, (tate + 1) * tileSize);

    if (oku !== 4 || money < towerTypes[4].cost) return;

    ctx.strokeStyle = "#00ffff";
    ctx.lineWidth = 0.05 * tileSize;
    ctx.strokeRect(5 * tileSize, (tate + 0.5) * tileSize, 3 * tileSize, 1 * tileSize);
}

function drawTower5Button() {
    drawShikakuRect(9, tate + 0.5, 3, 1, "#ffffff");
    drawCircle(9.5, tate + 1, 0.3, towerTypes[5].color);
    if (money < towerTypes[5].cost) {
        drawShikakuRect(9, tate + 0.5, 3, 1, "#00000080");
    }

    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText(`${towerTypes[5].cost}$`, 11 * tileSize, (tate + 1) * tileSize);

    if (oku !== 5 || money < towerTypes[5].cost) return;

    ctx.strokeStyle = "#00ffff";
    ctx.lineWidth = 0.05 * tileSize;
    ctx.strokeRect(9 * tileSize, (tate + 0.5) * tileSize, 3 * tileSize, 1 * tileSize);
}

function drawTower6Button() {
    drawShikakuRect(13, tate + 0.5, 3, 1, "#ffffff");
    drawCircle(13.5, tate + 1, 0.3, towerTypes[6].color);
    if (money < towerTypes[6].cost) {
        drawShikakuRect(13, tate + 0.5, 3, 1, "#00000080");
    }

    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText(`${towerTypes[6].cost}$`, 15 * tileSize, (tate + 1) * tileSize);

    if (oku !== 6 || money < towerTypes[6].cost) return;

    ctx.strokeStyle = "#00ffff";
    ctx.lineWidth = 0.05 * tileSize;
    ctx.strokeRect(13 * tileSize, (tate + 0.5) * tileSize, 3 * tileSize, 1 * tileSize);
}

function drawMoneyLevelUpButton() {
    drawShikakuRect(1, tate + 0.5, 7, 1.5, "#ffffff");
    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;
    if (moneyLevel < 10) {
        ctx.fillText("Level" + (moneyLevel + 1) + "にする", 3.5 * tileSize, (tate + 1.25) * tileSize);
        ctx.fillText(moneyLevelHyou[moneyLevel + 1].money + "$", 7 * tileSize, (tate + 1.25) * tileSize);
        if (money < moneyLevelHyou[moneyLevel + 1].money) {
            drawShikakuRect(1, tate + 0.5, 7, 1.5, "#00000080");
        }
    }
    else {
        ctx.fillText("LevelMax!", 4.5 * tileSize, (tate + 1.25) * tileSize);
    }
}
