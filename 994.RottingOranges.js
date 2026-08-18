/**
 * @param {number[][]} grid
 * @return {number}
 */

var orangesRotting = function(grid) {
    const queue = [];
    let fresh = 0;
    let minutes = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {

            if (grid[i][j] === 2) {
                queue.push({
                    row: i,
                    col: j
                });
            }

            if (grid[i][j] === 1) {
                fresh++;
            }
        }
    }

    if (fresh === 0) return 0;

    let head = 0;

    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];

    while (head < queue.length && fresh > 0) {
        const levelSize = queue.length - head;

        for (let i = 0; i < levelSize; i++) {
            const cur = queue[head++];

            for (const [dr, dc] of directions) {
                const nr = cur.row + dr;
                const nc = cur.col + dc;

                if (
                    nr >= 0 &&
                    nr < grid.length &&
                    nc >= 0 &&
                    nc < grid[0].length &&
                    grid[nr][nc] === 1
                ) {
                    grid[nr][nc] = 2;
                    fresh--;

                    queue.push({
                        row: nr,
                        col: nc
                    });
                }
            }
        }

        minutes++;
    }

    return fresh === 0 ? minutes : -1;
};