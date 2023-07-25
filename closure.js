function x() {
    var a = 10;
    function y() {
        console.log(a);
    }

    return y
}

var z = x();
console.log(z);


z();


function outerFunction(outerValue) {
    // This inner function forms a closure with the outer function
    function innerFunction(innerValue) {
        return outerValue + innerValue;
    }

    return innerFunction;
}

// Create two instances of closures with different outer values
const closure1 = outerFunction(10);
const closure2 = outerFunction(20);

console.log(closure1(5)); // Output: 15 (10 + 5)
console.log(closure2(5)); // Output: 25 (20 + 5)
