var triangle = `215\n193 124\n117 237 442\n218 935 347 235\n320 804 522 417 345\n229 601 723 835 133 124\n248 202 277 433 207 263 257\n359 464 504 528 516 716 871 182\n461 441 426 656 863 560 380 171 923\n381 348 573 533 447 632 387 176 975 449\n223 711 445 645 245 543 931 532 937 541 444\n330 131 333 928 377 733 017 778 839 168 197 197\n131 171 522 137 217 224 291 413 528 520 227 229 928\n223 626 034 683 839 53 627 310 713 999 629 817 410 121\n924 622 911 233 325 139 721 218 253 223 107 233 230 124 233`;
// var triangle = `1\n2 4\n1 2 4\n1 2 1 2\n2 3 1 1 99`;

// var triangle = `1\n2 4\n6 7 10\n5 4 3 2`
// var triangle = `1\n4 2\n5 7 13\n5 4 3 2`
// var triangle = `1\n8 4\n55 3 4\n2 2 1 3`
const isPrime = (element, index, array) => {
    var start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start < 1) {
            return false;
        } else {
            start++;
        }
    }
    return element > 1;
}

var numbers = []

triangle = triangle.split('\n')
var swapNumbers = triangle.map((val) => val.split(" "))

for (var i = 0; i < swapNumbers.length; i++) {
    numbers.push([]);
    for (var j = 0; j < swapNumbers[i].length; j++) {
        numbers[i].push(parseInt(swapNumbers[i][j]));
    }
}
const calculateAllPossiblePath = (queue, col, row, array, total, list) => {
    queue += ">" + array[col][row];
    total += array[col][row];
    list.push({total: total, length: col + 1, queue: queue})
    // console.log(queue, total, list);
    if (col >= array.length) {
        return 0;
    } else if (col == array.length - 1) {
        return 0;
    }
    if (!isPrime(array[col + 1][row])) { // Sola
        calculateAllPossiblePath(queue, col + 1, row, array, total, list);
    }
    if (!isPrime(array[col + 1][row + 1])) { // Sağa
        calculateAllPossiblePath(queue, col + 1, row + 1, array, total, list);
    }
    if(isPrime(array[col + 1][row + 1]) && isPrime(array[col + 1][row])) {
        return 0;
    }
    return list;
}

if(!isPrime(numbers[0][0])) {
    var values = calculateAllPossiblePath('', 0, 0, numbers, 0, []);
    var total = values.sort((a, b) => a.length - b.length || a.total - b.total).reverse()
    console.log(`Toplam ${total[0].total}, Kuyruk => ${total[0].queue}`)
}
