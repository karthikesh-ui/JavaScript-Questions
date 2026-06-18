/*
Q33. Write a program to extract and display "APPLE" from

productCode = "MOBILE-APPLE-IPHONE15"

without using slicing operations.
*/

let productCode = "MOBILE-APPLE-IPHONE15";

let parts = productCode.split("-");

console.log(parts[1]);

/*
Output:

APPLE
*/