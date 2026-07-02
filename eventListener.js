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

//タップ
canvas.addEventListener("pointerdown", () => {
    if(!highlightTile) return;
    if(map[highlightTile.y][highlightTile.x] != 3) return;
    tower[highlightTile.y][highlightTile.x] = 1;
});