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


function highlightCheck() {
    const tileX = Math.floor(pointerX / tileSize);
    const tileY = Math.floor(pointerY / tileSize);

    if (tileX < 0 || tileX >= yoko || tileY < 0 || tileY >= tate) {
        highlightTile = null;
        return;
    }
    if (mode === "kabe") {
        if (oku === null) {
            highlightTile = { x: tileX, y: tileY, type: "y" };
            return;
        }
        if (oku === 0) {
            //nの場合
            if (map[tileY][tileX] === -1 || map[tileY][tileX] === 0 || map[tileY][tileX] === 1 || map[tileY][tileX] > 3) {
                highlightTile = { x: tileX, y: tileY, type: "n" };
                return;
            }
            //y
            highlightTile = { x: tileX, y: tileY, type: "y" };
            return;
        }
        if (oku === 1 || oku === 2 || oku === 3) {
            //ゲームの設定として
            if (map[tileY][tileX] !== 0) {
                highlightTile = { x: tileX, y: tileY, type: "n" };
                return;
            }
            //敵の道をふさがない
            if (oku === 3) {
                if (!canPlaceWallForEnemy(tileX, tileY)) {
                    highlightTile = { x: tileX, y: tileY, type: "n" };
                    return;
                }
            }
            //敵にかぶらない
            for (const e of enemies) {
                if (!e.alive) continue;
                if ((Math.floor(e.x) === tileX && Math.floor(e.y) === tileY) || (Math.floor(e.nextTileX) === tileX && Math.floor(e.nextTileY) === tileY)) {
                    highlightTile = { x: tileX, y: tileY, type: "n" };
                    return;
                }
            }
            highlightTile = { x: tileX, y: tileY, type: "y" };
            return;
        }
        return;
    }
    if (mode === "tower") {
        if (oku === null) {
            highlightTile = { x: tileX, y: tileY, type: "y" };
            return;
        }
        if (oku === 3) {
            if (map[tileY][tileX] <= 3) {
                highlightTile = { x: tileX, y: tileY, type: "n" };
                return;
            }
            highlightTile = { x: tileX, y: tileY, type: "y" };
            return;
        }
        if (oku === 4 || oku === 5 || oku === 6 || oku === 7) {
            if (map[tileY][tileX] !== 3) {
                highlightTile = { x: tileX, y: tileY, type: "n" };
                return;
            }
            highlightTile = { x: tileX, y: tileY, type: "y" };
            return;
        }
        highlightTile = { x: tileX, y: tileY, type: "n" };
        return;
    }
    highlightTile = { x: tileX, y: tileY, type: "y" };
}

function placeCheck() {
    if (!highlightTile) return;
    if (oku === null) return;

    if (mode === "kabe") {
        switch (oku) {
            case 0:
                if (highlightTile.type !== "y") return;
                map[highlightTile.y][highlightTile.x] = 0;
                break;
            case 2:
                if (highlightTile.type !== "y") return;
                if (money < 10) return;
                money -= 10;
                map[highlightTile.y][highlightTile.x] = 2;
                break;
            case 3:
                if (highlightTile.type !== "y") return;
                if (money < 15) return;
                money -= 15;
                map[highlightTile.y][highlightTile.x] = 3;
                break;
        }
        return;
    }
    if (mode === "tower") {
        if (oku === 3) {
            if (highlightTile.type !== "y") return;
            money += 10;
            map[highlightTile.y][highlightTile.x] = 3;
        }
        else {
            if (highlightTile.type !== "y") return;
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
                    o.bulletSpeed,
                    o.bulletSize,
                    o.kan
                )
            );
        }

    }
}

function canPlaceWallForEnemy(x, y) {

    const old = map[y][x];
    map[y][x] = oku;

    for (const e of enemies) {
        if (!e.alive) continue;

        const path = bfs(Math.floor(e.x), Math.floor(e.y), 19, 7);

        if (!path) {
            map[y][x] = old;
            return false;
        }
    }

    const spawnPath = bfs(0, 7, 19, 7);

    if (!spawnPath) {
        map[y][x] = old;
        return false;
    }

    map[y][x] = old;
    return true;
}

function drawHighLight() {
    if (!highlightTile) return;

    if (highlightTile.type === "y") {
        drawShikakuRect(highlightTile.x, highlightTile.y, 1, 1, "#0000ff60");
    }
    else {
        drawShikakuRect(highlightTile.x, highlightTile.y, 1, 1, "#ff000060");
    }
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
    if (!start) return;
    if (time % moneyLevelHyou[Game.moneyLevel].speed !== 0) return;
    money++;
}
