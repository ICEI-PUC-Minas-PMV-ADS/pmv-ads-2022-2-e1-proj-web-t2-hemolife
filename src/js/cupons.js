var db = {
    dados: [
        {
            id: "farmacia",
            src: "../img/farmacia.png",
            beneficio: "30% de desconto",
            cupom: "30DESCONTO",
        },
        {
            id: "farmacia",
            src: "../img/farmacia.png",
            beneficio: "1 ano frete grátis",
            cupom: "FRETEGRATIS",
        },
        {
            id: "farmacia",
            src: "../img/farmacia.png",
            beneficio: "15% Dermocosméticos",
            cupom: "15DERMO"
        },
        {
            id: "academia",
            src: "../img/academia.png",
            beneficio: "20% de desconto",
            cupom: "20DESCONTO"
        },
        {
            id: "academia",
            src: "../img/academia.png",
            beneficio: "Matrícula grátis",
            cupom: "MATRICULAFREE"
        },
        {
            id: "academia",
            src: "../img/academia.png",
            beneficio: "Kit Whey e Creatina",
            cupom: "KITWHEYCREATINA",
        },
        {
            id: "mercado",
            src: "../img/mercado.png",
            beneficio: "15% de desconto",
            cupom: "15DESCONTO",
        },
        {
            id: "mercado",
            src: "../img/mercado.png",
            beneficio: "30% desconto Hortifruti",
            cupom: "FRETEGRATIS",
        },
        {
            id: "mercado",
            src: "../img/mercado.png",
            beneficio: "Vale 300 reais",
            cupom: "VALECOMPRAS300",
        }
    ]
}
// Obtem os cupoons
var cup = document.querySelector(".cards");
var cupom_cor = document.querySelector("")
function cuponshemolife(cup) {
  // limpa a lista de cupons apresentados
  $("#cupons").empty();
  // Popula a tabela com os registros do banco de dados
  for (let index = 0; index < db.dados.length; index++) {
    const desc = db.dados[index];
    // Verifica se os dados dos cupons batem com os filtros
    if ((desc.id == cup) || (cup == '')) {
      $("#cupons").append(
        `<section class="card ${desc.id}" id="${desc.id}">
          <div class="cupom">
          <img src="${desc.src}" alt="${desc.id}" />
          </div>
          <h3>${desc.beneficio}</h3>
          <span>Código para validação: <em>${desc.cupom}</em></span>
    <button>Validar cupom</button>
  </section>`

      );
    }
    //Scroll da página do botões até o conteúdo impresso.          
    var target_offset = $("#cupons").offset();
    var target_top = target_offset.top;
    $('html, body').stop().animate({ scrollTop: target_top }, 500);
  }
}