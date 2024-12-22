function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number | string): number {
  const bNum = typeof b === 'string' ? parseFloat(b) : b;
  return a + bNum;
}

let result = add(1, 2); // Correct usage
let result2 = addSafe(1, "2"); // Correct usage with type handling
console.log(result,result2); // Output: 3 3