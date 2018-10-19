/*
    V8 engine
    Created by Furkan KURUTAŞ, 19.10.2018
*/
// var triangle = `1\n5 4\n2 3 13\n8 5 9 3\n5 9 5 2 6`;
// var triangle = `5 9 5 2 6\n8 5 9 3\n2 6 13\n5 4\n2`;
var triangle = `215\n193 124\n117 237 442\n218 935 347 235\n320 804 522 417 345\n229 601 723 835 133 124\n248 202 277 433 207 263 257\n359 464 504 528 516 716 871 182\n461 441 426 656 863 560 380 171 923\n381 348 573 533 447 632 387 176 975 449\n223 711 445 645 245 543 931 532 937 541 444\n330 131 333 928 377 733 017 778 839 168 197 197\n131 171 522 137 217 224 291 413 528 520 227 229 928\n223 626 034 683 839 53  627 310 713 999 629 817 410 121\n924 622 911 233 325 139 721 218 253 223 107 233 230 124 233`;
/*
1 (0)
8 4 (0, 1)
2 6 9 (0, 1, 2)
8 5 9 3 (0, 1, 2, 3)
5 9 5 2 6 (0, 1, 2, 3, 4, 5)
*/ // Kendine, kendinden bir fazlasına veya bir azı index numarasına erişebilir

// 1 8 4 2 6 9 8 5 9 3
// Baştan sona komşu rakamlara giderek ilerleyeceksin
// Sadece eğri ve aşağı doğru gidebilirsin 
// Sadece asal olmayan sayılardan gidebilirsin
// Piramitin gidebildiğin kadar sonuna gitmelisin

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
var counter = 0;

triangle = triangle.split('\n')
var swapNumbers =  triangle.map((val) => val.split(" "))

for(var i = 0; i < swapNumbers.length; i++) {   
    numbers.push([]);
    for(var j = 0; j < swapNumbers[i].length; j++) {   
        numbers[i].push(parseInt(swapNumbers[i][j]));
    }
}

const sum = (array) => array.reduce((prev, curr) => prev + curr); // Toplamını yazdır
const queue = (array) => array.join('>') // Kuyruk şeklinde göster

// ilk satırın en büyüğünü alıyorum
var root = findGreatestNumber(numbers[0].filter(element => !isPrime(element))); 
var rootIndex = numbers[0].findIndex(number => number == root);
var sumArray = [] // Toplanacak 

if(root != undefined) {
    for(var col = 0; col < numbers.length; col++) {
        if(root != undefined) {
            var self = numbers[col][rootIndex];
            var left = numbers[col][rootIndex - 1];
            var right = numbers[col][rootIndex + 1];
            root = findGreatestNumber( ([left, self, right].filter(n => n))
                .filter(element => !isPrime(element))) // undefinedlar kaldırıldı
            rootIndex = numbers[col].findIndex(number => number == root);
            sumArray.push(root)
        }
    }
    sumArray = sumArray.filter(n => n);
    console.log(`Toplam => ${sum(sumArray)}`)
    console.log(`Kuyruk => ${queue(sumArray)}`)
}

function findGreatestNumber(array) {
    if(array.length != 0 ) {
        if(array.length == 1) { 
            return array[0];
        }
        else { 
            return array.reduce((previous, current) => 
                { return current < previous ? previous : current});
        }
    }
}
