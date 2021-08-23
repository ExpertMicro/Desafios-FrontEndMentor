const cardDescription = document.querySelectorAll('.js-scroll');
const widowMiddle = window.innerHeight * 0.7;

function animaScroll() {
  cardDescription.forEach((description) => {
    const descriptionTop = description.getBoundingClientRect().top;
    const isCardVisible = (descriptionTop - widowMiddle) < 0;
    if(isCardVisible) {
      description.classList.add('ativo');
    }
  });
}

window.addEventListener('scroll', animaScroll);