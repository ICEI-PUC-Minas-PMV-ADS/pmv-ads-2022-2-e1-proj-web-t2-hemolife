function verifyLogin() {
    usurLogadoAtivo = JSON.parse(localStorage.getItem("usurLogadoAtivo"));
    usurLogado = localStorage.getItem("usurLogado");
    if (typeof usurLogadoAtivo == undefined || usurLogadoAtivo == false) {
        logado.outerHTML = "<top onclick='topFunction()' id='top'></top><div id='logado' class='logo'><a class='icon' href='../index.html'><img src='../img/logo.png' alt='logo'></a><a href='../index.html'>Hemo Life</a></div><ul class='nav-links'><li><a href='././sobre.html'>Sobre</a></li><li><a href='././campanhas.html'>Campanhas</a></li><li><a href='././prerequisitos.html'>Pré-Requisitos</a></li><a href='././login.html'><button class='nav-btn'>Login</button></a></ul><div class='burger'><div class='line1'></div><div class='line2'></div><div class='line3'></div></div>";
        usurLogadoAtivo = false;
        return false;
    }
    logado = document.getElementById("logado");
    if (usurLogadoAtivo === true && usurLogado.includes('Doador')) {
        logado.outerHTML = "<top onclick='topFunction()' id='top'></top><div id='logado' class='logo'><a class='icon' href='../index.html'><img src='../img/logo.png' alt='logo'></a><a href='../index.html'>Hemo Life</a></div><ul class='nav-links'><li><a href='././paineldoador.html'>Painel</a></li><li><a href='././sobre.html'>Sobre</a></li><li><a href='././campanhas.html'>Campanhas</a></li><li><a href='././prerequisitos.html'>Pré-Requisitos</a></li><button class='nav-btn-logout' onclick='logoutUser()'>Logout</button></ul><div class='burger'><div class='line1'></div><div class='line2'></div><div class='line3'></div></div>";
    }
    if (usurLogadoAtivo === true && usurLogado.includes('Hemocentro')) {
        logado.outerHTML = "<top onclick='topFunction()' id='top'></top><div id='logado' class='logo'><a class='icon' href='../index.html'><img src='../img/logo.png' alt='logo'></a><a href='../index.html'>Hemo Life</a></div><ul class='nav-links'><li><a href='././centralhemo.html'>Central</a></li><li><a href='././sobre.html'>Sobre</a></li><li><a href='././campanhas.html'>Campanhas</a></li><li><a href='././prerequisitos.html'>Pré-Requisitos</a></li><button class='nav-btn-logout' onclick='logoutUser()'>Logout</button></ul><div class='burger'><div class='line1'></div><div class='line2'></div><div class='line3'></div></div>";
    }
    else {
        logado.outerHTML = "<top onclick='topFunction()' id='top'></top><div id='logado' class='logo'><a class='icon' href='../index.html'><img src='../img/logo.png' alt='logo'></a><a href='../index.html'>Hemo Life</a></div><ul class='nav-links'><li><a href='././sobre.html'>Sobre</a></li><li><a href='././campanhas.html'>Campanhas</a></li><li><a href='././prerequisitos.html'>Pré-Requisitos</a></li><a href='././login.html'><button class='nav-btn'>Login</button></a></ul><div class='burger'><div class='line1'></div><div class='line2'></div><div class='line3'></div></div>";
    }
    
}  
verifyLogin()
function logoutUser() {   
    var usurLogado = {};
    usurLogadoAtivo = false;
    localStorage.setItem('usurLogadoAtivo', JSON.stringify(usurLogadoAtivo))
    localStorage.setItem('usurLogado', JSON.stringify(usurLogado));
    window.location = "././index.html";
}
// pegar botão
var mybutton = document.getElementById("top");

// quando rolar a página 20px do topo para baixo, o botão será exibido
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

// quando clicar no botão, a página rola para o topo do documento
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}