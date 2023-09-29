const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve("operation suceeded")
        } else {
            reject("operation failed")
        }

    }, 1000)
})

myPromise
    .then((result) => {
        console.log('success', result);
    })
    .catch((error) => {
        console.error('Error', error)
    });

// promise chaining
const firstAsyncOperation = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("first operation completed");
            resolve(1);
        }, 1000)
    })
}

const secondAsyncOperation = (data) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("second operation completed with data", data);
            resolve(2)
        }, 1000)
    })
}

firstAsyncOperation()
    .then((data) => secondAsyncOperation(data))
    .then((result) => {
        console.log("all operation completed with", result)
    })
    .catch((error) => {
        console.error("Error", error)
    })

// Handling multiple promises
const promise1 = Promise.resolve("Hello");
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("world"), 1000)
})

Promise.finally([promise1, promise2, promise3])
    .then((value) => {
        console.log('all promises are resolved with values', value);

    })
    .catch((error) => {
        console.error("At least one promise rejected", error);
    });