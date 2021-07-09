//Implement following methods:
//clear: a method that clears stack
//toString: a method that converts all members of stack into string


class Stack {
    //// Array is used to implement stack
  constructor() {
    this.items = [1,2,3,4,5];
    this.size =0;
  }


//clear stack
clear(){
  this.items=[]
  this.size =0;
  console.log('stack cleared..')
  return this.items
}


//string method
toStringMethod(){
let str;
str = this.items.toString();
console.log(str);
}
}