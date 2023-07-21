// Q1 - sum(26,11,10)

// naive way

function sum(a, b, c) {
    return a + b + c
};

console.log(sum(26, 11, 10))


// currying

function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

console.log(sum(26)(11)(10));

/* Q.2 => evaluate(*sum)(4)(2) = 6
 evaluate(*multiply)(4)(2) = 8
  evaluate(*divide)(4)(2) = 2
 evaluate(*substract)(4)(2) = 2
 */


function evaluate(operation) {
    return (a) => {
        return (b) => {
            if (operation === "sum")
                return a + b;
            else if (operation === "multiply")
                return a * b;
            else if (operation === "divide")
                return a / b;
            else if (operation === "subtract")
                return a - b;
            else return "No / Invalid Operation Selected"
        }
    }
}

console.log(evaluate("sum"(4)(2)))


// Q.3=> Infinite currying console.log(add(4)(26)(11)(10))


function add(a) {
    return function (b) {
        if (b) return add(a + b);
        return a;
    };
}

console.log(add(26)(11)(10)(12));

// Q.4 => Currying vs Partial Application

// partial application
function sum(a) {
    return function (b, c) {
        return a + b + c;
    };
}
const x = sum(10);
console.log(x(11, 26))

// currying

function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

console.log(sum(26)(11)(35));

//  Q.5 => Curry() implementation
// convert f(a,b,c) into f(a)(b)(c)

function curry(func) {
    return function curriedFunc(...args) {
        if (args.length >= func.length) {
            return func(...args);
        } else {
            return function (...next) {
                return curriedFunc(...args, ...next);
            }
        }
    }
}

const sum = (a, b, c) => a + b + c;

const totalSum = curry(sum);

console.log(totalSum(26)(10)(11));

