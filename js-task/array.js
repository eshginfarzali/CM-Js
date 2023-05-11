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

// console.log(multiply(2, 3, 4,)); // 24
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

// function getAlphabetIndex(i) {
//     let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// return alphabet.indexOf(letter.toLowerCase()) + 1;
//     return alphabet[i-1];
//   }
  
//   console.log(getAlphabetIndex(1)); // a
//   console.log(getAlphabetIndex(26)); // z
//   console.log(getAlphabetIndex(13)); // m  



//***************************************#forEach loop yazdirir callbackfun qebul edir element, index, arr(referance) qaytarir*/

const users = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    }
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
      "name": "Johns Group",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-tailers"
    }
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    }
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    }
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }
]

// users.forEach((user, index)=>{
//   console.log(`${index}.  ${user.name} ~ ${user.email}`)

// })

// //******************************************#every hamisini baxir hamisi true olsa true qaytarir bir false olsa false qaytarir******************   */
// const companyName = users.every((user)=>user.company.name)
// console.log(companyName)



//*******************************************#some biri eger varsa true qyatarir ****************************

// const endWeb = users.some((user)=>{
//   return user.website.endsWith(".net")
// })
// console.log(endWeb)



// const endEmail = users.some((user)=>{
//   return user.email.endsWith(".net")
// })

// console.log(endEmail)


//******************************************#filter array qayatrir***************************** */

// users.filter((user)=>{
//   return user.website.endsWith(".org")
// }).forEach((user)=>{
//   console.log(user.website)
// })


// users.filter((user)=>user.website.endsWith(".org")).forEach((user)=>console.log(user.website))



//******************************************************#map******************** */

// const email = users.map((user)=> user.email)
  
// console.log(email)

// const company = users.map((user)=> user)
  
// console.log(company)



// function capitalizeWords(str) {
//   return str
//     .toLowerCase()
//     .split(' ')
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(' ');
// }

//  Hello My Name Is Harry
// console.log(capitalizeWords('HELLO my name is harry'));

//  JavaScript And TypeScript
// console.log(capitalizeWords('JAVASCRIPT AND TYPESCRIPT'));


//*******************************************************#11.05.2023----Task1********************
// let arrNumber =[1,2,3,4,5,6,7,8,9,10]
// let newArr =[]
// arrNumber.forEach((num)=>newArr.push(num**2))
// console.log(newArr)

//*******************************************************#Task2*****************************

// let arrNumber =[1,2,3,4,5,6,7,8,9,10]
// let userNum = prompt('enter the number:')


// let someNum = arrNumber.some((mmm)=>{
//   return mmm.toString().includes(userNum)

// })
// console.log(someNum)


// let someNum =arrNumber.some((userNum)=>{
// return userNum
// })
// console.log(someNum)


let arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let userNum = 2;

let isNumInArray = arrNumber.some(number => number === userNum);

console.log(isNumInArray);