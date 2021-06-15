// kelvin today is 293
const kelvin = 293;

// converting to celcius
const celsius = kelvin - 273;

// converting to Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

//rounding down
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit. `);
