const clock = document.querySelector(".clock");
const date = new Date();

let hour = date.getHours(),
  minute = date.getMinutes(),
  second = date.getSeconds();

setInterval(() => {
  const date = new Date();

  let hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds();
  clock.innerHTML = `${hour}:${minute}:${second}`;
}, 1000);
