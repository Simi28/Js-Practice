export const id = Symbol("realid");

export const user = {
  name: "Alice",
  [id]: "U1-Secret-Value"
};

console.log("User 1:", user);