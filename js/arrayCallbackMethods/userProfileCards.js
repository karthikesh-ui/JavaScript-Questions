/*
Q6. User Profile Cards

Create a new array where each name
is converted into the required format.
*/

const users = ["Rahul", "Priya", "Kiran", "Sneha"];

const welcomeUsers = users.map(function(user) {
    return `Welcome ${user}`;
});

console.log(welcomeUsers);

/*
Output:

[
 "Welcome Rahul",
 "Welcome Priya",
 "Welcome Kiran",
 "Welcome Sneha"
]
*/