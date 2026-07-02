const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let highlightTile = null;

window.addEventListener("resize",resize);

//PC
document.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    highlightTile = getTileFromXY(mouseX, mouseY);
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

canvas.addEventListener("click", () => {
    if(!highlightTile) return;
    tower[highlightTile.y][highlightTile.x] = 2;
});

function resize(){
    tileSize = 20;
    menuTate = 80;
    const scale = Math.min(
        window.innerWidth / (yoko * tileSize),
        window.innerHeight / (tate * tileSize + menuTate)
    );
    
    tileSize *= scale;
    menuTate *= scale;
    
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
    //if(map[highlightTile.y][highlightTile.x])
    ctx.fillStyle = "#0000ff80";
    ctx.fillRect(
        highlightTile.x * tileSize,
        highlightTile.y * tileSize,
        tileSize,
        tileSize
    );
}

function drawTower(x, y){
    ctx.beginPath();
    ctx.arc(x,y,tileSize * 0.35,0,Math.PI * 2);
    ctx.fill();
}

function drawMap(){
    for(let y = 0;y < tate;y++){
        for(let x = 0;x < yoko;x++){
            switch(map[y][x]){
                case 0:
                    ctx.fillStyle = "#008800";
                    break;
                case 1:
                    ctx.fillStyle = "#ffffff";
                    break;
            }

            ctx.fillRect(
                x * tileSize,
                y * tileSize,
                tileSize,
                tileSize
            );

            if(tower[y][x] != 0){
                ctx.fillStyle = "#ffff00";
                drawTower(x * tileSize + tileSize / 2, y * tileSize + tileSize / 2);
            }
        }
    }
}

function drawMenu(){
    ctx.fillStyle = "#000000";
    ctx.fillRect(
        0,
        tate * tileSize,
        yoko * tileSize,
        menuTate
    );
}

function loop(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    drawMap();
    drawGrid();
    drawHighLight();
    drawMenu();

    requestAnimationFrame(loop);
}

resize();
loop();
