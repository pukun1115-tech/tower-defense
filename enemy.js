class enemy {
    constructor(tileX, tileY, hp, color, speed, size) {
        this.alive = true;//生きてる!

        this.x = tileX + 0.5;
        this.y = tileY + 0.5;
        this.dir = "right";
        this.nextTileX = this.x + 1;
        this.nextTileY = this.y;

        this.hp = hp;
        this.color = color;
        this.speed = speed;
        this.size = size;
    }

    update() {
        if (!this.alive) return;

        if (this.dir === "right") {
            if (this.nextTileX <= this.x + this.speed) {
                this.x = this.nextTileX;
            }
            else {
                this.x += this.speed;
            }
        }
        if (this.dir === "left") {
            if (this.nextTileX >= this.x - this.speed) {
                this.x = this.nextTileX;
            }
            else {
                this.x -= this.speed;
            }
        }
        if (this.dir === "down") {
            if (this.nextTileY <= this.y + this.speed) {
                this.y = this.nextTileY;
            }
            else {
                this.y += this.speed;
            }
        }
        if (this.dir === "up") {
            if (this.nextTileY >= this.y - this.speed) {
                this.y = this.nextTileY;
            }
            else {
                this.y -= this.speed;
            }
        }

        if (this.x === this.nextTileX && this.y === this.nextTileY) {
            const tileX = Math.floor(this.x);
            const tileY = Math.floor(this.y);

            const isRightWall = (map[tileY][tileX + 1] != 0);
            const isLeftWall = (map[tileY][tileX - 1] != 0);
            const isDownWall = (map[tileY + 1][tileX] != 0);
            const isUpWall = (map[tileY - 1][tileX] != 0);
        }

        if (this.hp <= 0) {
            this.alive = false;
            return;
        }
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        drawCircle(this.x * tileSize, this.y * tileSize, this.size * tileSize, ctx);
    }
}