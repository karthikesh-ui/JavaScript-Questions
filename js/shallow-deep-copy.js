let original = {
    name: "Rahul",
    age: 21
};

// Shallow Copy
let shallowCopy = { ...original };

console.log(shallowCopy);

// Deep Copy
let deepCopy = JSON.parse(JSON.stringify(original));

console.log(deepCopy);