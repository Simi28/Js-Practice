// x = 2;
// y = '4';
// Symbol = 5;
// console.log("Value of x is:", x);   
// console.log("Value of y is:", y);
// console.log("Value of Symbol is:", Symbol);
// z = x + Number(y);
// console.log("Sum of x and y is:", z);
// const Person = {
//   name: "John", 
//     age: 30,
//     isEmployed: true,
// }
// console.log("Person object is:", Person);
// Person.name = "Jane";
// console.log("Updated name is:", Person);
// const cars = ["Toyota", "Honda", "Ford"];
// cars[1] = "Chevrolet";
// console.log("Updated cars array is:", cars);
// cars.push("BMW");
// console.log("Cars array after push is:", cars);
// cars.pop();
// console.log("Final cars array is:", cars);
// cars.shift();
// console.log("Cars array after shift is:", cars);
// cars.unshift("Nissan");
// console.log("Cars array after unshift is:", cars);
// cars.splice(1, 1, "Hyundai", "Kia");
// console.log("Cars array after splice is:", cars);   
// cars.sort();
// console.log("Sorted cars array is:", cars); 
// cars.reverse();
// console.log("Reversed cars array is:", cars);
//     cars.join(", ");
// console.log("Joined cars array is:", cars.join(", "));
// cars.slice(1, 3);
// console.log("Sliced cars array is:", cars.slice(1, 3));
// cars.concat(["Mazda", "Subaru"]);
// console.log("Concatenated cars array is:", cars.concat(["Mazda", "Subaru"]));
// cars.pop('Ford');
// console.log("Final cars array after pop is:", cars);
// cars.shift(2);
// cars.shift('Hyundai');
// console.log("Final cars array after shift is:", cars);
// const test = [2, 1, 33, '4', 5];
// console.log("Test array is:", test);
// const simi =test.sort()
// console.log("Sorted test array is:", simi);

// const realid = Symbol("id");
// const person = {
//   name: "",
//   [realid] : ""
// };
// person.name = "Simi";
// person.realid = "12345";
// console.log("Person object is:", person);

// person.realid = "67890";
// // console.log("Updated person object is:", person);
// const realid = Symbol("id");
// {
// const person = {
//   name: "Simi",
//   id: 1  // use Symbol as a key
// };
// }
// {
// {const person = {
//     name:"Sameeksha",
//     userid:2
// };}
// userid = 3
// console.log("Person object is:", person);


// function test() {
//     let a = 10;
//   }
//   console.log(a);

import { user,id } from './user1.js';


console.log("User 1:", user);
 user.id = "U1-Updated-Value"; // Update the id
console.log("Updated User 1:", user.id);
console.log("Updated User 1:", user[id]);
user[id]="kya chnage hoga";
console.log("Updated User 1 with Symbol:", user[id]);