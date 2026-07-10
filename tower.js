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
        if(this.timer < this.cooldown) return;
        let target = null;
        let minDist = Infinity;

        for(const e of enemies){
            if(!e.alive) continue;
            const dx = e.x - this.x;
            const dy = e.y - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if(dist < this.range && dist < minDist) {
                minDist = dist;
                target = e;
            }
        }

        if(target) {
            const b = new bullet(
                this.x,
                this.y,
                target,
                0.1,
                0.15,
                "red",
                this.attack
            );
            bullets.push(b);
            
            this.timer = 0;
        }
    }
    draw() {
        drawCircle(this.x, this.y, this.size, this.color);
    }
}
