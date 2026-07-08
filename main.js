function drawMap() {
    for (let y = 0; y < tate; y++) {
        for (let x = 0; x < yoko; x++) {
            switch (map[y][x]) {
                case 0:
                    ctx.fillStyle = "#008800";//草
                    break;
                case 1:
                    ctx.fillStyle = "#ffffff";//白
                    break;
                case 2:
                    ctx.fillStyle = "#aa4400";//茶色
                    break;
                case 3:
                    ctx.fillStyle = "#000000"//黒
                    break;
            }

            ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
                
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

    drawMoney();

    ctx.textAlign = "center";

    drawMoneyButton();
    drawKabeButton();
    drawTowerButton();
    drawSaveButton();
    drawResetButton();

    if (mode === "kabe") {
        drawKabe0Button();
        drawKabe2Button();
        drawKabe3Button();
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
    drawHighLight();

    drawMenu();

    highlightCheck();

    spawnEnemy();
    updateEnemies(ctx);
    updateMoney(null);

    requestAnimationFrame(loop);
}

resize();
loop();
