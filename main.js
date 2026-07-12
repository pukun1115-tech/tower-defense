function drawMap() {
    for (let y = 0; y < tate; y++) {
        for (let x = 0; x < yoko; x++) {
            switch (map[y][x]) {
                case -1:
                    const hue = (time * 2) % 360;
                    drawShikakuRect(x, y, 1, 1, `hsl(${hue}, 100%, 50%)`);
                    break;
                case 0:
                    drawShikakuRect(x, y, 1, 1, "#008800");
                    break;
                case 1:
                    drawShikakuRect(x, y, 1, 1, "#ffffff");
                    break;
                case 2:
                    drawShikakuRect(x, y, 1, 1, "#993300");
                    break;
                case 3:
                case 4:
                case 5:
                    drawShikakuRect(x, y, 1, 1, "#000000");
                    break;
            }

        }
    }
}
function spawnEnemy() {
    if (!start) return;
    for (const rule of spawnRules) {
        if (time < rule.start) continue;

        const spawned = Math.floor((time - rule.start) / rule.interval);

        if (spawned >= rule.count) continue;

        if ((time - rule.start) % rule.interval === 0) {
            enemies.push(getEnemy(rule.type));
        }
    }
}

function getEnemy(type) {
    const t = enemyTypes[type];
    return new enemy(
        0,
        7,
        t.hp,
        t.color,
        t.speed,
        t.size
    );
}

function updateEnemies() {
    for (const e of enemies) {
        if (start) {
            e.update();
        }
        e.draw();
    }
    enemies = enemies.filter(e => e.alive);
}
function updateTowers() {
    for (const t of towers) {
        if (start) {
            t.update();
        }
        t.draw();
    }
    towers = towers.filter(t => t.alive);
}
function updateBullets() {
    for (const b of bullets) {
        if (start) {
            b.update();
        }
        b.draw();
    }
    bullets = bullets.filter(b => b.alive);
}

function drawMenu() {
    ctx.fillStyle = "#222";
    ctx.fillRect(0, tate * tileSize, yoko * tileSize, menuTate);

    drawMoney();
    drawHp();

    drawMoneyButton();
    drawKabeButton();
    drawTowerButton();
    drawItemButton();
    drawStartButton();
    switch (mode) {
        case "money":
            drawMoneyLevelUpButton();
            break;
        case "kabe":
            drawKabe0Button();
            drawKabe2Button();
            drawKabe3Button();
            break;
        case "tower":
            drawTower3Button();
            drawTower4Button();
            drawTower5Button();
            break;

    }
}

function drawMoney() {
    ctx.fillStyle = "#dd0";
    ctx.textBaseline = "middle";
    ctx.textAlign = "right";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("$" + money, yoko * tileSize, (tate + 0.5) * tileSize);
}
function drawHp() {
    ctx.fillStyle = "#dd0";
    ctx.textBaseline = "middle";
    ctx.textAlign = "right";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("Hp:" + hp, yoko * tileSize, (tate + 1.5) * tileSize);
}
function drawGameOver() {
    ctx.fillStyle = "#00000080";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#ff3333";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "48px sans-serif";
    ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2);
}


function loop() {
    if (gameOver) {
        drawGameOver();
    }
    else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawMap();
        drawGrid();
        highlightCheck();
        drawHighLight();

        drawMenu();

        spawnEnemy();
        updateEnemies();
        updateMoney();
        updateTowers();

        updateBullets();

        if (hp <= 0) {
            //gameOver = true;
        }

        if (start) {
            time++;
        }
    }
    requestAnimationFrame(loop);
}

resize();
loop();
