// ❌ Logic Error: Returning true when a divisor is found (means NOT prime)
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; // ✅ Fix: Return false if divisible (not prime)
    }
  }
  return true; // ✅ Return true only if no divisors are found
}

console.log(isPrime(7)); // ✅ Output: true
