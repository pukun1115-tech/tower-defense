window.addEventListener("resize", resize);

//PC
document.addEventListener("pointermove", (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    highlightTile = getTileFromXY(mouseX, mouseY);
});

//スマホ
canvas.addEventListener("touchmove", (e) => {
    e.preventDefault();
},
    {
        passive: false
    });

//タップ
canvas.addEventListener("pointerdown", () => {
    if (!highlightTile) return;
    if (map[highlightTile.y][highlightTile.x] != 3) return;
    tower[highlightTile.y][highlightTile.x] = 1;
});