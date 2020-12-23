$('.fade').slick({
  dots: false,
  infinite: true,
  speed: 300,
  fade: true,
  cssEase: 'linear',
  prevArrow: $("#arrow-prev"),
  nextArrow: $("#arrow-next")
});

const bgCard01 = document.querySelector('.bgCard01')
const arrowLeft = document.querySelector('#arrow-prev');
const arrowRight = document.querySelector('#arrow-next');

const data = [
  {
    desktopImage: 'img/desktop-image-hero-1.jpg'
  },
  {
    desktopImage: 'img/desktop-image-hero-2.jpg'
  },
  {
    desktopImage: 'img/desktop-image-hero-3.jpg'
  }
];


let currentPage = 0;

arrowLeft.addEventListener('click', () => {
  currentPage--
  if(currentPage < 0){
      currentPage = data.length - 1;
  }
  bgCard01.style.backgroundImage = `url(${data[currentPage].desktopImage})`;
  effect.style.backgroundImage = effectTransition[currentPage].transition;
  console.log(currentPage);
});

arrowRight.addEventListener('click', () => {
  currentPage++
  if(currentPage > data.length-1){
      currentPage = 0;
  }  
  bgCard01.style.backgroundImage = `url(${data[currentPage].desktopImage})`; 
  console.log(currentPage); 
});

window.onload = () => {
  currentPage = 0;
  bgCard01.style.backgroundImage = `url(${data[currentPage].desktopImage})`; 
  console.log(currentPage);
}

//mobile scripts
const navbar = document.querySelector(".navbar");
const ham = document.querySelector(".ham");

ham.addEventListener("click", toggleHamburger);

function toggleHamburger() {
  navbar.classList.toggle("showNav");
  ham.classList.toggle("showClose");
}



