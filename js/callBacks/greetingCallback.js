/*
Q1. Greeting Callback

Create a function welcomeUser() that accepts
a callback and passes the name "Rahul" to it.

Expected Output:

Hello Rahul
*/

function welcomeUser(callback) {
    callback("Rahul");
}

welcomeUser(function(name) {
    console.log("Hello " + name);
});

/*
Output:

Hello Rahul
*/