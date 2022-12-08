const nome = document.querySelector('#nome')
const labelNome = document.querySelector('#labelNome')
const email = document.querySelector('#email')
const labelEmail = document.querySelector('#labelEmail')
const senha = document.querySelector('#senha')
const labelSenha = document.querySelector('#labelSenha')
const confirmSenha = document.querySelector('#confirmSenha')
const labelConfirmSenha = document.querySelector('#labelConfirmSenha')
const btnCadastroNovo = document.querySelector('#btnCadastro')
const tipousur = document.querySelector('#tipousur')
let unicoNome = false;
let unicoEmail = false;
let reqSenha = false;
let confirmaSenha = false;
var letrasMaiusculas = /[A-Z]/;
var letrasMinusculas = /[a-z]/;
var numeros = /[0-9]/;
var caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
var msgLog = document.querySelector('#msgLog')
usurLogado = [];
usurLista = JSON.parse(localStorage.getItem('usurLista') || '[]')

//Verifica Nome
function verificaNome() {
    if (usurLista) {
        for (let i = 0; i < usurLista.length; i++) {
            if (nome.value == usurLista[i].nome) {
                return true;
            }
        }
    }
    else { return false; }
}
nome.addEventListener('keyup', () => {
    if (!verificaNome()) {
        labelNome.innerHTML = ''
    }
    else {
        labelNome.innerHTML = '*Nome já existe'
    }
})
function validarEmail(email) {
    var regexEmail = /\S+@\S+\.\S+/;
    return regexEmail.test(email);
}
function verificaEmail() {
    if (usurLista) {
        for (let i = 0; i < usurLista.length; i++) {
            if (email.value == usurLista[i].email) {
                return true;
            }
        }
    }
    else {
        return false;
    }
}
email.addEventListener('keyup', () => {
    labelEmail.innerHTML = '';
    if (!validarEmail(email.value)) {
        labelEmail.innerHTML = '*E-mail inválido';
    }
})
senha.addEventListener('keyup', () => {
    labelSenha.innerHTML = '';
})

function geraUUID() {
    var d = new Date().getTime();
    var d2 = (performance && performance.now && (performance.now() * 1000)) || 0;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16;
        if (d > 0) {
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}
function verificaTudo(event) {
    event.preventDefault()
    if (senha.value.length > 4) {
        if (letrasMaiusculas.test(senha.value)) {
            if (letrasMinusculas.test(senha.value)) {
                if (numeros.test(senha.value)) {
                    if (caracteresEspeciais.test(senha.value)) {
                        reqSenha = true;
                        labelSenha.innerHTML = ''
                    } else {
                        minReq();
                    }
                } else { minReq(); }
            } else { minReq(); }
        } else {
            minReq();
        }
    } else { minReq(); }
    function minReq() {
        labelSenha.innerHTML = '*Senha não atinge os resquisitos mínimos'
        reqSenha = false;
    }
    if (confirmSenha.value === senha.value) {
        confirmaSenha = true;
        labelConfirmSenha.innerHTML = ''
    }
    else {
        labelConfirmSenha.innerHTML = '*As senhas não coincidem'
        confirmaSenha = false;
    }
    if (!verificaEmail()) {
        unicoEmail = true;
        labelEmail.innerHTML = '';
    }
    else {
        labelEmail.innerHTML = '*Já possuímos uma conta com este e-mail. Tente realizar o login.';
        unicoEmail = false;

    }
    if (!verificaNome()) {
        unicoNome = true;
    }
    else {
        unicoNome = false;

    }
    cadastroCom();
}

function cadastroCom() {
    if (unicoNome && unicoEmail && reqSenha && confirmaSenha) {
        usurLista.push(
            {
                id: geraUUID(),
                nome: nome.value,
                email: email.value,
                senha: senha.value,
                tipousur: tipousur.value
            }
        )
        localStorage.setItem('usurLista', JSON.stringify(usurLista))
        setTimeout(() => {
            /*Cadastro Efetuado*/
            window.location.pathname = "././src/pages/login.html";
        }, 2000);
        msgLog.innerHTML = ''
    }
    else {
        msgLog.innerHTML = '*Verifique e preencha todos os campos para realizar o cadastro.'
    }
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
btnCadastroNovo.addEventListener('click', verificaTudo)
