let hp = 50;
let gameOver = false;
let start = true;
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

let mode = "menu";

let oku = null;

let time = 0;

let money = 200;
let moneyLevel = 1;
const moneyLevelHyou = {
    1: { speed: 40, money: 0 },
    2: { speed: 35, money: 50 },
    3: { speed: 30, money: 100 },
    4: { speed: 27, money: 150 },
    5: { speed: 24, money: 200 },
    6: { speed: 21, money: 250 },
    7: { speed: 18, money: 300 },
    8: { speed: 15, money: 350 },
    9: { speed: 12, money: 400 },
    10: { speed: 10, money: 450 }
};

let currentWave = 0;
let waveTimer = 0;
let inWave = false;

const waves = [
    {
        rules: [
            { start: 120, interval: 240, count: 5, type: 0 }
        ]
    },
    {
        rules: [
            { start: 120, interval: 60, count: 10, type: 0 }
        ]
    },
    {
        rules: [
            { start: 0, interval: 60, count: 10, type: 2 }
        ]
    },
    {
        rules: [
            { start: 0, interval: 120, count: 5, type: 1 },
            { start: 150, interval: 90, count: 15, type: 0 }
        ]
    },
    {
        rules: [
            { start: 0, interval: 1, count: 1, type: 3 }
        ]
    },
    {
        rules: [
            { start: 240, interval: 20, count: 3, type: 2 },
            { start: 480, interval: 20, count: 3, type: 2 },
            { start: 720, interval: 20, count: 3, type: 2 },
            { start: 0, interval: 90, count: 15, type: 1 }
        ]
    },
    {
        rules: [
            { start: 120, interval: 60, count: 10, type: 1 },
            { start: 240, interval: 30, count: 20, type: 2 },
            { start: 180, interval: 20, count: 30, type: 0 }
        ]
    },
    {
        rules: [
            { start: 120, interval: 360, count: 5, type: 3 },
            { start: 60, interval: 20, count: 100, type: 1 }
        ]
    },
    {
        rules: [
            { start: 0, interval: 60, count: 10, type: 1 },
            { start: 360, interval: 5, count: 12, type: 2 },
            { start: 720, interval: 5, count: 12, type: 2 }
        ]
    },
    {
        rules: [
            { start: 0, interval: 150, count: 5, type: 3 },
            { start: 900, interval: 1, count: 1, type: 4 }
        ]
    },
    {
        rules: [
            { start: 600, interval: 1, count: 60, type: 2 },
            { start: 1800, interval: 1, count: 120, type: 2 },
            { start: 3600, interval: 1, count: 180, type: 2 }
        ]
    },
    {
        rules: [
            { start: 360, interval: 30, count: 40, type: 1 },
            { start: 0, interval: 240, count: 3, type: 3 },
            { start: 720, interval: 1, count: 120, type: 2 },
            { start: 1800, interval: 1, count: 48, type: 2 }
        ]
    },
    {
        rules: [
            { start: 0, interval: 120, count: 10, type: 5 }
        ]
    },
    {
        rules: [
            { start: 0, interval: 30, count: 20, type: 5 },
            { start: 5, interval: 30, count: 20, type: 1 },
            { start: 10, interval: 30, count: 20, type: 0 }
        ]
    },
    {
        rules: [
            { start: 180, interval: 300, count: 3, type: 4 }
        ]
    },
    {
        rules: [
            { start: 0, interval: 120, count: 10, type: 0 },
            { start: 1500, interval: 6, count: 100, type: 6 }
        ]
    }
];
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
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1],
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
    4: { damage: 1, color: "#ffff00", size: 0.4, range: 4, cooldown: 90, cost: 20, bulletSpeed: 0.1 },
    5: { damage: 2, color: "#ff00ff", size: 0.4, range: 6, cooldown: 60, cost: 60, bulletSpeed: 0.2 },
    //上下左右
    6: { damage: 4, color: "#5522ff", size: 0.35, range: Infinity, cooldown: 360, cost: 100, bulletSpeed: 0.3 }
};

let bullets = [];

let enemies = [];

const enemyTypes = {
    //基本
    0: { hp: 5, speed: 0.02, color: "#0000ff", size: 0.3, money: 5 },
    //ちょっと強い
    1: { hp: 15, speed: 0.015, color: "#ffcc00", size: 0.3, money: 10 },
    //足が速い
    2: { hp: 2, speed: 0.05, color: "#00ffff", size: 0.2, money: 1 },
    //足が遅くて体力だけ多い
    //小ボス
    3: { hp: 300, speed: 0.005, color: "#404040", size: 0.4, money: 50 },
    //中ボス
    4: { hp: 1200, speed: 0.01, color: "#000000", size: 0.5, money: 200 },
    //強い
    5: { hp: 50, speed: 0.02, color: "#8000ff", size: 0.3, money: 5 },
    //
    6: { hp: 10, speed: 0.05, color: "#00ffff", size: 0.1, money: 30 }
};

const dirs = [
    { x: 1, y: 0 },//right
    { x: -1, y: 0 },//left
    { x: 0, y: 1 },//down
    { x: 0, y: -1 }//up
];
