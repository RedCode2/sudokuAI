"use strict";

// Function to translate input into a 2D array
export function translate_to_2D_arr() {
    const board = []; // Initialize the 2D array
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']; // Row labels
    const cols = ['1', '2', '3', '4', '5', '6', '7', '8', '9']; // Column labels

    for (let i = 0; i < 9; i++) {
        const row = []; // Initialize a row
        for (let j = 0; j < 9; j++) {
            const cellId = `cell_${rows[i]}${cols[j]}`; // Construct the cell ID
            const cellValue = document.getElementById(cellId).value.trim(); // Get the cell value

            // Replace blank cells with 0, otherwise convert the value to a number
            row.push(cellValue === "" ? 0 : parseInt(cellValue, 10));
        }
        board.push(row); // Add the row to the board
    }

    return board; // Return the 2D array
}

