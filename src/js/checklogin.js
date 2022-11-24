function verifyLogin() {
    usurLogadoAtivo = JSON.parse(localStorage.getItem("usurLogadoAtivo"));
    usurLogado = localStorage.getItem("usurLogado");
    if (typeof usurLogadoAtivo == undefined || usurLogadoAtivo == false) {
        logado.outerHTML = "<div id='logado' class='logo'><a class='icon' href='../index.html'><img src='../img/logo.png' alt='logo'></a><a href='../index.html'>Hemo Life</a></div><ul class='nav-links'><li><a href='././sobre.html'>Sobre</a></li><li><a href='././prerequisitos.html'>Pré-Requisitos</a></li><a href='././login.html'><button class='nav-btn'>Login</button></a></ul><div class='burger'><div class='line1'></div><div class='line2'></div><div class='line3'></div></div>";
        usurLogadoAtivo = false;
        return false;
    }
    logado = document.getElementById("logado");
    if (usurLogadoAtivo === true && usurLogado.includes('Doador')) {
        logado.outerHTML = "<div id='logado' class='logo'><a class='icon' href='../index.html'><img src='../img/logo.png' alt='logo'></a><a href='../index.html'>Hemo Life</a></div><ul class='nav-links'><li><a href='././paineldoador.html'>Painel</a></li><li><a href='././sobre.html'>Sobre</a></li><li><a href='././prerequisitos.html'>Pré-Requisitos</a></li><button class='nav-btn-logout' onclick='logoutUser()'>Logout</button></ul><div class='burger'><div class='line1'></div><div class='line2'></div><div class='line3'></div></div>";
    }
    if (usurLogadoAtivo === true && usurLogado.includes('Hemocentro')) {
        logado.outerHTML = "<div id='logado' class='logo'><a class='icon' href='../index.html'><img src='../img/logo.png' alt='logo'></a><a href='../index.html'>Hemo Life</a></div><ul class='nav-links'><li><a href='././centralhemo.html'>Central</a></li><li><a href='././sobre.html'>Sobre</a></li><li><a href='././prerequisitos.html'>Pré-Requisitos</a></li><button class='nav-btn-logout' onclick='logoutUser()'>Logout</button></ul><div class='burger'><div class='line1'></div><div class='line2'></div><div class='line3'></div></div>";
    }
    else {
        logado.outerHTML = "<div id='logado' class='logo'><a class='icon' href='../index.html'><img src='../img/logo.png' alt='logo'></a><a href='../index.html'>Hemo Life</a></div><ul class='nav-links'><li><a href='././sobre.html'>Sobre</a></li><li><a href='././prerequisitos.html'>Pré-Requisitos</a></li><a href='././login.html'><button class='nav-btn'>Login</button></a></ul><div class='burger'><div class='line1'></div><div class='line2'></div><div class='line3'></div></div>";
    }
    usurLista.push(
        {
            id: 'admin1',
            nome: 'admin-hemo',
            email: 'admin-hemo',
            senha: 'admin',
            tipousur: 'hemocentro'
        })
    usurLista.push(
        {
            id: 'admin2',
            nome: 'admin-doador',
            email: 'admin-doador',
            senha: 'admin',
            tipousur: 'doador'
        })
}
verifyLogin()
