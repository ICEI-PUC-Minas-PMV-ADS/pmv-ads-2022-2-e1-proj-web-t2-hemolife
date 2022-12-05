var db = {
    dados: [
        {
            doador: "Maria Luiza Fonseca",
            tiposan: "B+",
            regiao: "Norte",
            estado: "Paraíba",
            cidade: "Belo Horizonte",
            cadastrado: "01/11/2022",
            contato: "(31)12345-1234"
        },
        {
            doador: "João Pedro",
            tiposan: "A-",
            regiao: "Sul",
            estado: "Santa Catarina",
            cidade: "Florianópolis",
            cadastrado: "02/03/2022",
            contato: "(31)12345-1234"
        },
        {
            doador: "Renan de Leornes ",
            tiposan: "A+",
            regiao: "Nordeste",
            estado: "Alagoas",
            cidade: "Maceió",
            cadastrado: "01/11/2022",
            contato: "(31)12345-1234"
        },
        {
            doador: "Marlon Frederico",
            tiposan: "A+",
            regiao: "Suldeste",
            estado: "Rio de Janeiro",
            cidade: "Rio de Janeiro",
            cadastrado: "01/11/2022",
            contato: "(31)12345-1234"
        },
        {
            doador: "Regina Medeiros",
            tiposan: "B+",
            regiao: "Centro-Oeste",
            estado: "Goiás",
            cidade: "Goiânia",
            cadastrado: "08/02/2022",  
            contato: "(31)12345-1234"
        },
        {
            doador: "Rosilene Clara da Silva",
            tiposan: "AB-",
            regiao: "Suldeste",
            estado: "Espírito Santo",
            cidade: "Vitória",
            cadastrado: "29/04/2022",
            contato: "(31)12345-1234"
        },
        {
            doador: "Roney Machado Maia",
            tiposan: "A+",
            regiao: "Norte",
            estado: "Amazonas",
            cidade: "Manaus",
            cadastrado: "05/09/2022",
            contato: "(31)12345-1234"
        },
        {
            doador: "Fernando Oliveira",
            tiposan: "B-",
            regiao: "Nordeste",
            estado: "Maranhão",
            cidade: "São Luiz",
            cadastrado: "14/06/2022",
            contato: "(31)12345-1234"
        },
        {
            doador: "Rogério Ferreira da Silva",
            tiposan: "O-",
            regiao: "Norte",
            estado: "Acre",
            cidade: "Rio Branco",
            cadastrado: "01/05/2022",
            contato: "(31)12345-1234"
        },
        {
            doador: "Mônica da Fonseca",
            tiposan: "AB+",
            regiao: "Sudoeste",
            estado: "São Paulo",
            cidade: "São Paulo",
            cadastrado: "24/10/2022",
            contato: "(31)12345-1234"
        },
        {
            doador: "Jorge Maciel",
            tiposan: "O+",
            regiao: "Nordete",
            estado: "Bahia",
            cidade: "Salvador",
            cadastrado: "12/08/2022",
            contato: "(31)12345-1234"
        },
        {
            doador: "Junio Alcântara",
            tiposan: "A-",
            regiao: "Centro-Oeste",
            estado: "Distrito Federal",
            cidade: "Brasília",
            cadastrado: "01/11/2022",
            contato: "(31)12345-1234"
        }

    ]
}
function FiltroCadastro() {
    // Obtem os tipos sanguíneos informados pelo usuário nos filtros
    let ft = document.getElementById("filtro_tiposan").value;
    let fr = document.getElementById("filtro_regiao").value;
    let fe = document.getElementById("filtro_estado").value;
    let fc = document.getElementById("filtro_cidade").value;
    // limpa a lista de tipos sanguíneos apresentados
    $("#filtro").empty();
    // Popula a tabela com os registros do banco de dados
    for (let index = 0; index < db.dados.length; index++) {
        const usuario = db.dados[index];
        // Verifica se os dados dos hemocentros batem com os filtros
        if (((usuario.tiposan == ft) || (ft == '')) &&
            ((usuario.regiao == fr) || (fr == '')) &&
            ((usuario.estado == fe) || (fe == '')) &&
            ((usuario.cidade == fc) || (fc == ''))) {
            $("#filtro").append(
                `<div class="solicitacao"><h4><b>Doador: </b>${usuario.doador}</h4>
                 <aside><b>Tipo sanguíneo:</b> ${usuario.tiposan}</aside>
                 <aside><b>Região:</b> ${usuario.regiao}</aside>
                 <aside><b>Estado:</b> ${usuario.estado}</aside>
                 <aside><b>Cidade:</b> ${usuario.cidade}</aside>
                 <aside><b>Cadastrado em:</b> ${usuario.cadastrado}</aside>
                 <aside><b>Contato:</b> ${usuario.contato}</aside>`
            );
        }
    }
}
FiltroCadastro()