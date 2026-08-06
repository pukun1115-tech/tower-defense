function onLevelUpButtonClick() {
    if (
        pointerX > 1 * tileSize &&
        pointerX < 6 * tileSize &&
        pointerY > (tate + 4.5) * tileSize &&
        pointerY < (tate + 5.5) * tileSize
    ) {
        Game.levelUpMode = null;
        if (Game.mode === "levelUp") {
            Game.mode = "menu";
        }
        else {
            Game.mode = "levelUp";
        }
    }
}

function onMoneyLevelUpButtonClick() {
    if (
        pointerX > 1 * tileSize &&
        pointerX < 9 * tileSize &&
        pointerY > (tate + 2.5) * tileSize &&
        pointerY < (tate + 4) * tileSize
    ) {
        if (Game.levelUpMode === "money") {
            Game.levelUpMode = null;
        }
        else {
            Game.levelUpMode = "money";
        }
    }
}

function onMoneyLevelUp0ButtonClick() {
    if (
        pointerX > 1 * tileSize &&
        pointerX < 9 * tileSize &&
        pointerY > (tate + 0.5) * tileSize &&
        pointerY < (tate + 2) * tileSize
    ) {
        if (Game.moneyLevel[0] === 10) return;
        if (moneyLevelHyou[Game.moneyLevel[0] + 1].cost > Game.money) return;
        Game.money -= moneyLevelHyou[Game.moneyLevel[0] + 1].cost;
        Game.moneyLevel[0]++;
    }
}

function onMoneyLevelUp1ButtonClick() {
    if (
        pointerX > 10 * tileSize &&
        pointerX < 18 * tileSize &&
        pointerY > (tate + 0.5) * tileSize &&
        pointerY < (tate + 2) * tileSize
    ) {
        if (Game.moneyLevel[1] === 10) return;
        if (moneyLevelHyou[Game.moneyLevel[1] + 1].cost > Game.money) return;
        Game.money -= moneyLevelHyou[Game.moneyLevel[1] + 1].cost;
        Game.moneyLevel[1]++;
    }
}

function onTowerLevelUpButtonClick() {
    if (
        pointerX > 10 * tileSize &&
        pointerX < 17 * tileSize &&
        pointerY > (tate + 2.5) * tileSize &&
        pointerY < (tate + 4) * tileSize
    ) {
        if (Game.levelUpMode === "tower") {
            Game.levelUpMode = null;
        }
        else {
            Game.levelUpMode = "tower";
        }
    }
}

function onTowerLevelUp0ButtonClick() {
    if (
        pointerX > 1 * tileSize &&
        pointerX < 9 * tileSize &&
        pointerY > (tate + 0.5) * tileSize &&
        pointerY < (tate + 2) * tileSize
    ) {
        if (Game.towerLevel[0] === 10) return;
        if (towerLevelHyou[Game.towerLevel[0] + 1].cost > Game.money) return;
        Game.money -= towerLevelHyou[Game.towerLevel[0] + 1].cost;
        Game.towerLevel[0]++;
    }
}

function onTowerLevelUp1ButtonClick() {
    if (
        pointerX > 10 * tileSize &&
        pointerX < 18 * tileSize &&
        pointerY > (tate + 0.5) * tileSize &&
        pointerY < (tate + 2) * tileSize
    ) {
        if (Game.towerLevel[1] === 10) return;
        if (towerLevelHyou[Game.towerLevel[1] + 1].cost > Game.money) return;
        Game.money -= towerLevelHyou[Game.towerLevel[1] + 1].cost;
        Game.towerLevel[1]++;
    }
}