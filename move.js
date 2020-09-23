function moveThisTile(tableRow, tableColumn) {
    if (checkIfMoveable(tableRow, tableColumn, "up") ||
        checkIfMoveable(tableRow, tableColumn, "down") ||
        checkIfMoveable(tableRow, tableColumn, "left") ||
        checkIfMoveable(tableRow, tableColumn, "right")) {
        incrementMoves();
    } else {
        alert("ERROR: Cannot move tile!\nTile must be next to a blank space.");
    }

    if (checkIfWinner()) {
        alert("Congratulations! You solved the puzzle in " + moves + " moves.");
        startNewGame();
    }
}

function checkIfMoveable(rowCoordinate, columnCoordinate, direction) {
    // The following variables an if else statements
    // make the function work for all directions.
    rowOffset = 0;
    columnOffset = 0;
    if (direction == "up") {
        rowOffset = -1;
    } else if (direction == "down") {
        rowOffset = 1;
    } else if (direction == "left") {
        columnOffset = -1;
    } else if (direction == "right") {
        columnOffset = 1;
    }

    // Check if the tile can be moved to the spot.
    // If it can, move it and return true.
    if (rowCoordinate + rowOffset >= 0 && columnCoordinate + columnOffset >= 0 &&
        rowCoordinate + rowOffset < rows && columnCoordinate + columnOffset < columns
    ) {
        if (arrayForBoard[rowCoordinate + rowOffset][columnCoordinate + columnOffset] == 0) {
            arrayForBoard[rowCoordinate + rowOffset][columnCoordinate + columnOffset] = arrayForBoard[rowCoordinate][columnCoordinate];
            arrayForBoard[rowCoordinate][columnCoordinate] = 0;
            //A test that can be solved
            if (checkIfResolve) {
                showTable();
            }

            return true;
        }
    }
    return false;
}