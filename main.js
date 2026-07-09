function drawMap() {
    for (let y = 0; y < tate; y++) {
        for (let x = 0; x < yoko; x++) {
            switch (map[y][x]) {
                case 0:
                    drawShikakuRect(x, y, 1, 1, "#008800");
                    break;
                case 1:
                    drawShikakuRect(x, y, 1, 1, "#ffffff");
                    break;
                case 2:
                    drawShikakuRect(x, y, 1, 1, "#aa4400");
                    break;
                case 3:
                    drawShikakuRect(x, y, 1, 1, "#000000");
                    break;
                case 4:
                    drawShikakuRect(x, y, 1, 1, "#000000");
                    drawCircle(x + 0.5, y + 0.5, 0.3, "#ffff00");
                    break;
                case 5:
                    drawShikakuRect(x, y, 1, 1, "#000000");
                    drawCircle(x + 0.5, y + 0.5, 0.3, "#ff00ff");
                    break;
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
        0.03,//speed
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

function drawMenu() {
    ctx.fillStyle = "#222";
    ctx.fillRect(0, tate * tileSize, yoko * tileSize, menuTate);

    ctx.textBaseline = "middle";

    drawMoney();

    ctx.textAlign = "center";

    drawMoneyButton();
    drawKabeButton();
    drawTowerButton();
    drawItemButton();
    drawResetButton();
    switch (mode) {
        case "kabe":
            drawKabe0Button();
            drawKabe2Button();
            drawKabe3Button();
            break;
        case "tower":
            drawTower4Button();
            break;

    }
}

function drawMoney() {
    ctx.fillStyle = "#dd0";
    ctx.textAlign = "right";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("$" + money, yoko * tileSize, (tate + 0.5) * tileSize);
}

function loop() {
    time++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawMap();
    drawGrid();
    highlightCheck();
    drawHighLight();

    drawMenu();

    spawnEnemy();
    updateEnemies(ctx);
    updateMoney(null);

    requestAnimationFrame(loop);
}

resize();
loop();
