/*
Q12. Write a function to find the larger of two numbers.
*/

function findLargerNumber(firstNumber, secondNumber) {

    if (firstNumber > secondNumber) {
        return firstNumber;
    }

    return secondNumber;
}

console.log(findLargerNumber(20, 45));

/*
Output:

45
*/