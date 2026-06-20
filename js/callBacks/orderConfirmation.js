/*
Q3. Order Confirmation

Create a function placeOrder() that prints:

Order Placed

Then executes a callback that prints:

Order Confirmed
*/

function placeOrder(callback) {

    console.log("Order Placed");

    callback();
}

placeOrder(function() {
    console.log("Order Confirmed");
});

/*
Output:

Order Placed
Order Confirmed
*/