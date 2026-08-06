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

function onMoneyLevelUpButtonClick() {
    if (
        pointerX > 1 * tileSize &&
        pointerX < 9 * tileSize &&
        pointerY > (tate + 2.5) * tileSize &&
        pointerY < (tate + 4) * tileSize
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
        pointerY > (tate + 2.5) * tileSize &&
        pointerY < (tate + 4) * tileSize
    ) {
        //
    }
}
