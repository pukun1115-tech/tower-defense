class tower {
    constructor(tileX, tileY) {
        this.x = tileX + 0.5;
        this.y = tileY + 0.5;
    }
    update() {
        //
    }
    draw() {
        drawCircle(this.x, this.y, 0.4, "#ffff00");
    }
}
