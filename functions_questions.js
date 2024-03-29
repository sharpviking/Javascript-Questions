// Function statement
function a() {
    console.log('this is a function statement')
}

// Function Expression
const c = function () {
    console.log('This is a function expression')
}

//  Difference between Function statement and Function expression is in
// hoisting , "function a"  got called while "function c" gives us an undefined error.

// Function statement is same as function declaration


// Anonymous function
function (y) {

}

// Name function expression
function zx() {
    console.log('nothing');
}

//First class function
// The ability of function to use as values and passed as an argument  is called first class function