/*
Q6. Favorite Color

Create a function getColor()
that passes "Blue" to a callback function.

Expected Output:

My favorite color is Blue
*/

function getColor(callback) {
    callback("Blue");
}

getColor(function(color) {
    console.log("My favorite color is " + color);
});

/*
Output:

My favorite color is Blue
*/