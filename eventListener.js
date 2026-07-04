window.addEventListener("resize", resize);

//PC
document.addEventListener("pointermove", tileHighlight);

//スマホ
canvas.addEventListener("touchmove", (e) => {
    e.preventDefault();
});

//タップ
canvas.addEventListener("pointerdown", (e) => {
    tileHighlight(e);

    if (!highlightTile) return;
    map[highlightTile.y][highlightTile.x] = 3;
});