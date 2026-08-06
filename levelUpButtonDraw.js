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

function drawTowerLevelUp0Button() {
    drawShikakuRect(1, tate + 0.5, 8, 1.5, "#ffffff");
    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("発射速度", 3 * tileSize, (tate + 1.25) * tileSize);
}

function drawTowerLevelUp1Button() {
    drawShikakuRect(10, tate + 0.5, 8, 1.5, "#ffffff");
    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("ダメージ", 12 * tileSize, (tate + 1.25) * tileSize);
}
