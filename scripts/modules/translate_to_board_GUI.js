export function translate_to_board_GUI(solved_board, start_row, start_col, end_row, end_col) {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']; // Row labels
    const cols = ['1', '2', '3', '4', '5', '6', '7', '8', '9']; // Column labels
    for (let i = start_row; i <= end_row; i++) {
        for (let j = start_col; j <= end_col; j++) {

            const cellId = `cell_${rows[i]}${cols[j]}`; // Construct the cell ID
            const cellValue = solved_board[i][j]; // Get the solved value
            const inputElement = document.getElementById(cellId); // Get the input element

            // Set the value of the input field
            inputElement.value = cellValue === 0 ? "" : cellValue.toString();
        }
    }
}