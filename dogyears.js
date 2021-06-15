//variable for age
const myAge = 31;


let earlyYears = 2;


earlyYears *= 10.5;

//subtracting 2 years from age
let laterYears = myAge - 2;

// multiplying by 4
laterYears *= 4;


//adding earlyYears and laterYears
let myAgeInDogYears = earlyYears + laterYears;

//creating a variable using my name as a string
let myName = `Chris Meadows`.toLowerCase();


//logging a sentence using string interpolation
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

