/*
Q2. Student Pass List

Create a new array containing only the
students who have scored 50 or above.
*/

const marks = [35, 78, 90, 25, 60, 48, 82];

const passedStudents = marks.filter(function(mark) {
    return mark >= 50;
});

console.log(passedStudents);

/*
Output:

[78, 90, 60, 82]
*/