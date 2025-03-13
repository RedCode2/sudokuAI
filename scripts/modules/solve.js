// JavaScript Program to solve Sudoku problem using bitmasks

// Function to check if it is safe to place num at mat[row][col]
function isSafe(mat, i, j, num, row, col, box) {
    if ((row[i] & (1 << num)) !== 0 || (col[j] & (1 << num)) !== 0 ||
        (box[Math.floor(i / 3) * 3 + Math.floor(j / 3)] & (1 << num)) !== 0)
        return false;

    return true;
}

function sudokuSolverRec(mat, i, j, row, col, box) {
    const n = mat.length;

    // base case: Reached nth column of last row
    if (i === n - 1 && j === n)
        return true;

    // If reached last column of the row, go to next row
    if (j === n) {
        i++;
        j = 0;
    }

    // If cell is already occupied, then move forward
    if (mat[i][j] !== 0)
        return sudokuSolverRec(mat, i, j + 1, row, col, box);

    for (let num = 1; num <= n; num++) {

        // If it is safe to place num at current position
        if (isSafe(mat, i, j, num, row, col, box)) {
            mat[i][j] = num;

            // Update masks for the corresponding row, column, and box
            row[i] |= (1 << num);
            col[j] |= (1 << num);
            box[Math.floor(i / 3) * 3 + Math.floor(j / 3)] |= (1 << num);

            if (sudokuSolverRec(mat, i, j + 1, row, col, box))
                return true;

            // Unmask the number num in the corresponding row, column and box masks
            mat[i][j] = 0;
            row[i] &= ~(1 << num);
            col[j] &= ~(1 << num);
            box[Math.floor(i / 3) * 3 + Math.floor(j / 3)] &= ~(1 << num);
        }
    }

    return false;
}

export function solveSudoku(mat) {
    const n = mat.length;
    const row = new Array(n).fill(0);
    const col = new Array(n).fill(0);
    const box = new Array(n).fill(0);

    // Set the bits in bitmasks for values that are initially present
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] !== 0) {
                row[i] |= (1 << mat[i][j]);
                col[j] |= (1 << mat[i][j]);
                box[Math.floor(i / 3) * 3 + Math.floor(j / 3)] |= (1 << mat[i][j]);
            }
        }
    }

    sudokuSolverRec(mat, 0, 0, row, col, box);
}


