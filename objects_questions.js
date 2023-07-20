//  Q.1 => create a function multiplyByTwo(obj) that
//         Multiplies all numeric property value by 2.

let nums = {
    a: 101,
    b: 301,
    title: "My nums",
}

multiplyByTwo(nums);


function multiplyByTwo(obj) {
    for (key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2;
        }
    }
}

console.log(nums)

// what is the output of following code ?

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 321;

console.log(a[b]);

//  Ans: 321;

// Q=> What is the output?

console.log([...'Heisenberg']);

// Ans =>[
//   'H', 'e', 'i', 's',
//   'e', 'n', 'b', 'e',
//   'r', 'g'
// ]

//  What is output?

const shape = {
    radius: 11,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());

// Ans = 22 and NaN

//  What is destructuring in objects?

let user = {
    name: "Ramanujam",
    age: 101,
}

const { name } = user;

console.log(name);


//  what is the output??

let z = { greeting: "Hey!" };
let y;

y = z;

z.greeting = "Hello";

console.log(y.greeting);


// What is the output?

let person = { name: "Tuco" };
const members = [person];
person = null;

console.log(members) // "Tuco"

// Q => what is the output?

const value = { number: 11 };

const multiply = (x = { ...value }) => {
    console.log((x.number *= 2));
};

multiply(); // 22
multiply(); //22
multiply(value); // 22
multiply(value); // 44
