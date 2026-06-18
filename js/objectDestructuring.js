/*
Q26. Extract name and age using destructuring.

let student = {
    name:"Rahul",
    age:21
}
*/

let student = {
    name: "Rahul",
    age: 21
};

let { name, age } = student;

console.log(name);
console.log(age);

/*
Output:

Rahul
21
*/