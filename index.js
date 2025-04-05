// 1

// function countArrayElements(arr) {
//     return arr.reduce((acc, el) => {
//         acc[el] = (acc[el] || 0) + 1;
//         return acc;
//     }, {});
// }

// let arr = ['A', 'B', 'C', 'B', true, true, false];
// console.log(countArrayElements(arr)); 


// 2

// function firstLast6(arr) {
//     return arr[0] === 6 || arr[arr.length - 1] === 6;
// }

// console.log(firstLast6([1, 2, 6]));
// console.log(firstLast6([6, 1, 2, 3]));
// console.log(firstLast6([13, 6, 1, 2, 3]));


// 3

// function midThree(arr) {
//     if (arr.length % 2 === 0) arr.push(1);

//     let mid = Math.floor(arr.length / 2);
//     return [arr[mid - 1], arr[mid], arr[mid + 1]].map(numToWord);
// }

// function numToWord(num) {
//     const words = ["ZERO", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE"];
//     return words[num] || num;
// }

// console.log(midThree([1, 2, 3, 4, 5]));
// console.log(midThree([8, 6, 7, 5, 3, 0, 9]));


// 4

// function reverseWords(str) {
//     return str.trim().split(/\s+/).reverse().join(" ");
// }

// console.log(reverseWords(" the sky is blue"));
// console.log(reverseWords("hello   world!  "));
// console.log(reverseWords("a good example"));


// 5

// function duplicateCount(str) {
//     let counts = {};
//     let duplicates = 0;

//     for (let char of str) {
//         counts[char] = (counts[char] || 0) + 1;
//     }

//     for (let key in counts) {
//         if (counts[key] > 1) duplicates++;
//     }

//     return duplicates;
// }

// console.log(duplicateCount("abcde"));
// console.log(duplicateCount("aabbcde"));
// console.log(duplicateCount("Indivisibilities"));
// console.log(duplicateCount("Aa"));


// 6

// function rev(num) {
//     return Math.abs(num).toString().split("").reverse().join("");
// }

// console.log(rev(5121));
// console.log(rev(69));
// console.log(rev(-122157));
