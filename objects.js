const user = {
    name: "Abhishek Anand",
    location: "milky way"
}

console.log(user.name);



//How to add dynamic key-value pairs in objects?

const property = "firstName";
const name = "abhishek Anand";


const user1 = {
    [property]: name

}

// How to loop through keys in objects?

const user2 = {
    name: "A Anand",
    place: "brhamand",
    isImmortal: "true"
};

for (key in user2) {
    console.log(key);

    // for values

    console.log(user2[key]);
}


