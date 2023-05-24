// class Car {
//     speed= 0;
//     constructor(model, year, owner){
//         this.model=model;
//         this.year=year;
//         this.owner=owner;
//     }
//    qazver(speed){
//     console.log(this.speed+=10);
//    }
//    tomozver(speed){
//     console.log(this.speed=this.speed-10);
//    }
// }

// const newCar = new Car("BMW", 2020, "German")
// console.log(newCar);


// newCar.qazver();
// newCar.qazver();

// newCar.tomozver();
// newCar.tomozver();

Array.prototype.clear= function(){
    this.length  = 0
}

const arr = [1,2,3,4,5,6]
arr.clear()

console.log(arr);


String.prototype.hide = function() {
    if (this.length <= 3) {
      return this;
    } else {
      let firstThree = this.slice(0, 3);
      let rest = this.slice(3);
      let hidden = rest.replace(/./g, "*");
      return firstThree + hidden;
    }
  }
  
  let word = "javascript";
  word = word.hide(); 
  console.log(word);// jav******
  
  let word1 = "eshgin";
  word1 = word1.hide(); 
  console.log(word1);// esh*** 




  Number.prototype.isEven =function(){
   return this%2===0 ? true : false
  }

  const num1 = 13 
  num1.isEven()//false
  const num2 = 14
  num2.isEven // true