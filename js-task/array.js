//***************************************A R R A Y ****************************** */

//*********************************************#1******************* */


// let arr = new Array(5);
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = Number(prompt(`Enter a number for index ${i}:`));
// }
// console.log(arr);



//******************************************#2********************* */

// function multiplyArrayElements(arr) {
//   let result = 1;
//   for (let i = 0; i < arr.length; i++) {
//     result *= arr[i];
//   }
//   console.log(result);
// }

// let arr = [2, 3, 4, 5];
// multiplyArrayElements(arr); // 120


//*******************************************#3*************************** */

// function multiply() {
//   let result = 1;
//   for (let i = 0; i < arguments.length; i++) {
//     result *= arguments[i];
//   }
//   return result;
// }

// console.log(multiply(2, 3, 4)); // 24
// console.log(multiply(5, 10)); // 50
// console.log(multiply(1, 2, 3, 4, 5)); // 120



//*******************************************#4******************************* */

// function convertElementsToItsLengths(arr) {
//   let lengths = [];
//   for (let i = 0; i < arr.length; i++) {
//     lengths.push(arr[i].length);
//   }
//   return lengths;
// }

// let arr = ["apple", "banana", "orange", "kiwi"];
// console.log(convertElementsToItsLengths(arr));
 // [5, 6, 6, 4]


 //******************************************************#5******************************** */

//  function findMax(arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// let arr = [2, 5, 1, 9, 4];
// console.log(findMax(arr)); // 9



//********************************************#6********************** */

// function findLongest(arr) {
//   let longest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i].length > longest.length) {
//       longest = arr[i];
//     }
//   }
//   return longest;
// }

// let arr = ["apple", "banana", "orange", "kiwi"];
// console.log(findLongest(arr)); // "banana"

//*************************************#7 ********************/


// let messages = [
//   {sender: "John", receiver: "Jane", hasRead: true},
//   {sender: "Jane", receiver: "John", hasRead: false},
//   {sender: "Mike", receiver: "Jane", hasRead: true},
//   {sender: "Jane", receiver: "Mike", hasRead: false},
//   {sender: "John", receiver: "Mike", hasRead: true}
// ];

// function getReadMessages(messages) {
//   return messages.filter(message => message.hasRead);
// }

// console.log(getReadMessages(messages));
 // [{sender: "John", receiver: "Jane", hasRead: true}, {sender: "Mike", receiver: "Jane", hasRead: true}, {sender: "John", receiver: "Mike", hasRead: true}]



 //*******************************************#8*********************** */

//  function cloneArray(arr) {
//     return arr.slice();
//   }
  
//   let arr = [1, 2, 3, 4, 5];
//   let clonedArr = cloneArray(arr);
//   console.log(clonedArr); // [1, 2, 3, 4, 5]







//*************************************************#9************************ */

// function convertMilesToKilometers(arr) {
//     let convertedArr = [];
//     for (let i = 0; i < arr.length; i++) {
//       convertedArr.push(arr[i] * 1.60934);
//     }
//     return convertedArr;
//   }
  
//   let arr = [1, 2, 3, 4, 5];
//   console.log(convertMilesToKilometers(arr)); // [1.60934, 3.21868, 4.82802, 6.43736, 8.0467]


//******************************************************#10*****************/

// function getEvenNumbers(arr) {
//     let evenNumbers = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0) {
//         evenNumbers.push(arr[i]);
//       }
//     }
//     return evenNumbers;
//   }
  
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   console.log(getEvenNumbers(arr)); // [2, 4, 6, 8, 10]


//****************************************************#11**************** */

function getAlphabetIndex(letter) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet.indexOf(letter.toLowerCase()) + 1;
  }
  
  console.log(getAlphabetIndex("a")); // 1
  console.log(getAlphabetIndex("z")); // 26
  console.log(getAlphabetIndex("m")); // 13