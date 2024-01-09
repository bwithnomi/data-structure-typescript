class HashTable {
  data: Map<number, any[]> = new Map();
  constructor(private hashSize = 1000){
  }

  private _hash = (key: string) => {
    let hash = 5381;
    for (let i = 0; i < key.length; i++) {
      hash = (hash * 33) ^ key.charCodeAt(i);
    }

    return Math.abs(hash) % this.hashSize;
  }

  set(key: string, value: any){
    let address = this._hash(key);
    let newItem = this.data.get(address);
    if (!newItem) {
      newItem = [];
    }
    newItem.push([key, value])
    this.data.set(address, newItem);
    return this.data;
  }

  get(key: string){
    let address = this._hash(key);
    let currentBucket = this.data.get(address);
    if (!currentBucket || !currentBucket.length) {
      return undefined
    }
    for (let index = 0; index < currentBucket.length; index++) {
      if (currentBucket[index][0] === key) {
        return currentBucket[index][1]
      } 
    }
    return undefined;
  }

  keys(){
    const keyArray: any[] = [];

    for (const [key, value] of this.data) {
      keyArray.push(value[0][0])
    }

    return keyArray;
  }

}

const myHashTable = new HashTable();
console.log(myHashTable.set('name', 'alice'));
console.log(myHashTable.set('age', 'john'));
console.log(myHashTable.set('lite', 'alice'));
console.log(myHashTable.set('name', 'john'));
console.log(myHashTable.get('name'));
console.log(myHashTable.keys());

