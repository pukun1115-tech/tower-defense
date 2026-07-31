class bullet {
    constructor(x, y, dx, dy, speed, size, color, damage, hp) {
        this.x = x;
        this.y = y;

        this.dx = dx;
        this.dy = dy;

        this.speed = speed;
        this.size = size;
        this.color = color;
        this.damage = damage;
        this.hp = hp;
        this.alive = true;

        this.hairetu = new Set();
    }
    update() {
        this.x += this.dx * this.speed;
        this.y += this.dy * this.speed;

        if (this.x <= 0 || this.x >= yoko || this.y <= 0 || this.y >= tate) {
            this.alive = false;
            return;
        }
        for (const e of enemies) {
            if (this.hp <= 0) {
                this.alive = false;
                return;
            }
            if (!e.alive) {
                continue;
            }
            const dx = e.x - this.x;
            const dy = e.y - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < this.size + e.size && !this.hairetu.has(e.id)) {
                const dam = { damage: this.damage, x: e.x, y: e.y, time: Game.time, kosa: 60 };
                damages.push(dam);
                this.hp--;
                e.hp -= this.damage;
                this.hairetu.add(e.id);
            }
        }
    }
    draw() {
        drawCircle(this.x, this.y, this.size, this.color);
    }
}
