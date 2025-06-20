const prompt = require("prompt-sync")();

// Employee Type Checker
console.log("\n Q1: Employee Type Checker");

const role = prompt("Enter role (manager/developer/intern): ").toLowerCase();

if (role === "manager") {
  console.log("Access: Full");
} else if (role === "developer") {
  console.log("Access: Limited");
} else {
  console.log("Access: None");
}

// 2 Age Eligibility Checker
console.log("\n Q2: Age Eligibility Checker");
const age = parseInt(prompt("Enter your age: "));
console.log(age >= 18 ? "Eligible to vote " : "Not eligible ");

// 3️ Sum of Squares
console.log("\n Q3: Sum of Squares");
const a = parseInt(prompt("Enter first number: "));
const b = parseInt(prompt("Enter second number: "));
const sumOfSquares = (x, y) => x * x + y * y;
console.log("Sum of squares:", sumOfSquares(a, b));

// 4️ Password Strength Checker
console.log("\n Q4: Password Strength Checker");
const password = prompt("Enter password: ");
console.log(password.length >= 8 ? "Strong " : "Weak ");

// 5️ Multiples of 3
console.log("\n Q5: Multiples of 3 (1 to 30)");
let result = [];
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) result.push(i);
}
console.log(result.join(", "));

// 6️ Safe JSON Parsing
console.log("\n Q6: Safe JSON Parsing");
const jsonStr = prompt("Enter a JSON string: ");
try {
  const data = JSON.parse(jsonStr);
  console.log(" Valid JSON:", data);
} catch {
  console.log(" Invalid JSON");
}

// 7️ Mini ATM 
console.log("\n Q7: Mini ATM Simulation");
let balance = 1000;
console.log("Initial Balance: ₹" + balance);

const action = prompt("Do you want to deposit or withdraw? (d/w): ").toLowerCase();

if (action === "d") {
  const deposit = parseInt(prompt("Enter deposit amount: ₹"));
  balance += deposit;
  console.log(` Deposited ₹${deposit}`);
} else if (action === "w") {
  const withdraw = parseInt(prompt("Enter withdraw amount: ₹"));
  if (withdraw > balance) {
    console.log(" Insufficient balance");
  } else {
    balance -= withdraw;
    console.log(` Withdrew ₹${withdraw}`);
  }
} else {
  console.log(" Invalid action.");
}

console.log("Final Balance: ₹" + balance);

console.log("\n All tasks complete! ");
