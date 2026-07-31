//canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
//見た目
let tileSize;
let menuTate;
let lineWidth;
let fontSize;
let damages = [ ];
//タップ
let pointerX = null;
let pointerY = null;
let isPointerDown = false;
//
let highlightTile = null;
const Game = {
    hp: 10,
    money: 200,
    moneyLevel: 1,
    gameOver: false,
    start: true,
    mode: "menu",
    time: 0,
    currentWave: -1,//表示は(currentWave + 1)
    waveTimer: 0,
    inWave: false,
    oku: null,
    enemyId: 0
};
let oku = null;

const moneyLevelHyou = {
    1: { speed: 60, money: 0 },
    2: { speed: 40, money: 20 },
    3: { speed: 30, money: 30 },
    4: { speed: 27, money: 40 },
    5: { speed: 24, money: 50 },
    6: { speed: 21, money: 60 },
    7: { speed: 18, money: 70 },
    8: { speed: 15, money: 80 },
    9: { speed: 12, money: 90 },
    10: { speed: 10, money: 100 }
};
const map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const yoko = 20;
const tate = 15;
//
let towers = [];
let bullets = [];
let enemies = [];
const towerTypes = {
    4: { damage: 1, color: "#ffff00", size: 0.3, range: 2, cooldown: 60, cost: 20, bulletSpeed: 0.1, bulletSize: 0.1, bulletHp: 1 },
    5: { damage: 2, color: "#ff00ff", size: 0.3, range: 3, cooldown: 30, cost: 60, bulletSpeed: 0.2, bulletSize: 0.1, bulletHp: 2 },
    6: { damage: 10, color: "#5522ff", size: 0.35, range: 8, cooldown: 720, cost: 100, bulletSpeed: 0.3, bulletSize: 0.2, bulletHp: 100 },
    7: { damage: 1, color: "#00ff00", size: 0.25, range: 3, cooldown: 10, cost: 300, bulletSpeed: 0.2, bulletSize: 0.1, bulletHp: 2 },
    8: { damage: 100, color: "#ff0000", size: 0.4, range: Infinity, cooldown: 1800, cost: 500, bulletSpeed: 0.4, bulletSize: 0.3, bulletHp: 10 }
};
const enemyTypes = {
    //基本
    0: { hp: 5, speed: 0.02, color: "#0000ff", size: 0.3, money: 2 },
    //ちょっと強い
    1: { hp: 15, speed: 0.015, color: "#ffcc00", size: 0.3, money: 6 },
    //足が速い
    2: { hp: 2, speed: 0.05, color: "#00ffff", size: 0.2, money: 1 },
    //小ボス
    3: { hp: 100, speed: 0.005, color: "#404040", size: 0.4, money: 20 },
    //中ボス
    4: { hp: 600, speed: 0.01, color: "#000000", size: 0.5, money: 75 },
    //強い
    5: { hp: 100, speed: 0.02, color: "#8000ff", size: 0.3, money: 1 },
    //めちゃ足速い
    6: { hp: 10, speed: 0.1, color: "#00ffff", size: 0.1, money: 3 },
    //死んだら大量の敵を出す
    7: { hp: 100, speed: 0.01, color: "#000000", size: 0.1, money: 2 },
    //大ボス
    8: { hp: 1000, speed: 0.005, color: "#0000ff", size: 0.3, money: 1000 }
}
//その他
const dirs = [
    { x: 1, y: 0 },//right
    { x: -1, y: 0 },//left
    { x: 0, y: 1 },//down
    { x: 0, y: -1 }//up
];
