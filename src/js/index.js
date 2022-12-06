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