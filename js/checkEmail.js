/*
Q22. Check whether the object contains the property "email".

let user = {
    name:"Rahul",
    email:"abc@gmail.com"
}
*/

let user = {
    name: "Rahul",
    email: "abc@gmail.com"
};

// Using hasOwnProperty() method

let result = user.hasOwnProperty("email");

console.log("Does email property exist?", result);

/*
Output:

Does email property exist? true

Explanation:
hasOwnProperty() checks whether the specified property
exists directly inside the object.
*/