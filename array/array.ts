class MyArray {
  length: number;
  data: Map<number, any> = new Map();
  constructor(){
    this.length = 0;
  }

  get(index: number): any{
    return this.data.get(index)
  }

  push(item: any): number{
    this.data.set(this.length, item);
    this.length++;

    return this.length;
  }

  pop(): any{
    let item = this.data.get(this.length - 1);
    this.data.delete(this.length - 1);
    this.length--;
    return item;
  }

  delete(index: number){
    let item = this.data.get(this.length - 1);
    this.shift(index);
  }

  shift(index: number){
    for (let i = index; i < this.length - 1; i++) {
      this.data.set(i, this.data.get(i+1));
      this.data.delete(this.length - 1);
      this.length--;
    }
  }
}

const newArray = new MyArray();
newArray.push('HI')
newArray.push('You')
newArray.push('!')
newArray.delete(1)
console.log(newArray);
