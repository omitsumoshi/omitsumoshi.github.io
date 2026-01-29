let array = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98,1]

const bubbleSort = function(element) {
    for (let i = 0; i < element.length; i++ ) {
        for (let j = 0; j < element.length; j++ ) {
            if (element[j] > element[j + 1]) {
                [element[j], element[j+1]] = [element[j+1], element[j]];
            }
        }
    }
    return element;
};

bubbleSort(array);
console.log(bubbleSort(array));