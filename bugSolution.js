function foo(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return NaN; // Handle NaN values
  }
  if (a === 0 || b === 0) {
    return 0; //This is okay in this case but you should consider handling this differently
  }
  return a / b;
}

console.log(foo(10, 0)); // Returns 0
console.log(foo(NaN, 5)); // Returns NaN
console.log(foo(10, NaN)); // Returns NaN