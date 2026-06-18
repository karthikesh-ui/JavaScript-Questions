/*
Q35. Email Username Extractor

Given:

let email = "john.doe@gmail.com";

Write a program to extract and display only:

john.doe
*/

let email = "john.doe@gmail.com";

let username = email.split("@")[0];

console.log(username);

/*
Output:

john.doe
*/