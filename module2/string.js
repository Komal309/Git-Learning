let str = "I am a string";
console.log(str);

// length of string

let len = str.length;
console.log(len);

// sliced method  -> extract a part of string
let slicedArr = str.slice(2,5);
console.log(slicedArr)

// replace method  -> replace a part with given word

let replacedStr = str.replace("am","was");
console.log(replacedStr);
console.log(str);

// upper case
let upperCase = str.toUpperCase();
console.log(upperCase);

// lower case
let lowerCase = str.toLowerCase();
console.log(lowerCase);

// concate
let firstName = "Mohd";
let lastName = "Aman";

// let fullName = firstName.concat(lastName);
// console.log(fullName);
// or
let fullName = firstName + lastName;
console.log(fullName);

// split
let splitted = str.split(" ");
console.log(splitted);