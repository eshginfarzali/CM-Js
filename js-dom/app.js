// const imageElm = document.getElementById("root")

// // imageElm.innerHTML = `<div><img src="https://picsum.photos/1536/1354" alt=""></div>`


// const aWriter = document.querySelector(".a")
// const bWriter =document.getElementsByClassName("b")[0]
// const cWriter =document.getElementsByClassName("c")[0]

// aWriter.onclick = () => {
//     // navigator.clipboard.writeText("A")
//     imageElm.innerText= "A"
// }

// bWriter.onclick = () => {
//     navigator.clipboard.writeText("B")
//     imageElm.innerText= "B"
// }

// cWriter.onclick = () => {
// navigator.clipboard.writeText("C")
//     imageElm.innerText= "C"
// }

// const num1 = document.getElementById("num1")
// const num2 = document.getElementById("num2")
// const plus = document.getElementById("plus")
// const minus = document.getElementById("minus")
// const dive = document.getElementById("dive")
// const multy = document.getElementById("multy")
// const result = document.getElementById("result")

// plus.onclick=()=>{
//    result.innerHTML=`<p> ${+(num1.value) + +(num2.value)} </p>` 
// }
// minus.onclick=()=>{
//     result.innerHTML=`<p> ${+(num1.value) - +(num2.value)} </p>` 
//  }
//  dive.onclick=()=>{
//     result.innerHTML=`<p> ${+(num1.value) / +(num2.value)} </p>` 
//  }
//  multy.onclick=()=>{
//     result.innerHTML=`<p> ${+(num1.value) * +(num2.value)} </p>` 
//  }


// const rootElm =document.getElementById("root")
// const circleRed =document.createElement("div");
// circleRed.style.width = "200px"
// circleRed.style.height = "200px"
// circleRed.style.borderRadius = "50%"
// circleRed.style.backgroundColor = "red"
   
// rootElm.appendChild(circleRed)



const input = document.getElementById("input")
const button = document.getElementById("button")
const ul = document.querySelector(".ul")



button.onclick=()=>{
   const li =document.createElement("li")
   li.textContent=input.value
   ul.appendChild(li)
   input.value= ""
}

