function checkIfWinner() {
    var count = 1;
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            if (arrayForBoard[i][j] != count) {
                if (!(count === rows * columns && arrayForBoard[i][j] === 0)) {
                    return false;
                }
            }
            count++;
        }
    }

    console.log("you win!")
}