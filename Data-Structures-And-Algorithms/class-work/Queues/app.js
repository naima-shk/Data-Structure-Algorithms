//queue class
class Queue {
  //// Array is used to implement queue
  constructor() {
    this.items = [];
    // Functions to be implemented
    // enqueue(item)
    // dequeue()
    // isEmpty()
    // printQueue()
  }
  //this.size = 0;

  // enqueue function
  enqueueCustomMethod(element) {
    this.items[this.size] = element;
    console.log(`${element} added `);
    this.size += 1;
    return this.size - 1;
    // adding element to the queue using custom method
    //this.items.push(element);
  }
  // dequeue function
  dequeueCustomMethod() {
    // removing element from the queue
    // returns underflow when called
    // on empty queue
    //this.items.shift();
    for (let i = 0; i < this.items.length; i++) {
      this.items[i - 1] = this.items[i];
      //console.log(`${this.items} deleted `);
    }

    this.items[this.items.length - 1] = 0;
  }
  printQueue() {
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.items[i]);
    }
  }
}

let myQueue = new Queue();
// Adding elements to the queue
// queue contains [10, 20, 30, 40, 50]
myQueue.enqueueCustomMethod(10);
myQueue.enqueueCustomMethod(20);
myQueue.enqueueCustomMethod(30);
myQueue.enqueueCustomMethod(40);
myQueue.enqueueCustomMethod(50);
myQueue.enqueueCustomMethod(60);
myQueue.enqueueCustomMethod(70);

// removes 10 from the queue
// queue contains [20, 30, 40, 50, 60]
console.log(myQueue.dequeueCustomMethod());

// removes 20
// queue contains [30, 40, 50, 60]
//console.log(myQueue.dequeueCustomMethod());
//console.log(myQueue.printQueue());
