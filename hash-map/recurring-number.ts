const firstRecurringNumber = (input: number[]) => {
  let setMap: Map<number, true> = new Map();

  for (let index = 0; index < input.length; index++) {
    if (setMap.has(input[index])) {
      return input[index]
    }

    setMap.set(input[index], true);
  }

  return undefined;
}

console.log(firstRecurringNumber([2,1,5,4,2,6]));
