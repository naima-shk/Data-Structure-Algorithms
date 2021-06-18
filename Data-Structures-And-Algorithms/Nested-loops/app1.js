//Pose you’re given an array [ [1, 2], [3, 4], [5, 6] ]. Print all the members of this two-dimensional array using for loop and while nested loops.
 let array=[ [1, 2], [3, 4], [5, 6] ];
 for (let i=0; i<array.length; i++){
     let arr = array[i];
     for (let j=0; j<arr.length;j++){
       console.log( arr[j])
     }
 }
 