//canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
//見た目
let tileSize;
let menuTate;
let lineWidth;
let fontSize;
let damages = [];
//タップ
let pointerX = null;
let pointerY = null;
let isPointerDown = false;
//
let highlightTile = null;
const Game = {
    speed: 1,
    hp: 10,
    money: 200,
    moneyLevel: [ 1, 1 ],
    towerLevel: [ 1, 1 ],
    levelUpMode: null,
    gameOver: false,
    gameClear: false,
    start: true,
    mode: "menu",
    time: 0,
    currentWave: -1,//表示は(currentWave + 1)
    waveTimer: 0,
    inWave: false,
    oku: null,
    enemyId: 0
};

const moneyLevelHyou = {
    //tは撃破時お金t倍
    1: { speed: 60, cost: 0, t: 1 },
    2: { speed: 40, cost: 20, t: 1 },
    3: { speed: 30, cost: 30, t: 1 },
    4: { speed: 27, cost: 40, t: 1.1 },
    5: { speed: 24, cost: 50, t: 1.1 },
    6: { speed: 21, cost: 60, t: 1.1 },
    7: { speed: 18, cost: 70, t: 1.2 },
    8: { speed: 15, cost: 80, t: 1.2 },
    9: { speed: 12, cost: 90, t: 1.2 },
    10: { speed: 10, cost: 100, t: 1.5 }
};
const towerLevelHyou = {
    //speed => 発射速度 d => 火力
    1: { speed: 1, cost: 0, d: 1 },
    2: { speed: 0.9, cost: 100, d: 1.1 },
    3: { speed: 0.8, cost: 200, d: 1.2 },
    4: { speed: 0.7, cost: 300, d: 1.3 },
    5: { speed: 0.6, cost: 400, d: 1.4 },
    6: { speed: 0.5, cost: 500, d: 1.5 }
};

const map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

const yoko = 25;
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
    0: { hp: 5, speed: 0.02, color: "#0000ff", size: 0.3, money: 2, breaktime: 300 },
    //ちょっと強い
    1: { hp: 15, speed: 0.015, color: "#ffcc00", size: 0.3, money: 6, breaktime: 300 },
    //足が速い
    2: { hp: 2, speed: 0.05, color: "#00ffff", size: 0.2, money: 1, breaktime: 300 },
    //小ボス
    3: { hp: 100, speed: 0.005, color: "#404040", size: 0.4, money: 20, breaktime: 120 },
    //中ボス
    4: { hp: 600, speed: 0.01, color: "#000000", size: 0.5, money: 75, breaktime: 30 },
    //強い
    5: { hp: 100, speed: 0.02, color: "#8000ff", size: 0.3, money: 1, breaktime: 60 },
    //めちゃ足速い
    6: { hp: 10, speed: 0.1, color: "#00ffff", size: 0.1, money: 3, breaktime: 60 },
    //死んだら大量の敵を出す
    7: { hp: 100, speed: 0.01, color: "#000000", size: 0.1, money: 2, breaktime: 30 },
    //大ボス
    8: { hp: 10000, speed: 0.005, color: "#0000ff", size: 0.3, money: 1000, breaktime: 30 }
}
//その他
const dirs = [
    { x: 1, y: 0 },//right
    { x: -1, y: 0 },//left
    { x: 0, y: 1 },//down
    { x: 0, y: -1 }//up
];
