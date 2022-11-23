// Login
const emailLogin = document.querySelector('#nome')
let passEmailLogin = false;
const senhaLogin = document.querySelector('#senha')
let passSenhaLogin = false;
const btnLogin = document.querySelector('#btnLogin')
var msgLog = document.querySelector('#msgLog')
const LOGIN_URL = "../pages/login.html";
// Carrega os dados iniciais
usurLista = JSON.parse(localStorage.getItem('usurLista') || '[]')
usurLogado = [];
usurLogadoAtivo = false;
localStorage.setItem('usurLogadoAtivo', JSON.stringify(usurLogadoAtivo))

//Verificador puxa o localStorage e se tiver vazio manda logar
if (localStorage.getItem("usurLogado") === null) {
    localStorage.setItem('usurLogado', '');
}
// Verifica se o login do usuário está ok e, se positivo, direciona para área logado
function loginUsuario(login, senha) {

    /* if (NomeOk && SenhaOk) {*/
    // Verifica os inputs no banco de dados
    for (var i = 0; i < usurLista.length; i++) {
        var usuario = usurLista[i];
        // Se encontrou carrega e salva no Local Storage
        if (login == usuario.email && senha == usuario.senha) {
            usurLogadoAtivo = true;
            localStorage.setItem('usurLogadoAtivo', JSON.stringify(usurLogadoAtivo))
            usurLogado.push({
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email,
                senha: usuario.senha,
                tipousur: usuario.tipousur
            })
            // Salva os dados no Local Storage em string
            localStorage.setItem('usurLogado', JSON.stringify(usurLogado));
            // Retorna true para input válido
            return true;
        }
        else {
            msgLog = document.querySelector('#msgLogin')
            msgLog.setAttribute('style', 'display: block')
            msgLog.innerHTML = 'E-mail e/ou senha incorretos'
            msgLog.setAttribute('style', 'display: none')
            msgLog.innerHTML = ''
        }
    }
}
//Button Submit
function processaFormLogin() {
    var username = document.getElementById('nome').value;
    var password = document.getElementById('senha').value;
    var usurLista = localStorage.getItem('usurLista');
    // Valida login    
    const resultadoLogin = loginUsuario(username, password);
    if (resultadoLogin) {

        setTimeout(() => {
            //verifica o tipo de usuario
            if (usurLista.includes('Hemocentro')) {

                window.location.href = '../pages/centralhemo.html';;
            }
            else if (usurLista.includes('Doador')) {
                window.location.href = '../pages/paineldoador.html';

            }
        }, 1500);
    }
    else {
        msgLog.setAttribute('style', 'display: block')
        msgLog.innerHTML = 'Preencha os dados corretamente'
        return false;
    }
}
// Apaga os dados do usuário corrente no LocalStorage
function logoutUser() {
    usurLogado = {};
    sessionStorage.setItem('usurLogado', JSON.stringify(usurLogado));
    window.location = LOGIN_URL;
}
usurLista.push(
    {
        id: 'admin1',
        nome: 'admin-hemo',
        email: 'admin-hemo',
        senha: 'admin',
        tipousur: 'Hemocentro'
    })
usurLista.push(
    {
        id: 'admin2',
        nome: 'admin',
        email: 'admin',
        senha: 'admin',
        tipousur: 'Doador'
    })
    localStorage.setItem('usurLista', JSON.stringify(usurLista))
//Chamador Button
btnLogin.addEventListener('click', processaFormLogin)