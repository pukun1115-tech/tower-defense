class enemy {
    constructor(x, y, nextX, nextY, hp, color, speed, size, money, syurui, dir) {
        this.alive = true;//生きてる!

        this.x = x + 0.5;
        this.y = y + 0.5;
        this.dir = dir;
        this.nextTileX = nextX + 0.5;
        this.nextTileY = nextY + 0.5;

        this.isBreaking = false;
        this.breakTimer = 0;
        this.breakTime = 300;

        this.money = money;

        this.hp = hp;
        this.color = color;
        this.speed = speed;
        this.size = size;
        this.syurui = syurui;
    }

    update() {
        if (this.hp <= 0) {
            money += this.money;
            if (this.syurui === 7) {
                enemies.push(getEnemy(0, this.x - 0.5, this.y - 0.5, this.nextTileX - 0.5, this.nextTileY - 0.5, this.dir));
                enemies.push(getEnemy(1, this.x - 0.5, this.y - 0.5, this.nextTileX - 0.5, this.nextTileY - 0.5, this.dir));
                enemies.push(getEnemy(2, this.x - 0.5, this.y - 0.5, this.nextTileX - 0.5, this.nextTileY - 0.5, this.dir));
                enemies.push(getEnemy(3, this.x - 0.5, this.y - 0.5, this.nextTileX - 0.5, this.nextTileY - 0.5, this.dir));
                enemies.push(getEnemy(5, this.x - 0.5, this.y - 0.5, this.nextTileX - 0.5, this.nextTileY - 0.5, this.dir));
                enemies.push(getEnemy(6, this.x - 0.5, this.y - 0.5, this.nextTileX - 0.5, this.nextTileY - 0.5, this.dir));
            }
            this.alive = false;
            return;
        }

        if (this.x === this.nextTileX && this.y === this.nextTileY) {
            if (this.x === 19.5 && this.y === 7.5) {
                Game.hp--;
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
                if (map[ny][nx] !== -1 && map[ny][nx] !== 0) continue;
            }
            else {
                if (map[ny][nx] !== -1 && map[ny][nx] !== 0 && map[ny][nx] !== 2) continue; //箱を壊してくる 
            }

            visited[ny][nx] = true;
            parent[ny][nx] = cur;
            queue.push({ x: nx, y: ny });
        }
    }
}
