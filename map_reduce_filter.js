const users = [
    { firstName: "Abhishek", lastName: "Anand", age: 30 },
    { firstName: "Elon", lastName: "Musk", age: 50 },
    { firstName: "chanakya", lastName: "panini", age: 44 },
    { firstName: "chandragupta", lastName: "mourya", age: 44 }

];


// .map()
const output = users.map((x) => x.firstName + " " + x.lastName)

console.log(output);


//.reduce()
const output1 = users.reduce(function (acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1
    }
    return acc;
}, {});

console.log(output1);


//.filter()

const output2 = users.filter((x) => x.age < 50).map((x) => x.firstName);

console.log(output2);