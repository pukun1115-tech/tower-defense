//グローバル変数
let hp = 50;
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
let money = 100;
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
    10: { speed: 10, money: 1000}
}
    
//spawn
let spawnIndex = 0;

const spawnSchedule = [
    { time: 1200, type: 0 },
    { time: 1500, type: 0 },
    { time: 1800, type: 0 },
    { time: 2100, type: 0 },
    { time: 2160, type: 0 },
    { time: 2220, type: 0 },
    { time: 2250, type: 1 },
    { time: 2360, type: 0 },
    { time: 2360, type: 2 },
    { time: 2390, type: 1 },
    { time: 2420, type: 2 },
    { time: 2450, type: 2 },
    { time: 2480, type: 2 },
    { time: 2510, type: 2 },
    { time: 2510, type: 1 },
    { time: 2570, type: 0 }
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
