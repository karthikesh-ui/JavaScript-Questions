/*
Q7. Delayed Message

Using setTimeout() and a callback, display:

Loading...

and after 2 seconds display:

Welcome Back!
*/

console.log("Loading...");

setTimeout(function() {
    console.log("Welcome Back!");
}, 2000);

/*
Output:

Loading...

(after 2 seconds)

Welcome Back!
*/