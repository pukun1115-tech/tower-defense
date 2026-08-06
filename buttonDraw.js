function drawLevelUpButton() {
    drawShikakuRect(1, (tate + 4.5), 5, 1, "#dddd00");

    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("パワーアップ", tileSize * 3.5, (tate + 5) * tileSize);

    if (Game.mode !== "levelUp") return;

    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 0.05 * tileSize;
    ctx.strokeRect(tileSize, (tate + 4.5) * tileSize, 5 * tileSize, tileSize);

}

function drawMoneyLevelUpButton() {
    drawShikakuRect(1, tate + 2.5, 8, 1.5, "#ffffff");
    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;
    if (Game.moneyLevel[0] < 10) {
        ctx.fillText("お金レベルアップ", 4 * tileSize, (tate + 3.25) * tileSize);
        ctx.fillText(moneyLevelHyou[Game.moneyLevel[0] + 1].cost + "$", 8 * tileSize, (tate + 3.25) * tileSize);
        if (Game.money < moneyLevelHyou[Game.moneyLevel[0] + 1].cost) {
            drawShikakuRect(1, tate + 2.5, 8, 1.5, "#00000080");
        }
    }
    else {
        ctx.fillText("LevelMax!", 5 * tileSize, (tate + 3.25) * tileSize);
    }
}

function drawMoneyLevelUp0Button() {
    drawShikakuRect(1, tate + 0.5, 8, 1.5, "#ffffff");
    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("スピード", 3 * tileSize, (tate + 1.25) * tileSize);
}

function drawMoneyLevelUp1Button() {
    drawShikakuRect(10, tate + 0.5, 8, 1.5, "#ffffff");
    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("敵撃破時", 12 * tileSize, (tate + 1.25) * tileSize);
}

function drawTowerLevelUpButton() {
    drawShikakuRect(10, tate + 2.5, 8, 1.5, "#ffffff");
    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("タワーレベルアップ", 13.5 * tileSize, (tate + 3.25) * tileSize);
}

function drawKabeButton() {
    ctx.fillStyle = "#00dd00";
    ctx.fillRect(tileSize * 7, (tate + 4.5) * tileSize, tileSize * 2, tileSize);

    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("壁", tileSize * 8, (tate + 5) * tileSize);

    if (Game.mode !== "kabe") return;

    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 0.05 * tileSize;
    ctx.strokeRect(7 * tileSize, (tate + 4.5) * tileSize, 2 * tileSize, tileSize);
}

function drawKabe0Button() {
    drawShikakuRect(1, (tate + 2.5), 4, 1.5, "#ffffff");

    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("壊す", 2 * tileSize, (tate + 3.25) * tileSize);

    if (Game.oku !== 0) return;

    ctx.strokeStyle = "#00ffff";
    ctx.lineWidth = 0.05 * tileSize;
    ctx.strokeRect(1 * tileSize, (tate + 2.5) * tileSize, 4 * tileSize, 1.5 * tileSize);
}

function drawKabe2Button() {
    drawShikakuRect(6, (tate + 2.5), 4, 1.5, "#ffffff");
    if (Game.money < 10) {
        drawShikakuRect(6, (tate + 2.5), 4, 1.5, "#00000080");
    }
    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("箱", 7 * tileSize, (tate + 3.25) * tileSize);
    ctx.fillText("10$", 9 * tileSize, (tate + 3.25) * tileSize);

    if (Game.oku !== 2 || Game.money < 10) return;

    ctx.strokeStyle = "#00ffff";
    ctx.lineWidth = 0.05 * tileSize;
    ctx.strokeRect(6 * tileSize, (tate + 2.5) * tileSize, 4 * tileSize, 1.5 * tileSize);
}

function drawKabe3Button() {
    drawShikakuRect(11, (tate + 2.5), 4, 1.5, "#ffffff");
    if (Game.money < 15) {
        drawShikakuRect(11, (tate + 2.5), 4, 1.5, "#00000080");
    }
    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("土台", 12 * tileSize, (tate + 3.25) * tileSize);
    ctx.fillText("15$", 14 * tileSize, (tate + 3.25) * tileSize);

    if (Game.oku !== 3 || Game.money < 15) return;

    ctx.strokeStyle = "#00ffff";
    ctx.lineWidth = 0.05 * tileSize;
    ctx.strokeRect(11 * tileSize, (tate + 2.5) * tileSize, 4 * tileSize, 1.5 * tileSize);
}

function drawTowerButton() {
    ctx.fillStyle = "#0000ff";
    ctx.fillRect(10 * tileSize, (tate + 4.5) * tileSize, 3 * tileSize, tileSize);

    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("タワー", 11.5 * tileSize, (tate + 5) * tileSize);

    if (Game.mode !== "tower") return;

    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 0.05 * tileSize;
    ctx.strokeRect(10 * tileSize, (tate + 4.5) * tileSize, 3 * tileSize, tileSize);
}

function drawHelpButton() {
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(tileSize * 14, (tate + 4.5) * tileSize, tileSize * 3, tileSize);

    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("情報", tileSize * 15.5, (tate + 5) * tileSize);
}

function drawStartButton() {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(18 * tileSize, (tate + 4.5) * tileSize, 3 * tileSize, tileSize);

    ctx.fillStyle = "#ff0000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px Impact`;
    if (!Game.inWave) {
        ctx.fillText("Wave" + (Game.currentWave + 2), 19.5 * tileSize, (tate + 5) * tileSize);
    }
    else {
        if (Game.start) {
            if (Game.speed === 1) {
                ctx.fillText("x2", 19.5 * tileSize, (tate + 5) * tileSize);
            }
            else {
                ctx.fillText("Stop", 19.5 * tileSize, (tate + 5) * tileSize);
            }
        }
        else {
            ctx.fillText("Start", 19.5 * tileSize, (tate + 5) * tileSize);
        }
    }
}
