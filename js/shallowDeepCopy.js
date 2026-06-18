/*
Q25. Write a code for each that shows Shallow Copy and Deep Copy.
*/

// Original Object

let originalStudent = {
    name: "Rahul",
    age: 21,
    address: {
        city: "Hyderabad"
    }
};

console.log("Original Object:");
console.log(originalStudent);

// ----------------------------
// Shallow Copy
// ----------------------------

let shallowCopy = { ...originalStudent };

shallowCopy.address.city = "Chennai";

console.log("After changing shallow copy:");

console.log("Original Object:");
console.log(originalStudent);

console.log("Shallow Copy:");
console.log(shallowCopy);

/*
Observation:

The original object is also modified because
nested objects share the same reference
in a shallow copy.
*/

// ----------------------------
// Deep Copy
// ----------------------------

let deepCopy = JSON.parse(JSON.stringify(originalStudent));

deepCopy.address.city = "Bangalore";

console.log("After changing deep copy:");

console.log("Original Object:");
console.log(originalStudent);

console.log("Deep Copy:");
console.log(deepCopy);

/*
Output:

Original Object:
{
    name: "Rahul",
    age: 21,
    address: { city: "Hyderabad" }
}

After Shallow Copy Change:

Original Object:
{
    name: "Rahul",
    age: 21,
    address: { city: "Chennai" }
}

Shallow Copy:
{
    name: "Rahul",
    age: 21,
    address: { city: "Chennai" }
}

After Deep Copy Change:

Original Object:
{
    name: "Rahul",
    age: 21,
    address: { city: "Chennai" }
}

Deep Copy:
{
    name: "Rahul",
    age: 21,
    address: { city: "Bangalore" }
}

Explanation:

Shallow Copy:
Changes in nested objects affect the original object.

Deep Copy:
Changes do not affect the original object because
a completely new copy is created.
*/