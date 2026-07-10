class bullet {
    constructor(x, y, target, speed, size, color, damage) {
        this.x = x;
        this.y = y;

        this.target = target;

        const dx = this.target.x - this.x;
        const dy = this.target.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        this.dx = dx / dist;
        this.dy = dy / dist;

        this.speed = speed;
        this.size = size;
        this.color = color;
        this.damage = damage;
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
                this.alive = false;
                break;
            }
        }
    }
    draw() {
        drawCircle(this.x, this.y, this.size, this.color);
    }
}
