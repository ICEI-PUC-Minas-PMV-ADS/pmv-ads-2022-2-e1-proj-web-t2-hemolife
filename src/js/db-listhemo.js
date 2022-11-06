var db = {
    dados: [
        {
            regiao: "Região Norte",
            estadohemo: "Acre",
            nomehemo: "Hemoacre",

            localhemo: "Av. Getúlio Vargas, 2787 - Vila Ivonete - Rio Branco, Acre - Cep:69914-500",

            contatohemo: "(68)32481377"
        },
        {
            regiao: "Região Norte",
            estadohemo: "Amapá",
            nomehemo: "Hemoap",

            localhemo: "Av Fab, 0 - Central - Macapa, Amapá - Cep:68900-073",

            contatohemo: "(96)32126139",
        },
        {
            regiao: "Região Norte",
            estadohemo: "Amazonas",
            nomehemo: "Fhemoam",

            localhemo: "Av Constantino Nery, 4397 - Chapada - Manaus, Amazonas - Cep:69050-000",

            contatohemo: "(92)36550167  <br> (92)36565180",
        },
        {
            regiao: "Região Norte",
            estadohemo: "Pará",
            nomehemo: "Fundação Hemopa",

            localhemo: "Travessa Padre Eutiquio, 2109 - Batista Campos - Belem, Pará - Cep:66033-000",

            contatohemo: "0800 280 8118 <br> (91) 3110-6500",
        },
        {
            regiao: "Região Norte",
            estadohemo: "Rondônia",
            nomehemo: "Fhemeron",

            localhemo: "R Benedito De S Brito, 0 Fhemeron - Industrial - Porto Velho, Rondônia - Cep:76821-080",

            contatohemo: "(69)32165485 <br> (69)32165487 <br> (69)32162204",
        },
        {
            regiao: "Região Norte",
            estadohemo: "Rondônia",
            nomehemo: "Uct De Ji Paraná",

            localhemo: "R Vilagran Cabrita, 1440 - Centro - Ji-parana, Rondônia - Cep:76900-044",

            contatohemo: "(69)34226762 <br> (69)34211615",
        },
        {
            regiao: "Região Norte",
            estadohemo: "Roraima",
            nomehemo: "Hemocentro De Roraima",

            localhemo: "Av Brg Eduardo Gomes, 3418 - Aeroporto - Boa Vista, Roraima - Cep:69304-015",

            contatohemo: "(95)21210883 <br> (95)21210859",
        },
        {
            regiao: "Região Norte",
            estadohemo: "Tocantins",
            nomehemo: "Unidade De Coleta De Transfusão Augustinópolis",

            localhemo: "Rua Anicuns, 200 - Centro - Augustinópolis, Tocantins - Cep:77960-000",

            contatohemo: "(63)3456-1309/(63)3456-1308",
        },
        {
            regiao: "Região Norte",
            estadohemo: "Tocantins",
            nomehemo: "Hemocentro Coordenador De Palmas",

            localhemo: "301 Norte, Av. Ns 01, Conj. 02 Lote 01, 0 - Plano Diretor Norte - Palmas, Tocantins - Cep:77015-200",

            contatohemo: "(63)32183287",
        },
        {
            regiao: "Região Norte",
            estadohemo: "Tocantins",
            nomehemo: "Hemocentro Regional De Araguaína",

            localhemo: "R Treze De Maio, 1336 - Setor Central - Araguaina, Tocantins - Cep:77803-130",

            contatohemo: "(63)34112917<br>(63)34152900 <br>(63)34138100",
        },
        {
            regiao: "Região Norte",
            estadohemo: "Tocantins",
            nomehemo: "Núcleo De Hemoterapia De Gurupi",

            localhemo: "R Quatorze De Novembro, 0 Qd: 117 Lote:18 - Setor Central - Gurupi, Tocantins - Cep:77405-070",

            contatohemo: "(63)32122237",
        },
        {
            regiao: "Região Nordeste",
            estadohemo: "Alagoas",
            nomehemo: "Hemocentro De Alagoas – Hemoal",

            localhemo: "Av. Jorge De Lima, 58 - Trapiche - Maceio, Alagoas - Cep:57010-300",

            contatohemo: "(82)33152107",
        },
        {
            regiao: "Região Nordeste",
            estadohemo: "Bahia",
            nomehemo: "Hemoba",

            localhemo: "Ld Do Hospital Geral, 0 2º Andar - Brotas - Salvador, Bahia - Cep:40286-240",

            contatohemo: "(71)31165600",
        },
        {
            regiao: "Região Nordeste",
            estadohemo: "Ceará",
            nomehemo: "Hemoce",

            localhemo: "Av. José Bastos, 3390 Rodolfo Teófilo - Fortaleza - CE - Cep:60431-086",

            contatohemo: "(85)31012296 Ramal:211",
        },
        {
            regiao: "Região Nordeste",
            estadohemo: "Maranhão",
            nomehemo: "Centro De Hematologia E Hemoterapia Do Maranhão",

            localhemo: "R Cinco De Janeiro, 0 - Jordoa - Sao Luis, Maranhão - Cep:65040-450",

            contatohemo: "(98)32161156  <br> (98)32161137  <br> (98)32161134",
        },
        {
            regiao: "Região Nordeste",
            estadohemo: "Paraíba",
            nomehemo: "Hemocentro Coordenador Paraíba",

            localhemo: "Av D Pedro Ii, 1119 - Centro - Joao Pessoa, Paraíba - Cep:58013-420",

            contatohemo: "(83)32185690",
        },
        {
            regiao: "Região Nordeste",
            estadohemo: "Pernambuco",
            nomehemo: "Fundação De Hematologia E Hemoterapia De Pernambuco",

            localhemo: "Rua Joaquim Nabuco, 171 - Gracas - Recife, Pernambuco - Cep:52011-100",

            contatohemo: "(81)31824600 <br> (81)31824648 <br> (81)31824653",
        },
        {
            regiao: "Região Nordeste",
            estadohemo: "Pernambuco",
            nomehemo: "Hemocentro Regional Caruaru",

            localhemo: "Av Oswaldo Cruz, 0 - Mauricio De Nassau - Caruaru, Pernambuco - Cep:55012-040",

            contatohemo: "(81)37199565 <br> (81)37199570",
        },
        {
            regiao: "Região Nordeste",
            estadohemo: "Pernambuco",
            nomehemo: "Hemocentro Regional De Garanhuns",

            localhemo: "Av Goncalves Maia, 0 - Heliopolis - Garanhuns, Pernambuco - Cep:55296-270",

            contatohemo: "(87)37618520 <br> (87)37618530",
        },
        {
            regiao: "Região Nordeste",
            estadohemo: "Pernambuco",
            nomehemo: "Núcelo De Hemoterapia Regional Arcoverde",

            localhemo: "Av Joaquim Nabuco, 0 - Centro - Arcoverde, Pernambuco - Cep:56506-470",

            contatohemo: "(87)31821462",
        },
        {
            regiao: "Região Nordeste",
            estadohemo: "Pernambuco",
            nomehemo: "Núcleo De Hemoterapia Regional Ouricuri",

            localhemo: "Rua Ulisses Guimarães, 0 - Centro - Ouricuri, Pernambuco - Cep:56200-970",

            contatohemo: "(87)31821086",
        },
        {
            regiao: "Região Nordeste",
            estadohemo: "Pernambuco",
            nomehemo: "Núcleo De Hemoterapia Regional Petrolina",

            localhemo: "R Pacifico Da Luz, 0 - Centro - Petrolina, Pernambuco - Cep:56304-010",

            contatohemo: "(87)31825866",
        },
        {
            regiao: "Região Nordeste",
            estadohemo: "Pernambuco",
            nomehemo: "Núcleo De Hemoterapia Regional Salgueiro",

            localhemo: "Rua Joaquim Gondim, 65 - Centro - Salgueiro, Pernambuco - Cep:56000-970",

            contatohemo: "(87)31820804 <br> (87)31820343",
        },
        {
            regiao: "Região Nordeste",
            estadohemo: "Pernambuco",
            nomehemo: "Núcleo De Hemoterapia Regional Serra Talhada",

            localhemo: "R Joaquim Godoy, 0 - Nossa Senhora Da Penha - Serra Talhada, Pernambuco - Cep:56912-450",

            contatohemo: "(87)38319323 <br> (087)38319330 <br> (87)38319328",
        },
        {
            regiao: "Região Nordeste",
            estadohemo: "Piauí",
            nomehemo: "Hemopi",

            localhemo: "Rua 1º De Maio, 235 - Centro/sul - Teresina, Piauí - Cep:64001-430",

            contatohemo: "(86)32218319 <br> (86)32218320",
        },
        {
            regiao: "Região Nordeste",
            estadohemo: "Rio Grande Do Norte",
            nomehemo: "Hemonorte",

            localhemo: "Av Alm Alexandrino De Alencar, 1800 - Tirol - Natal, Rio Grande Do Norte - Cep:59015-350",

            contatohemo: "(84)99129432 <br> (84)32326724 <br> (84)32326703",
        },
        {
            regiao: "Região Nordeste",
            estadohemo: "Rio Grande Do Norte",
            nomehemo: "Hemovida",

            localhemo: "Av Nilo Pecanha, 199 - Petropolis - Natal, Rio Grande Do Norte - Cep:59012-300",

            contatohemo: "(84)32024289 <br> (84)32025366 <br> (84)99049200",
        },
        {
            regiao: "Região Nordeste",
            estadohemo: "Sergipe",
            nomehemo: "Hemose",

            localhemo: "Av Pres Tancredo Neves, 0 C. Adm. Gov Augusto - Capucho - Aracaju, Sergipe - Cep:49080-470",

            contatohemo: "(79)32258039 <br> (79)32258000 <br> (79)32593195",
        },
        {   
            regiao: "Região Centro-Oeste",
            estadohemo: "Distrito Federal",
            nomehemo: "Fundação Hemocentro De Brasília",
        
            localhemo: "Smhn, 03 Qd.03 Conj.a Bloco03 - Asa Norte - Brasilia, Distrito Federal - Cep:70710-908",
        
            contatohemo: "(61)33274447  <br> (61)33274413",            
        },
        {   
            regiao: "Região Centro-Oeste",
            estadohemo: "Goiás",
            nomehemo: "Hemocentro De Goiás",
        
            localhemo: "Av Anhanguera, 5195 - Setor Coimbra - Goiania, Goiás - Cep:74535-010",
        
            contatohemo: "(62)3201-4570 <br> (62)3201-4101",            
        },
        {   
            regiao: "Região Centro-Oeste",
            estadohemo: "Mato Grosso",
            nomehemo: "Mt Hemocentro",
        
            localhemo: "R Treze De Junho, 1055 - Porto - Cuiaba, Mato Grosso - Cep:78025-000",
        
            contatohemo: "(65)33210351  <br> (65)36230044",            
        },
        {   
            regiao: "Região Centro-Oeste",
            estadohemo: "Mato Grosso Do Sul",
            nomehemo: "Hemosul",
        
            localhemo: "Av Fernando C Da Costa, 1304 - Centro - Campo Grande, Mato Grosso Do Sul - Cep:79004-310",
        
            contatohemo: "(67)33121500  <br> (67)33121539",
        },
        {   
            regiao: "Região Sudeste",
            estadohemo: "Espírito Santo",
            nomehemo: "Hemoes",
        
            localhemo: "Av Mal Campos, 1468 - Maruípe - Vitoria, Espírito Santo - Cep:29045-460",
        
            contatohemo: "(27)36367925 <br> (27)36367920",            
        },
        {   
            regiao: "Região Sudeste",
            estadohemo: "Minas Gerais",
            nomehemo: "Núcleo de Divinópolis",
        
            localhemo: "Rua José Gabriel Medef, 221 - Bairro: Padre Libério - Cep: 35500-139",
        
            contatohemo: "(37) 3216-6500/6513",    
        },
        {   
            regiao: "Região Sudeste",
            estadohemo: "Minas Gerais",
            nomehemo: "Núcleo Regional De Patos De Minas",
        
            localhemo: "R Maj Gote, 1255 - Centro - Patos De Minas, Minas Gerais - Cep:38700-001",
        
            contatohemo: "(34)38229646",    
        },
        {   
            regiao: "Região Sudeste",
            estadohemo: "Minas Gerais",
            nomehemo: "Nucleo Regional De Ponte Nova",
        
            localhemo: "R Carlos Gomes, 17 - Esplanada - Ponte Nova, Minas Gerais - Cep:35430-069",
        
            contatohemo: "(31)38173212",    
        },
        {   
            regiao: "Região Sudeste",
            estadohemo: "Minas Gerais",
            nomehemo: "Nucleo Regional De Pouso Alegre",
        
            localhemo: "R Comendador José Garcia, 825 - Centro - Pouso Alegre, Minas Gerais - Cep:37550-000",
        
            contatohemo: "(35)34499900",    
        },
        {   
            regiao: "Região Sudeste",
            estadohemo: "Minas Gerais",
            nomehemo: "Nucleo Regional De São João Del Rei",
        
            localhemo: "R Pref Nascimento Teixeira, 175 - Segredo - Sao Joao Del Rei, Minas Gerais - Cep:36307-404",
        
            contatohemo: "(32)33713389",    
        },
        {   
            regiao: "Região Sudeste",
            estadohemo: "Minas Gerais",
            nomehemo: "Nucleo Regional De Sete Lagoas",
        
            localhemo: "Av Renato Azeredo, 3170 - Canaa - Sete Lagoas, Minas Gerais - Cep:35700-312",
        
            contatohemo: "(31)37745074",    
        },
        {   
            regiao: "Região Sudeste",
            estadohemo: "Minas Gerais",
            nomehemo: "Posto De Coleta De Betim Hemominas",
        
            localhemo: "Rua Salvador Gonçalves Diniz, 191 - Baixada - Betim, Minas Gerais - Cep:36900-000",
        
            contatohemo: "(31)35951010",    
        },
        {   
            regiao: "Região Sudeste",
            estadohemo: "Minas Gerais",
            nomehemo: "Unidade De Coleta E Transfusão De Além Paraíba Hemominas",
        
            localhemo: "Rua Felizardo Esquerdo, 45 - Ilha Recreio - Alem Paraiba, Minas Gerais - Cep:36660-000",
        
            contatohemo: "(32)34624597",    
        },
        {   
            regiao: "Região Sudeste",
            estadohemo: "Minas Gerais",
            nomehemo: "Unidade De Coleta E Transfusão Hjk",
        
            localhemo: "R Dr Cristiano Rezende, 2505 - Flavio Marques Lisboa - Belo Horizonte, Minas Gerais - Cep:30620-470",
        
            contatohemo: "(31)33908014",    
        },
        {   
            regiao: "Região Sudeste",
            estadohemo: "Minas Gerais",
            nomehemo: "Fundação Hemominas De Belo Horizonte",
        
            localhemo: "Al Ezequiel Dias, 321 - Centro - Belo Horizonte, Minas Gerais - Cep:30130-110",
        
            contatohemo: "(31)37684562  <br> (31)37684603",    
        },
        {   
            regiao: "Região Sudeste",
            estadohemo: "Minas Gerais",
            nomehemo: "Hemocentro Regional De Juiz De Fora",
        
            localhemo: "R Br De Cataguases, 0 - Santa Helena - Juiz De Fora, Minas Gerais - Cep:36015-370",
        
            contatohemo: "(32)32573100",    
        },
        {   
            regiao: "Região Sudeste",
            estadohemo: "Minas Gerais",
            nomehemo: "Hemocentro Regional De Montes Claros",
        
            localhemo: "Rua Urbino Viana, 640 - Vila Guilhermina - Montes Claros, Minas Gerais - Cep:36900-000",
        
            contatohemo: "(38)32187810",    
        },
        {   
            regiao: "Região Sudeste",
            estadohemo: "Minas Gerais",
            nomehemo: "Hemocentro Regional De Uberaba",
        
            localhemo: "Av Getulio Guarita, 250 - Nossa Senhora Da Abadia - Uberaba, Minas Gerais - Cep:38025-440",
        
            contatohemo: "(34)33125077",    
        },
        {   
            regiao: "Região Sudeste",
            estadohemo: "Minas Gerais",
            nomehemo: "Hemocentro Regional De Uberlândia",
        
            localhemo: "Av Levino De Souza, 1845 - Umuarama - Uberlandia, Minas Gerais - Cep:38405-322",
        
            contatohemo: "(34)32228801",    
        },
        {   
            regiao: "Região Sudeste",
            estadohemo: "Minas Gerais",
            nomehemo: "Hemominas De Governador Valadares",
        
            localhemo: "R Rui Barbosa, 149 - Centro - Governador Valadares, Minas Gerais - Cep:35020-510",
        
            contatohemo: "(33)32125800",    
        },
        {   
            regiao: "Região Sudeste",
            estadohemo: "Minas Gerais",
            nomehemo: "Hemominas De Ituiutaba",
        
            localhemo:  "Av. 5 A, 0 - Progresso - Ituiutaba, Minas Gerais - Cep:38302-010",
        
            contatohemo: "(34)32613555",    
        },
        {   
            regiao: "Região Sudeste",
            estadohemo: "Minas Gerais",
            nomehemo: "Hemominas Passos",
        
            localhemo: "R Dr Jose L De Barros, 313 - Belo Horizonte - Passos, Minas Gerais - Cep:37900-030",
        
            contatohemo: "(35)35224202",    
        },
        {   
            regiao: "Região Sudeste",
            estadohemo: "Minas Gerais",
            nomehemo: "Hemominas Poços De Caldas",
        
            localhemo: "Av Jose R Prezia, 303 - Jardim Dos Estados - Pocos De Caldas, Minas Gerais - Cep:37701-102",
        
            contatohemo: "(35)37129012",    
        },
        {   
            regiao: "Região Sudeste",
            estadohemo: "Minas Gerais",
            nomehemo: "Núcleo Regional De Diamantina Hemominas",
        
            localhemo: "Rua Da Glória, 469 Fundos - Centro - Diamantina, Minas Gerais - Cep:39100-000",
        
            contatohemo: "(38)35313762",    
        },
        {   
            regiao: "Região Sudeste",
            estadohemo: "Minas Gerais",
            nomehemo: "Núcleo Regional De Manhuaçu",
        
            localhemo: "Rua Frederico Dolabela, 289 - Baixada - Manhuacu, Minas Gerais - Cep:36900-000",
        
            contatohemo: "(33)33311021",            
        },
        {   
            regiao: "Região Sudeste",
            estadohemo: "Rio de Janeiro",
            nomehemo: "Hemocampos – Hemocentro Regional de Campos dos Goytacazes",
        
            localhemo: "Rua Rocha Leão, 2 – Cajú – Campos dos Goytacazes, RJ – Cep: 28051-170",
        
            contatohemo: "(22) 98175-2599/98126-4066",    
        },
        {   
            regiao: "Região Sudeste",
            estadohemo: "Rio de Janeiro",
            nomehemo: "Núcleo de Hemoterapia do Hospital Universitário Pedro Ernesto – UERJ",
        
            localhemo: "Boulevard 28 de setembro, 109 - Vila Isabel - Rio de Janeiro, RJ - CEP 20551-030",
        
            contatohemo: "(21)2868-8134",    
        },
        {   
            regiao: "Região Sudeste",
            estadohemo: "Rio de Janeiro",
            nomehemo: "Banco De Sangue Do Instituto Nacional De Câncer José Alencar Gomes Da Silva",
        
            localhemo: "Praça Cruz Vermelha, 23 2º Andar - Centro - Rio De Janeiro, Rio De Janeiro - Cep:20230-130",
        
            contatohemo: "(21) 3207-1580",            
        },
        {   
            regiao: "Região Sudeste",
            estadohemo: "São Paulo",
            nomehemo: "Irmandade Santa Casa de São Carlos",
        
            localhemo: "Rua Paulino Botelho de Abreu Sampaio, 535 – Jardim Pureza – São Carlos, São Paulo – Cep: 13561-060",
        
            contatohemo: "(16) 35091230",    
        },
        {   
            regiao: "Região Sudeste",
            estadohemo: "São Paulo",
            nomehemo: "Hemocentro De Ribeirão Preto",
        
            localhemo: "R Ten Catao Roxo, 2501 - Vila Monte Alegre - Ribeirao Preto, São Paulo - Cep:14051-140",
        
            contatohemo: "(16)21019300 <br> (16)21019663",    
        },
        {   
            regiao: "Região Sudeste",
            estadohemo: "São Paulo",
            nomehemo: "Hemonúcleo De  Santos",
        
            localhemo: "Rua Oswaldo Cruz, 197 - Boqueirao - Santos, São Paulo - Cep:11045-904",
        
            contatohemo: "(13)32021428",    
        },
        {   
            regiao: "Região Sudeste",
            estadohemo: "São Paulo",
            nomehemo: "Hemonúcleo De Bauru",
        
            localhemo: "R Mns Claro, 888  - Centro - Bauru, São Paulo - Cep:17015-130",
        
            contatohemo: "(14)32344412 Ramal:",    
        },
        {   
            regiao: "Região Sudeste",
            estadohemo: "São Paulo",
            nomehemo: "Hospital Amaral Carvalho",
        
            localhemo: "R Da Silveria, 150 - Chacara Braz Miraglia - Jau, São Paulo - Cep:17210-080",
        
            contatohemo: "(14)36021200",    
        },
        {   
            regiao: "Região Sudeste",
            estadohemo: "São Paulo",
            nomehemo: "Hospital De Cancer De Barretos",
        
            localhemo: "R Antenor D Vilela, 1331 - Doutor Paulo Prata - Barretos, São Paulo - Cep:14784-400",
        
            contatohemo: "(17)33216600 Ramal:7114 <br> (17)33216600 Ramal:6753 <br> (17)33216600 Ramal:7115",    
        },
        {   
            regiao: "Região Sudeste",
            estadohemo: "São Paulo",
            nomehemo: "Hospital São Paulo De Ensino Da Unifesp São Paulo",
        
            localhemo: "Rua Dr° Diogo de Faria, nº 824 - 1º andar - Vila Clementino - Sao Paulo, São Paulo - Cep: 04037-002",
        
            contatohemo: "(11)5576-4240 Opção:1",    
        },
        {   
            regiao: "Região Sudeste",
            estadohemo: "São Paulo",
            nomehemo: "Nucleo De Atendimento A Comunidade Farmácia Araraquara",
        
            localhemo: "R Exps Do Brasil, 1621 - Centro - Araraquara, São Paulo - Cep:14801-360",
        
            contatohemo: "(16)33016102",    
        },
        {   
            regiao: "Região Sudeste",
            estadohemo: "São Paulo",
            nomehemo: "Colsan",
        
            localhemo: "Av Cdor Pereira Inacio, 564 - Jardim Faculdade - Sorocaba, São Paulo - Cep:18030-005",
        
            contatohemo: "(15)32242930 <br> (15)33329122",    
        },
        {   
            regiao: "Região Sudeste",
            estadohemo: "São Paulo",
            nomehemo: "Fundação Faculdade Regional De Medicina De São José Do Rio Preto",
        
            localhemo: "R Jamil Feres Kfouri, 80 - Jardim Panorama - Sao Jose Do Rio Preto, São Paulo - Cep:15091-240",
        
            contatohemo: "(17)32015076 Ramal:1930 <br> (17)32015078 Ramal:1930",    
        },
        {   
            regiao: "Região Sudeste",
            estadohemo: "São Paulo",
            nomehemo: "Hemocentro Da Faculdade De Medicina De Marilia",
        
            localhemo: "R Lourival Freire, 240 - Fragata - Marilia, São Paulo - Cep:17519-050",
        
            contatohemo: "(14)34021866",    
        },
        {   
            regiao: "Região Sudeste",
            estadohemo: "São Paulo",
            nomehemo: "Hemocentro Da Santa Casa De São Paulo/laboratório De Histocompatibilidade",
        
            localhemo: "R Mq De Itu, 579 Laboratório 2º Andar - Vila Buarque - Sao Paulo, São Paulo - Cep:01223-001",
        
            contatohemo: "2176-7249 (direto) ou 2176-7000 - Ramal: 7249",    
        },
        {   
            regiao: "Região Sudeste",
            estadohemo: "São Paulo",
            nomehemo: "Hemocentro De Botucatu",
        
            localhemo: "Distrito De Rubião Júnior, 0  - Rubião Junior - Botucatu, São Paulo - Cep:18618-970",
        
            contatohemo: "(14)38116041 Ramal:215 <br> (14)38116041 Ramal:240 <br> (14)38116041 Ramal:237",    
        },
        {   
            regiao: "Região Sudeste",
            estadohemo: "São Paulo",
            nomehemo: "Hemocentro De Campinas/ Unicamp",
        
            localhemo: "R Carlos Chagas, 480 - Cidade Universitaria - Campinas, São Paulo - Cep:13083-878",
        
            contatohemo: "(19)35218705 <br> 0800 7228432",
        },
        {   
            regiao: "Região Sul",
            estadohemo: "Paraná",
            nomehemo: "Hospital Universitário Regional Do Norte Do Paraná",
        
            localhemo:  "R. Claudio D. Cavalieri, 156 - Jd. Aruba - Londrina, Paraná - Cep:86038-350",
        
            contatohemo: "(43)33712218 <br> (43)33712356 <br> (43)33712417",    
        },
        {   
            regiao: "Região Sul",
            estadohemo: "Paraná",
            nomehemo: "Unidade De Coleta E Transfusão De Toledo",
        
            localhemo: "R Alm Barroso, 2490 - Centro - Toledo, Paraná - Cep:85900-020",
        
            contatohemo: "(45)33791993 <br> (45)99128699",    
        },
        {   
            regiao: "Região Sul",
            estadohemo: "Paraná",
            nomehemo: "Hemepar Curitiba",
        
            localhemo: "Tv Joao Prosdocimo, 145 - Alto Da Rua Xv - Curitiba, Paraná - Cep:80045-145",
        
            contatohemo: "(41)32814051",    
        },
        {   
            regiao: "Região Sul",
            estadohemo: "Paraná",
            nomehemo: "Hemepar Guarapuava",
        
            localhemo: "R Afonso Botelho, 134 - Trianon - Guarapuava, Paraná - Cep:85015-000",
        
            contatohemo: "(42)36222819  <br> (42)36223790",    
        },
        {   
            regiao: "Região Sul",
            estadohemo: "Paraná",
            nomehemo: "Hemepar Irati",
        
            localhemo: "Rua Coronel Garcia, 761 - Centro - Irati, Paraná - Cep:84500-000",
        
            contatohemo: "(42)34232400  <br> (42)34223119",    
        },
        {   
            regiao: "Região Sul",
            estadohemo: "Paraná",
            nomehemo: "Hemepar Jacarezinho",
        
            localhemo: "Rua Coronel Cecílio Rocha, 425 - Centro - Jacarezinho, Paraná - Cep:86400-000",
        
            contatohemo: "(43)35271777",    
        },
        {   
            regiao: "Região Sul",
            estadohemo: "Paraná",
            nomehemo: "Hemepar Paranagua",
        
            localhemo: "Rua Gabriel De Lara, 481 - Centro Historico - Paranagua, Paraná - Cep:83203-250",
        
            contatohemo: "(41)34224931",    
        },
        {   
            regiao: "Região Sul",
            estadohemo: "Paraná",
            nomehemo: "Hemepar Ponta Grossa",
        
            localhemo: "R Gen Osorio, 2390 - Centro - Ponta Grossa, Paraná - Cep:84010-080",
        
            contatohemo: "(42)32231616",    
        },
        {   
            regiao: "Região Sul",
            estadohemo: "Paraná",
            nomehemo: "Hemepar Telemaco Borba",
        
            localhemo: "Rua Osório De Almeida Taques, 62 - Centro - Telemaco Borba, Paraná - Cep:84261-060",
        
            contatohemo: "(42)32723743",    
        },
        {   
            regiao: "Região Sul",
            estadohemo: "Paraná",
            nomehemo: "Hemepar Umuarama",
        
            localhemo: "Av Manaus, 4444 - Centro Cívico - Umuarama, Paraná - Cep:87501-130",
        
            contatohemo: "(44)36218301",    
        },
        {   
            regiao: "Região Sul",
            estadohemo: "Paraná",
            nomehemo: "Hemobanco – Curitiba",
        
            localhemo: "R Cap Souza Franco, 290 Casa - Batel - Curitiba, Paraná - Cep:80730-420",
        
            contatohemo: "(41)30235545",    
        },
        {   
            regiao: "Região Sul",
            estadohemo: "Paraná",
            nomehemo: "Hemocentro Regional De Cascavel",
        
            localhemo: "R Avaetes, 37 - Santo Onofre - Cascavel, Paraná - Cep:85806-380",
        
            contatohemo: "(45)32264549  <br> (45)32260808",    
        },
        {   
            regiao: "Região Sul",
            estadohemo: "Paraná",
            nomehemo: "Hemocentro Regional De Maringá",
        
            localhemo: "Av Mandacaru, 1600 - Parque Das Laranjeiras - Maringa, Paraná - Cep:87083-240",
        
            contatohemo: "(44)30119151  <br> (44)30119400  <br> (44)30119194",    
        },
        {   
            regiao: "Região Sul",
            estadohemo: "Paraná",
            nomehemo: "Hemonúcleo De Foz Do Iguaçu",
        
            localhemo: "Av Gramado, 364 - Vila Residencial A - Foz Do Iguacu, Paraná - Cep:85860-460",
        
            contatohemo: "(45)35768020",    
        },
        {   
            regiao: "Região Sul",
            estadohemo: "Paraná",
            nomehemo: "Hemonúcleo Regional De Francisco Beltrão",
        
            localhemo: "R Marilia, 1327 - Padre Ulrico - Francisco Beltrao, Paraná - Cep:85604-400",
        
            contatohemo: "(46)35243454  <br> (46)35242434",    
        },
        {   
            regiao: "Região Sul",
            estadohemo: "Paraná",
            nomehemo: "Hemonúcleo Regional De Paranavaí",
        
            localhemo: "R Rio G Do Sul, 2390 - Centro - Paranavai, Paraná - Cep:87703-320",
        
            contatohemo: "(44)34215160  <br> (44)34215163  <br> (44)34215100",    
        },
        {   
            regiao: "Região Sul",
            estadohemo: "Paraná",
            nomehemo: "Hospital De Clínicas – Ufpr",
        
            localhemo: "Av Agostinho L Junior, 108 Térreo - Centro - Curitiba, Paraná - Cep:80030-110",
        
            contatohemo: "(41)33601800 Ramal:6527 <br> (41)33601875 <br> (41)33601800 Ramal:6481",    
        },
        {   
            regiao: "Região Sul",
            estadohemo: "Paraná",
            nomehemo: "Hospital Erasto Gaertner",
        
            localhemo: "R Dr Ovande Do Amaral, 201 Hospital Erasto Gaer - Jardim Das Americas - Curitiba, Paraná - Cep:81520-060",
        
            contatohemo: "(41)33615037  <br> (41)33615186  <br> (41)33615038",    
        },
        {   
            regiao: "Região Sul",
            estadohemo: "Paraná",
            nomehemo: "Hemonúcleo de Pato Branco",
        
            localhemo: "R Parana, 1633 - Sambugaro - Pato Branco, Paraná - Cep:85501-090",
        
            contatohemo: "(46)32251014  <br> (46)32253585  <br> (46)32253291",    
        },
        {   
            regiao: "Região Sul",
            estadohemo: "Paraná",
            nomehemo: "Banco De Sangue Na Santa Casa",
        
            localhemo: "Pc Rui Barbosa, 694 - Centro - Curitiba, Paraná - Cep:80010-030",
        
            contatohemo: "(41)33222387",    
        },
        {   
            regiao: "Região Sul",
            estadohemo: "Paraná",
            nomehemo: "UCT União da Vitória",
        
            localhemo: "Rua Castro Alves, 26 Prédio - Centro - Uniao Da Vitoria, Paraná - Cep:84600-000",
        
            contatohemo: "(42)35237930  <br> (42)35221365  <br> (42)35221793",    
        },
        {   
            regiao: "Região Sul",
            estadohemo: "Paraná",
            nomehemo: "Consorcio De Saude – Cianorte",
        
            localhemo: "Praça Da Republica, 71 - Centro - Cianorte, Paraná - Cep:87200-000",
        
            contatohemo: "(44)3619191",    
        },
        {   
            regiao: "Região Sul",
            estadohemo: "Paraná",
            nomehemo: "Hemepar Apucarana",
        
            localhemo: "R Antonio Ostrenski, 03 - Centro - Apucarana, Paraná - Cep:86800-200",
        
            contatohemo: "(41)34204200",    
        },
        {   
            regiao: "Região Sul",
            estadohemo: "Paraná",
            nomehemo: "Hemepar Campo Mourao",
        
            localhemo: "R Mambore, 1500 - Centro - Campo Mourao, Paraná - Cep:87302-140",
        
            contatohemo: "(44)35251102  <br> (44)35231844 Ramal:",            
        },
        {   
            regiao: "Região Sul",
            estadohemo: "Rio Grande Do Sul",
            nomehemo: "Hemosar",
        
            localhemo: "Rua Boa Vista, 401 - Centro - Santa Rosa, Rio Grande Do Sul - Cep:98900-000",
        
            contatohemo: "(55)35126122",    
        },
        {   
            regiao: "Região Sul",
            estadohemo: "Rio Grande Do Sul",
            nomehemo: "Hospital Conceição",
        
            localhemo: "Av Francisco Trein, 596 - Passo D'areia - Porto Alegre, Rio Grande Do Sul - Cep:91350-200",
        
            contatohemo: "(51)33574234",    
        },
        {   
            regiao: "Região Sul",
            estadohemo: "Rio Grande Do Sul",
            nomehemo: "Hospital De Clínicas De Porto Alegre",
        
            localhemo: "R Ramiro Barcelos, 2350 2º Andar - Santana - Porto Alegre, Rio Grande Do Sul - Cep:90035-007",
        
            contatohemo: "(51)33598309 <br> (51)33598020 <br> (51)33598308",    
        },
        {   
            regiao: "Região Sul",
            estadohemo: "Rio Grande Do Sul",
            nomehemo: "Hemocentro Regional De Alegrete",
        
            localhemo: "R Gen Sampaio, 10 - Vila Nova - Alegrete, Rio Grande Do Sul - Cep:97541-260",
        
            contatohemo: "(55)34264127",    
        },
        {   
            regiao: "Região Sul",
            estadohemo: "Rio Grande Do Sul",
            nomehemo: "Hemocentro Regional De Caxias Do Sul",
        
            localhemo: "R Ernesto Alves, 2260 - Nossa Senhora De Lourdes - Caxias Do Sul, Rio Grande Do Sul - Cep:95020-360",
        
            contatohemo: "(54)32904576 <br> (54)32904577",    
        },
        {   
            regiao: "Região Sul",
            estadohemo: "Rio Grande Do Sul",
            nomehemo: "Hemocentro Regional De Cruz Alta",
        
            localhemo: "R Br Do Rio Branco, 1445 Fundos - Centro - Cruz Alta, Rio Grande Do Sul - Cep:98010-770",
        
            contatohemo: "(55)33263168 <br> (55)33263478",    
        },
        {   
            regiao: "Região Sul",
            estadohemo: "Rio Grande Do Sul",
            nomehemo: "Hemocentro Regional De Palmeira Das Missoes",
        
            localhemo: "Rua Nassib Nassif, 503 - Loteamento Céu Azul - Palmeira Das Missoes, Rio Grande Do Sul - Cep:98300-000",
        
            contatohemo: "(55)37425676",    
        },
        {   
            regiao: "Região Sul",
            estadohemo: "Rio Grande Do Sul",
            nomehemo: "Hemocentro Regional De Santa Maria",
        
            localhemo: "Al Santiago Do Chile, 35 Próximo Ao Fórum - Nossa Senhora De Lourdes - Santa Maria, Rio Grande Do Sul - Cep:97050-685",
        
            contatohemo: "(55)99164219 <br> (55)91316991 <br> (55)32215262",    
        },
        {   
            regiao: "Região Sul",
            estadohemo: "Rio Grande Do Sul",
            nomehemo: "Hemopasso Hemocentro Regional De Passo Fundo",
        
            localhemo: "Av Sete De Setembro, 1055 Bloco A - Centro - Passo Fundo, Rio Grande Do Sul - Cep:99010-120",
        
            contatohemo: "(54)33115555  <br> (54)33111427",    
        },
        {   
            regiao: "Região Sul",
            estadohemo: "Rio Grande Do Sul",
            nomehemo: "Hemopel",
        
            localhemo: "Av Bento Goncalves, 4569 - Centro - Pelotas, Rio Grande Do Sul - Cep:96015-145",
        
            contatohemo: "(53)32254022  <br> (53)32223002",    
        },
        {   
            regiao: "Região Sul",
            estadohemo: "Rio Grande Do Sul",
            nomehemo: "Hemorgs",
        
            localhemo: "Av Bento Goncalves, 3722 - Partenon - Porto Alegre, Rio Grande Do Sul - Cep:90650-001",
        
            contatohemo: "(51)33366755",            
        },
        {   
            regiao: "Região Sul",
            estadohemo: "Santa Catarina",
            nomehemo: "Centro De Hematologia E Hemoterapia De Santa Catarina",
        
            localhemo: "Av Prf Othon Gama Deca, 756 Praça D. Pedro I - Centro - Florianopolis, Santa Catarina - Cep:88015-240",
        
            contatohemo: "(48) 3251-9711 / (48) 3251-9712 / (48) 3251-9713",
        }

    ]
}