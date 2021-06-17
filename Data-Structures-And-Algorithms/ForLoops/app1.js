//Suppose you are given an array: [1, 8, 7, 3, 2, 9, 10, 12]. You need to find out whether a number is prime or not (Hint: a prime number is a number that is divisible by 1 and itself). What approach would you take to do that? Support it with the relevant code.
// program to check if a number is prime or not

function checkPrime(number) {
  if (number <= 1) {
    return false;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        return false;
      }
    }
    return true;
  }
}
console.log(checkPrime(10));

//let arr = [1, 8, 7, 3, 2, 9, 10, 12];
/*arr.forEach(function  (element) {
  let  isPrime = checkPrime(element);
  if (isPrime) {
    console.log(`${element} is a prime number`);
  } else {
    console.log(`${element} is NOT a prime number`);
  }
});
*/
