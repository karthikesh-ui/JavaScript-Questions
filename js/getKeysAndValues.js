/*
Q23. Write code to get all keys and all values from:

let product = {
    name:"Mobile",
    price:20000
}
*/

let product = {
    name: "Mobile",
    price: 20000
};

console.log(Object.keys(product));
console.log(Object.values(product));

/*
Output:

["name", "price"]

["Mobile", 20000]
*/