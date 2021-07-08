

/*Implement following methods:
isEmpty: a method that checks whether the given stack is empty or not. It will return a boolean
isFull: a method that checks whether the given stack is full or not. Hint: Compare the length of array with size.
*/
class Stack {
    //// Array is used to implement stack
  constructor() {
    this.items = [];
    this.size =0;
  }

//check if the stack is empty 
isEmpty(){
    if (console.log(this.size == 0) )
    {
        'stack is empty'
    } else {
        'stack is not empty'
            
    
        return this.size == 0;
    } 
    } 
    isFull(){
        if (console.log(this.size ==items))
        {
            'stack is not empty'
        } else{
            'stack is empty'
            return this.size == items;
        }
    }
}

  let myStack = new  Stack()
  myStack.isEmpty()
  myStack.isFulls()
