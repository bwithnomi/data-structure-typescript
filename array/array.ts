const string = ['a', 'b', 'c', 'd']
// 4*4 = 16 bytes of storage

//push
string.push('e') // O(1)

//pop
string.pop();
string.pop();

//unshift
string.unshift('x') // O(n)

string.splice(0, 1, 'dsa') // O(n)

console.log(string);
