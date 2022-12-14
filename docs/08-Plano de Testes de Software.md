# Plano de Testes de Software

<!-- CT - 01 -->

| Caso de teste         | CT-01 - HomePage  |
| --------------------- | -----------------|
| Requisitos Associados | RF-01 - O site deve oferecer uma funcionalidade para permitir ao usuário acessar o contato e a localização do hemocentro próximo de sua região.                                                                                                                             |
| Requisitos Associados | RF-06 - O site deve permitir a visualização de notícias.                                                                                                                                                                                      |
| Requisisos Associados | RF-08 - O site deve conter em sua página inicial um gráfico informando o estoque disponível para cada tipo sanguíneo.                                                                                                                                                       |
| Passos                | Acessar o site através da página ![HomePage - Hemo Life](https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-hemolife/src/) visualizar ou clicar na funcinalidade pretendida. |
| Objetivo do teste     | Verificar se as funcionalidades podem ser acessadas e estão chegando às páginas correspondentes.                                                                                                                                                                           |
| Critérios de êxito    | Ao clicar em Busca Hemocentro ou no banner de notícias, o usuário deve ser direcionado para a página de busca de hemocentro por regiões e para a notícias, respecitivamente. Apresentação dos nívels dos estoques de sangue.                                               |

<!-- CT - 02 -->

| Caso de teste         | CT-02 - Busca por hemocentro |
| --------------------- | ------ |
| Requisitos Associados | RF-01 - O site deve oferecer uma funcionalidade para permitir ao usuário acessar o contato e a localização do hemocentro próximo de sua região. |
| Passos                | 1 - Acessar o site através da página ![HomePage - Hemo Life](https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-hemolife/src/)|
| Passos |2 - Clicar no botão Busca Hemocentro na HomePage |
| Objetivo do teste     | Verificar se os botãoes de correspondente a cada Estado estão apresentando os hemocentros.|
| Critérios de êxito    | Ao clicar no botão da região apenas os hemocentros correspondentes a região são exibitos.|
| Objetivo do teste     | Verificar se as funcionalidades podem ser acessadas e estão chegando às páginas correspondentes.|
| Critérios de êxito    | Ao clicar em Busca Hemocentro ou no banner de notícias, o usuário deve ser direcionado para a página de busca de hemocentro por regiões e para a notícias, respecitivamente. Apresentação dos nívels dos estoques de sangue.|

<!-- CT - 03 -->

| Caso de teste         | CT-03 - Notícias |
| --------------------- | ------ |
| Requisitos Associados | RF-05 - O site deve permitir visualizar as informações de contato dos doadores pelos Hemocentros. |
| Passos                | 1 - Acessar o site através da página ![HomePage - Hemo Life](https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-hemolife/src/)|
| Passos                | 2 - Clicar no banner da notícia |
| Objetivo do teste     | Verificar se os slides no banner direcionam para página notíca.|
| Critérios de êxito    | Ao clicar no banner da notícia ser direcionado para notícia selecionada.|

<!-- CT - 04 -->

| Caso de teste         | CT-04 - Benefícios Hemolife |    
| --------------------- | ------ |
| Requisitos Associados | RF-07 - O site deve permitir ao doador cadastrado acesso à uma sessão com descontos em redes parceiras.|
| Passos                | 1- Acessar o site através da página ![HomePage - Hemo Life](https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-hemolife/src/)|
| Passos                | 2- clicar na imagem do cartão Hemolife, ou através do painel do doador na área logada do usuário.|
| Objetivo do teste     | Verificar se as funcionalidades podem ser acessadas e estão chegando às páginas correspondentes.|
| Critérios de êxito    | Ao clicar no cartão Hemolife, o usuário deverá ser encaminhado para a página informativa dos benefícios, onde apresenta alguns dos nossos parceiros. Já na área logada, o usuário terá acesso aos cupons de descontos de todos os nossos parceiros.|

<!-- CT - 05 -->

