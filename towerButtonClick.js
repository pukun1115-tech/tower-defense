function onTower3ButtonClick() {
    if (
        pointerX > 1 * tileSize &&
        pointerX < 4 * tileSize &&
        pointerY > (tate + 0.5) * tileSize &&
        pointerY < (tate + 1.5) * tileSize
    ) {
        if (Game.oku === 3) {
            Game.oku = null;
        }
        else {
            Game.oku = 3;
        }
    }
}
function onTower4ButtonClick() {
    if (
        pointerX > 5 * tileSize &&
        pointerX < 8 * tileSize &&
        pointerY > (tate + 0.5) * tileSize &&
        pointerY < (tate + 1.5) * tileSize
    ) {
        if (Game.oku === 4) {
            Game.oku = null;
        }
        else {
            Game.oku = 4;
        }
    }
}

function onTower5ButtonClick() {
    if (
        pointerX > 9 * tileSize &&
        pointerX < 12 * tileSize &&
        pointerY > (tate + 0.5) * tileSize &&
        pointerY < (tate + 1.5) * tileSize
    ) {
        if (Game.oku === 5) {
            Game.oku = null;
        }
        else {
            Game.oku = 5;
        }
    }
}
function onTower6ButtonClick() {
    if (
        pointerX > 13 * tileSize &&
        pointerX < 16 * tileSize &&
        pointerY > (tate + 0.5) * tileSize &&
        pointerY < (tate + 1.5) * tileSize
    ) {
        if (Game.oku === 6) {
            Game.oku = null;
        }
        else {
            Game.oku = 6;
        }
    }
}
function onTower7ButtonClick() {
    if (
        pointerX > 1 * tileSize &&
        pointerX < 4 * tileSize &&
        pointerY > (tate + 2.5) * tileSize &&
        pointerY < (tate + 3.5) * tileSize
    ) {
        if (Game.oku === 7) {
            Game.oku = null;
        }
        else {
            Game.oku = 7;
        }
    }
}

function onTower8ButtonClick() {
    if (
        pointerX > 5 * tileSize &&
        pointerX < 8 * tileSize &&
        pointerY > (tate + 2.5) * tileSize &&
        pointerY < (tate + 3.5) * tileSize
    ) {
        if (Game.oku === 8) {
            Game.oku = null;
        }
        else {
            Game.oku = 8;
        }
    }
}