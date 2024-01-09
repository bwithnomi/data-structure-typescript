function twoSum(nums: number[], target: number): number[] {
  let sums: number[] = [];
  let left = 0;
  let right = nums.length - 1;
  while(left != right){
      let sum = nums[left] + nums[right];
      if(sum == target){
          return [left, right]
      }
      if(left == right -1){
          left++;
          right = nums.length - 1
      } else {
          right--
      }
  }
  return [];
};

let a = 5;
let b = 4;

a = a + b;
b = a-b;
a = b-a

