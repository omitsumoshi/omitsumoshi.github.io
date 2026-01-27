

const fibN = function(n) {
    if(n <= 1) {
        return n;
    }

    let previous1 = 1;
    let previous2 = 0;
    for(let i = 2; i<=n; i++) {
        let sum = (previous1) + (previous2);
        console.log("Fn-1="+ previous1 + " Fn-2=" + previous2 + " = " + sum + " N= " + i)
        previous2 = previous1;
        previous1 = sum;
          
    }
    return previous1;
}

fibN(30)