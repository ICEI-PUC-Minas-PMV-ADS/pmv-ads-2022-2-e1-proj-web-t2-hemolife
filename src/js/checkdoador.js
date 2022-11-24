usurLogado = JSON.parse(localStorage.getItem("usurLogado"))
if (usurLogado.includes('Hemocentro')) {
        window.location.href = "../405.html"
    }