//stack class
class Stack {
    //// Array is used to implement stack
  constructor() {
    this.items = [];
     // Functions to be implemented
    // push(item)
    // pop()
    // peek()
    // printStack()
  }
 
  push(item) {
    this.items.push(item);
  }
  pop() {
    this.items.pop();
  }
  //peek function
  peek() {
      // return the top most element from the stack
    // but does'nt delete it.
    return this.items[this.items.length - 1];
  }
  //isEmpty function
  isEmpty() {
      // return true if stack is empty
    if (this.items.length == 0)  
     console.log(true);
  }
  printStack() {
      
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.items[i]);
    }
  }
}
let myStack = new Stack();
//adding elements to the stack
myStack.push(10);
myStack.push(20);
myStack.push(30);
//printing the stack element
//prints [10,20,30]
 //console.log(myStack.printStack());
 //return 30
 //console.log(myStack.peek());
 //return 30 and remove it from stack
//console.log(myStack.pop());
//return [10,20]
//console.log(myStack.printStack());
console.log(myStack.isEmpty());
