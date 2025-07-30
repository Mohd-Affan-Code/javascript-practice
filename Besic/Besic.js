// 1. Print numbers from 1 to 10 using a for loop

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// 2. Print even numbers between 1 and 20

// for (let i = 0; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// 3. Print odd numbers between 1 and 20

// for (let i = 0; i <= 20; i++) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
// }

// 4. Print the multiplication table of 5

// for (let i = 1; i <= 10; i++) {
//   console.log(`5 x ${i} = ${5 * i}`);
// }

// 5. Calculate the sum of numbers from 1 to 100

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

// 6. Print the squares of numbers from 1 to 10

// for (let i = 1; i <= 10; i++) {
//   console.log(i ** 2);
// }

// 7. Print numbers from 10 to 1 (reverse order)

// let i = 10;
// while (i >= 1) {
//   console.log(i);
//   i--;
// }

// 8. Print all numbers divisible by 3 between 1 and 50

// for (let i = 1; i <= 50; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

// 9. Print the factorial of a number

// let fact = 1;
// let num = 5;
// for (let i = 1; i <= num; i++) {
//   fact *= i;
// }
// console.log(fact);

// 10. Print Fibonacci series up to 100

// let a = 0,
//   b = 1;

// while (a <= 100) {
//   console.log(a);
//   let next = a + b;
//   a = b;
//   b = next;
// }

// for (; a <= 100; ) {
//   console.log(a);
//   let next = a + b;
//   a = b;
//   b = next;
// }

// 11. Print all prime numbers between 1 and 100

// for (let i = 2; i <= 100; i++) {
//   let isPrime = true;

//   for (let j = 2; j <= Math.sqrt(i); j++) {
//     if (i % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     console.log(i);
//   }
// }

// print a number 1000 to 337

// for (let i = 1000; i >= 337; i = i - 3) {
//   console.log(i);
// }

// write to check if the given number prime or not

// let num = 57;
// let isPrime = true;
// for (let i = 2; i < num; i++) {
//   if (num % i === 0) {
//     isPrime = false;
//     break;
//   }
// }

// if (isPrime) {
//   console.log("this is prime number");
// } else {
//   console.log("nhi hai");
// }

// 13. Reverse a number using a loop

let num = 12345;
let reversed = 0;

debugger;
while (num !== 0) {
  let digit = num % 10; // last digit nikalo
  reversed = reversed * 10 + digit; // reversed number me add karo
  num = Math.floor(num / 10); // last digit hatao
}

console.log(reversed); // Output: 54321
