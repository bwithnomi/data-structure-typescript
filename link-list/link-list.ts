export class LinkedNode {
  next:  LinkedNode | null;

  constructor(public value: any){
    this.next = null;
  }
}

class LinkedList {
  head: LinkedNode;
  tail: LinkedNode;
  length: number;

  constructor(value: any){
    this.head = {
      value: value,
      next: null,
    }

    this.tail = this.head;
    this.length = 1;
  }

  append(value: any){
    const newNode = new LinkedNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value: any){
    const newNode = new LinkedNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList(): any[]{
    const array: any[] = []
    let currentNode: LinkedNode | null = this.head;
    while(currentNode !== null){
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index: number, value: any): ReturnType<LinkedList['printList']>{
    if (index >= this.length) {
      this.append(value)
      return this.printList();
    }
    if (index == this.length) {
      this.prepend(value)
      return this.printList();
    }
    const newNode = new LinkedNode(value);
    let leader = this.traverseToIndex(index-1);
    if (!leader) return this.printList();
    const holdongPointer = leader.next!;
    
    leader.next = newNode;
    newNode.next = holdongPointer;
    this.length++;
    return this.printList();
  }

  remove(index: number){
    const leader = this.traverseToIndex(index-1);
    if (!leader) return this.printList();
    const unwantedNode = leader.next;
    leader.next = unwantedNode!.next;
    this.length--;
  }

  traverseToIndex(index: number): LinkedNode | null {
    let counter = 0;
    let currentNode: LinkedNode| null  = this.head;
    while(counter !== index){
      if(currentNode){
        currentNode = currentNode.next;
      }
      counter++
    }

    return currentNode;
  }

  reverse(){
    if(!this.head.next){
      return this.head
    }

    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp
    }

    this.head.next = null;
    this.head = first;

    return this.printList()
  }
}

const myList = new LinkedList(10);
myList.append(5)
myList.prepend(4)
myList.prepend(7)
console.log(myList.printList());
myList.insert(4, 6)
console.log(myList.printList());
myList.remove(1)
console.log(myList.printList());

console.log(myList.reverse());