# TypeScript Type Error Example

This repository demonstrates a simple but common type error in TypeScript: passing a string argument to a function expecting a number.

## The Bug

The `add` function is defined to accept two numbers and return their sum. However, in the example usage, we pass the string "2" as the second argument. This causes a type error because TypeScript's type system prevents incompatible assignments.

## The Solution

The solution involves ensuring that the arguments passed to the function are of the correct type. This can be done through input validation or careful type handling in the calling code.

## How to Run

1. Clone this repository.
2. Compile the TypeScript code using `tsc bug.ts`.
3. Run the compiled JavaScript code.

## Lessons Learned

- TypeScript's static typing helps catch these errors at compile time.
- Always ensure that the types of arguments passed to functions match the function's type signature.