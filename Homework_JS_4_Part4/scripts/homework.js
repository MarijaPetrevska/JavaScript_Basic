
let result = '';  // empty string

// Loop through numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
  // For even numbers
  if (i % 2 === 0) {
    // Even numbers, add the "\n" new line 
    result = result + i + "\n";
  } else {
    // Odd numbers, add " " empty space.
    result = result + i + " ";
  }
}
// Result
// After building the result string, it is printed in the console
console.log(result);

// ARRAY
// I tried to resolve this also with array 
// let result = [];

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     result.push(i + "\n");
//   } else {
//     result.push(i + " ");
//   }
// }

// for (let value of result) {
//   console.log(value);
// }
