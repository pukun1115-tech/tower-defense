function highlightCheck() {
    highlightTile = getTileFromXY(pointerX, pointerY);
}

function placeKabeCheck() {
    if (!highlightTile) return;
    if (map[highlightTile.y][highlightTile.x] !== 0) return;
    map[highlightTile.y][highlightTile.x] = 3;
}