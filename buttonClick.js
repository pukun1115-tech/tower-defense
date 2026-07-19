function onMoneyButtonClick() {
    if (
        pointerX > 1 * tileSize &&
        pointerX < 3 * tileSize &&
        pointerY > (tate + 4.5) * tileSize &&
        pointerY < (tate + 5.5) * tileSize
    ) {
        if (mode === "money") {
            mode = "menu";
        }
        else {
            mode = "money";
        }
    }
}

function onKabeButtonClick() {
    if (
        pointerX > 4 * tileSize &&
        pointerX < 6 * tileSize &&
        pointerY > (tate + 4.5) * tileSize &&
        pointerY < (tate + 5.5) * tileSize
    ) {
        oku = null;
        if (mode === "kabe") {
            mode = "menu";
        }
        else {
            mode = "kabe";
        }
    }
}

function onTowerButtonClick() {
    if (
        pointerX > 7 * tileSize &&
        pointerX < 10 * tileSize &&
        pointerY > (tate + 4.5) * tileSize &&
        pointerY < (tate + 5.5) * tileSize
    ) {
        oku = null;
        mode = "tower";
    }
}
function onHelpButtonClick() {
    if (
        pointerX > 11 * tileSize &&
        pointerX < 14 * tileSize &&
        pointerY > (tate + 4.5) * tileSize &&
        pointerY < (tate + 5.5) * tileSize
    ) {
        window.open("https://github.com/pukun1115-tech/tower-defense/blob/main/%E3%83%98%E3%83%AB%E3%83%97.txt", "_blank");
    }
}
function onStartButtonClick() {
    if (
        pointerX > 15 * tileSize &&
        pointerX < 18 * tileSize &&
        pointerY > (tate + 4.5) * tileSize &&
        pointerY < (tate + 5.5) * tileSize
    ) {
        if (!inWave) {
            waveTimer = 0;
            inWave = true;
            start = true;
        }
        else {
            start = !start;
        }
    }
}
function onKabe0ButtonClick() {
    if (
        pointerX > 1 * tileSize &&
        pointerX < 5 * tileSize &&
        pointerY > (tate + 2.5) * tileSize &&
        pointerY < (tate + 4) * tileSize
    ) {
        if (oku === 0) {
            oku = null;
        }
        else {
            oku = 0;
        }
    }
}
function onKabe2ButtonClick() {
    if (
        pointerX > 6 * tileSize &&
        pointerX < 10 * tileSize &&
        pointerY > (tate + 2.5) * tileSize &&
        pointerY < (tate + 4) * tileSize
    ) {
        if (oku === 2) {
            oku = null;
        }
        else {
            oku = 2;
        }
    }
}
function onKabe3ButtonClick() {
    if (
        pointerX > 11 * tileSize &&
        pointerX < 16 * tileSize &&
        pointerY > (tate + 2.5) * tileSize &&
        pointerY < (tate + 4) * tileSize
    ) {
        oku = 3;
    }
}
function onTower3ButtonClick() {
    if (
        pointerX > 1 * tileSize &&
        pointerX < 4 * tileSize &&
        pointerY > (tate + 0.5) * tileSize &&
        pointerY < (tate + 1.5) * tileSize
    ) {
        if (oku === 3) {
            oku = null;
        }
        else {
            oku = 3;
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
        if (oku === 4) {
            oku = null;
        }
        else {
            oku = 4;
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
        if (oku === 5) {
            oku = null;
        }
        else {
            oku = 5;
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
        if (oku === 6) {
            oku = null;
        }
        else {
            oku = 6;
        }
    }
}
function onTower7ButtonClick() {
    if (
        pointerX > 1 * tileSize &&
        pointerX < 4.5 * tileSize &&
        pointerY > (tate + 2.5) * tileSize &&
        pointerY < (tate + 3.5) * tileSize
    ) {
        if (oku === 7) {
            oku = null;
        }
        else {
            oku = 7;
        }
    }
}
function onMoneyLevelUpButtonClick() {
    if (
        pointerX > 1 * tileSize &&
        pointerX < 8 * tileSize &&
        pointerY > (tate + 0.5) * tileSize &&
        pointerY < (tate + 2) * tileSize
    ) {
        if (moneyLevel === 10) return;
        if (money < moneyLevelHyou[moneyLevel + 1].money) return;
        money -= moneyLevelHyou[moneyLevel + 1].money;
        moneyLevel++;
    }
}