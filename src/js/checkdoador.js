function checkdoador() {
    setTimeout(() => {
        usurLogadoAtivo = JSON.parse(localStorage.getItem("usurLogadoAtivo"));
        usurLogado = localStorage.getItem("usurLogado")
        if (typeof usurLogadoAtivo == undefined || usurLogadoAtivo == false) {
            usurLogadoAtivo = false;
            window.location.href = "././login.html"
            return false;
        }
        else if (usurLogado.includes('Hemocentro')) {
            window.location.href = "././centralhemo.html"
        }
    }, 1500);
}
checkdoador()