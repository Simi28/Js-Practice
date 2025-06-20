"use strict";


 // Treat all JS Code as newer version but it is not mandatory as JS now by default runs on the newer version
// null is a standalone value
let a ="";
console.log(typeof(a)); // Output: "" (empty string)
a=32
console.log(typeof(a));
/* For eg if u are checking the temp and code is fetching data from API and it is not available then it return null if we set null 
in most cases we set 0 but 0 is a value so in that case null would be more suitable 
Also type of null is object */
// console.log(typeof(null)); // Output: "object"

// sumbol used to create unique identifiers and sensitive data


// OBJECT FUNCTIONS
const test = {
    name: "Simi",
    age: 25,
    isStudent: true,
    grades: [90, 85, 88],
    address: {
        city: "Mumbai",
        state: "Maharashtra"
    },
    id: Symbol("user_id"), // Symbol for unique identifier
    
};
test.id = "32"
console.log(test); // String
console.log(Object.entries(test));

const check ={
    isgraduated: false
    
}
Object.assign(test,{isgraduated:check.isgraduated});
console.log(test); // Object with additional property

console.log(test.hasOwnProperty("isgraduated")); // true
Object.freeze(test); // Prevents further modifications to the object
test.isgraduated = true; // This will not change the property due to freeze
console.log(test); // false

// STING FUNCTIONS
const str = "Hello, World!";
console.log(str.length); // Output: 13 : 👉 Tells how many characters are in the string (including spaces, punctuation, etc.
console.log(str.toUpperCase()); // Output: "HELLO, WORLD!" : 👉 Converts the whole string to capital letters
console.log(str.toLowerCase()); // Output: "hello, world!" :👉 Converts the whole string to small letters
console.log(str.indexOf("World")); // Output: 7 : Returns the position (index). Index starts from 0.
console.log(str.slice(0, 5)); // Output: "Hello" :👉 Cuts out a piece of the string Starts at index 0, ends just before index 5
console.log(str.replace("World", "JavaScript")); // Output: "Hello, JavaScript!"
console.log(str.split(", ")); // Output: ["Hello", "World!"]    : Breaks the string into pieces wherever , is found ,Returns an array
console.log(str.trim()); // Output: "Hello, World!" (removes whitespace from both ends)
console.log(str.charAt(0)); // Output: "H" : 👉 Tells what letter is at a particular position
console.log(str.includes("World")); // Output: true : 👉 Checks if a word/letter exists inside the string
console.log(str.startsWith("Hello")); // Output: true : 👉 Checks if the string starts with something
console.log(str.endsWith("!")); // Output: true : 👉 Checks if the string ends with something
console.log(str.repeat(2)); // Output: "Hello, World!Hello, World!" : 👉 Repeats the whole string 2 times


// Number Functions
const num = 42;
console.log(num.toString()); // Output: "42" : 👉 Converts number to string
console.log(num.toFixed(2)); // Output: "42.00" : 👉 Formats number to 2 decimal places
console.log(Number.isInteger(num)); // Output: true : 👉 Checks if the number is an integer
console.log(Number.isNaN(num)); // Output: false : 👉 Checks if the value is NaN (Not a Number)
console.log(Math.sqrt(num)); // Output: 6.48074069840786 : 👉 Calculates the square root of the number
console.log(Math.pow(num, 2)); // Output: 1764 : 👉 Raises the number to the power of 2
console.log(Math.random()); // Output: Random number between 0 and 1 : 👉 Generates a random number
console.log(Math.max(10, 20, 30)); // Output: 30 : 👉 Returns the maximum value from a set of numbers
console.log(Math.min(10, 20, 30)); // Output: 10 : 👉 Returns the minimum value from a set of numbers
console.log(Math.round(4.7)); // Output: 5 : 👉 Rounds the number to the nearest integer
console.log(Math.ceil(4.1)); // Output: 5 : 👉 Rounds the number up to the nearest integer
console.log(Math.floor(4.9)); // Output: 4 : 👉 Rounds the number down to the nearest integer


//Date Functions
const date = new Date();
console.log(date.toDateString()); // Output: "Mon Oct 23 2023" : 👉 Converts date to a readable string
console.log(date.toISOString()); // Output: "2023-10-23T00:00:00.000Z" : 👉 Converts date to ISO format
console.log(date.getFullYear()); // Output: 2023 : 👉 Gets the full year from the date
console.log(date.getMonth()); // Output: 9 (October, as months are 0-indexed) : 👉 Gets the month from the date
console.log(date.getDate()); // Output: 23 : 👉 Gets the day of the month from the date
console.log(date.getDay()); // Output: 1 (Monday, as days are 0-indexed) : 👉 Gets the day of the week from the date
console.log(date.getHours()); // Output: Current hour : 👉 Gets the hour from the date
console.log(date.getMinutes()); // Output: Current minute : 👉 Gets the minutes from the date
console.log(date.getSeconds()); // Output: Current second : 👉 Gets the seconds from the date
console.log(date.getTime()); // Output: Timestamp in milliseconds since January 1, 1970 : 👉 Gets the time in milliseconds
console.log(date.setFullYear(2025)); // Output: New timestamp with year set to 2025 : 👉 Sets the year of the date
console.log(date.toLocaleDateString("en-US")); // Output: "10/23/2023" : 👉 Converts date to a localized string format
console.log(date.toLocaleTimeString("en-US")); // Output: "12:00:00 AM" : 👉 Converts time to a localized string format
  

const nigNumber = 27473729327320381372n; // BigInt literal

