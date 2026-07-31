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

        this.hairetu = [];
    }
    update() {
        this.x += this.dx * this.speed;
        this.y += this.dy * this.speed;

        if (this.x < 0 || this.x > yoko || this.y < 0 || this.y > tate) {
            this.alive = false;
            return;
        }
        for (const e of enemies) {
            if (this.hp <= 0) {
                this.alive = false;
                return;
            }
            const dx = e.x - this.x;
            const dy = e.y - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < this.size + e.size && !this.hairetu.includes(e.id)) {
                ctx.fillStyle = "#ff0000";
                ctx.font = `${fontSize / 2}px sans-serif`;
                ctx.fillText(this.damage, this.x * tileSize, this.y * tileSize);
                this.hp--;
                e.hp -= this.damage;
                this.hairetu.push(e.id);
                break;
            }
        }
    }
    draw() {
        drawCircle(this.x, this.y, this.size, this.color);
    }
}
