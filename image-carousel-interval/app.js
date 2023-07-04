const randomImg = document.querySelector(".swiper-wrapper");
const Next = document.querySelector(".swiper-button-next");
const Prev = document.querySelector(".swiper-button-prev");
let imgArr = [];

function reloadeCarousel() {
  fetch("https://source.unsplash.com/random/500x500").then((res) => {
    imgArr.push(res.url);

    const swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  });
}
setTimeout(() => {
  Next.style.display = "block";
  Prev.style.display = "block";
}, 3000);
setInterval(() => {
  if (imgArr.length > 5) {
    imgArr.shift();
  }

  reloadeCarousel();

  if (imgArr.length < 6) {
    randomImg.innerHTML = "";

    imgArr.forEach((item) => {
      randomImg.innerHTML += `
        <div class="swiper-slide">
          <img src="${item}" alt="">
        </div>
      `;
    });
  }

  console.log(imgArr);
}, 1500);
