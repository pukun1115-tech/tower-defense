class enemy {
    constructor(tileX, tileY, hp, color, speed, size) {
        this.alive = true;//生きてる!

        this.x = tileX + 0.5;
        this.y = tileY + 0.5;
        this.dir = null;
        this.nextTileX = this.x;
        this.nextTileY = this.y;

        this.isBreaking = false;
        this.breakTimer = 0;
        this.breakTime = 300;

        this.hp = hp;
        this.color = color;
        this.speed = speed;
        this.size = size;//tileSizeの何倍の半径?
    }

    update() {
        if (this.x === this.nextTileX && this.y === this.nextTileY) {
            if (this.x === 19.5 && this.y === 7.5) {
                hp--;
                this.alive = false;
                return;
            }
            const tileX = Math.floor(this.x);
            const tileY = Math.floor(this.y);

            const goalX = 19;
            const goalY = 7;

            const path = bfs(tileX, tileY, goalX, goalY);

            if (path && path.length > 1) {
                const next = path[1];//次,0は今の場所

                this.nextTileX = next.x + 0.5;
                this.nextTileY = next.y + 0.5;

                if (next.x > tileX) this.dir = "right";
                if (next.x < tileX) this.dir = "left";
                if (next.y > tileY) this.dir = "down";
                if (next.y < tileY) this.dir = "up";
            }
        }
        if (this.isBreaking) {
            this.breakTimer--;

            if (this.breakTimer <= 0 || map[this.nextTileY - 0.5][this.nextTileX - 0.5] === 0) {
                if (map[this.nextTileY - 0.5][this.nextTileX - 0.5] === 2) {
                    map[this.nextTileY - 0.5][this.nextTileX - 0.5] = 0;
                }
                this.isBreaking = false;
            }

            return;
        }

        if (map[Math.floor(this.nextTileY)][Math.floor(this.nextTileX)] === 2) {
            this.isBreaking = true;
            this.breakTimer = this.breakTime;
            return;
        }

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

        if (this.hp <= 0) {
            money += 10;
            this.alive = false;
            return;
        }
    }

    draw() {
        drawCircle(this.x, this.y, this.size, this.color);
    }
}

function bfs(startX, startY, goalX, goalY) {
    const pathNoBreak = bfsCore(startX, startY, goalX, goalY, false);
    if (pathNoBreak) return pathNoBreak;

    const pathBreak = bfsCore(startX, startY, goalX, goalY, true);
    return pathBreak;
}

function bfsCore(startX, startY, goalX, goalY, canBreak) {
    const queue = [];
    const visited = Array.from({ length: tate }, () => Array(yoko).fill(false));
    const parent = Array.from({ length: tate }, () => Array(yoko).fill(null));

    queue.push({ x: startX, y: startY });
    visited[startY][startX] = true;

    while (queue.length > 0) {
        //shiftは取り出して元のやつから消す
        const cur = queue.shift();//curは探索している現在のタイル

        if (cur.x === goalX && cur.y === goalY) {
            // ゴールに到達 → 経路復元
            const path = [];
            let p = cur;
            //
            while (p) {
                path.push(p);
                p = parent[p.y][p.x];
            }
            return path.reverse();
        }

        for (const d of dirs) {
            const nx = cur.x + d.x;
            const ny = cur.y + d.y;

            if (nx < 0 || nx >= yoko || ny < 0 || ny >= tate) continue;
            if (visited[ny][nx]) continue;//もう来たことがある
            if (!canBreak) {
                if (!(map[ny][nx] === 0)) continue;
            }
            else {
                if (map[ny][nx] !== 0 && map[ny][nx] !== 2) continue; //箱を壊してくる 
            }

            visited[ny][nx] = true;
            parent[ny][nx] = cur;
            queue.push({ x: nx, y: ny });
        }
    }
}
