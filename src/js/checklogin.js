function verifyLogin() {
    var usurLista = localStorage.getItem('usurLista');
    if (typeof usurLogadoAtivo == undefined || usurLogadoAtivo == false) {
        usurLogadoAtivo = false;
        window.location.href = "../pages/login-doador.html"
        return false;
    }
    JSON.parse(localStorage.getItem("usurLogadoAtivo"))
    if (usurLista.includes('Hemocentro')) {
        window.location.href = "../405.html"
    }
    if (usurLista.includes('Doador')) {
        window.location.href = "../405.html"
    }
}
verifyLogin()