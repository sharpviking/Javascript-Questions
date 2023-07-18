function square(num) {
    return num * num
}

function displaySquare(fn) {
    console.log("square is " + fn(11));
}

displaySquare(square)


    // IIFE(immediately invoked function expresssion)


    (function square(num) {
        console.log(num * num)
    })(11);


for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000)
}


var x = 21;

var fun = function () {
    console.log(x);
    var x = 20;
};

fun();// ans => undefined


// Rest and Spread operator

function multiply(...nums) {
    console.log(nums[0] * nums[1]);
}

var arr = [26, 11];

multiply(...arr)


//question//


const fn = (a, x, y, ...numbers) => {
    console.log(x, y, numbers)
};

fn(10, 11, 12, 54, 21, 78)