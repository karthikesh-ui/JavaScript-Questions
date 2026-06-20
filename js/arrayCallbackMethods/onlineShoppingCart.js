/*
Q1. Online Shopping Cart

Create a new array containing the prices
after applying a 10% discount on every product.
*/

const prices = [499, 999, 1499, 299, 799];

const discountedPrices = prices.map(function(price) {
    return Number((price * 0.9).toFixed(1));
});

console.log(discountedPrices);

/*
Output:

[449.1, 899.1, 1349.1, 269.1, 719.1]
*/