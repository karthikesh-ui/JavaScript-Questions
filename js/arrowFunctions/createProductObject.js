/*
Q7. Create a Product Object

Convert the following normal function
into an Arrow Function.

function createProduct(name, price) {
    return {
        name: name,
        price: price
    };
}
*/

const createProduct = (name, price) => {
    return {
        name: name,
        price: price
    };
};

console.log(createProduct("Laptop", 50000));

/*
Output:

{
    name: "Laptop",
    price: 50000
}
*/