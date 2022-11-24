usurLogado = JSON.parse(localStorage.getItem("usurLogado"))
if (usurLogado.includes('Doador')) {
    window.location.href = "../405.html"
}