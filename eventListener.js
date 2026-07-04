window.addEventListener("resize", resize);

canvas.addEventListener("pointermove", (e) => {
    e.preventDefault();
    tileHighlight(e);
});

canvas.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    tileHighlight(e);

    if (!highlightTile) return;
    map[highlightTile.y][highlightTile.x] = 3;
});