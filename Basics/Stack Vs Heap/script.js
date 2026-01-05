//Type Conversion
let num = 42; // A number stored in stack memory
let str = "Hello, World!"; // A string stored in heap memory
let bool = true; // A boolean stored in stack memory

// Converting number to string
let numToStr = String(num); // "42"
console.log(`Number to String: ${numToStr} (Type: ${typeof numToStr})`);

// Converting string to number
let strToNum = Number(str); // NaN (Not a Number)
console.log(`String To Number: ${strToNum} (Type: ${typeof strToNum})`);

// Converting boolean to string
let booltToStr = String(bool); // "true"
console.log(`Boolean to String: ${booltToStr} (Type: ${typeof booltToStr})`);

// Converting string to boolean
let strToBool = Boolean(str); // true (non-empty string)
console.log(`String to Boolean: ${strToBool} (Type: ${typeof strToBool})`);


// Implicitly converts number to string
let coercedNum = num + ""; 
console.log(`Coerced Number to String: ${coercedNum} (Type: ${typeof coercedNum})`);

// Implicitly converts number to boolean
let coercedBool = !!num; 
console.log(`Coerced Number to Boolean: ${coercedBool} (Type: ${typeof coercedBool})`);

// Implicitly converts string to number
let coercedStr = +str; 
console.log(`Coerced String to Number: ${coercedStr} (Type: ${typeof coercedStr})`);

// so used operators for converting data types dynamically
// In type coercion, JavaScript automatically converts one data type to another based on the context in which the value is used.
