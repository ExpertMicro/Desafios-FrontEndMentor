
function initAnimacaoScroll() {
  const cardDescription01 = document.querySelectorAll('[data-anima="scrollFadeInRight"]');
  const cardDescription02 = document.querySelectorAll('[data-anima="scrollFadeInUp"]');

  if (cardDescription01.length) {
    const widowMiddle = window.innerHeight * 0.9;

    function animaScrollfadeInRight() {
      cardDescription01.forEach((description) => {
        const descriptionTop = description.getBoundingClientRect().top;
        const isCardVisible = (descriptionTop - widowMiddle) < 0;
        if(isCardVisible) {
          description.classList.add('animate__fadeInRight');
        }
        
      });
    }
  }

  if (cardDescription02.length) {
    const widowMiddle = window.innerHeight * 0.8;
    function animaScrollfadeInUp() {
      cardDescription02.forEach((description) => {
        const descriptionTop = description.getBoundingClientRect().top;
        const isCardVisible = (descriptionTop - widowMiddle) < 0;
        if(isCardVisible) {
          description.classList.add('animate__fadeInUp');
        }
        
      });
    }
  }
    

    
    window.addEventListener('scroll', animaScrollfadeInRight);
    window.addEventListener('scroll', animaScrollfadeInUp);
    

}
initAnimacaoScroll();



