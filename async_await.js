const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved value!!");

    }, 10000);
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved value!!");

    }, 5000);
})

async function handlePromise() {
    console.log("Hello world!!")
    const val = await p1;
    console.log("shivoham");
    console.log(val)


    const val2 = await p2;
    console.log("shiv shankar");
    console.log(val2)
}

handlePromise();


// function getData() {
//     p.then((res) => console.log(res))
//     console.log("shivoham")
// }

// getData()