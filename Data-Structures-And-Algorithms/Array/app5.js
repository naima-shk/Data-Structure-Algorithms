//You are given an array  [1, 9, 20, 20, 4, 0, 3, 4]. Add 9 to the end of the array.
let arr=[1, 9, 20, 20, 4, 0, 3, 4];
function customInsertAtTheEnd(name){
    arr.length = arr.length+1;
    arr[arr.length-1] = 9;

}

customInsertAtTheEnd(arr);
console.log(arr);