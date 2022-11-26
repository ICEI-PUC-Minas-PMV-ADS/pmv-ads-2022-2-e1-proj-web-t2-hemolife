# Plano de Testes de Software

| Caso de teste         | CT-01 - HomePage                                                                                                                                                                                                                                                           |
| --------------------- | -----------------|
| Requisitos Associados | RF-01 - O site deve oferecer uma funcionalidade para permitir ao usuário acessar o contato e a localização do hemocentro próximo de sua região.                                                                                                                             |
| Requisitos Associados | RF-05 - O site deve permitir a visualização de notícias publicadas pelos hemocentros.                                                                                                                                                                                       |
| Requisisos Associados | RF-07 - O site deve conter em sua página inicial um gráfico informando o estoque disponível para cada tipo sanguíneo.                                                                                                                                                       |
| Passos                | Acessar o site através da página ![HomePage - Hemo Life](https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-hemolife/src/) visualizar ou clicar na funcinalidade pretendida. |
| Objetivo do teste     | Verificar se as funcionalidades podem ser acessadas e estão chegando às páginas correspondentes.                                                                                                                                                                           |
| Critérios de êxito    | Ao clicar em Busca Hemocentro ou no banner de notícias, o usuário deve ser direcionado para a página de busca de hemocentro por regiões e para a notícias, respecitivamente. Apresentação dos nívels dos estoques de sangue.                                               |

| Caso de teste         | CT-02 - Busca por hemocentro |
| --------------------- | ------ |
| Requisitos Associados | RF-01 - O site deve oferecer uma funcionalidade para permitir ao usuário acessar o contato e a localização do hemocentro próximo de sua região. |
| Passos                | 1 - Acessar o site através da página ![HomePage - Hemo Life](https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-hemolife/src/)|
| Passos |2 - Clicar no botão Busca Hemocentro na HomePage |
| Objetivo do teste     | Verificar se os botãoes de correspondente a cada Estado estão apresentando os hemocentros.|
| Critérios de êxito    | Ao clicar no botão da região apenas os hemocentros correspondentes a região são exibitos.|
| Objetivo do teste     | Verificar se as funcionalidades podem ser acessadas e estão chegando às páginas correspondentes.|
| Critérios de êxito    | Ao clicar em Busca Hemocentro ou no banner de notícias, o usuário deve ser direcionado para a página de busca de hemocentro por regiões e para a notícias, respecitivamente. Apresentação dos nívels dos estoques de sangue.|

| Caso de teste         | CT-03 - Notícias |
| --------------------- | ------ |
| Requisitos Associados | RF-05 - O site deve permitir a visualização de notícias publicadas pelos hemocentros. |
| Passos                | 1 - Acessar o site através da página ![HomePage - Hemo Life](https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-hemolife/src/)|
| Passos                | 2 - Clicar no banner da notícia |
| Objetivo do teste     | Verificar se os slides no banner direcionam para página notíca.|
| Critérios de êxito    | Ao clicar no banner da notícia ser direcionado para notícia selecionada.|

| Caso de teste         | CT-04 - Cartão de Hemolife |    
| --------------------- | ------ |
| Passos                | 1- Acessar o site através da página ![HomePage - Hemo Life](https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-hemolife/src/)|
| Passos                | 2- clicar na imagem do cartão Hemolife, ou através do painel do doador na área logada do usuário.|
| Objetivo do teste     | Verificar se as funcionalidades podem ser acessadas e estão chegando às páginas correspondentes.|
| Critérios de êxito    | Ao clicar no cartão Hemolife, o usuário deverá ser encaminhado para a página informativa do cartão, onde apresenta alguns dos nossos parceiros. Já na área logada, o usuário terá acesso aos cupons de descontos de todos os nossos parceiros.|

| Caso de teste         | CT-05 - Doadores |
| --------------------- | ------ |
| Requisitos Associados | RF-04 O site deve permitir visualizar as informações de contato dos doadores pelos Hemocentros. |
| Passos                | 1 - Acessar o site através da página ![HomePage - Hemo Life](https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-hemolife/src/)|
| Passos                | 2- clicar no botão login, e efetuar o login como Hemocentro cadastrado.|
| Objetivo do teste     | Verificar se as funcionalidades podem ser acessadas e estão chegando às páginas correspondentes.|
| Critérios de êxito    | Ao clicar em cada item da página, o usuário deve ter o encaminhamento correto para todas as outras páginas.|
| Objetivo do teste     | Verificar que todos os usuários cadastrados estão com seus dados acessíveis apenas para os Hemocentros.|
| Critérios de êxito    | Deslogar da conta do Hemocentro e não conseguir mais ter acesso aos dados dos usuários.|
