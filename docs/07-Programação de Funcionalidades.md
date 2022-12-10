# Programação de Funcionalidades
Nesta seção são apresentadas as telas desenvolvidas para cada uma das funcionalidades do sistema.

## 1. Contato e pesquisa de hemocentro por região (RF-01)
![Colocar Imagem ](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-hemolife/blob/main/docs/img/Projeto%20de%20Interface/busca.png)

Nesta sessão, o usuário poderá acessar o contato e a localização do hemocentro próximo de sua região.
### 1.1 Requisitos atendidos:
* RF-01 	O site deve oferecer uma funcionalidade para permitir ao usuário acessar o contato e a localização do hemocentro próximo de sua região.

### 1.2 Artefatos da funcionalidade:
* pesquisaregioes.html
* style.css
* hemocentros.css
* db-listhemo.js
* index.js 
* checklogin.js

## 2. Sessão informativa (RF-02)
![Pré-Requisitos](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-hemolife/blob/main/docs/img/Projeto%20de%20Interface/pre-requisistos-part1.png)
![Pré-Requisitos](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-hemolife/blob/main/docs/img/Projeto%20de%20Interface/pre-requisistos-part2.png)
![Pré-Requisitos](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-hemolife/blob/main/docs/img/Projeto%20de%20Interface/pre-requisistos-part3.png)

Nesta sessão, o usuário poderá consultar os requisitos necessários para se tornar um doador e sanar eventuais dúvidas mais recorrentes.

### 2.1 Requisitos atendidos:
* RF-02 	O site deve conter uma sessão informativa para novos doadores.

### 2.2 Artefatos da funcionalidade:

* prerequisitos.html
* style.css
* hemocentros.css
* index.js 
* db-preRequisitos.js
* checklogin.js

## 3. Cadastro de doadores (RF-03)

![Cadastro de doadores](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-hemolife/blob/main/docs/img/Projeto%20de%20Interface/cadastro.png)

Nesta sessão, o usuário novo poderá manifestar o seu interesse em se tornar um doador realizando seu cadastro como doador.

### 3.1 Requisitos atendidos:
* RF-03 	O site deve permitir ao usuário cadastrar e efetuar login.

### 3.2 Artefatos da funcionalidade:

* criar-conta-doador.html
* style.css
* formulario.css
* index.js
* criar-conta.js
* loadlogin.js
* checklogin.js

## 4. Formulário de doação (RF-04)

### 4.1 Requisitos atendidos:
* RF-04 O site deve permitir ao usuário doador manifestar o interesse em se tornar um doador por meio de um formulário.

### 4.2 Artefatos da funcionalidade:

* formulariodoador.html
* style.css
* formulario.css
* index.js 
* checklogin.js

## 5. Doadores (RF-05)
![Doadores](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-hemolife/blob/main/docs/img/Projeto%20de%20Interface/doadores.png)
Nesta sessão, o hemocentro poderá visualizar as informações dos usuários que se cadastraram e estão disponíveis para doação.

### 5.1 Requisitos atendidos:
* RF-05 O site deve permitir visualizar as informações de contato dos doadores pelos Hemocentros..

### 5.2 Artefatos da funcionalidade:

* doadores.html
* style.css
* campanhas.css
* index.js
* loadlogin.js
* checklogin.js
* checkhemo.js

## 6. Visualização de notícias (RF-06)
![Notícias](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-hemolife/blob/main/docs/img/Projeto%20de%20Interface/noticias.png)
Nesta sessão, o usuário poderá visualizar notícias publicadas pelos hemocentros.

### 6.1 Requisitos atendidos:
* RF-06 O site deve permitir a visualização de notícias.

### 6.2 Artefatos da funcionalidade:

* noticias.html
* style.css
* noticias.css
* index.js
* checklogin.js
 
## 7. Benefícios HemoLife (RF-07)
![Benefícios HemoLife](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-hemolife/blob/main/docs/img/Projeto%20de%20Interface/cupons-logado.png)
Nesta sessão, o usuário poderá visualizar os benefícios de manifestar interesse em ser um doador através do formulário de doação.

### 7.1 Requisitos atendidos:
* RF-07 O site deve permitir ao doador cadastrado acesso à uma sessão com descontos em redes parceiras.

### 7.2 Artefatos da funcionalidade:

* cupons.html
* style.css
* index.js
* cupons.js
* checklogin.js

## 8. Gráfico de estoque disponível (RF-08)

![Gráfico de estoque por tipo sanguíneo](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-hemolife/blob/main/docs/img/Projeto%20de%20Interface/index.png)

Nesta sessão, o usuário novo poderá visualizar um gráfico informando o estoque disponível para cada tipo sanguíneo.

### 8.1 Requisitos atendidos:
* RF-08 	O site deve conter em sua página inicial um gráfico informando o estoque disponível para cada tipo sanguíneo. 	

### 8.2 Artefatos da funcionalidade:

* style.css 
* estoque.css
* bloodlevel.css
* index.js
* loadblood.js
* checklogin.js

## 9. Alteração gráfico de estoque (RF-09)

![Card para alterar estoque poo tipo sanguíneo](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-hemolife/blob/main/docs/img/Projeto%20de%20Interface/configuracao-niveis-sanguineos.png)
Nesta sessão, o hemocentro poderá alterar estoque disponível por tipo sanguíneo.

### 9.1 Requisitos atendidos:
* RF-09 	O site deve permitir ao usuário hemocentro realizar ajustes nos níveis de sangue em seu painel.

### 9.2 Artefatos da funcionalidade:

* style.css
* estoque.css
* bloodlevel.css
* index.js
* loadbload.js
* checklogin.js

## 10. Doação financeira (RF-10)
![Apoie nosso projeto](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-hemolife/blob/main/docs/img/doacao-financeira.png)
Nessa sessão, os usuários podem fazer uma doação financeira para o projeto HemoLife.

### 10.1 Requisitos atendidos:
* RF-10 O site deve conter uma página onde qualquer pessoa possa efetuar uma doação financeira a organização HemoLife.

### 10.2 Artefatos da funcionalidade:
* style.css
* index.js
* checklogin.js
