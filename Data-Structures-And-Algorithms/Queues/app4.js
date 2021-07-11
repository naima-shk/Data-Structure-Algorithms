//Implement following methods:
//clear: a method that clears queue
//toString: a method that converts all members of queue into string
class Queue {
    constructor(){
        this.items = [10,20,30];
    }
    
    //   toString method
​
    toStringMethod(){
        let string;
        string = this.items.toString();
        console.log(string);
        }
    // clear method
    
    clear(){
        this.items = [];
     this.size =0;  
      console.log('Queue cleared..');
       return this.items}
}
 
​
let myQueue = new Queue();
myQueue.toStringMethod();
myQueue.clear();