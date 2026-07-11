//グローバル変数
//初期設定
//
let hp = 50;
let gameOver = false;
//canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//見た目
let menuTate;
let lineWidth;
let highlightTile = null;
let fontSize;
//タップ
let pointerX = null;
let pointerY = null;
let isPointerDown = false;
//menu
let mode = "menu";
//置くブロック
let oku = null;
//時間
let time = 0;
//money
let money = 200;
let moneyLevel = 1;
const moneyLevelHyou = {
    1: { speed: 60, money: 0 },
    2: { speed: 55, money: 100 },
    3: { speed: 50, money: 150 },
    4: { speed: 45, money: 200 },
    5: { speed: 40, money: 250 },
    6: { speed: 35, money: 300 },
    7: { speed: 30, money: 350 },
    8: { speed: 25, money: 400 },
    9: { speed: 20, money: 600 },
    10: { speed: 10, money: 1000 }
}

//spawn
const spawnRules = [
    { start: 600, interval: 240, count: 2, type: 0 },
    { start: 1200, interval: 60, count: 20, type: 0 },
    { start: 2100, interval: 10, count: 3, type: 2 },
    { start: 2160, interval: 30, count: 40, type: 1 }
]
//map
let tileSize;

const map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const yoko = map[0].length;//20
const tate = map.length;//15
//tower
let towers = [];
const towerTypes = {
    4: { damage: 1, color: "#ffff00", size: 0.4, range: 5, cooldown: 60, cost: 20, bulletSpeed: 0.1 },
    5: { damage: 2, color: "#ff00ff", size: 0.4, range: 5, cooldown: 60, cost: 40, bulletSpeed: 0.3 }
};
//bullets
let bullets = [];
//enemy
let enemies = [];

const enemyTypes = {
    //基本
    0: { hp: 5, speed: 0.02, color: "#0000ff", size: 0.3 },
    //ちょっと強い
    1: { hp: 10, speed: 0.015, color: "#00ff00", size: 0.3 },
    //足が速い
    2: { hp: 3, speed: 0.05, color: "#00ffff", size: 0.2 }
}

const dirs = [
    { x: 1, y: 0 },//right
    { x: -1, y: 0 },//left
    { x: 0, y: 1 },//down
    { x: 0, y: -1 }//up
];
