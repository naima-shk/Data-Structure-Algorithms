//Implement Queue using an array. Initialize it with an array which will be used to store value and a size property that will be used to track the size of queue

//queue class
class Queue {
  // Array is used to implement queue
  constructor() {
    this.items = [];
  }
  // initailization and printing
  printQueue() {
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.items[i]);
    }
  }
  //size
  size() {
    this.size = this.items.length;
    console.log(this.size);
  }
}
let myQueue = new Queue();
myQueue.printQueue();
myQueue.size();
