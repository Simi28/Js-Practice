// let a = "12db3";

// let b = Number(a); // Convert string to number
// console.log(typeof(b)); // Output: "number"
// console.log(b); // Output: 12db3 (not a valid number, so it will be NaN)


// let notboolean  = -1;
// let c = Boolean(notboolean); // Convert number to boolean
// console.log(typeof(c)); // Output: "boolean"
// console.log(c); // Output: true (since 3 is truthy)

//Note : Every number will be true in boolean in JS except 0,NaN, null, undefined, and false itself.

// let string = "Hello";
// let d = Number(string); // Convert string to number 
// console.log(typeof(d)); // Output: "number"
// console.log(d); // Output: NaN (not a valid number)


// // ***********************************Operations***************************************************

// console.log(2**3); // Output: 8388608 (2 raised to the power of 23)
// console.log(2**-3); // Output: 0.125 (2 raised to the power of -3)


// let f = 3
// console.log(f++); // Output: 3 (postfix increment operator returns the value before incrementing)
// let g = ++f
// console.log(g); // Output: 3 (unary plus operator converts f to a number, which is already a number)


//***********************************Comaprison***************************************
console.log("2e" > 1)  // If u are comapring make sure datatypes are same

// Comarison and equality check works differntly comaprisons convert null to a number, treating it as 0, while equality checks do not convert null to a number.


// ************************************Memory***********************************************

// In JavaScript, memory management is handled automatically by the engine, which uses a garbage collector to reclaim memory that is no longer in use
// However, understanding how memory works can help you write more efficient code.
// Memory in JavaScript is divided into two main types: stack and heap.
// Stack (Primitive) , heap(Non-Primitive)



let x= 10; // Primitive type stored in stack
let y = x; // Copying value, y is now 10    

console.log("x:", x, "y:", y); // Output: x: 10 y: 10
y = 20; // Changing y does not affect x
console.log("After changing y, x:", x, "y:", y); // Output: x: 10 y: 20


let obj1 = { name: "Alice" }; // Non-primitive type stored in heap
let obj2 = obj1; // Copying reference, obj2 points to the same object   
console.log("obj1:", obj1, "obj2:", obj2); // Output: obj1: { name: 'Alice' } obj2: { name: 'Alice' }
obj2.name = "Bob"; // Changing obj2 affects obj1
console.log("After changing obj2, obj1:", obj1, "obj2:", obj2); // Output: obj1: { name: 'Bob' } obj2: { name: 'Bob' }
