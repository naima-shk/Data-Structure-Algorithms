//Given an array [0, 3, 4, 5, 6, 9, 0], place 1 at the start of this array.
let arr= [0, 3, 4, 5, 6, 9, 0];
function insertAtStart(name) {
    arr.length = arr.length + 1;
    for (let i = arr.length - 1; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = 1;
  }
  insertAtStart(arr);
  console.log(arr);