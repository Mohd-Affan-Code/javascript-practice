// 1. Find the largest element in an array

// const numbers = [10, 25, 5, 80, 45];
// let largest = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > largest) {
//     largest = numbers[i];
//   }
// }

// console.log("Largest number is:", largest);

// 2.  Find the smallest element in an array

// const numbers = [10, 25, 5, 80, 45];
// let smallest = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (smallest > numbers[i]) {
//     smallest = numbers[i];
//   }
// }

// console.log(smallest);

// 3. Find the sum of all elements in an array

// const numbers = [10, 25, 5, 80, 45];

// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// console.log(sum);

// 4. Find the average of all elements in an array

// const numbers = [10, 25, 5, 80, 45];

// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// let average = sum / numbers.length;
// console.log("average is :", average);

// 5.  Count how many elements in an array are even

// const numbers = [10, 25, 5, 80, 45, 30, 25, 44];

// let even = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     even.push(numbers[i]);
//   }
// }
// console.log(even.length)
// console.log(even);

// 6. Count how many elements in an array are odd

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let odd = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 !== 0) {
//     odd.push(numbers[i]);
//   }
// }
// console.log(odd.length);
// console.log(odd);

// 7.Reverse an array

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let len = numbers.length;
// console.log(len);

// for (let i = len - 1; i >= 0; i--) {
//   console.log(numbers[i]);
// }

// 8 . sum  of array elements

// let arr = [1, 2, 3, 4, 5];

// function sumNum(...num) {
//   let total = 0;
//   for (let i = 0; i < num.length; i++) {
//     return (total += num[i]);
//   }
//   return total;
// }

// console.log(sumNum(...arr));

// 9. Check if an array is palindrome

// function isPalindrome(arr) {
//   let start = 0;
//   let end = arr.length - 1;

//   while (start < end) {
//     if (arr[start] !== arr[end]) {
//       return false;
//     }
//     start++;
//     end--;
//   }
//   return true;
// }

// console.log(isPalindrome([1, 2, 3, 4, 5]));
// console.log(isPalindrome([1, 2, 3, 2, 1]));
// console.log(isPalindrome(["a", "b", "b", "a"]));

// 10. Find the second largest element in an array

let arr = [10, 20, 4, 45, 99];
let first = -Infinity;
let second = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > first) {
    second = first;
    first = arr[i];
  } else if (arr[i] > second && arr[i] < first) {
    second = arr[i];
  }
}

console.log(second); // Output: 45
