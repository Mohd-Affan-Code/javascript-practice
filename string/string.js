// 1. Count the number of vowels in a string

// function findVowels(str) {
//   let vowels = "aeiouAEIOU";
//   let result = [];

//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       result.push(str[i]);
//     }
//   }
//   return result;
// }

// console.log(findVowels("Hello World"));

// 2. Count the number of consonants in a string

// function countConsonants(str) {
//   const vowels = "aeiouAEIOU";
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];

//     if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z")) {
//       if (!vowels.includes(char)) {
//         count++;
//       }
//     }
//   }

//   return count;
// }

// 3.  Count the number of digits in a string

let str = "abc123x8yz456";
let digitC = 0;

for (let char of str) {
  if (char >= "0" && char <= "9") {
    digitC++;
  }
}
console.log(digitC);
