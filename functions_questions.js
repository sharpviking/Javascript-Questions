// Function statement
function a() {
    console.log('this is a')
}

// Function Expression
const c = function () {
    console.log('This is function expression')
}

//  Difference between Function statement and Function expression is in
// hoisting , "function a"  got called while "function c" gives us an undefined error.

// Function statement is same as function declaration


// Anonymous function
function () {

}

// Name function expression
function zx() {
    console.log('nothing');
}

//First class function
// The ability of function to use as values and passed as an argument  is called first class function