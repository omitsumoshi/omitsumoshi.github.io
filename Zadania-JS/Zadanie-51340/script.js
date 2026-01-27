let array = [0, 1, 2, 3, 4, 5];

const sumSquare = function(arraySum) {
    let sum = 0;
    arraySum.forEach( function(element, index)  { 
        let square = Math.pow(element, 2);
        sum = sum + square;
    })
    return sum;
};

sumSquare(array);
console.log(sumSquare(array));