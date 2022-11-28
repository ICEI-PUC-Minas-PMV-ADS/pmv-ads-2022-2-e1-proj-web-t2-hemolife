# Programação de Funcionalidades
Nesta seção são apresentadas as telas desenvolvidas para cada uma das funcionalidades do sistema.

## 1. Contato e pesquisa de hemocentro por região (RF-01)
![Colocar Imagem ](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-hemolife/e054dd24c86442a69acae906e195703bdc8e6a01/docs/img/PesquisaPorRegiao.svg)

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
![Pré-Requisitos](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-hemolife/448abbb79351394c7da2d7cee543d55d50f0d62f/docs/img/rereqpt1.svg)
![Pré-Requisitos](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-hemolife/448abbb79351394c7da2d7cee543d55d50f0d62f/docs/img/rereqpt2.svg)
![Pré-Requisitos](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-hemolife/448abbb79351394c7da2d7cee543d55d50f0d62f/docs/img/rereqpt3.svg)

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

![Cadastro de doadores](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-hemolife/b3669d33efb5b998604b044ee8bac001fe1b1254/docs/img/cadastro.svg)

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
![Doadores](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-hemolife/739ebb373701c6a9c55f3d3a1ab9e9c2753839fd/docs/img/doadores.svg)
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
![Notícias](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-hemolife/00bc8da1e99e247558517ac3fd20c65f3d191de7/docs/img/noticias.svg)
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
![Benefícios HemoLife](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-hemolife/839fa533d71fe541810b5ce9edd280365802ac67/docs/img/beneficios.svg)
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

![Gráfico de estoque por tipo sanguíneo](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-hemolife/7906eb65e261728fd27194f4590093554e7ac571/docs/img/index.svg)

Nesta sessão, o usuário novo poderá visualizar um gráfico informando o estoque disponível para cada tipo sanguíneo.

### 8.1 Requisitos atendidos:
* RF-08 	O site deve conter em sua página inicial um gráfico informando o estoque disponível para cada tipo sanguíneo. 	

### 8.2 Artefatos da funcionalidade:

* style.css 
* estoque.css
* bloodlevel.css
* index.js
* loadblood.js

## 9. Alteração gráfico de estoque (RF-09)

![Card para alterar estoque poo tipo sanguíneo](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-hemolife/7cc9c4863c20d9a284590220395190bf0fe62e6d/docs/img/altgraficoestoque.svg)
Nesta sessão, o hemocentro poderá alterar estoque disponível por tipo sanguíneo.

### 9.1 Requisitos atendidos:
* RF-09 	O site deve permitir ao usuário hemocentro realizar ajustes nos níveis de sangue em seu painel.

### 8.2 Artefatos da funcionalidade:

* style.css
* estoque.css
* bloodlevel.css
* index.js
* loadbload.js

## 10. Doação financeira (RF-10)
![Apoie nosso projeto](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-hemolife/c88eee98273be3fff835bfc209d7019385a8d6a1/docs/img/apoie.svg)
Nessa sessão, os usuários podem fazer uma doação financeira para o projeto HemoLife.

### 10.1 Requisitos atendidos:
* RF-10 O site deve conter uma página onde qualquer pessoa possa efetuar uma doação financeira a organização HemoLife.
