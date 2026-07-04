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
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    highlightTile = getTileFromXY(mouseX, mouseY);

    //動いたらドラッグ
    if (Math.abs(e.clientX - startX) > 15 || Math.abs(e.clientY - startY) > 15) {
        moved = true;
    }
});

canvas.addEventListener("pointerup", (e) => {
    e.preventDefault();

    if (!highlightTile) return;
    map[highlightTile.y][highlightTile.x] = 3;
});
