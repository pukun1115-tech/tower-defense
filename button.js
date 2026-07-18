class Button {
    constructor(x, y, w, h, texts, tower, color, canClick, onClick, wakuColor, wakuHantei, kuroHantei) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.texts = texts;
        this.tower = tower;
        this.color = color;
        this.canClick = canClick;
        this.onClick = onClick;//処理
        this.wakuColor = wakuColor;
        this.wakuHantei = wakuHantei;
        this.kuroHantei = kuroHantei;
    }

    draw() {
        drawShikakuRect(this.x, this.y, this.w, this.h, this.color);
        if (this.kuroHantei()) {
            drawShikakuRect(this.x, this.y, this.w, this.h, "#00000080");
        }
        drawShikakuRect
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
        if (!this.canClick()) return;
        if (this.contains(px, py)) {
            this.onClick();
        }
    }
}

let buttons = [];

let towerButton = new Button(
    7,
    tate + 4.5,
    3,
    1,
    [
        {
            text: "タワー",
            x: 8.5,
            y: tate + 5
        }
    ],
    null,
    "#0000ff",
    () => {
        return true;
    },
    () => {
        mode = "tower";
    },
    "#ffffff",
    () => {
        return (mode === "tower");
    },
    () => {
        return false;
    }
);

buttons.push(towerButton);