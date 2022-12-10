var db = {
    dados: [
        {
            solicitante: "Maria Luiza Fonseca",
            tiposan: "B+",
            regiao: "Nordeste",
            estado: "Paraíba",
            cidade: "João Pessoa",
            solicitado: "01/11/2022",
            contato: "(31)12345-1234"
        },
        {
            solicitante: "João Pedro",
            tiposan: "A-",
            regiao: "Sul",
            estado: "Santa Catarina",
            cidade: "Florianópolis",
            solicitado: "02/03/2022",
            contato: "(31)12345-1234"
        },
        {
            solicitante: "Renan de Leornes ",
            tiposan: "A+",
            regiao: "Nordeste",
            estado: "Alagoas",
            cidade: "Maceió",
            solicitado: "01/11/2022",
            contato: "(31)12345-1234"
        },
        {
            solicitante: "Marlon Frederico",
            tiposan: "A+",
            regiao: "Sudeste",
            estado: "Rio de Janeiro",
            cidade: "Rio de Janeiro",
            solicitado: "01/11/2022",
            contato: "(31)12345-1234"
        },
        {
            solicitante: "Regina Medeiros",
            tiposan: "B+",
            regiao: "Centro-Oeste",
            estado: "Goiás",
            cidade: "Goiânia",
            solicitado: "08/02/2022",  
            contato: "(31)12345-1234"
        },
        {
            solicitante: "Rosilene Clara da Silva",
            tiposan: "AB-",
            regiao: "Sudeste",
            estado: "Espírito Santo",
            cidade: "Vitória",
            solicitado: "29/04/2022",
            contato: "(31)12345-1234"
        },
        {
            solicitante: "Roney Machado Maia",
            tiposan: "A+",
            regiao: "Norte",
            estado: "Amazonas",
            cidade: "Manaus",
            solicitado: "05/09/2022",
            contato: "(31)12345-1234"
        },
        {
            solicitante: "Fernando Oliveira",
            tiposan: "B-",
            regiao: "Nordeste",
            estado: "Maranhão",
            cidade: "São Luiz",
            solicitado: "14/06/2022",
            contato: "(31)12345-1234"
        },
        {
            solicitante: "Rogério Ferreira da Silva",
            tiposan: "O-",
            regiao: "Norte",
            estado: "Acre",
            cidade: "Rio Branco",
            solicitado: "01/05/2022",
            contato: "(31)12345-1234"
        },
        {
            solicitante: "Mônica da Fonseca",
            tiposan: "AB+",
            regiao: "Sudoeste",
            estado: "São Paulo",
            cidade: "São Paulo",
            solicitado: "24/10/2022",
            contato: "(31)12345-1234"
        },
        {
            solicitante: "Jorge Maciel",
            tiposan: "O+",
            regiao: "Nordete",
            estado: "Bahia",
            cidade: "Salvador",
            solicitado: "12/08/2022",
            contato: "(31)12345-1234"
        },
        {
            solicitante: "Junio Alcântara",
            tiposan: "A-",
            regiao: "Centro-Oeste",
            estado: "Distrito Federal",
            cidade: "Brasília",
            solicitado: "01/11/2022",
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
                `<div class="solicitacao"><h4><b>Solicitante: </b>${usuario.solicitante}</h4>
                 <aside><b>Tipo sanguíneo:</b> ${usuario.tiposan}</aside>
                 <aside><b>Região:</b> ${usuario.regiao}</aside>
                 <aside><b>Estado:</b> ${usuario.estado}</aside>
                 <aside><b>Cidade:</b> ${usuario.cidade}</aside>
                 <aside><b>Solicitado em:</b> ${usuario.solicitado}</aside>
                 <aside><b>Contato:</b> ${usuario.contato}</aside>`
            );
        }
    }
}
FiltroCadastro()