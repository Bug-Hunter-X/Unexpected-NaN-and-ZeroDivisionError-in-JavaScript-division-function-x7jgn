function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; // This will cause issues if a or b is NaN
  }
  return a / b;
}

console.log(foo(10, 0)); // Throws an error
console.log(foo(NaN, 5)); // Returns NaN
console.log(foo(10, NaN)); // Returns NaN