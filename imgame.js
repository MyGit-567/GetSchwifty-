function swapTiles(cellone, celltwo) {
    var temp = document.getElementById(cellone).className;
    document.getElementById(cellone).className = document.getElementById(celltwo).className;
    document.getElementById(celltwo).className = temp;
}

function shuffle() {
    //Use nested loops to access each cell of the 3x3 grid
    for (var row = 1; row <= 3; row++) { //For each row of the 3x3 grid
        for (var column = 1; column <= 3; column++) { //For each column in this row

            var rowtwo = Math.floor(Math.random() * 3 + 1); //Pick a random row from 1 to 3
            var columntwo = Math.floor(Math.random() * 3 + 1); //Pick a random column from 1 to 3

            swapTiles("cell" + row + column, "cell" + rowtwo + columntwo); //Swap the look & feel of both cells
        }
    }
}

function clickTile(row, column) {
    var cell = document.getElementById("cell" + row + column);
    var tile = cell.className;
    if (tile != "tile9") {
        //Checking if white tile on the right
        if (column < 3) {
            if (document.getElementById("cell" + row + (column + 1)).className == "tile9") {
                swapTiles("cell" + row + column, "cell" + row + (column + 1));
                return;
            }
        }
        //Checking if white tile on the left
        if (column > 1) {
            if (document.getElementById("cell" + row + (column - 1)).className == "tile9") {
                swapTiles("cell" + row + column, "cell" + row + (column - 1));
                return;
            }
        }
        //Checking if white tile is above
        if (row > 1) {
            if (document.getElementById("cell" + (row - 1) + column).className == "tile9") {
                swapTiles("cell" + row + column, "cell" + (row - 1) + column);
                return;
            }
        }
        //Checking if white tile is below
        if (row < 3) {
            if (document.getElementById("cell" + (row + 1) + column).className == "tile9") {
                swapTiles("cell" + row + column, "cell" + (row + 1) + column);
                return;
            }
        }
    }

}