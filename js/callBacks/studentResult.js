/*
Q4. Student Result

Create a function checkResult()
that passes "Pass" to a callback.

Expected Output:

Result: Pass
*/

function checkResult(callback) {
    callback("Pass");
}

checkResult(function(result) {
    console.log("Result: " + result);
});

/*
Output:

Result: Pass
*/