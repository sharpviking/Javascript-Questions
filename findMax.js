const arr = [23, 11, 10, 12, 95, 99]

function findMax(arr) {
    max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

console.log(findMax(arr));



// reduce method

const output = arr.reduce(function (max, curr) {
    if (curr > max) {
        max = curr;
    }
    return max
}, 0);

console.log(output);

