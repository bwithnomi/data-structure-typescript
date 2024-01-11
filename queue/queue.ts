export class QueueNode {
  next:  QueueNode | null;

  constructor(public value: any){
    this.next = null;
  }
}

class Queue {
  top: QueueNode | null;
  bottom: QueueNode | null;
  length: number;

  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek(){
    return this.top;
  }

  enqueue(value: any){
    let newNode = new QueueNode(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      this.bottom!.next = newNode;
      this.bottom = newNode
    }
    this.length++;
    return this.top;
  }

  dequeue(){
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null
    }
    const holding = this.top;
    this.top =  this.top.next;
    this.length--;
    return holding;
  }
}

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(16);
queue.enqueue(0);
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue.peek());
