const colorInfo = document.getElementById("colorInfo")
const copy = document.getElementById("copy")
const changeColor = document.getElementById("changeColor")
const main = document.getElementById("main")
// const hexArr = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b','c','d','e','f']
// function generateRandomHex() {
//     let randomHex = '';
//     for (let i = 0; i < 6; i++) {
//       const randomIndex = Math.floor(Math.random() * hexArr.length);
//       randomHex += hexArr[randomIndex];
//     }
//     return randomHex;
//   }

  
changeColor.addEventListener("click", ()=>{
    // const randomHexValue = generateRandomHex();
    // let randomHexValue =hexArr[Math.floor(Math.random()*hexArr.length)]+hexArr[ Math.floor(Math.random()*hexArr.length)]+hexArr[ Math.floor(Math.random()*hexArr.length)]+hexArr[ Math.floor(Math.random()*hexArr.length)]+hexArr[ Math.floor(Math.random()*hexArr.length)]+hexArr[ Math.floor(Math.random()*hexArr.length)]
 const randomHexValue =Math.random().toString(16).slice(2,8)
    main.style.backgroundColor=`#${ randomHexValue}`

    colorInfo.innerHTML=`#${ randomHexValue}`

})



copy.addEventListener('click', () => {
  navigator.clipboard.writeText(colorInfo.innerText)
    // .then(() => alert('Yazı kopyalandı:', colorInfo.innerText))
    // .catch((err) => alert('Yazı kopyalanırken bir hata oluştu:', err));
});
