function drawCircle(x, y, r, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x * tileSize, y * tileSize, r * tileSize, 0, Math.PI * 2);
    ctx.fill();
}

function drawShikakuRect(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * tileSize, y * tileSize, w * tileSize, h * tileSize);
}

function drawSenRect(x0, y0, x1, y1) {
    ctx.beginPath();
    ctx.moveTo(x0 * tileSize, y0 * tileSize);
    ctx.lineTo(x1 * tileSize, y1 * tileSize);
    ctx.stroke();
}

function resize() {
    tileSize = 20;
    menuTate = 120;
    lineWidth = 1;
    fontSize = 15;
    const scale = Math.min(
        window.innerWidth / (yoko * tileSize),
        window.innerHeight / (tate * tileSize + menuTate)
    );

    tileSize = tileSize * scale;
    menuTate = menuTate * scale;
    lineWidth = lineWidth * scale;
    fontSize = fontSize * scale;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function getTileFromXY(x, y) {
    const tileX = Math.floor(x / tileSize);
    const tileY = Math.floor(y / tileSize);

    if (tileX < 0 || tileX >= yoko || tileY < 0 || tileY >= tate) {
        return null;
    }

    return { x: tileX, y: tileY };
}

function highlightCheck() {
    highlightTile = getTileFromXY(pointerX, pointerY);
}

function placeCheck() {
    if (!highlightTile) return;
    if (oku === null) return;

    const tile = map[highlightTile.y][highlightTile.x];
    if (mode === "kabe") {
        switch (oku) {
            case 0:
                if (tile === 2 || tile === 3) {
                    money += 5;
                    map[highlightTile.y][highlightTile.x] = 0;
                }
                break;
            case 2:
                if (tile === 0) {
                    if (money < 10) return;
                    money -= 10;
                    map[highlightTile.y][highlightTile.x] = 2;
                }
                break;
            case 3:
                if (tile === 0) {
                    if (money < 15) return;
                    money -= 15;
                    map[highlightTile.y][highlightTile.x] = 3;
                }
                break;
        }
    }
    else if (mode === "tower") {
        if (oku === 3) {
            if (tile > 3) {
                money += 10;
                map[highlightTile.y][highlightTile.x] = 3;
            }
        }
        else {
            if (tile === 3) {
                const o = towerTypes[oku];
                if (money < o.cost) return;
                money -= o.cost;
                map[highlightTile.y][highlightTile.x] = oku;
                towers.push(
                    new tower(
                        highlightTile.x,
                        highlightTile.y,
                        o.damage,
                        o.color,
                        oku,//syurui
                        o.size,
                        o.range,
                        o.cooldown,
                        o.bulletSpeed
                    )
                );
            }
        }
    }
}

function drawHighLight() {
    if (!highlightTile) return;
    drawShikakuRect(highlightTile.x, highlightTile.y, 1, 1, "#0000ff80");
}

function drawGrid() {
    ctx.strokeStyle = "#404040";
    ctx.lineWidth = lineWidth;
    for (let x = 0; x <= yoko; x++) {
        drawSenRect(x, 0, x, tate);
    }
    for (let y = 0; y <= tate; y++) {
        drawSenRect(0, y, yoko, y);
    }
}

function updateMoney() {
    if (time % moneyLevelHyou[moneyLevel].speed !== 0) return;
    money++;
}
