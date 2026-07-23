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
                default:
                    drawShikakuRect(x, y, 1, 1, "#000000");
                    break;
            }

        }
    }
}
function updateWave() {
    if (!inWave) return;
    if (!waves[currentWave]) return;

    let allSpawned = true;


    for (const rule of waves[currentWave].rules) {
        if (waveTimer < rule.start) {
            allSpawned = false;
            continue;
        }

        const spawned = Math.floor((waveTimer - rule.start) / rule.interval);

        if (spawned < rule.count) {
            allSpawned = false;

            if ((waveTimer - rule.start) % rule.interval === 0) {
                enemies.push(getEnemy(rule.type, 0, 7, 0, 7, null));
            }
        }
    }

    if (allSpawned && enemies.length === 0) {
        inWave = false;
        currentWave++;
    }
}

function getEnemy(type, x, y, nx, ny, dir) {
    const t = enemyTypes[type];
    return new enemy(
        x,
        y,
        nx,
        ny,
        t.hp,
        t.color,
        t.speed,
        t.size,
        t.money,
        type,
        dir
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
    if (inWave) {
        drawWave();
    }

    drawMoneyButton();
    drawKabeButton();
    drawTowerButton();
    drawHelpButton();
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
            drawTower6Button();
            drawTower7Button();
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
    ctx.fillText("Hp:" + Game.hp, yoko * tileSize, (tate + 1.5) * tileSize);
}
function drawWave() {
    ctx.fillStyle = "#dd0";
    ctx.textBaseline = "middle";
    ctx.textAlign = "right";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("Wave" + (currentWave + 1), yoko * tileSize, (tate + 2.5) * tileSize);
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
        resize();

        drawMap();
        drawGrid();
        highlightCheck();
        drawHighLight();

        drawMenu();
        updateMoney();

        updateEnemies();
        updateTowers();
        updateBullets();

        if (hp <= 0) {
            //gameOver = true;
        }

        if (start) {
            if (inWave) {
                updateWave();
                waveTimer++;
            }

            time++;
        }
    }
    requestAnimationFrame(loop);
}
function gameOverLoop() {
    //
    requestAnimationFrame(gameOverLoop);
}

resize();
loop();
