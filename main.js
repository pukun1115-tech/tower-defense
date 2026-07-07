function drawMap(c) {
    for (let y = 0; y < tate; y++) {
        for (let x = 0; x < yoko; x++) {
            switch (map[y][x]) {
                case 0:
                    c.fillStyle = "#008800";
                    break;
                case 1:
                    c.fillStyle = "#ffffff";
                    break;
                case 2:
                    c.fillStyle = "#aa4400";
                    break;
                case 3:
                    c.fillStyle = "#000000";
                    break;
            }

            c.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);

            if (tower[y][x] != 0) {
                c.fillStyle = "#ffff00";
                drawCircle(x * tileSize + tileSize / 2, y * tileSize + tileSize / 2, (tileSize / 2) * 0.8, ctx);
            }
        }
    }
}

function spawnEnemy() {
    if (time % /*フレーム数*/40/*に一体*/ !== 0) return;

    const e = new enemy(
        0,//x
        7,//y
        20,//hp
        "blue",//color
        0.02,//speed
        0.3//size
    );

    enemies.push(e);
}

function updateEnemies(ctx) {
    for (const e of enemies) {
        e.update();
        e.draw(ctx);
    }
}

function drawMenu(c) {
    c.fillStyle = "#222";
    c.fillRect(0, tate * tileSize, yoko * tileSize, menuTate);

    c.textBaseline = "middle";

    drawMoney(c);

    c.textAlign = "center";

    drawMoneyButton();
    drawKabeButton();
    drawTowerButton();
    drawSaveButton();
    drawResetButton();
}
function drawMoney(c) {
    c.fillStyle = "#dd0";
    c.textAlign = "right";
    c.font = `${fontSize}px sans-serif`;
    c.fillText("$" + money, yoko * tileSize, (tate + 0.5) * tileSize);
}

function loop() {
    time++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawMap(ctx);
    drawGrid();
    drawHighLight();

    drawMenu(ctx);

    highlightCheck();

    //ボタン判定
    onMoneyButtonClick();
    onKabeButtonClick();
    onTowerButtonClick();
    onResetButtonClick();

    spawnEnemy();
    updateEnemies(ctx);
    updateMoney(null);

    requestAnimationFrame(loop);
}

resize();
loop();
