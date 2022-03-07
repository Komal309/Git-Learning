// printing in js
console.log("swagat h aap sbhi ka");

// variables in js
let a = 10; // Number
console.log(a);

let char = 'a'; // Character
console.log(char);

let str = 'I am string'; // String
console.log(str);

let bool = true; // Boolean
console.log(bool);

for(let i=1;i<5;i++){
    console.log(i);
}

let count = 10;
while(count>0){
    console.log(count);
    count--;
}

// is prime
let n = 12349;
let isPrime = true;

for(let i=2;i<=n;i++){
    if(n%i==0){
        isPrime = false;
    }
}
if(isPrime == true){
    console.log("Number is prime");
}else{
    console.log("Number is not prime");
}