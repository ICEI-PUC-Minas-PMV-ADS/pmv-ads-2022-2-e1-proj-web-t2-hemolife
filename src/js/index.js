const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');


  burger.addEventListener('click', () => {

    // Gaveta Responsiva

    nav.classList.toggle('nav-active');

    // Links Animados

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s';
      }
    });

    // Animação da Gaveta
    burger.classList.toggle('toggle');

  });

}

navSlide()
window.addEventListener('resize', function () {
  const title = document.querySelector('.hemotitle');
  const largura = window.screen.width;

  if (largura <= 810) {
    if (pagindex.value = 1) {
      title.style.display = "none";
    }
    else if (pagindex.value = undefined) {
      title.style.display = "flex";
    }

  }
  else {
    title.style.display = "flex";
  }

})