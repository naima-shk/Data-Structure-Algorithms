//stack class
class Stack {
  //// Array is used to implement stack
  constructor() {
    this.items = [];
    this.size = 5;
    // Functions to be implemented
    // push(item)
    // pop()
    // peek()
    // printStack()
  }
  //push algorithm

  pushCustomMethod(item) {
   
      // this.items.push(item);
      this.items.length = this.items.length + 1;
      if (this.items.length > this.size){
        console.log('overflow stack')
      } else {
          this.items.push(item);
      
      }
    
      

  }

  

  //customInsertAtTheEnd(7);
  //console.log(arr);
  //popCustomMethod() {
    //this.items.length = this.items.length - 1;

   // for (let i = 0; i < this.items.length; i++) {
     // console.log(this.items[i]);
   // }
  //}

   popCustomMethod() {
    if (this.size == 0) return undefined;
    let deleteItem = this.items[this.size - 1];
    this.size -= 1;
    console.log(`${deleteItem} removed `);
    return deleteItem;
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
     console.log('true');
  }
  printStack() {
      
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.items[i]);
    }
  }
}

let myStack = new Stack();
//adding elements to the stack
console.log(myStack.pushCustomMethod(10));
console.log(myStack.pushCustomMethod(20));
console.log(myStack.pushCustomMethod(30));
console.log(myStack.pushCustomMethod(40));
//myStack.pushCustomMethod(30);
//console.log(myStack.popCustomMethod(10));
//printing the stack element
//prints [10,20,30]
//console.log(myStack.printStack());
//return 30
//console.log(myStack.peek());
//return 30 and remove it from stack
//console.log(myStack.pop());
//return [10,20]
//console.log(myStack.printStack());
//myStack.isEmpty();
