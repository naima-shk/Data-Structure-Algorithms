//You are given two numbers, num1 = 4 and num2 = 7. Add both and return true if both are equal to 11. Otherwise, return false, if they don’t equal 11.
let num1 = 4;
let num2 = 6;

sum = num1 + num2; // add the numbers

switch (sum) {
  case 10:
    console.log("false");
    break;
  case 11:
    console.log("true");
    break;
  default:
    console.log("No value found");
}
