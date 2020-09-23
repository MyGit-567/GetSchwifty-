function checkIfResolve() {
    if (rows % 2 == 1) {

        if (odd()) {
            return true;
        }
    } else {

        if (even()) {
            return false;
        }
    }
}

function odd() {

    var count = 1;
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            if (arrayForBoard[i][j] < arrayForBoard[j]) {
                count += 1;
            }
        }
    }
    if (count % 2 == 0) {
        return true;
    } else {
        return false;
    }

}

function even() {

    var count = 1;
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            if (arrayForBoard[i][j] < arrayForBoard[j]) {
                count += 1;
            }
        }
    }
    var num = whereblank();
    count += num;
    if (count % 2 == 0) {
        return true;
    } else {
        return false;
    }

}