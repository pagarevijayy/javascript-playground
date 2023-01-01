
//recursive
let fibFn = (n) => {
        if (n == 1) return 1;
        if (n == 2) return 2;

        return fibFn(n-1) + fibFn(n-2)
}

console.log('recursive', fibFn(20));

// iterative

let combo = 0;

let fibIterativeFn = (n) => {

    let sumA = 1;
    let sumB = 2

    if (n == 1) combo = sumA;
    if (n == 2) combo = sumB;

    for(let i = 3; i <= n; i++){
        combo = sumB + sumA; // latest iteration

        // update old sums
        sumA = sumB;
        sumB = combo;
    }
}

fibIterativeFn(20)

console.log('fibIterativeFn', combo );



