class Button {
    constructor(x, y, w, h, texts, tower, color, canClickandDraw, onClick, wakuColor, wakuHantei, kuroHantei) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.texts = texts;
        this.tower = tower;
        this.color = color;
        this.canClickandDraw = canClickandDraw;
        this.onClick = onClick;//処理
        this.wakuColor = wakuColor;
        this.wakuHantei = wakuHantei;
        this.kuroHantei = kuroHantei;
    }

    draw() {
        if (!this.canClickandDraw()) return;
        drawShikakuRect(this.x, this.y, this.w, this.h, this.color);
        if (this.kuroHantei()) {
            drawShikakuRect(this.x, this.y, this.w, this.h, "#00000080");
        }
        if (this.wakuHantei()) {
            ctx.strokeStyle = this.wakuColor;
            ctx.lineWidth = 0.05 * tileSize;
            ctx.strokeRect(this.x * tileSize, this.y * tileSize, this.w * tileSize, this.h * tileSize);
        }
        for (const t of this.texts) {
            ctx.fillStyle = t.fillStyle ?? "#000000";
            ctx.font = t.font ?? `${fontSize}px sans-serif`;
            ctx.textAlign = t.textAlign ?? "center";
            ctx.textBaseline = t.textBaseline ?? "middle";
            ctx.fillText(t.text, t.x * tileSize, t.y * tileSize);
        }
        if (this.tower) {
            const t = this.tower;
            drawCircle(t.x, t.y, t.r, t.color);
        }
    }

    contains(px, py) {
        return (
            px >= this.x * tileSize &&
            px <= (this.x + this.w) * tileSize &&
            py >= this.y * tileSize &&
            py <= (this.y + this.h) * tileSize
        );
    }

    click(px, py) {
        if (!this.canClickandDraw()) return;
        if (this.contains(px, py)) {
            this.onClick();
        }
    }
}

const buttons = [];

const moneyButton = new Button(
    1, tate + 4.5, 2, 1,
    [{ text: "お金", x: 2, y: tate + 5 }],
    null,
    "#ffff00",
    () => true,
    () => mode = (mode === "money" ? "menu" : "money"),
    "#ffffff",
    () => mode === "money",
    () => false
);
const kabeButton = new Button(
    4, tate + 4.5, 2, 1,
    [{ text: "かべ", x: 5, y: tate + 5 }],
    null,
    "#00dd00",
    () => true,
    () => mode = (mode === "kabe" ? "menu" : "kabe"),
    "#ffffff",
    () => mode === "kabe",
    () => false
)
const towerButton = new Button(
    7, tate + 4.5, 3, 1,
    [{ text: "タワー", x: 8.5, y: tate + 5 }],
    null,
    "#0000ff",
    () => true,
    () => mode = (mode === "tower" ? "menu" : "tower"),
    "#ffffff",
    () => mode === "tower",
    () => false
);
const helpButton = new Button(
    11, tate + 4.5, 3, 1,
    [{ text: "ヘルプ", x: 12.5, y: tate + 5 }],
    null,
    "#ff0000",
    () => true,
    () => window.open("https://github.com/pukun1115-tech/tower-defense/blob/main/%E3%83%98%E3%83%AB%E3%83%97.txt", "_blank"),
    null,
    () => false,
    () => false
);
const startButton = new Button(
    15, tate + 4.5, 3, 1,
    [{ fillStyle: "#7d2b2b", font: `${fontSize}px Impact`, text: "start", x: 16.5, y: tate + 5 }],
    null,
    "#ffffff",
    () => true,
    () => null,
    null,
    () => false,
    () => false
);
buttons.push(moneyButton);
buttons.push(kabeButton);
buttons.push(towerButton);
buttons.push(helpButton);
buttons.push(startButton);