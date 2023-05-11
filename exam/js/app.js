// Show number's dividends from 100 to 1000.
// Input | Output
// 50      | 100, 150, 200, 250, 300 ... 950
// 70      | 140 , 210, 280, 980 ...
// 85      | 170, 255, 340, ... 935

function showDividends(num) {
    let dividends = [];
    for (let i = 100; i <= 1000; i++) {
      if (i % num === 0) {
        dividends.push(i);
      }
    }
    return dividends;
  }
  console.log(showDividends(50)); 
  console.log(showDividends(70)); 
  console.log(showDividends(85));



  
  

//   We need to swap the case of all letters in a string. Provide us a function for doing it.
//   swapCase(string) : string
//   Input            |     Output
//   aBcD             |     AbCd
//   jAvaScRIPt       |     JaVAsCripT

//   function swapCase(str) {
//     let empty = '';
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === str[i].toUpperCase()) {
//         empty += str[i].toLowerCase();
//       } else {
//         empty += str[i].toUpperCase();
//       }
//     }
//     return empty;
//   }

//   console.log(swapCase('aBcD')); 
//   console.log(swapCase('jAvaScRIPt')); 
  
  function swapCase(str) {
    return str.replace(/\w/g, (c)=>  c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())
  }
  console.log(swapCase('aBcD')); // Output: 'AbCd'
  console.log(swapCase('jAvaScRIPt')); // Output: 'JaVAsCriPt'








//   Show the count of the both odd and even numbers from array.
//   let numbers = [1,4,7,8,3,5,0,2,4,6,12,15,18,46,45,48,97,84]
//   For example, countEvensAndOdds(numbers);   // evens: 12, odds: 13

let numbers = [1,4,7,8,3,5,0,2,4,6,12,15,18,46,45,48,97,84];
let evenCount = 0;
let oddCount = 0;

function showNum(num) {

for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}

return { evenCount , oddCount }
}

console.log(showNum(numbers))