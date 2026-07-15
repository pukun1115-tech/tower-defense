class tower {
    constructor(tileX, tileY, damage, color, syurui, size, range, cooldown, bulletSpeed) {
        this.alive = true;//生きてる!!!
        this.x = tileX + 0.5;
        this.y = tileY + 0.5;
        this.damage = damage;
        this.color = color;
        this.syurui = syurui;
        this.size = size;
        this.range = range;
        this.cooldown = cooldown;
        this.bulletSpeed = bulletSpeed;
        this.timer = 0;
    }
    update() {
        this.timer++;
        if (this.timer < this.cooldown) return;
        let target = null;
        let minDist = Infinity;

        for (const e of enemies) {
            if (!e.alive) continue;
            const dx = e.x - this.x;
            const dy = e.y - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < this.range && dist < minDist) {
                minDist = dist;
                target = e;
            }
        }

        if (target) {
            const dx = target.x - this.x;
            const dy = target.y - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const b = new bullet(
                this.x,
                this.y,
                dx / dist,
                dy / dist,
                this.bulletSpeed,
                0.15,//size
                this.color,
                this.damage,
            );
            bullets.push(b);

            this.timer = 0;
        }
    }
    draw() {
        drawCircle(this.x, this.y, this.size, this.color);
        //死んじゃった?
        if (map[Math.floor(this.y)][Math.floor(this.x)] !== this.syurui) {
            this.alive = false;
            return;
        }
    }
}
