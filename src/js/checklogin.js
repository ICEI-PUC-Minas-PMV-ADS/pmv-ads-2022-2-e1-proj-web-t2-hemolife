function verifyLogin() {
    usurLogadoAtivo = JSON.parse(localStorage.getItem("usurLogadoAtivo"))
    usurLogado = JSON.parse(localStorage.getItem("usurLogado"))
    if (typeof usurLogadoAtivo == undefined || usurLogadoAtivo == false) {
        usurLogadoAtivo = false;      
        return false;
    }
    logado = document.getElementById("logado");
    if (usurLogadoAtivo === true && usurLogado.includes('Doador')) {
        logado.outerHTML = "<div id='logado' class='logo'><a class='icon' href='https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-hemolife/src/index.html'><img src='https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-hemolife/src/img/logo.png' alt='logo'></a><a href='https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-hemolife/src/index.html'>Hemo Life</a></div><ul class='nav-links'><li><a href='https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-hemolife/src/pages/paineldoador.html'>Painel</a></li><li><a href='https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-hemolife/src/pages/sobre.html'>Sobre</a></li><li><a href='https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-hemolife/src/pages/prerequisitos.html'>Pré-Requisitos</a></li><button class='nav-btn-logout' onclick='logoutUser()'>Logout</button></ul><div class='burger'><div class='line1'></div><div class='line2'></div><div class='line3'></div></div>";
    }
    if (usurLogadoAtivo === true && usurLogado.includes('Hemocentro')) {
        logado.outerHTML = "<div id='logado' class='logo'><a class='icon' href='https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-hemolife/src/index.html'><img src='https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-hemolife/src/img/logo.png' alt='logo'></a><a href='https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-hemolife/src/index.html'>Hemo Life</a></div><ul class='nav-links'><li><a href='https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-hemolife/src/pages/centralhemo.html'>Central</a></li><li><a href='https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-hemolife/src/pages/sobre.html'>Sobre</a></li><li><a href='https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-hemolife/src/pages/prerequisitos.html'>Pré-Requisitos</a></li><button class='nav-btn-logout' onclick='logoutUser()'>Logout</button></ul><div class='burger'><div class='line1'></div><div class='line2'></div><div class='line3'></div></div>";
    }
    else {
        logado.outerHTML = "<div id='logado' class='logo'><a class='icon' href='https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-hemolife/src/index.html'><img src='https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-hemolife/src/img/logo.png' alt='logo'></a><a href='https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-hemolife/src/index.html'>Hemo Life</a></div><ul class='nav-links'><li><a href='https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-hemolife/src/pages/sobre.html'>Sobre</a></li><li><a href='https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-hemolife/src/pages/prerequisitos.html'>Pré-Requisitos</a></li><a href='https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-hemolife/src/pages/login.html'><button class='nav-btn'>Login</button></a></ul><div class='burger'><div class='line1'></div><div class='line2'></div><div class='line3'></div></div>";
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
            nome: 'admin',
            email: 'admin',
            senha: 'admin',
            tipousur: 'doador'
        })
}
verifyLogin()
