/*
Consider the situation in which you are required to check if a number is 1 or 0. If it’s 1 you need to print true. Otherwise, you should print false.
*/

function checkNum() {
    let num = document.querySelector("input").value;
    if (num == 1) {
      console.log("true");
    } else {
      console.log("false");
    }
  }