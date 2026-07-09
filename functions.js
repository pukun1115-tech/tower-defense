function drawCircle(x, y, r, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x * tileSize, y * tileSize, r * tileSize, 0, Math.PI * 2);
    ctx.fill();
}

function drawRect(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * tileSize, y * tileSize, w * tileSize, h * tileSize);
}

function resize() {
    tileSize = 20;
    menuTate = 80;
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

function placeKabeCheck() {
    /*
    switch (map[highlightTile.y][highlightTile.x]) {
        case 0:
            if(oku === 0) return;
        case 1:
            return;
        case 2:
            if(oku !== 0) return;
        case 3:
            if(oku !== 0) return;
    }
    */
    updateMoney(1000);
    map[highlightTile.y][highlightTile.x] = oku;
}

function placeTowerCheck() {
    if (!highlightTile) return;
    if (map[highlightTile.y][highlightTile.x] !== 3) return;
    const t = new tower(highlightTile.x, higglightTile.y);
    towers.push(t);
}

function drawHighLight() {
    if (!highlightTile) return;
    drawRect(highlightTile.x, highlightTile.y, 1, 1, "#0000ff80");
}

function drawGrid() {
    ctx.strokeStyle = "#404040";
    ctx.lineWidth = lineWidth;

    //縦
    for (let x = 0; x <= yoko; x++) {
        ctx.beginPath();
        ctx.moveTo(x * tileSize, 0);
        ctx.lineTo(x * tileSize, tate * tileSize);
        ctx.stroke();
    }

    //横
    for (let y = 0; y <= tate; y++) {
        ctx.beginPath();
        ctx.moveTo(0, y * tileSize);
        ctx.lineTo(yoko * tileSize, y * tileSize);
        ctx.stroke();
    }
}

function updateMoney(m) {
    if (m === null) {
        if (time % 12 !== 0) return;
        money++;
        return;
    }
    money += m;
}
