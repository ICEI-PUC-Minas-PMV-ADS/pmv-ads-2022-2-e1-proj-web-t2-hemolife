function verifyLogin() {
    JSON.parse(localStorage.getItem("usurLogadoAtivo"))
    if (typeof usurLogadoAtivo == undefined || usurLogadoAtivo == false) {
        usurLogadoAtivo = false;
        window.location.href = "../pages/login.html"
        return false;
    }   
}
verifyLogin()