export class StackNode {
  next:  StackNode | null;

  constructor(public value: any){
    this.next = null;
  }
}

class Stack {
  top: StackNode | null;
  bottom: StackNode | null;
  length: number;

  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek(){
    return this.top;
  }

  push(value: any){
    let newNode = new StackNode(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      let hold = this.top;
      this.top = newNode;
      this.top.next = hold;
    }
    this.length++;
    return this.top;
  }

  pop(){
    if (!this.top) {
      return null;
    }
    const holding = this.top;
    this.top =  this.top.next;
    this.length--;
    return holding;
  }
}

const stack = new Stack();
stack.push(5);
stack.push(10);
stack.push(16);
stack.push(0);
// stack.pop();
console.log(stack.pop());
