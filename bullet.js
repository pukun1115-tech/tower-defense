class bullet {
    constructor(x, y, dx, dy, speed, size, color, damage, kanntuu) {
        this.x = x;
        this.y = y;

        this.dx = dx;
        this.dy = dy;

        this.speed = speed;
        this.size = size;
        this.color = color;
        this.damage = damage;
        this.kanntuu = kanntuu;
        this.alive = true;
    }
    update() {
        this.x += this.dx * this.speed;
        this.y += this.dy * this.speed;

        if (this.x < 0 || this.x > yoko || this.y < 0 || this.y > tate) {
            this.alive = false;
            return;
        }
        for (const e of enemies) {
            if (!e.alive) continue;

            const dx = e.x - this.x;
            const dy = e.y - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < this.size + e.size) {
                e.hp -= this.damage;
                if (!this.kanntuu) {
                    this.alive = false;
                    break;
                }
            }
        }
    }
    draw() {
        drawCircle(this.x, this.y, this.size, this.color);
    }
}
