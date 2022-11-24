function checkhemo(){
usurLogadoAtivo = JSON.parse(localStorage.getItem("usurLogadoAtivo"));
usurLogado = localStorage.getItem("usurLogado")
if (typeof usurLogadoAtivo == undefined || usurLogadoAtivo == false) {
    usurLogadoAtivo = false;
    window.location.href = "././login.html"
    return false;
}
if (usurLogado.includes('Doador')) {
    window.location.href = "././paineldoador.html"
}
}
checkhemo()