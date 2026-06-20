/*
Q7. Food Delivery App

Create a new array containing only
the orders whose status is "Pending".
*/

const orders = [
    { id: 1, status: "Delivered" },
    { id: 2, status: "Pending" },
    { id: 3, status: "Delivered" },
    { id: 4, status: "Cancelled" },
    { id: 5, status: "Pending" }
];

const pendingOrders = orders.filter(function(order) {
    return order.status === "Pending";
});

console.log(pendingOrders);

/*
Output:

[
 { id: 2, status: "Pending" },
 { id: 5, status: "Pending" }
]
*/