function drawCircle(x, y, size){
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
}

function resize(){
    tileSize = 20;
    menuTate = 80;
    lineWidth = 1;
    const scale = Math.min(
        window.innerWidth / (yoko * tileSize),
        window.innerHeight / (tate * tileSize + menuTate * 2)
    );
    
    tileSize = tileSize * scale;
    menuTate = menuTate * scale;
    lineWidth = lineWidth * scale;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function getTileFromXY(x, y){
    const tileX = Math.floor(x / tileSize);
    const tileY = Math.floor(y / tileSize);

    if(tileX < 0 || tileX >= yoko || tileY < 0 || tileY >= tate){
        return null;
    }

    return {x: tileX, y: tileY};
}

function drawHighLight(){
    if(!highlightTile) return;
    //if(map[highlightTile.y][highlightTile.x])
    ctx.fillStyle = "#0000ff80";
    ctx.fillRect(
        highlightTile.x * tileSize,
        highlightTile.y * tileSize,
        tileSize,
        tileSize
    );
}

function drawGrid() {
    ctx.strokeStyle = "#444";
    ctx.lineWidth = lineWidth;

    //縦
    for (let x = 0; x <= yoko; x++) {
        ctx.beginPath();
        ctx.moveTo(x * tileSize, 0);
        ctx.lineTo(x * tileSize, tate * tileSize    );
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