//Pose you’re given an array [ [1, 2], [3, 4], [5, 6] ]. Print all the members of this two-dimensional array using for loop and while nested loops.
let arr= [[1,2],[3,4],[5,6]];
  let i=0; 
  
  while (i<arr.length){
   
    let j=0;
      while (j<arr[i].length){
          console.log(arr[i][j]);
          j++;
      }
      i++;
      
  }