/*
Q4. Find the Larger Number

Convert the following normal function
into an Arrow Function.

function getMax(a, b) {
    return a > b ? a : b;
}
*/

const getMax = (a, b) => {
    return a > b ? a : b;
};

console.log(getMax(10, 50));

/*
Output:

50
*/