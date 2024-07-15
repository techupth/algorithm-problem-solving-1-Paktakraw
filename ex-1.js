function twoSum(numbers, target) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  // for (let left = 0; (right = numbers.length - 1); left < right) {
  //   const sum = numbers[left] + numbers[right];
  //   if (sum === target) {
  //     return [left, right];
  //   } else if (sum < target) {
  //     left++;
  //   } else {
  //     right--;
  //   }
  // }
  // return [];

  //index
  let left = 0;
  let right = numbers.length - 1;

  // console.log(numbers[left]);
  // console.log([numbers[left], numbers[right]]);

  while (left < right) {
    //ค่าในindex
    let sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}
let numbers = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(numbers, target));
