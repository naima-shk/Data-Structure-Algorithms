//Implement following methods. Don’t forget to increase and decrease the size when you add or remove an element from the queue.
//enqueue: a method through that you can add a value to the queue
//peek: a method through which you can get the value on the top of queue
//dequeue: a method through which you can remove the first element of the queue.
// by built-in method

class Queue {
    //// Array is used to implement queue
    constructor() {
      this.items = [];
      this.size = 5;
    }

enqueue(item) {
    // this.items.push(item);
    if(this.items.length+1 > this.size){
        console.log('overflow');
        }
    else{
        this.items.push(item);
        }
}
// by customised method
enqueueCustomMethod(item){
    this.items.length=this.items.length+1;
    for(let i=0; i<this.items.length; i++){
        this.items[this.items.length-1]=item;
}
}
peek() {
    console.log(this.items[0]);
}
// by built-in method
   dequeue() {
    // this.items.shift();
    if(this.items.length==0){
        console.log("underflow");
    }
    else{
        this.items.shift();
    }  

}
// by customised method
dequeueCustomMethod() {
    for(let i=0; i<this.items.length; i++){
        this.items[i]= this.items[this.items.length+1];
    }
    this.items.length= this.items.length-1;
}
printQueue(){
    for(let i = 0; i<this.items.length;i++){
        console.log(this.items[i]);
    }
    }
    }
    let myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
myQueue.enqueue(40);
myQueue.printQueue();
myQueue.dequeue();
myQueue.printQueue();
myQueue.enqueueCustomMethod(50);
myQueue.printQueue();
myQueue.dequeueCustomMethod();
myQueue.printQueue();
myQueue.peek();
