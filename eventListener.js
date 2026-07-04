let startX = 0;
let startY = 0;
let moved = false;

window.addEventListener("resize", resize);

canvas.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    moved = false;
    startX = e.clientX;
    startY = e.clientY;
})

canvas.addEventListener("pointermove", (e) => {
    e.preventDefault();
    tileHighlight(e);

    //動いたらドラッグ
    if (Math.abs(e.clientX - startX) > 15 || Math.abs(e.clientY - startY) > 15) {
        moved = true;
    }
});

canvas.addEventListener("pointerup", (e) => {
    e.preventDefault();

    if (moved) return;//動いたならタップではない

    tileHighlight(e);
    if (!highlightTile) return;
    map[highlightTile.y][highlightTile.x] = 3;
});
