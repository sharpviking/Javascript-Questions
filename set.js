const mySet = new Set();
mySet.add("apple");
mySet.add("orange");
mySet.add("banana");
mySet.add("apple"); // Will not add a duplicate value

console.log(mySet.size); // Output: 3
console.log(mySet.has("orange")); // Output: true
