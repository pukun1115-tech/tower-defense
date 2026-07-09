class tower {
    constructor(tileX, tileY, attack, color, syurui, size) {
        this.x = tileX + 0.5;
        this.y = tileY + 0.5;
        this.attack = attack;
        this.color = color;
        this.syurui = syurui;
        this.size = size;
    }
    update() {
        //
    }
    draw() {
        drawCircle(this.x, this.y, this.size, this.color);
    }
}
