function drawCircle(x, y, r, ctx) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
}

function resize() {
    tileSize = 20;
    menuTate = 80;
    lineWidth = 1;
    fontSize = 15;
    const scale = Math.min(
        window.innerWidth / (yoko * tileSize),
        window.innerHeight / (tate * tileSize + menuTate * 2)
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

function drawHighLight() {
    if (!highlightTile) return;
    ctx.fillStyle = "#0000ff80";
    ctx.fillRect(
        highlightTile.x * tileSize,
        highlightTile.y * tileSize,
        tileSize,
        tileSize
    );
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