let pointerX = null;
let pointerY = null;
let isPointerDown = false;

window.addEventListener("resize", resize);

canvas.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    isPointerDown = true;
    pointerX = e.clientX - rect.left;
    pointerY = e.clientY - rect.top;

    highlightTile = getTileFromXY(pointerX, pointerY);
})

canvas.addEventListener("pointermove", (e) => {
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();

    pointerX = e.clientX - rect.left;
    pointerY = e.clientY - rect.top;

    highlightTile = getTileFromXY(pointerX, pointerY);
});

canvas.addEventListener("pointerup", (e) => {
    e.preventDefault();
    isPointerDown = false;

    if (!highlightTile) return;

    if (map[highlightTile.y][highlightTile.x] !== 0) return;
    map[highlightTile.y][highlightTile.x] = 3;
});
