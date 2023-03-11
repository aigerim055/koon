


let swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 10,
  freeMode: true,
  watchSlidesProgress: true,
  
 });
 
 
 let swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
 });
 