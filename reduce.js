const arr = [3, 5, 55, 26, 11]

function findSum(arr) {
    let su = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum;
}

console.log((findSum(arr)))

const output = arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc
}, 0);

console.log(output);