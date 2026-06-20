/*
Q4. Product Search

Find and display the matching product.
*/

const products = [
    "Laptop",
    "Mobile",
    "Headphones",
    "Keyboard",
    "Mouse"
];

const result = products.find(function(product) {
    return product === "Keyboard";
});

console.log(result);

/*
Output:

Keyboard
*/