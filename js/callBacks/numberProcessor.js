/*
Q2. Number Processor

Create a function processNumber()
that sends the value 25 to a callback function.

Expected Output:

Number received: 25
*/

function processNumber(callback) {
    callback(25);
}

processNumber(function(number) {
    console.log("Number received: " + number);
});

/*
Output:

Number received: 25
*/