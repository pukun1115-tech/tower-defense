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

    switch (map[highlightTile.y][highlightTile.x]) {
        case 0:
            if (oku === 0 || oku >= 4) return;//草にはタワー付きの土台と草は置けない
            break;
        case 1:
            return;//変更できない
        case 2:
            if (oku !== 0) return;//草にするだけ
            break;
        case 3:
            if (oku === 0 || oku >= 4) break;//土台は草にするかタワーを置くか
            return;
        case 4:
        case 5:
            if (oku === 3) break;//タワーなしの土台にしかできない
            return;
    }
    switch (oku) {
        case 0:
            money += 5;
            break;
        case 2:
            if (money < 10) return;
            money -= 10;
            break;
        case 3:
            if (money < 15) return;
            money -= 15;
            break;
        case 4: {
            if (money < 20) return;
            money -= 20;
            const t = new tower(
                highlightTile.x,
                highlightTile.y,
                1,//damage
                "#ffff00",//color
                4,//syurui
                0.4,//size
                5,//range
                60//cooldown
            );
            towers.push(t);
            break;
        }
        case 5: {
            if (money < 40) return;
            money -= 40;
            const t = new tower(
                highlightTile.x,
                highlightTile.y,
                2,
                "#ff00ff",
                5,
                0.4,
                5,
                50
            );
            towers.push(t);
            break;
        }
    }
    map[highlightTile.y][highlightTile.x] = oku;
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
