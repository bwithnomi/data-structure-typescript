const mergeSortedArrays = (arr1: number[], arr2: number[]): number[] => {
  if(arr1.length === 0) return arr2;
  if(arr2.length === 0) return arr1;

  const mergedArray: number[] = [];
  let arrayItem1 = arr1[0];
  let arrayItem2 = arr2[0];
  let i = 1;
  let j = 1;

  while (arrayItem1 || arrayItem2){
    if(!arrayItem2 || arrayItem1 < arrayItem2){
      mergedArray.push(arrayItem1);
      arrayItem1 = arr1[i];
      i++;
    } else {
      mergedArray.push(arrayItem2);
      arrayItem2 = arr2[j];
      j++;
    }
  }
  
  return mergedArray;
}

console.log(mergeSortedArrays([0,2,4,6,8], [1,3,5,7,9]));
