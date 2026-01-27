let array = [1, 2, 3, 4, 5, 6];

// let dodawanie = 0;
// let mnozenie = 1;

// array.forEach ( function (element,index ) {
//     dodawanie = element + dodawanie;
//     mnozenie = element * mnozenie; 
// })

function sumMultiply (arrayNumbers) {
    let add = 0;
    let multiply = 1;

arrayNumbers.forEach ( function (element) {
    add = element + add;
    multiply = element * multiply; 
})
console.log( 'Dodawanie: ' + add + ' Mnozenie: ' + multiply )
}

sumMultiply(array)

