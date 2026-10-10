// Bairros com página própria. O slug vai na URL (sem acento); o nome aparece no texto.
// "perfil" resume o tipo de comércio e "texto" foi escrito à mão para cada bairro.
export type PerfilBairro =
  | "central"
  | "gastronomico"
  | "alto-padrao"
  | "populoso"
  | "industrial"
  | "turistico"
  | "residencial"

export type Bairro = { slug: string; nome: string; perfil: PerfilBairro; texto: string }

export const bairros: { slug: string; bairros: Bairro[] }[] = [
  {
    slug: "curitiba",
    bairros: [
      {
        slug: "agua-verde",
        nome: "Água Verde",
        perfil: "populoso",
        texto:
          "Um dos bairros mais populosos da região central, o Água Verde é formado sobretudo por prédios residenciais. O comércio se concentra ao longo da Avenida República Argentina e da Avenida Água Verde, com padarias, farmácias, restaurantes e clínicas. Em dia de jogo na Arena da Baixada, que fica no bairro, bares e ambulantes do entorno trabalham com movimento bem acima do normal.",
      },
      {
        slug: "ahu",
        nome: "Ahú",
        perfil: "residencial",
        texto:
          "Bairro residencial ao norte do Centro, o Ahú ficou conhecido pela antiga prisão provisória, hoje desativada. O dia a dia é de comércio de vizinhança: mercados, padarias, pet shops, salões e pequenos restaurantes que atendem moradores de prédios e casas.",
      },
      {
        slug: "alto-boqueirao",
        nome: "Alto Boqueirão",
        perfil: "populoso",
        texto:
          "No sul da cidade, o Alto Boqueirão reúne mais de 50 mil moradores e abriga o Zoológico de Curitiba, dentro do Parque Iguaçu. O comércio é popular e de rua, com mercados, lojas de roupa, materiais de construção e lanchonetes. Nos fins de semana, o movimento do zoológico atrai ambulantes e vendedores de lanches.",
      },
      {
        slug: "alto-da-gloria",
        nome: "Alto da Glória",
        perfil: "central",
        texto:
          "Colado ao Centro, o Alto da Glória é o bairro do Estádio Couto Pereira. Fora dos dias de jogo, o comércio vive de escritórios, clínicas e moradores de prédios. Quando o estádio enche, bares, lanchonetes e ambulantes das ruas próximas concentram em poucas horas boa parte das vendas da semana.",
      },
      {
        slug: "alto-da-xv",
        nome: "Alto da XV",
        perfil: "residencial",
        texto:
          "O Alto da XV fica a leste do Centro e é atravessado pela Rua XV de Novembro, já fora do calçadão. É um bairro residencial tradicional, com muitas clínicas, consultórios, cafés e restaurantes que atendem tanto moradores quanto quem trabalha na região.",
      },
      {
        slug: "bacacheri",
        nome: "Bacacheri",
        perfil: "residencial",
        texto:
          "O Bacacheri fica na zona norte e é conhecido pelo aeroporto e pelo parque que levam o nome do bairro. A Avenida Prefeito Erasto Gaertner concentra bancos, lojas e restaurantes. É uma região de classe média com comércio variado, do mercado de bairro às academias e escolas.",
      },
      {
        slug: "bairro-alto",
        nome: "Bairro Alto",
        perfil: "populoso",
        texto:
          "Com mais de 40 mil moradores, o Bairro Alto fica na zona nordeste, perto da divisa com Pinhais. O comércio é de rua e atende basicamente quem mora ali: supermercados, açougues, farmácias, oficinas, salões e lojas de roupa.",
      },
      {
        slug: "barreirinha",
        nome: "Barreirinha",
        perfil: "residencial",
        texto:
          "Na zona norte, a Barreirinha abriga o parque de mesmo nome e é cortada pela Avenida Anita Garibaldi, por onde passa boa parte do comércio do bairro. Predominam mercados, padarias, materiais de construção e serviços automotivos.",
      },
      {
        slug: "batel",
        nome: "Batel",
        perfil: "alto-padrao",
        texto:
          "O Batel é o endereço mais conhecido do comércio de alto padrão de Curitiba. A Avenida do Batel e as ruas ao redor reúnem restaurantes, bares, cafés, lojas de grife e dois shoppings, o Pátio Batel e o Crystal. É uma região de tíquete alto, em que o cliente paga quase sempre no cartão ou por aproximação.",
      },
      {
        slug: "bigorrilho",
        nome: "Bigorrilho",
        perfil: "alto-padrao",
        texto:
          "O Bigorrilho, que muita gente chama de Champagnat, é um bairro de prédios residenciais de padrão médio e alto. A Rua Padre Anchieta, por onde passa o ônibus expresso, concentra restaurantes, cafés, academias e serviços. A vida noturna e a gastronomia têm peso importante no comércio local.",
      },
      {
        slug: "boa-vista",
        nome: "Boa Vista",
        perfil: "populoso",
        texto:
          "Um dos bairros mais populosos da zona norte, o Boa Vista tem na Avenida Paraná seu principal eixo de comércio e transporte. Lojas de rua, bancos, clínicas e supermercados atendem os moradores do bairro e dos vizinhos.",
      },
      {
        slug: "bom-retiro",
        nome: "Bom Retiro",
        perfil: "residencial",
        texto:
          "O Bom Retiro é um bairro pequeno e residencial, próximo das Mercês e do Centro Cívico. O comércio é de vizinhança, com padarias, mercearias, salões e alguns restaurantes, e muita gente do bairro resolve as compras maiores nos vizinhos.",
      },
      {
        slug: "boqueirao",
        nome: "Boqueirão",
        perfil: "populoso",
        texto:
          "O Boqueirão é um dos grandes bairros da zona sul, com mais de 65 mil moradores. A Avenida Marechal Floriano Peixoto, com a canaleta do ônibus expresso, e o terminal do bairro organizam o comércio: lojas de rua, concessionárias, oficinas, supermercados e muita alimentação rápida.",
      },
      {
        slug: "cabral",
        nome: "Cabral",
        perfil: "alto-padrao",
        texto:
          "O Cabral fica na zona norte, junto ao terminal de ônibus que leva o nome do bairro. É uma área residencial de padrão médio e alto, com prédios e casas grandes. O comércio se concentra perto do terminal e da Avenida Paraná, com restaurantes, padarias, clínicas e escolas.",
      },
      {
        slug: "cajuru",
        nome: "Cajuru",
        perfil: "populoso",
        texto:
          "Com cerca de 90 mil moradores, o Cajuru é o terceiro bairro mais populoso de Curitiba. Fica na zona leste, na direção de Pinhais e São José dos Pinhais. A Avenida Presidente Affonso Camargo é a principal via comercial, e o comércio de rua é popular e muito variado.",
      },
      {
        slug: "capao-da-imbuia",
        nome: "Capão da Imbuia",
        perfil: "residencial",
        texto:
          "Na zona leste, o Capão da Imbuia é conhecido pelo Museu de História Natural e pelo terminal de ônibus do bairro. O comércio fica principalmente no entorno do terminal e das avenidas de ligação com o Centro, com mercados, farmácias, lanchonetes e serviços.",
      },
      {
        slug: "capao-raso",
        nome: "Capão Raso",
        perfil: "populoso",
        texto:
          "O Capão Raso fica na zona sul e tem um dos terminais de ônibus mais movimentados da cidade. A Avenida Winston Churchill e a Linha Verde concentram lojas, concessionárias, supermercados e alimentação. Milhares de pessoas passam pelo terminal todos os dias, o que sustenta o comércio rápido ao redor.",
      },
      {
        slug: "cascatinha",
        nome: "Cascatinha",
        perfil: "alto-padrao",
        texto:
          "A Cascatinha é um dos menores bairros de Curitiba, com pouco mais de 2 mil moradores. Fica no caminho de Santa Felicidade e é formada por casas e condomínios de alto padrão. Tem poucos estabelecimentos, na maior parte restaurantes e serviços voltados a quem passa pela Avenida Manoel Ribas.",
      },
      {
        slug: "centro",
        nome: "Centro",
        perfil: "central",
        texto:
          "O Centro tem o maior fluxo de pessoas da cidade. O calçadão da Rua XV de Novembro, a Praça Tiradentes, a Rua 24 Horas e o Mercado Municipal reúnem lojas populares, lanchonetes, bancas e ambulantes. Quem compra ali geralmente está de passagem, a caminho do ônibus ou do trabalho, e decide rápido.",
      },
      {
        slug: "centro-civico",
        nome: "Centro Cívico",
        perfil: "central",
        texto:
          "O Centro Cívico concentra a sede do governo do estado, a Assembleia, os tribunais e a Prefeitura, além do Museu Oscar Niemeyer e do Shopping Mueller. O comércio vive de servidores públicos, advogados e visitantes: restaurantes de almoço, cafés, copiadoras, estacionamentos e serviços rápidos.",
      },
      {
        slug: "cidade-industrial",
        nome: "Cidade Industrial",
        perfil: "industrial",
        texto:
          "A Cidade Industrial de Curitiba, a CIC, é o maior bairro da cidade em população, com mais de 170 mil moradores. Além das grandes fábricas, tem dezenas de vilas residenciais com comércio próprio. Restaurantes de almoço, lanchonetes, mercados e oficinas atendem tanto os trabalhadores das indústrias quanto as famílias que moram no bairro.",
      },
      {
        slug: "fazendinha",
        nome: "Fazendinha",
        perfil: "residencial",
        texto:
          "A Fazendinha fica entre o Portão e a Cidade Industrial e tem um terminal de ônibus que organiza o movimento do bairro. O comércio é popular, com supermercados, padarias, farmácias, lojas de roupa e serviços automotivos, e atende principalmente os moradores.",
      },
      {
        slug: "fanny",
        nome: "Fanny",
        perfil: "residencial",
        texto:
          "O Fanny é um bairro pequeno da zona sul, próximo da Linha Verde. É predominantemente residencial, com comércio de vizinhança e algumas empresas de serviço e pequenas indústrias instaladas perto da antiga rodovia.",
      },
      {
        slug: "ganchinho",
        nome: "Ganchinho",
        perfil: "populoso",
        texto:
          "No extremo sul da cidade, o Ganchinho cresceu nos últimos anos com novos loteamentos e conjuntos habitacionais. O comércio ainda está se formando e é feito de mercados, lanchonetes, salões e pequenos negócios abertos por moradores, muitos deles como primeira atividade própria.",
      },
      {
        slug: "guabirotuba",
        nome: "Guabirotuba",
        perfil: "residencial",
        texto:
          "O Guabirotuba fica entre o Jardim das Américas e o Prado Velho, na saída para o aeroporto. É um bairro residencial de classe média, com comércio ao longo da Avenida Senador Salgado Filho: mercados, padarias, oficinas e restaurantes.",
      },
      {
        slug: "hauer",
        nome: "Hauer",
        perfil: "residencial",
        texto:
          "O Hauer é cortado pela Avenida Marechal Floriano Peixoto e tem terminal de ônibus próprio. O comércio de rua é forte para o tamanho do bairro, com lojas, serviços automotivos e alimentação que atendem também quem vem do Boqueirão e de outros bairros da zona sul.",
      },
      {
        slug: "hugo-lange",
        nome: "Hugo Lange",
        perfil: "alto-padrao",
        texto:
          "Pequeno e residencial, o Hugo Lange fica entre o Cabral e o Jardim Social. Tem pouco mais de 4 mil moradores, a maioria em casas e prédios de bom padrão. O comércio se resume a cafés, restaurantes, clínicas e serviços de vizinhança.",
      },
      {
        slug: "jardim-botanico",
        nome: "Jardim Botânico",
        perfil: "turistico",
        texto:
          "O bairro leva o nome do cartão-postal mais visitado de Curitiba, o Jardim Botânico, com sua estufa de vidro. Fica ali também a Rodoferroviária. Cafés, lojas de lembranças, vendedores ambulantes e motoristas atendem um público de turistas, que raramente anda com dinheiro em espécie.",
      },
      {
        slug: "jardim-das-americas",
        nome: "Jardim das Américas",
        perfil: "residencial",
        texto:
          "O Jardim das Américas abriga o Centro Politécnico da Universidade Federal do Paraná, e isso marca o comércio do bairro: lanchonetes, restaurantes por quilo, copiadoras e repúblicas convivem com um shopping de bairro e com o comércio de vizinhança.",
      },
      {
        slug: "jardim-social",
        nome: "Jardim Social",
        perfil: "alto-padrao",
        texto:
          "O Jardim Social é um bairro pequeno, de casas grandes e ruas arborizadas, entre o Bacacheri e o Hugo Lange. O comércio é discreto e voltado ao morador, com padarias, clínicas, escolas e alguns restaurantes.",
      },
      {
        slug: "juveve",
        nome: "Juvevê",
        perfil: "alto-padrao",
        texto:
          "Vizinho do Centro Cívico, o Juvevê é um bairro residencial de padrão médio e alto, com muitos prédios. Bares, restaurantes e cafés dividem as ruas com clínicas, pet shops e pequenos mercados.",
      },
      {
        slug: "lindoia",
        nome: "Lindóia",
        perfil: "residencial",
        texto:
          "O Lindóia é um bairro pequeno da zona sul, junto à Linha Verde. É residencial, com comércio de vizinhança formado por mercados, padarias, oficinas e lojas de material de construção.",
      },
      {
        slug: "merces",
        nome: "Mercês",
        perfil: "residencial",
        texto:
          "As Mercês ficam a noroeste do Centro e abrigam a Torre Panorâmica, de onde se vê a cidade inteira. O bairro é residencial, de classe média, e a Avenida Manoel Ribas, no trecho em que começa, concentra padarias, restaurantes, farmácias e serviços.",
      },
      {
        slug: "mossungue",
        nome: "Mossunguê",
        perfil: "alto-padrao",
        texto:
          "O Mossunguê é o bairro do Ecoville, a região de prédios altos e condomínios de alto padrão ao lado do Parque Barigui. Um grande shopping, restaurantes, academias e serviços para moradores de renda alta formam o comércio local, em que o cartão de crédito é o meio de pagamento padrão.",
      },
      {
        slug: "novo-mundo",
        nome: "Novo Mundo",
        perfil: "populoso",
        texto:
          "Com mais de 40 mil moradores, o Novo Mundo fica na zona sul, na continuação do eixo da Avenida República Argentina. O comércio de rua é intenso, com supermercados, lojas de roupa e calçados, farmácias, bancos e muita alimentação.",
      },
      {
        slug: "orleans",
        nome: "Orleans",
        perfil: "residencial",
        texto:
          "O Orleans fica na zona oeste, na saída de Curitiba pela BR-277 em direção a Campo Largo. Tem perfil residencial, com condomínios de casas, e um comércio de beira de avenida formado por restaurantes, mercados, floriculturas e serviços.",
      },
      {
        slug: "parolin",
        nome: "Parolin",
        perfil: "residencial",
        texto:
          "O Parolin fica ao sul do Centro, entre o Rebouças e o Guaíra. É um bairro de contrastes, com área residencial consolidada, comunidades populares e muitas oficinas, depósitos e pequenos negócios de serviço.",
      },
      {
        slug: "pilarzinho",
        nome: "Pilarzinho",
        perfil: "residencial",
        texto:
          "O Pilarzinho é um bairro grande da zona norte, com ruas íngremes e muita área verde, onde fica a Universidade Livre do Meio Ambiente. O comércio se distribui pelas vias principais, com mercados, padarias, farmácias e restaurantes de bairro.",
      },
      {
        slug: "pinheirinho",
        nome: "Pinheirinho",
        perfil: "populoso",
        texto:
          "O Pinheirinho, na zona sul, tem um dos maiores terminais de ônibus de Curitiba, por onde passam moradores de vários bairros e de cidades vizinhas. A Avenida Winston Churchill e a Linha Verde concentram lojas, atacados, supermercados e alimentação rápida.",
      },
      {
        slug: "portao",
        nome: "Portão",
        perfil: "populoso",
        texto:
          "O Portão é um dos bairros comerciais mais fortes fora do Centro. A Avenida República Argentina, o terminal de ônibus e dois shoppings, o Palladium e o Ventura, atraem gente de toda a zona sul. Há de tudo: lojas de rua, restaurantes, clínicas, academias e serviços.",
      },
      {
        slug: "reboucas",
        nome: "Rebouças",
        perfil: "central",
        texto:
          "Antiga área industrial e ferroviária, o Rebouças mudou de perfil e hoje mistura prédios novos, universidade, o Shopping Estação e galpões transformados em bares e espaços de evento. O público é formado por estudantes, quem trabalha na região e frequentadores da vida noturna.",
      },
      {
        slug: "santa-candida",
        nome: "Santa Cândida",
        perfil: "populoso",
        texto:
          "A Santa Cândida fica no extremo norte de Curitiba e tem o terminal que marca o fim do eixo norte do ônibus expresso. Com cerca de 40 mil moradores, tem comércio popular concentrado no entorno do terminal e nas avenidas de acesso.",
      },
      {
        slug: "santa-felicidade",
        nome: "Santa Felicidade",
        perfil: "gastronomico",
        texto:
          "Santa Felicidade é o bairro italiano de Curitiba e o maior polo gastronômico da cidade. Os grandes restaurantes da Avenida Manoel Ribas recebem excursões, casamentos e almoços de domingo com centenas de pessoas. Em volta deles cresceram vinícolas, lojas de móveis, de vime e de artesanato.",
      },
      {
        slug: "santa-quiteria",
        nome: "Santa Quitéria",
        perfil: "residencial",
        texto:
          "A Santa Quitéria fica na zona oeste, entre o Portão e o Campo Comprido. É um bairro residencial de classe média, com comércio ao longo da Avenida Presidente Arthur Bernardes: mercados, padarias, farmácias e pequenos restaurantes.",
      },
      {
        slug: "seminario",
        nome: "Seminário",
        perfil: "alto-padrao",
        texto:
          "Vizinho do Batel, o Seminário é um bairro residencial de padrão médio e alto. A Avenida Nossa Senhora Aparecida concentra restaurantes, cafés, clínicas e lojas, e boa parte da clientela vem dos bairros ao redor.",
      },
      {
        slug: "sitio-cercado",
        nome: "Sítio Cercado",
        perfil: "populoso",
        texto:
          "O Sítio Cercado é o segundo bairro mais populoso de Curitiba, com mais de 100 mil moradores, na zona sul. O comércio de rua é um dos mais fortes da periferia: a Rua Izaac Ferreira da Cruz e as vias próximas têm lojas, supermercados, bancos e feiras que dispensam a ida ao Centro.",
      },
      {
        slug: "taruma",
        nome: "Tarumã",
        perfil: "residencial",
        texto:
          "O Tarumã fica na zona leste e é conhecido pelo hipódromo do Jockey Club e pelo Colégio Militar. A Avenida Victor Ferreira do Amaral, caminho para Pinhais, reúne lojas, concessionárias e restaurantes. Eventos no Jockey e no ginásio do bairro trazem movimento extra em dias específicos.",
      },
      {
        slug: "tatuquara",
        nome: "Tatuquara",
        perfil: "populoso",
        texto:
          "O Tatuquara fica no extremo sul de Curitiba e é um dos bairros que mais cresceram nas últimas décadas, passando de 55 mil moradores. O comércio é local e popular: mercados, açougues, lojas de roupa, materiais de construção e muitos pequenos negócios familiares.",
      },
      {
        slug: "tingui",
        nome: "Tingui",
        perfil: "residencial",
        texto:
          "O Tingui é um bairro residencial da zona norte, vizinho do Bacacheri e da Santa Cândida. O comércio é de vizinhança e atende principalmente os moradores, com mercados, padarias, farmácias e serviços.",
      },
      {
        slug: "uberaba",
        nome: "Uberaba",
        perfil: "populoso",
        texto:
          "Com mais de 70 mil moradores, o Uberaba é um dos maiores bairros da cidade. Fica na zona leste e é atravessado pela Avenida Comendador Franco, a Avenida das Torres, caminho para o aeroporto. O comércio se divide entre essa avenida, com lojas maiores, e as ruas internas, de comércio popular.",
      },
      {
        slug: "umbara",
        nome: "Umbará",
        perfil: "residencial",
        texto:
          "O Umbará fica no sul de Curitiba e ainda guarda áreas rurais e chácaras, ao lado de loteamentos mais recentes. É um bairro de tradição nas olarias. O comércio é espalhado e voltado ao morador, com mercados, materiais de construção e oficinas.",
      },
      {
        slug: "vila-izabel",
        nome: "Vila Izabel",
        perfil: "residencial",
        texto:
          "A Vila Izabel fica entre o Água Verde, o Portão e o Batel. É um bairro residencial de classe média, com prédios e casas, e comércio de vizinhança: padarias, mercados, farmácias, salões e restaurantes.",
      },
      {
        slug: "vista-alegre",
        nome: "Vista Alegre",
        perfil: "residencial",
        texto:
          "O Vista Alegre fica a noroeste do Centro e abriga o Bosque Alemão, um dos parques visitados por turistas. O bairro é residencial e de relevo acidentado, com comércio concentrado nas vias de ligação com as Mercês e o Pilarzinho.",
      },
    ],
  },
]
