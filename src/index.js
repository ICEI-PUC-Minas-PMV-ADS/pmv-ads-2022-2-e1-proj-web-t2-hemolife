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
            location.href = "acesso-autorizado.html"
        };
    }

    else{
            location.href = "acesso-negado.html"
        };
    }

    }

    // Carrossel Script
    
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');

    // Botoes Carrosel

    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');
