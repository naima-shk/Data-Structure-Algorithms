//Implement following methods. Don’t forget to increase and decrease the size when you add or remove an element from the stack.
//push: a method through that you can add a value to the stack
//peek: a method through which you can get the value on the top of stack
//pop: a method through which you can remove the first element of the stack.

class Stack {
    //// Array is used to implement stack
  constructor() {
    this.items = [];
    this.size =0;
  }
  // add element to top of stack
  push(element){
      this.items[this.size] =element;
      console.log(`${element} added to ${this.size}`)
      this.size +=1;
      return this.size -1;
  }
  // return and remove top element in stack
  // return undefined if stack is empty
  pop(){
      if(this.size == 0) return undefined
      let deleteItem =this.items[this.size -1]
      this.size -= 1;
      console.log(`${deleteItem} removed `)
      return deleteItem;
  }
  // check top element in stack
  peek(){
      console.log(`Top element is ${this.items[this.size -1]}`)
      return this.items[this.size -1 ]
  }
 
  
}


  let myStack = new  Stack()
  
  myStack.push(100)
  myStack.push(200)
 
  myStack.push(300)
  myStack.peek()
  myStack.pop()
 
  myStack.pop()
  