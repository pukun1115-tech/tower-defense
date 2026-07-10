class tower {
    constructor(tileX, tileY, attack, color, syurui, size) {
        this.x = tileX + 0.5;
        this.y = tileY + 0.5;
        this.attack = attack;
        this.color = color;
        this.syurui = syurui;
        this.size = size;
        this.range = 3;
        this.cooldown = 10;
        this.timer = 0;
    }
    update() {
        this.timer++;
        let target = null;
        let minDist = null;

        for(const e of enemies){

        }
    }
    draw() {
        drawCircle(this.x, this.y, this.size, this.color);
    }
}
