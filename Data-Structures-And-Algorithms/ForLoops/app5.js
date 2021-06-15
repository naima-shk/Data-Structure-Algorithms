////Consider you are given an array [2,0,1,6,45,89]. You need to find the smallest element in the array. How’d you do that?
let array = [2, 0, 1, 6, 45, 89];
let smallest = array[0];

for (let i = 0; i < array.length; i++) {
  if (smallest > array[i]) {
    smallest = array[i];
  }
}
console.log(smallest);
