// 1. Count the number of vowels in a string

function findVowels(str) {
  let vowels = "aeiouAEIOU";
  let result = [];

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      result.push(str[i]);
    }
  }
  return result;
}

console.log(findVowels("Hello World"));
