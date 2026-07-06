function drawMap() {
    for (let y = 0; y < tate; y++) {
        for (let x = 0; x < yoko; x++) {
            switch (map[y][x]) {
                case 0:
                    ctx.fillStyle = "#008800";
                    break;
                case 1:
                    ctx.fillStyle = "#ffffff";
                    break;
                case 2:
                    ctx.fillStyle = "#aa4400";
                    break;
                case 3:
                    ctx.fillStyle = "#000000";
                    break;
            }

            ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);

            if (tower[y][x] != 0) {
                ctx.fillStyle = "#ffff00";
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

function drawMenu() {
    ctx.fillStyle = "#222";
    ctx.fillRect(0, tate * tileSize, yoko * tileSize, menuTate);

    ctx.textBaseline = "middle";
    ctx.textAlign = "center";

    drawMoney();
    drawMoneyButton();
    drawKabeButton();
    drawTowerButton();
    drawSaveButton();
    drawResetButton();
}
function drawMoney() {
    ctx.fillStyle = "#dddd00";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("$" + money, tileSize * (yoko - 1), (tate + 0.5) * tileSize);
}

function loop() {
    time++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawMap();
    drawGrid();
    drawHighLight();

    drawMenu();

    spawnEnemy();
    updateEnemies(ctx);
    updateMoney(null);

    requestAnimationFrame(loop);
}

resize();
loop();
