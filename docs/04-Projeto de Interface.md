
# Projeto de Interface

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

Visão geral da interação do usuário pelas telas do sistema e protótipo interativo das telas com as funcionalidades que fazem parte do sistema (wireframes).

 Apresente as principais interfaces da plataforma. Discuta como ela foi elaborada de forma a atender os requisitos funcionais, não funcionais e histórias de usuário abordados nas <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a>.

## User Flow

![Exemplo de UserFlow] (https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-hemolife/blob/main/docs/img/Fluxo%20do%20usu%C3%A1rio%2C%20login%20e%20busca.png)

Fluxo de usuário (User Flow) é uma técnica que permite ao desenvolvedor mapear todo fluxo de telas do site ou app. Essa técnica funciona para alinhar os caminhos e as possíveis ações que o usuário pode fazer junto com os membros de sua equipe.

> **Links Úteis**:
> - [User Flow: O Quê É e Como Fazer?](https://medium.com/7bits/fluxo-de-usu%C3%A1rio-user-flow-o-que-%C3%A9-como-fazer-79d965872534)
> - [User Flow vs Site Maps](http://designr.com.br/sitemap-e-user-flow-quais-as-diferencas-e-quando-usar-cada-um/)
> - [Top 25 User Flow Tools & Templates for Smooth](https://www.mockplus.com/blog/post/user-flow-tools)


## Wireframes

Conforme  fluxo  de  telas  do  projeto,  apresentado  no  item  anterior,  as  telas  do  sistema  são 
apresentadas em detalhes nos itens que se seguem. As telas do sistema apresentam uma 
estrutura comum que é apresentada na Figura X. Nesta estrutura, existem 3 grandes blocos, 
descritos a seguir. São eles:
<ul>
 <li>Cabeçalho/Head  -  Local  onde  são  dispostos  elementos  fixos  de  identidade  (logo)  e a barra de navegação principal do site (menu da aplicação);</li>
 <li>Conteúdo/Body - Apresenta o conteúdo da tela em questão;</li>
 <li>Rodapé/Footer  -  Apresenta  os  elementos  de  navegação  secundária,  geralmente associados aos elementos do bloco de conteúdo.</li>
</ul>

![Exemplo de Wireframe](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-hemolife/blob/main/docs/img/Wireframe%20-%20Esbo%C3%A7o.png?raw=true)


## Tela - Home-Page (Index)

A tela inicial contém informações que abrangem todas as camadas e funcionalidades de nosso site, nas quais pela integração do usuário é possível que ele execute diversas ações, como:

Na barra de navegação (cabeçalho/navbar) é possível que ele saiba quem é a Hemo Life ao clicar no botão, é possível também entrar em contato conosco, se antenar sobre as campanhas e fazer seu login.

No conteúdo (body) é onde nossos usuários poderão solicitar o seu cartão clube de benefícios, localizar o hemocentro mais próximo, verificar nossos indicadores de estoque sanguíneo, receber as mais recentes notícias referentes aos fatos relacionados a doações de sangue e também solicitar através de um formulário a possibilidade de ser um doador sanguíneo.

No rodapé (footer) é possível que o usuário solucione suas dúvidas, que ele também possa ajudar o projeto com incentivos financeiros tanto como publicitários, é totalmente possível que esse usuário possa se candidatar para uma vaga de trabalho, seja ela efetiva como também de forma voluntária ( sem fins lucrativos ) e por fim, contém nossos direitos autorais pelas informações prestadas e pelo funcionamento do nosso site.

![Home-Page](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-hemolife/blob/main/docs/img/Index%20Wireframe.png?raw=true)


## Tela - Resultado da Pesquisa

A tela dos resultados das pesquisas será dividido em duas telas, a primeira conterá todas as regiões do país, onde o usuário escolherá a sua região e será redirecionado para a segunda tela. 


![buscador hemolife](https://user-images.githubusercontent.com/111004815/193333215-d2430549-44d1-4c3e-b10d-0c1fc4db7c78.png)


A segunda tela será o resultado do filtro aplicado na tela anterior, onde o usuário terá acesso aos endereços e telefones dos hemocentros da região selecionada, como na imagem a seguir.


![resultado das pesquisas norte](https://user-images.githubusercontent.com/111004815/193406276-002bafb3-9e29-43af-b2ef-7675c2887a85.png)


## Tela - Formulário

A tela de formulário é bem simples e objetiva no qual está dividida em duas telas. A primeira é o formulário no qual o usuário demonstra interesse em se tornar um doador ou continuar sendo um doador recorrente através da Hemo Life, no qual temos vários campos de preenchimento para o usuário registrar seus dados pessoais com o objetivo de ser contatado por algum hemocentro mais próximo que também está em busca de reposição sanguínea.

![Formulário para doação](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-hemolife/blob/main/docs/img/Formul%C3%A1rio%20Wireframe.PNG?raw=true)


## Tela - Formulário Aprovado

A segunda tela de formulário é onde está contida a sucessão do preenchimento do formulário, no qual é visível para o usuário que preencheu todos os dados corretamente em seus respectivos campos pré-determinados.

![Formulário preenchido com sucesso](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-hemolife/blob/main/docs/img/Formul%C3%A1rio-Aprovado%20Wireframe.PNG?raw=true)


## Tela - Campanhas

A tela de campanhas do Hemo Life é o lugar no qual o usuário poderá se informar qualificadamente sobre o que é uma doação sanguínea, o porquê essa atitude é tão importante e o impacto causado por essa boa ação para uma sociedade de modo geral. Essa tela também irá informar os usuários sobre quem pode se tornar um doador sanguíneo, as condições básicas que esse doador(a) precisa atender para que o processo seja efetivado, também é informado as orientações que as pessoas devem respeitar para que o processo ocorra de forma correta e saudável. Essa tela de campanhas também é responsável por informar como serão todas as etapas do processo de doação e também os locais que são feitos as coletas através de um link que redireciona para a página de pesquisa do hemocentro.

![Tela de campanhas-parte-um](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-hemolife/blob/main/docs/img/Campanhas-parte-um%20Wireframe.PNG?raw=true)
<br>
![Tela de campanhas-parte-dois](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-hemolife/blob/main/docs/img/Campanhas-parte-dois%20Wireframe.PNG?raw=true)


## Tela - Cadastro Hemocentros

A tela de cadastro de hemocentros é composta por alguns campos de preenchimentos necessários, no qual, o hemocentro preencherá respectivamente todas as informações necessárias, para que assim possamos manter a organização necessária para garantir um bom funcionamento e efetividade de nossos projetos e campanhas acerca de doações sanguíneas.

![Cadastro Hemocentro](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-hemolife/blob/main/docs/img/Hemo%20Criar-Conta%20Wireframe.png?raw=true)

Logo após o preenchimento de todas as informações necessárias, o hemocentro deverá aceitar ou não os nosso termos de uso. Caso o hemocentro aceite, aparecerá para o mesmo a imagem informativa abaixo.

![Termos de uso](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-hemolife/blob/main/docs/img/Hemo%20Termos-de-uso%20Wireframe.png?raw=true)
