// let secretNumber = Math.floor(Math.random() * 100) + 1;

// let numPasses = 5;

// let pass = null;

// for (let passNum = 1; passNum <= numPasses; passNum++) {
//   pass = parseInt(prompt(`Pass ${passNum}:`));

//   if (pass === secretNumber) {
//     console.log("Congratulations! You passed the number!");

//     break;
//   } else if (pass < secretNumber) {
//     console.log("Too low!");
//   } else {
//     console.log("Too high!");
//   }
// }

// if (pass !== secretNumber) {
//   console.log(
//     `Sorry, you ran out of passes. The secret number was ${secretNumber}.`
//   );
// }

// for (let i= 1; i<=500; i++){
//   if(i%7===0){
//     console.log(i);

//   }
// }

// let sum =0
// for (let i= 1; i<=500; i++){
//   if(i%7===0){
//     sum +=i;

//   }
// }
// console.log(sum);

// function fibonacci(n) {
//   let fib = [0, 1];
//   for (let i = 2; i <= n; i++) {
//       fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   return fib[n];
// }

// console.log(fibonacci(10));







// let balance = 500;
// let numPasses = 3;
// let pass = 1234;
// for (let passNum = 1; passNum <= numPasses; passNum++) {
//   let enterPass = +prompt(` Enter password ${passNum}:`);
//   if (pass === enterPass) {
//     let enterMoney = +prompt(`You are balance ${balance}. Amount balance`);
//     if (enterMoney <= balance) {
//       console.log(`You are balance ${balance - enterMoney}. ${enterMoney} out`);
//     } else {
//       console.log("Not enough money in the balance");
//     }
//     break;
//   } else {
//     console.log(`Wrong password!`);
//   }
// }





// function sum(a, b){
//   console.log(a+b)
// }

// sum(12, 23  )






// function pow(x , n){
// return x**n
// }
// console.log(pow(3, 4))






// function formalMeet(name , gender){
//   if(gender==="m"){
//     console.log(`Hi, Mr ${name}`)
//   } else   if(gender==="w"){
//     console.log(`Hi, Mrs ${name}`)
//   }

// }

// formalMeet("Eshgin", "m")
// formalMeet("Pakito", "w")





//27.04.2023

//***************#1*************

// function reverseNum(num) {
//     let rev = 0;
//     let lastDigit;
//     while(num != 0){
//       lastDigit = num % 10;
//       rev = rev * 10 + lastDigit;
//       num = Math.floor(num/10);
//     }
//     return rev;
//   }
  
//   console.log(reverseNum(123)); // 321



//****************#2************
// function genNum(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(genNum(1, 100)); // random int between 1 to 100





//*********************#3**************

// function addNumber(...numbers) {
//   return numbers.reduce((acc, cur) => acc + cur);
// }

// console.log(addNumber(2, 10, 10, 20, 13, 15)); // 70


  //********************#4*************
  // const list = [[2,3,4],[6,4,9],[34,6,4]];
// const flattenedList = list.flat();
// console.log(flattenedList); // [2, 3, 4, 6, 4, 9, 34, 6, 4]



//***********************#5*************

// function celsiusToFahrenheit(celsius) {
//   return (celsius * 9/5) + 32;
// }

// console.log(celsiusToFahrenheit(25)); // 77