| Caso de teste         | CT-05 - Doadores |
| --------------------- | ------ |
| Requisitos Associados | RF-05 - O site deve permitir visualizar as informações de contato dos doadores pelos Hemocentros. |
| Passos                | 1 - Acessar o site através da página ![HomePage - Hemo Life](https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-hemolife/src/)|
| Passos                | 2- clicar no botão login, e efetuar o login como Hemocentro cadastrado.|
| Objetivo do teste     | Verificar se as funcionalidades podem ser acessadas e estão chegando às páginas correspondentes.|
| Critérios de êxito    | Ao clicar em cada item da página, o usuário deve ter o encaminhamento correto para todas as outras páginas.|
| Objetivo do teste     | Verificar que todos os usuários cadastrados estão com seus dados acessíveis apenas para os Hemocentros.|
| Critérios de êxito    | Deslogar da conta do Hemocentro e não conseguir mais ter acesso aos dados dos usuários.|


<!-- CT - 06 -->

| Caso de teste         | CT-06 - Cadastro e Login.                                                                                                                                                                                                                                                           |
| --------------------- | -----------------|
| Requisitos Associados | RF-03 - O site deve permitir ao usuário cadastrar e efetuar login.|
| Passos                | Acessar a <a href="https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-hemolife/src/pages/login.html">Sessão de login</a> na aba de navegação em qualquer uma das páginas disponíveis  
| Objetivo do teste     | Verificar se é possível cadastrar um usuário, seja ele hemocentro ou doador e em seguida, acessar todas as funcionalidades exclusivas ao usuário correspondente.|
| Critérios de êxito    | Efetuar cadastro como um novo usuário e conseguir efetuar o login com os dados informados.|

<!-- CT - 07 -->

| Caso de teste         | CT-07 - Cadastro e Login sem sucesso.|
| --------------------- | -----------------|
| Requisitos Associados | RF-03 - O site deve permitir ao usuário cadastrar e efetuar login.|
| Passos                | Acessar a <a href="https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-hemolife/src/pages/login.html">Sessão de login</a> na aba de navegação em qualquer uma das páginas disponíveis  
| Objetivo do teste     | Verificar se a partir dos dados inseridos inválidos não é possível realizar do cadastro ou login.|
| Critérios de êxito    | Não conseguir efetuar cadastro como um novo usuário e não conseguir efetuar o login com os dados informados apresentando uma mensagem de erro para os dados incorretos.|

<!-- CT - 08 -->

| Caso de teste         | CT-08 - Painel Doador.                                                                                                                                                                                                                                                           |
| --------------------- | -----------------|
| Requisitos Associados | RF-04 - O site deve permitir ao usuário doador manifestar o interesse em se tornar um doador por meio de um formulário. |
| Requisitos Associados | RF-01 -	O site deve oferecer uma funcionalidade para permitir ao usuário acessar o contato e a localização do hemocentro próximo de sua região. |
| Requisitos Associados | RF-07 - O site deve permitir ao doador cadastrado acesso à uma sessão com descontos em redes parceiras. |
| Passos                | Acessar a <a href="https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-hemolife/src/pages/paineldoador.html">Painel do Doador</a> e explorar as funcionalidades.  
| Objetivo do teste     | Verificar se todas as funcionalidades estão acessíveis ao usuário doador.|
| Critérios de êxito    | O usuário autenticado como doador, deverá acessar a aba de busca por hemocentro, formulário de doador, clube de benefícios e demais sessões.|

<!-- CT - 09 -->

| Caso de teste         | CT-09 - Painel Hemocentro.                                                                                                                                                                                                                                                           |
| --------------------- | -----------------|
| Requisitos Associados | RF-05 - O site deve permitir visualizar as informações de contato dos doadores pelos Hemocentros.|
| Requisitos Associados | RF-09 - O site deve permitir ao usuário hemocentro realizar ajustes nos níveis de sangue em seu painel.|
| Passos                | Acessar a <a href="https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t2-hemolife/src/pages/centralhemo.html">Painel do Hemocentro</a> e explorar as funcionalidades.  
| Objetivo do teste     | Verificar se as funcionalidades do usuário hemocentro estão operantes.|
| Critérios de êxito    | O usuário autenticado como hemocentro, deve visualizar os doadores disponíveis e alterar os níveis reguladores de sangue no gráfico dinâmico.|
