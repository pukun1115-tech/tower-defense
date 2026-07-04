window.addEventListener("resize", resize);

canvas.addEventListener("pointermove", (e) => {
    e.preventDefault();
    tileHighlight(e);
});

canvas.addEventListener("pointerup", (e) => {
    e.preventDefault();

    if (!highlightTile) return;
    map[highlightTile.y][highlightTile.x] = 3;
});