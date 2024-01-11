const reverse = (str: string): string => {
  if (!str || str.length < 2) {
    return str;
  }
  
  const backwards: string[] = []
  const totalItems = str.length - 1;

  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str.charAt(i));
  }
  
  return backwards.join('');
}

// pure js solution 
const reverse2 = (str: string): string => {
  return str.split('').reverse().join('')
}

// a cleaner approach 
let reverse3 = (str: string) => str.split('').reverse().join('');

console.log(reverse('Hi brad'));
