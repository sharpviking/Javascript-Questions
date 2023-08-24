const cart = ["spacx", 'isro', "virgingalactic"];

const promise = createOrder(cart);

promise.then(function (orderId) {
    console.log(orderId)
})
    .catch(function (err) {
        console.log(err.message);
    })

function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            const err = new Error("cart is not valid");
            reject(err);
        }

        const orderId = "10122611";
        if (orderId) {
            resolve(orderId)
        }
    })
};

return pr;



const cart1 = ["spacx", 'isro', "virgingalactic"];
createOrder(cart1)
    .then(function (orderId) {
        console.log(orderId);
        return orderId;
    })
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        console.log(err.essage);
    })