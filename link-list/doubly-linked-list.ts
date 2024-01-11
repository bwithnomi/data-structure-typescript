class LinkedNode {
  next:  LinkedNode | null;
  prev:  LinkedNode | null;

  constructor(public value: any){
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  head: LinkedNode;
  tail: LinkedNode;
  length: number;

  constructor(value: any){
    this.head = {
      value: value,
      next: null,
      prev: null,
    }

    this.tail = this.head;
    this.length = 1;
  }

  append(value: any){
    let newNode = new LinkedNode(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value: any){
    const newNode = new LinkedNode(value);
    newNode.next = this.head;
    this.head.prev = newNode;
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

  insert(index: number, value: any): ReturnType<DoublyLinkedList['printList']>{
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
    let follower = leader!.next;
    if (!leader) return this.printList();
    const holdongPointer = leader.next!;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower!.prev = newNode;
    this.length++;
    return this.printList();
  }

  remove(index: number){
    const leader = this.traverseToIndex(index-1);
    if (!leader) return this.printList();
    const unwantedNode = leader.next;
    const follower = unwantedNode!.next
    leader.next = follower;
    follower!.prev = leader
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
}

const myList = new DoublyLinkedList(10);
myList.append(5)
myList.prepend(4)
myList.prepend(7)
// console.log(myList.printList());
myList.insert(2, 6)
console.log(myList.printList());
myList.remove(1)
console.log(myList.printList());