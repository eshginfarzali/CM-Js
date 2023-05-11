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

console.log(`Number of even numbers: ${evenCount}`);
console.log(`Number of odd numbers: ${oddCount}`);
}

showNum(numbers)