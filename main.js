const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = tileSize * yoko;
canvas.height = tileSize * tate;

const keys = {};

let highlightTile = null;

document.addEventListener("keydown", (e) => {
    keys[e.code] = true;
});
document.addEventListener("keyup", (e) => {
    keys[e.code] = false;
});

window.addEventListener("resize",resize);

resize();

function resize(){
    tileSize = calcTileSize();
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function calcTileSize(){
    const sizeX = Math.floor(window.innerWidth / yoko);
    const sizeY = Math.floor(window.innerHeight / tate);

    return Math.min(sizeX, sizeY);
}



function getTileFromXY(x, y){
    const tileX = Math.floor(x / tileSize);
    const tileY = Math.floor(y / tileSize);

    if(tileX < 0 || tileX >= yoko || tileY < 0 || tileY >= tate){
        return null;
    }

    return { x: tileX, y: tileY };
}

//PC
document.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    highlightTile = getTileFromXY(mouseX, mouseY);
});

canvas.addEventListener("click", () => {
    if(!highlightTile) return;
    map[highlightTile.y][highlightTile.x] = 1;
});

//スマホ
canvas.addEventListener("touchmove", (e) => {
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    const mouseX = touch.clientX - rect.left;
    const mouseY = touch.clientY - rect.top;

    highlightTile = getTileFromXY(mouseX, mouseY);
});

function drawGrid() {
    ctx.strokeStyle = "#444";
    ctx.lineWidth = 2;

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

function drawHighLight(){
    if(!highlightTile) return;

    ctx.fillStyle = "#0000ff80"
    ctx.fillRect(
        highlightTile.x * tileSize,
        highlightTile.y * tileSize,
        tileSize,
        tileSize
    );
}

function drawMap(){
    for(let y = 0;y < tate;y++){
        for(let x = 0;x < yoko;x++){
            if(map[y][x] === 0){
                ctx.fillStyle = "#003300";
            }
            else if(map[y][x] === 1){
                ctx.fillStyle = "#ffffff";
            }

            ctx.fillRect(
                x * tileSize,
                y * tileSize,
                tileSize,
                tileSize
            );
        }
    }
}

function loop(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    drawMap();
    drawGrid();
    drawHighLight();

    requestAnimationFrame(loop);
}

loop();