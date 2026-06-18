/*
Q28. Merge the following arrays using the spread operator.

let arr1 = [1,2];
let arr2 = [3,4];
*/

let arr1 = [1, 2];
let arr2 = [3, 4];

let mergedArray = [...arr1, ...arr2];

console.log(mergedArray);

/*
Output:

[1, 2, 3, 4]
*/