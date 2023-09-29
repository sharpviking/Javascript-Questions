function greet(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

function sayGoodBuy() {
    console.log('Goodbye')
}

greet("Anand", sayGoodBuy)