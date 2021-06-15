//Consider you are given an array [2,0,1,6,45,89]. You need to find the largest element in the array. How’d you do that?

let array = [2, 0, 1, 6, 45, 89];
let largest = 0;

for (let i = 0; i < array.length; i++) {
  if (largest < array[i]) {
    largest = array[i];
  }
}
console.log(largest);
