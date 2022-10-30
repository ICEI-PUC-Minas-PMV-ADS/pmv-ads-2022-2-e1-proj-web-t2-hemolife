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

navSlide();

//Login 

function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin"){
        alert('Login Efetuado! você será redirecionado.');
    }

    else{
        alert('Usuário ou senha incorretos');
    }

    }

    // Carrossel Script
    
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');

    // Botoes Carrosel

    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');

    // Counter

    let counter = 1;
    const size = carouselImages[0].clientWidth;

    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

    // Button Listeners

    nextBtn.addEventListener('click', () => {
        if (counter >= carouselImages.length -1) return;
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    });

    prevBtn.addEventListener('click', () => {
        if (counter <= 0) return;
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter--;
        carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    });

    carouselSlide.addEventListener('transitionend', () => {

        if (carouselImages[counter].id === 'lastClone') {
            // carouselSlide.style.transition = "none";
            counter = carouselImages.length -2;
            carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
        }

        if (carouselImages[counter].id === 'firstClone') {
            // carouselSlide.style.transition = "none";
            counter = carouselImages.length - counter;
            carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
        }
    });
