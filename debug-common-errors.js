// ❌ Runtime Error: Attempting to multiply a string ("eight") by 2
let numbers = [2, 4, "eight"];
for (let i = 0; i < numbers.length; i++) {
  // ✅ Fix: Check if the value is a number before multiplying
  if (typeof numbers[i] === "number") {
    let doubled = numbers[i] * 2;
    console.log(doubled);
  } else {
    console.log(`Cannot double "${numbers[i]}" — not a number.`);
  }
}
