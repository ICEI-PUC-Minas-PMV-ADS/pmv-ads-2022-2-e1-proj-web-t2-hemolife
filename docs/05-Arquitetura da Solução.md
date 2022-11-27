# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

## Diagrama de componentes

Os componentes que fazem parte da solução são apresentados na Figura 01 abaixo.

![Diagrama de componentes](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-hemolife/1df38489ec1d8a816f18a7bd809e7d312dcb9917/docs/img/Diagrama%20de%20componentes.svg)

<center>Figura 01 - Arquitetura da Solução</center>

A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
     - **Cadastro de Hemocentro e Doador** - seções de cadastro de doares, hemocentro
     - **Estoque de sangue** - informações sobre os níveis dos estoques
 - **API** - plataforma que permite o acesso às notícias exibidas no site.
 - **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas pelo navegador. 


## Tecnologias Utilizadas

As tecnologias utilizadas na implementação da solução foram:

IDE: VsCode
Linguagem: HTML, CSS, JavaScript
Serviços: GitHub Pages

## Hospedagem
![GitHub](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-hemolife)
