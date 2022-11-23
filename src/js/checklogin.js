function verifyLogin() {
    JSON.parse(localStorage.getItem("usurLogadoAtivo"))
    if (typeof usurLogadoAtivo == undefined || usurLogadoAtivo == false) {
        usurLogadoAtivo = false;
        window.location.href = "../pages/login.html"
        return false;
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