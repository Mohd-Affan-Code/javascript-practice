// // Question 1: Numbers from 1 to 100 in 10 rows (each row with 10 numbers)
// for (let a = 1; a <= 100; a = a + 10) {
//   for (let b = a; b < a + 10; b++) {
//     document.write(`${b} `);
//   }
//   document.write("<br>");
// }

// /*
// Output:
// 1 2 3 4 5 6 7 8 9 10
// 11 12 13 14 15 16 17 18 19 20
// ...
// 91 92 93 94 95 96 97 98 99 100
// */

// // Question 2: Print 4 rows, each with 3 stars
// for (let i = 1; i <= 4; i++) {
//   console.log(i); // Shows which row is being printed
//   for (let j = 1; j <= 3; j++) {
//     document.write(" * ");
//   }
//   document.write("<br>");
// }

// /*
// Output:
//  *  *  *
//  *  *  *
//  *  *  *
//  *  *  *
// */

// // Question 3: Increasing triangle pattern of stars
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "* ";
//   }
//   console.log(row);
//   document.write(row + "<br>");
// }

// /*
// Output:
// *
// * *
// * * *
// * * * *
// * * * * *
// */

// // Question 4: Pyramid Pattern

// let n = 4;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++) {
//     row += "  ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     row += "* ";
//   }
//   console.log(row);
// }

// //       *
// //     * * *
// //   * * * * *
// // * * * * * * *

// 1. Print a right-angled triangle pattern

// for (let i = 1; i <= 5; i++) {
//   let str = "";
//   for (let j = 1; j <= 5 - i; j++) {
//     str += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     str += "*";
//   }
//   console.log(str);
// }


