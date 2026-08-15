function drawMap() {
    for (let y = 0; y < tate; y++) {
        for (let x = 0; x < yoko; x++) {
            switch (map[y][x]) {
                case -1:
                    const hue = (Game.time * 2) % 360;
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
    ctx.strokeStyle = "#404040";
    ctx.lineWidth = lineWidth;
    for (let x = 0; x <= yoko; x++) {
        drawSenRect(x, 0, x, tate);
    }
    for (let y = 0; y <= tate; y++) {
        drawSenRect(0, y, yoko, y);
    }
}

function updateWave() {
    if (!Game.inWave) return;
    if (!waves[Game.currentWave]) return;

    let allSpawned = true;


    for (const rule of waves[Game.currentWave].rules) {
        if (Game.waveTimer < rule.start) {
            allSpawned = false;
            continue;
        }

        const spawned = Math.floor((Game.waveTimer - rule.start) / rule.interval);

        if (spawned < rule.count) {
            allSpawned = false;

            if ((Game.waveTimer - rule.start) % rule.interval === 0) {
                enemies.push(getEnemy(rule.type, 0, 7, 0, 7, null, true, Game.enemyId));
            }
        }
    }

    if (allSpawned && enemies.length === 0) {
        Game.inWave = false;
        Game.speed = 1;
        if (Game.currentWave + 1 === waves.length) {
            Game.gameClear = true;
        }
    }
}

function getEnemy(type, x, y, nx, ny, dir, k, id) {
    const t = enemyTypes[type];
    Game.enemyId++;
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
        dir,
        k,//金落とすか
        id,
        t.breaktime
    );
}

function updateEnemies() {
    for (const e of enemies) {
        if (Game.start) {
            e.update();
        }
        e.draw();
    }
    enemies = enemies.filter(e => e.alive);
}

function updateTowers() {
    for (const t of towers) {
        if (Game.start) {
            t.update();
        }
        t.draw();
    }
    towers = towers.filter(t => t.alive);
}

function updateBullets() {
    for (const b of bullets) {
        if (Game.start) {
            b.update();
        }
        b.draw();
    }
    bullets = bullets.filter(b => b.alive);
}

function drawMenu() {
    ctx.fillStyle = "#222222";
    ctx.fillRect(0, tate * tileSize, yoko * tileSize, menuTate);

    drawMoney();
    drawHp();
    drawSpeed();
    if (Game.inWave) {
        drawWave();
    }

    drawLevelUpButton();
    drawKabeButton();
    drawTowerButton();
    drawHelpButton();
    drawStartButton();

    switch (Game.mode) {
        case "levelUp":
            drawMoneyLevelUpButton();
            drawTowerLevelUpButton();
            if (Game.levelUpMode === "money") {
                drawMoneyLevelUp0Button();
                drawMoneyLevelUp1Button();
            }
            if (Game.levelUpMode === "tower") {
                drawTowerLevelUp0Button();
                drawTowerLevelUp1Button();
            }
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
            drawTower8Button();
            break;

    }
}

function drawMoney() {
    ctx.fillStyle = "#dd0";
    ctx.textBaseline = "middle";
    ctx.textAlign = "right";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("$" + Game.money, yoko * tileSize, (tate + 0.5) * tileSize);
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
    ctx.fillText("Wave" + (Game.currentWave + 1), yoko * tileSize, (tate + 3.5) * tileSize);
}

function drawSpeed() {
    ctx.fillStyle = "#dd0";
    ctx.textBaseline = "middle";
    ctx.textAlign = "right";
    ctx.font = `${fontSize}px sans-serif`;
    if (!Game.start) {
        ctx.fillText("stop", yoko * tileSize, (tate + 2.5) * tileSize);
    }
    else {
        ctx.fillText("x" + (Game.speed), yoko * tileSize, (tate + 2.5) * tileSize);
    }
}

function drawGameOver() {
    ctx.fillStyle = "#ff0000";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText("game over", canvas.width / 2, canvas.height / 2);
    ctx.fillText(`wave${Game.currentWave}までクリア`, canvas.width / 2, canvas.height / 2 + 2 * fontSize);
}

function drawDamages() {
    for (const d of damages) {
        ctx.fillStyle = `rgba(255, 0, 0, ${d.kosa})`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = `${fontSize}px sans-serif`;
        ctx.fillText(d.damage, d.x * tileSize, d.y * tileSize);
        if (Game.start) {
            d.y -= 0.01;
            d.kosa -= 0.01;
        }
    }
    damages = damages.filter(d => (d.kosa > 0));
}

function drawExplosions() {
    for (const e of explosions) {
        drawCircle(e.x * tileSize, e.y * tileSize, e.size, `rgba(0, 0, 0, ${e.kosa})`);
        drawCircle(e.x * tileSize, e.y * tileSize, e.size / 2, `rgba(255, 0, 0, ${e.kosa})`);
        if (Game.start) {
            e.kosa -= 0.005;
        }
    }
    explosions = explosions.filter(e => (e.kosa > 0));
}

//loop

function gameOverLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawGameOver();

    requestAnimationFrame(gameOverLoop);
}

function loop() {
    if (Game.gameOver) {
        gameOverLoop();
    }
    else {
        for (let i = 0; i < Game.speed; i++) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (Game.hp <= 0) {
                Game.gameOver = true;
            }

            drawMap();
            highlightCheck();
            drawHighLight();

            updateEnemies();
            updateTowers();
            updateBullets();

            drawDamages();
            drawExplosions();

            drawMenu();
            updateMoney();

            if (Game.gameClear) {
                ctx.fillStyle = "#00aaff";
                ctx.textBaseline = "middle";
                ctx.textAlign = "center";
                ctx.font = `${fontSize * 4}px sans-serif`;
                ctx.fillText("CLEAR", (yoko / 2) * tileSize, (tate / 2) * tileSize);
            }

            if (Game.start) {
                if (Game.inWave) {
                    updateWave();
                    Game.waveTimer++;
                }

                Game.time++;
            }
        }
        requestAnimationFrame(loop);
    }
}

async function startGame() {
    await initSounds();
    resize();
    loop();
}

startGame();
