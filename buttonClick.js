function onLevelUpButtonClick() {
    if (
        pointerX > 1 * tileSize &&
        pointerX < 6 * tileSize &&
        pointerY > (tate + 4.5) * tileSize &&
        pointerY < (tate + 5.5) * tileSize
    ) {
        if (Game.mode === "levelUp") {
            Game.mode = "menu";
        }
        else {
            Game.mode = "levelUp";
        }
    }
}

function onKabeButtonClick() {
    if (
        pointerX > 7 * tileSize &&
        pointerX < 9 * tileSize &&
        pointerY > (tate + 4.5) * tileSize &&
        pointerY < (tate + 5.5) * tileSize
    ) {
        Game.oku = null;
        if (Game.mode === "kabe") {
            Game.mode = "menu";
        }
        else {
            Game.mode = "kabe";
        }
    }
}

function onTowerButtonClick() {
    if (
        pointerX > 10 * tileSize &&
        pointerX < 13 * tileSize &&
        pointerY > (tate + 4.5) * tileSize &&
        pointerY < (tate + 5.5) * tileSize
    ) {
        Game.oku = null;
        if (Game.mode === "tower") {
            Game.mode = "menu";
        }
        else {
            Game.mode = "tower";
        }
    }
}

function onHelpButtonClick() {
    if (
        pointerX > 14 * tileSize &&
        pointerX < 17 * tileSize &&
        pointerY > (tate + 4.5) * tileSize &&
        pointerY < (tate + 5.5) * tileSize
    ) {
        window.open('help.txt', '_blank');
        //window.open("https://github.com/pukun1115-tech/tower-defense/blob/main/help.txt", "_blank");
    }
}

function onStartButtonClick() {
    if (
        pointerX > 18 * tileSize &&
        pointerX < 21 * tileSize &&
        pointerY > (tate + 4.5) * tileSize &&
        pointerY < (tate + 5.5) * tileSize
    ) {
        if (!Game.inWave) {
            Game.speed = 1;
            Game.waveTimer = 0;
            Game.inWave = true;
            Game.start = true;
            Game.currentWave++;
        }
        else {
            if (Game.speed === 1) {
                Game.speed = 2;
            }
            else {
                Game.start = !Game.start;
            }
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
        if (Game.oku === 0) {
            Game.oku = null;
        }
        else {
            Game.oku = 0;
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
        if (Game.oku === 2) {
            Game.oku = null;
        }
        else {
            Game.oku = 2;
        }
    }
}

function onKabe3ButtonClick() {
    if (
        pointerX > 11 * tileSize &&
        pointerX < 15 * tileSize &&
        pointerY > (tate + 2.5) * tileSize &&
        pointerY < (tate + 4) * tileSize
    ) {
        if (Game.oku === 3) {
            Game.oku = null;
        }
        else {
            Game.oku = 3;
        }
    }
}

function onMoneyLevelUpButtonClick() {
    if (
        pointerX > 1 * tileSize &&
        pointerX < 9 * tileSize &&
        pointerY > (tate + 0.5) * tileSize &&
        pointerY < (tate + 2) * tileSize
    ) {
        if (Game.moneyLevel === 10) return;
        if (Game.money < moneyLevelHyou[Game.moneyLevel + 1].cost) return;
        Game.money -= moneyLevelHyou[Game.moneyLevel + 1].cost;
        Game.moneyLevel++;
    }
}

function onTowerLevelUpButtonClick() {
    if (
        pointerX > 10 * tileSize &&
        pointerX < 17 * tileSize &&
        pointerY > (tate + 0.5) * tileSize &&
        pointerY < (tate + 2) * tileSize
    ) {
        //
    }
}
