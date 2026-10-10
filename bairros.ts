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
        slug: "abranches",
        nome: "Abranches",
        perfil: "turistico",
        texto:
          "O Abranches tem dois dos palcos mais conhecidos de Curitiba, a Ópera de Arame e a Pedreira Paulo Leminski. Em dia de show o bairro muda. Chegam milhares de pessoas de uma vez, e ambulante, bar e estacionamento vendem em poucas horas o que não vendem na semana inteira. Sem show, o comércio volta a ser de vizinhança.",
      },
      {
        slug: "agua-verde",
        nome: "Água Verde",
        perfil: "populoso",
        texto:
          "O Água Verde é um dos bairros mais populosos perto do Centro, quase todo de prédios. O comércio segue a Avenida República Argentina e a Avenida Água Verde: padaria, farmácia, restaurante, clínica. A Arena da Baixada fica ali, e em dia de jogo os bares e ambulantes do entorno trabalham com um movimento que não tem nada a ver com um dia comum.",
      },
      {
        slug: "ahu",
        nome: "Ahú",
        perfil: "residencial",
        texto:
          "O Ahú é residencial e fica ao norte do Centro. Muita gente ainda associa o nome à antiga prisão provisória, que foi desativada. No dia a dia, o que existe é comércio de vizinhança: mercado, padaria, pet shop, salão e restaurante pequeno, atendendo quem mora nos prédios e nas casas dali.",
      },
      {
        slug: "alto-boqueirao",
        nome: "Alto Boqueirão",
        perfil: "populoso",
        texto:
          "O Alto Boqueirão fica no sul da cidade e passa dos 50 mil moradores. É onde está o Zoológico de Curitiba, dentro do Parque Iguaçu. O comércio é popular e de rua, com mercado, loja de roupa, material de construção e lanchonete. No fim de semana, o zoológico puxa visitante, e com ele vêm os ambulantes e quem vende lanche.",
      },
      {
        slug: "alto-da-gloria",
        nome: "Alto da Glória",
        perfil: "central",
        texto:
          "O Alto da Glória é o bairro do Couto Pereira, colado no Centro. Nos dias sem jogo, vive de escritório, clínica e morador de prédio. Quando o estádio enche, a conta muda: bar, lanchonete e ambulante das ruas em volta fazem em poucas horas boa parte da venda da semana.",
      },
      {
        slug: "alto-da-xv",
        nome: "Alto da XV",
        perfil: "residencial",
        texto:
          "O Alto da XV fica a leste do Centro, e a Rua XV de Novembro passa por ele, já sem calçadão. É um bairro residencial antigo e tranquilo. Tem muita clínica e consultório, além de cafés e restaurantes que atendem o morador e quem trabalha por ali.",
      },
      {
        slug: "atuba",
        nome: "Atuba",
        perfil: "residencial",
        texto:
          "O Atuba fica na ponta nordeste de Curitiba, encostado em Colombo e Pinhais, e é cortado pela antiga BR-116. São cerca de 20 mil moradores. O comércio é do bairro mesmo, com mercado, oficina, material de construção e lanchonete. Perto da rodovia aparecem as empresas de serviço.",
      },
      {
        slug: "augusta",
        nome: "Augusta",
        perfil: "residencial",
        texto:
          "A Augusta fica no oeste de Curitiba, perto de Campo Largo, e ainda tem muita chácara e área verde. São pouco mais de 7 mil moradores. O comércio é pequeno e espalhado. Mercearia, bar, material de construção e prestador de serviço atendem basicamente os próprios vizinhos.",
      },
      {
        slug: "bacacheri",
        nome: "Bacacheri",
        perfil: "residencial",
        texto:
          "O Bacacheri fica na zona norte, e o aeroporto e o parque levam o nome do bairro. A Avenida Prefeito Erasto Gaertner é onde estão os bancos, as lojas e os restaurantes. É região de classe média, com comércio variado, do mercado de bairro à academia e à escola.",
      },
      {
        slug: "bairro-alto",
        nome: "Bairro Alto",
        perfil: "populoso",
        texto:
          "O Bairro Alto tem mais de 40 mil moradores e fica na zona nordeste, quase em Pinhais. O comércio é de rua e vive de quem mora ali. Supermercado, açougue, farmácia, oficina, salão, loja de roupa: o básico, bem servido.",
      },
      {
        slug: "barreirinha",
        nome: "Barreirinha",
        perfil: "residencial",
        texto:
          "A Barreirinha fica na zona norte e tem o parque de mesmo nome. Boa parte do comércio está na Avenida Anita Garibaldi, que corta o bairro. O que mais aparece é mercado, padaria, material de construção e oficina.",
      },
      {
        slug: "batel",
        nome: "Batel",
        perfil: "alto-padrao",
        texto:
          "O Batel é o endereço mais conhecido do comércio caro de Curitiba. Na Avenida do Batel e nas ruas em volta ficam restaurantes, bares, cafés, lojas de grife e dois shoppings, o Pátio Batel e o Crystal. O tíquete é alto, e o cliente paga no cartão ou por aproximação. Dinheiro vivo ali é raridade.",
      },
      {
        slug: "bigorrilho",
        nome: "Bigorrilho",
        perfil: "alto-padrao",
        texto:
          "O Bigorrilho, que muita gente chama de Champagnat, é feito de prédios residenciais de padrão médio e alto. A Rua Padre Anchieta, por onde passa o ônibus expresso, junta restaurante, café, academia e serviço. A noite e a gastronomia pesam bastante no comércio do bairro.",
      },
      {
        slug: "boa-vista",
        nome: "Boa Vista",
        perfil: "populoso",
        texto:
          "O Boa Vista é um dos bairros mais populosos da zona norte. A Avenida Paraná funciona como eixo de tudo, comércio e transporte. Lojas de rua, bancos, clínicas e supermercados atendem quem mora ali e também os bairros vizinhos.",
      },
      {
        slug: "bom-retiro",
        nome: "Bom Retiro",
        perfil: "residencial",
        texto:
          "O Bom Retiro é pequeno e residencial, perto das Mercês e do Centro Cívico. O comércio é de vizinhança, com padaria, mercearia, salão e alguns restaurantes. Para compra maior, o morador costuma ir aos bairros ao lado.",
      },
      {
        slug: "boqueirao",
        nome: "Boqueirão",
        perfil: "populoso",
        texto:
          "O Boqueirão é um dos bairros grandes da zona sul, com mais de 65 mil moradores. O comércio se organiza em volta da Avenida Marechal Floriano Peixoto, com a canaleta do expresso, e do terminal. Tem loja de rua, concessionária, oficina, supermercado e muita comida rápida.",
      },
      {
        slug: "butiatuvinha",
        nome: "Butiatuvinha",
        perfil: "residencial",
        texto:
          "A Butiatuvinha é vizinha de Santa Felicidade. Mistura condomínio residencial, chácara e alguns restaurantes que pegam carona no movimento do polo gastronômico ao lado. O comércio do dia a dia é de bairro, com mercado, padaria e serviço.",
      },
      {
        slug: "cabral",
        nome: "Cabral",
        perfil: "alto-padrao",
        texto:
          "O Cabral fica na zona norte, junto ao terminal de ônibus que tem o nome do bairro. É área residencial de padrão médio e alto, com prédios e casas grandes. O comércio fica perto do terminal e da Avenida Paraná: restaurante, padaria, clínica, escola.",
      },
      {
        slug: "cachoeira",
        nome: "Cachoeira",
        perfil: "residencial",
        texto:
          "A Cachoeira fica no norte de Curitiba, na divisa com Almirante Tamandaré. É um bairro residencial de uns 11 mil moradores. O comércio é de vizinhança, com mercado, padaria, farmácia e negócio pequeno de família.",
      },
      {
        slug: "cajuru",
        nome: "Cajuru",
        perfil: "populoso",
        texto:
          "O Cajuru tem cerca de 90 mil moradores. É o terceiro bairro mais populoso de Curitiba e fica na zona leste, no caminho de Pinhais e São José dos Pinhais. A principal via comercial é a Avenida Presidente Affonso Camargo. O comércio de rua é popular e tem de tudo.",
      },
      {
        slug: "campina-do-siqueira",
        nome: "Campina do Siqueira",
        perfil: "residencial",
        texto:
          "A Campina do Siqueira fica a oeste do Bigorrilho e do Batel, onde começa a saída pela BR-277. O movimento se concentra no terminal de ônibus, com lanchonete, loja e serviço em volta. O resto é residencial, com prédios e casas de padrão médio.",
      },
      {
        slug: "campo-comprido",
        nome: "Campo Comprido",
        perfil: "populoso",
        texto:
          "O Campo Comprido foi um dos bairros que mais cresceram na zona oeste e já passa dos 30 mil moradores. Tem terminal de ônibus, uma grande universidade particular e muito condomínio novo. Estudante e morador sustentam restaurante, lanchonete, academia, mercado e serviço.",
      },
      {
        slug: "campo-de-santana",
        nome: "Campo de Santana",
        perfil: "populoso",
        texto:
          "O Campo de Santana fica no extremo sul de Curitiba. Era área rural e virou bairro de mais de 40 mil moradores em poucos anos, com a chegada dos grandes conjuntos habitacionais. O comércio veio atrás. Mercado, farmácia, loja e lanchonete foram abertos por moradores para atender uma população que antes precisava ir a outro bairro para tudo.",
      },
      {
        slug: "capao-da-imbuia",
        nome: "Capão da Imbuia",
        perfil: "residencial",
        texto:
          "O Capão da Imbuia fica na zona leste. É conhecido pelo Museu de História Natural e pelo terminal de ônibus. O comércio está principalmente em volta do terminal e nas avenidas que levam ao Centro: mercado, farmácia, lanchonete e serviço.",
      },
      {
        slug: "capao-raso",
        nome: "Capão Raso",
        perfil: "populoso",
        texto:
          "O Capão Raso fica na zona sul e tem um dos terminais de ônibus mais movimentados da cidade. Loja, concessionária, supermercado e alimentação estão na Avenida Winston Churchill e na Linha Verde. Milhares de pessoas passam pelo terminal todo dia, e é esse fluxo que sustenta o comércio rápido em volta.",
      },
      {
        slug: "cascatinha",
        nome: "Cascatinha",
        perfil: "alto-padrao",
        texto:
          "A Cascatinha é um dos menores bairros de Curitiba, com pouco mais de 2 mil moradores. Fica no caminho de Santa Felicidade e é feita de casas e condomínios de alto padrão. Tem pouco comércio, quase todo de restaurante e serviço para quem passa pela Avenida Manoel Ribas.",
      },
      {
        slug: "caximba",
        nome: "Caximba",
        perfil: "residencial",
        texto:
          "A Caximba é o ponto mais ao sul de Curitiba. Ficou conhecida por causa do antigo aterro sanitário da cidade, hoje desativado. O bairro tem pouco mais de 7 mil moradores e um comércio simples, de mercado pequeno, bar e serviço, tocado por quem mora ali.",
      },
      {
        slug: "centro",
        nome: "Centro",
        perfil: "central",
        texto:
          "Nenhum lugar de Curitiba tem tanta gente passando quanto o Centro. O calçadão da Rua XV, a Praça Tiradentes, a Rua 24 Horas e o Mercado Municipal juntam loja popular, lanchonete, banca e ambulante. Quem compra ali quase sempre está indo pegar o ônibus ou voltando do trabalho. Decide rápido e não espera.",
      },
      {
        slug: "centro-civico",
        nome: "Centro Cívico",
        perfil: "central",
        texto:
          "O Centro Cívico é onde ficam o governo do estado, a Assembleia, os tribunais e a Prefeitura. Tem também o Museu Oscar Niemeyer e o Shopping Mueller. O comércio vive de servidor público, advogado e visitante. Por isso o que funciona é restaurante de almoço, café, copiadora, estacionamento e serviço rápido.",
      },
      {
        slug: "cidade-industrial",
        nome: "Cidade Industrial",
        perfil: "industrial",
        texto:
          "A Cidade Industrial de Curitiba, a CIC, é o bairro com mais gente na cidade: passa de 170 mil moradores. As grandes fábricas são só uma parte. Em volta delas há dezenas de vilas residenciais, cada uma com seu comércio. Restaurante de almoço, lanchonete, mercado e oficina atendem tanto o trabalhador da indústria quanto a família que mora ali.",
      },
      {
        slug: "cristo-rei",
        nome: "Cristo Rei",
        perfil: "residencial",
        texto:
          "O Cristo Rei fica a leste do Centro e é quase todo de prédios residenciais. Há um grande hospital no bairro, e ele movimenta farmácia, lanchonete, restaurante e estacionamento. O resto é comércio de vizinhança, com padaria, mercado e salão.",
      },
      {
        slug: "fanny",
        nome: "Fanny",
        perfil: "residencial",
        texto:
          "O Fanny é um bairro pequeno da zona sul, perto da Linha Verde. É mais residencial do que comercial. Tem comércio de vizinhança e algumas empresas de serviço e pequenas indústrias perto da antiga rodovia.",
      },
      {
        slug: "fazendinha",
        nome: "Fazendinha",
        perfil: "residencial",
        texto:
          "A Fazendinha fica entre o Portão e a Cidade Industrial. O terminal de ônibus organiza o movimento do bairro. O comércio é popular e voltado ao morador, com supermercado, padaria, farmácia, loja de roupa e serviço automotivo.",
      },
      {
        slug: "ganchinho",
        nome: "Ganchinho",
        perfil: "populoso",
        texto:
          "O Ganchinho fica no extremo sul e cresceu nos últimos anos com loteamentos e conjuntos habitacionais novos. O comércio ainda está se formando. São mercados, lanchonetes, salões e negócios pequenos abertos por moradores, muitos deles tocando o primeiro negócio próprio.",
      },
      {
        slug: "guabirotuba",
        nome: "Guabirotuba",
        perfil: "residencial",
        texto:
          "O Guabirotuba fica entre o Jardim das Américas e o Prado Velho, na saída para o aeroporto. É residencial, de classe média. O comércio acompanha a Avenida Senador Salgado Filho, com mercado, padaria, oficina e restaurante.",
      },
      {
        slug: "guaira",
        nome: "Guaíra",
        perfil: "residencial",
        texto:
          "O Guaíra fica ao sul do Centro. A Avenida Presidente Kennedy atravessa o bairro e é nela que estão as lojas, as concessionárias, os restaurantes e os serviços. Com quase 15 mil moradores, tem também comércio de vizinhança nas ruas de dentro.",
      },
      {
        slug: "hauer",
        nome: "Hauer",
        perfil: "residencial",
        texto:
          "O Hauer é cortado pela Avenida Marechal Floriano Peixoto e tem terminal de ônibus próprio. Para o tamanho do bairro, o comércio de rua é forte. Loja, serviço automotivo e alimentação atendem também quem vem do Boqueirão e de outros bairros da zona sul.",
      },
      {
        slug: "hugo-lange",
        nome: "Hugo Lange",
        perfil: "alto-padrao",
        texto:
          "O Hugo Lange é pequeno e residencial, entre o Cabral e o Jardim Social. Tem pouco mais de 4 mil moradores, a maioria em casas e prédios de bom padrão. O comércio é enxuto: café, restaurante, clínica e serviço de vizinhança.",
      },
      {
        slug: "jardim-botanico",
        nome: "Jardim Botânico",
        perfil: "turistico",
        texto:
          "O bairro tem o nome do cartão-postal mais visitado de Curitiba, o Jardim Botânico da estufa de vidro. A Rodoferroviária também fica ali. Café, loja de lembrança, ambulante e motorista atendem turista o dia todo. E turista quase nunca tem dinheiro em espécie no bolso.",
      },
      {
        slug: "jardim-das-americas",
        nome: "Jardim das Américas",
        perfil: "residencial",
        texto:
          "O Jardim das Américas tem o Centro Politécnico da Universidade Federal do Paraná, e isso dá a cara do comércio. Lanchonete, restaurante por quilo, copiadora e república dividem espaço com um shopping de bairro e com o comércio de vizinhança.",
      },
      {
        slug: "jardim-social",
        nome: "Jardim Social",
        perfil: "alto-padrao",
        texto:
          "O Jardim Social é pequeno, de casas grandes e ruas arborizadas, entre o Bacacheri e o Hugo Lange. O comércio é discreto e feito para o morador. Padaria, clínica, escola e um ou outro restaurante.",
      },
      {
        slug: "juveve",
        nome: "Juvevê",
        perfil: "alto-padrao",
        texto:
          "O Juvevê é vizinho do Centro Cívico. É residencial, de padrão médio e alto, com muito prédio. Bares, restaurantes e cafés dividem as ruas com clínica, pet shop e mercado pequeno.",
      },
      {
        slug: "lamenha-pequena",
        nome: "Lamenha Pequena",
        perfil: "residencial",
        texto:
          "A Lamenha Pequena é um dos bairros com menos gente em Curitiba, pouco mais de mil moradores, na divisa com Almirante Tamandaré. O que predomina é chácara e área verde. Comércio quase não tem. Quem vende ali geralmente presta serviço ou é produtor que atende a domicílio.",
      },
      {
        slug: "lindoia",
        nome: "Lindóia",
        perfil: "residencial",
        texto:
          "O Lindóia é um bairro pequeno da zona sul, ao lado da Linha Verde. É residencial. O comércio é de vizinhança, com mercado, padaria, oficina e loja de material de construção.",
      },
      {
        slug: "merces",
        nome: "Mercês",
        perfil: "residencial",
        texto:
          "As Mercês ficam a noroeste do Centro e têm a Torre Panorâmica, de onde dá para ver a cidade inteira. O bairro é residencial, de classe média. No trecho em que a Avenida Manoel Ribas começa ficam as padarias, os restaurantes, as farmácias e os serviços.",
      },
      {
        slug: "mossungue",
        nome: "Mossunguê",
        perfil: "alto-padrao",
        texto:
          "O Mossunguê é o bairro do Ecoville, a região de prédios altos e condomínios caros ao lado do Parque Barigui. O comércio é feito para morador de renda alta: um grande shopping, restaurantes, academias e serviços. Ali o cartão de crédito é o jeito normal de pagar.",
      },
      {
        slug: "novo-mundo",
        nome: "Novo Mundo",
        perfil: "populoso",
        texto:
          "O Novo Mundo tem mais de 40 mil moradores e fica na zona sul, na continuação do eixo da Avenida República Argentina. O comércio de rua é intenso. Supermercado, loja de roupa e calçado, farmácia, banco e muita alimentação.",
      },
      {
        slug: "orleans",
        nome: "Orleans",
        perfil: "residencial",
        texto:
          "O Orleans fica na zona oeste, na saída de Curitiba pela BR-277, rumo a Campo Largo. O perfil é residencial, com condomínios de casas. O comércio é de beira de avenida: restaurante, mercado, floricultura e serviço.",
      },
      {
        slug: "parolin",
        nome: "Parolin",
        perfil: "residencial",
        texto:
          "O Parolin fica ao sul do Centro, entre o Rebouças e o Guaíra. É um bairro de contrastes. Tem área residencial consolidada, tem comunidade popular e tem muita oficina, depósito e negócio pequeno de serviço.",
      },
      {
        slug: "pilarzinho",
        nome: "Pilarzinho",
        perfil: "residencial",
        texto:
          "O Pilarzinho é um bairro grande da zona norte, de ruas íngremes e muita área verde. É onde fica a Universidade Livre do Meio Ambiente. O comércio se espalha pelas vias principais, com mercado, padaria, farmácia e restaurante de bairro.",
      },
      {
        slug: "pinheirinho",
        nome: "Pinheirinho",
        perfil: "populoso",
        texto:
          "O Pinheirinho fica na zona sul e tem um dos maiores terminais de ônibus de Curitiba. Por ele passa morador de vários bairros e de cidades vizinhas. Loja, atacado, supermercado e comida rápida ficam na Avenida Winston Churchill e na Linha Verde.",
      },
      {
        slug: "portao",
        nome: "Portão",
        perfil: "populoso",
        texto:
          "O Portão é um dos bairros comerciais mais fortes fora do Centro. A Avenida República Argentina, o terminal de ônibus e dois shoppings, o Palladium e o Ventura, puxam gente da zona sul inteira. Tem de tudo ali: loja de rua, restaurante, clínica, academia, serviço.",
      },
      {
        slug: "prado-velho",
        nome: "Prado Velho",
        perfil: "central",
        texto:
          "O Prado Velho é o bairro do campus de uma das maiores universidades particulares do Paraná. Tem menos de 5 mil moradores, mas milhares de estudantes e funcionários passam por ali todo dia. É esse público que sustenta lanchonete, restaurante por quilo, copiadora, bar e estacionamento.",
      },
      {
        slug: "reboucas",
        nome: "Rebouças",
        perfil: "central",
        texto:
          "O Rebouças era área industrial e ferroviária e mudou bastante. Hoje mistura prédio novo, universidade, o Shopping Estação e galpões que viraram bar e espaço de evento. O público é de estudante, de quem trabalha na região e de quem sai à noite.",
      },
      {
        slug: "riviera",
        nome: "Riviera",
        perfil: "residencial",
        texto:
          "A Riviera é o bairro com menos moradores em Curitiba, pouco mais de 400, na zona oeste. É área de chácara e mata, praticamente sem comércio. Quem trabalha por conta própria ali costuma atender cliente em outros bairros.",
      },
      {
        slug: "santa-candida",
        nome: "Santa Cândida",
        perfil: "populoso",
        texto:
          "A Santa Cândida fica no extremo norte de Curitiba. O terminal dali é o fim do eixo norte do ônibus expresso. Com cerca de 40 mil moradores, o bairro tem comércio popular em volta do terminal e nas avenidas de acesso.",
      },
      {
        slug: "santa-felicidade",
        nome: "Santa Felicidade",
        perfil: "gastronomico",
        texto:
          "Santa Felicidade é o bairro italiano de Curitiba e o maior polo gastronômico da cidade. Os restaurantes grandes da Avenida Manoel Ribas recebem excursão, casamento e almoço de domingo com centenas de pessoas na mesma hora. Em volta deles cresceram vinícolas e lojas de móveis, de vime e de artesanato.",
      },
      {
        slug: "santa-quiteria",
        nome: "Santa Quitéria",
        perfil: "residencial",
        texto:
          "A Santa Quitéria fica na zona oeste, entre o Portão e o Campo Comprido. É residencial, de classe média. O comércio acompanha a Avenida Presidente Arthur Bernardes, com mercado, padaria, farmácia e restaurante pequeno.",
      },
      {
        slug: "santo-inacio",
        nome: "Santo Inácio",
        perfil: "residencial",
        texto:
          "O Santo Inácio fica na zona oeste, ao lado do Parque Barigui e na beira da BR-277. É residencial, de padrão médio e alto. O comércio fica perto da rodovia: restaurante, mercado, loja e serviço automotivo.",
      },
      {
        slug: "sao-braz",
        nome: "São Braz",
        perfil: "residencial",
        texto:
          "O São Braz fica na zona oeste, vizinho de Santa Felicidade, e tem mais de 23 mil moradores. O comércio se espalha pelas ruas principais do bairro, com supermercado, padaria, farmácia, loja e restaurante. Atende principalmente quem mora ali.",
      },
      {
        slug: "sao-francisco",
        nome: "São Francisco",
        perfil: "turistico",
        texto:
          "O São Francisco é o centro histórico de Curitiba. No Largo da Ordem e nas ruas de paralelepípedo em volta ficam bares, restaurantes, antiquários e casas de cultura. Aos domingos tem a feira de artesanato, com centenas de expositores e milhares de visitantes. É gente que compra por impulso e paga no cartão ou no Pix.",
      },
      {
        slug: "sao-joao",
        nome: "São João",
        perfil: "residencial",
        texto:
          "O São João é pequeno e arborizado, entre a Cascatinha e Santa Felicidade. Tem pouco mais de 3 mil moradores, em casas e condomínios. O comércio é reduzido, com alguns restaurantes, mercados e serviços.",
      },
      {
        slug: "sao-lourenco",
        nome: "São Lourenço",
        perfil: "residencial",
        texto:
          "O São Lourenço fica na zona norte. A referência do bairro é o parque de mesmo nome, com o lago e o Centro de Criatividade. É residencial, de padrão médio e alto. O comércio é pouco e de vizinhança: padaria, mercado, restaurante, serviço.",
      },
      {
        slug: "sao-miguel",
        nome: "São Miguel",
        perfil: "residencial",
        texto:
          "O São Miguel fica no sudoeste de Curitiba, ao lado da Cidade Industrial. Tem perto de 7 mil moradores e ainda guarda áreas pouco ocupadas. O comércio é local e simples, com mercado, bar, material de construção e oficina.",
      },
      {
        slug: "seminario",
        nome: "Seminário",
        perfil: "alto-padrao",
        texto:
          "O Seminário é vizinho do Batel. É residencial, de padrão médio e alto. A Avenida Nossa Senhora Aparecida tem os restaurantes, os cafés, as clínicas e as lojas, e boa parte de quem compra ali vem dos bairros em volta.",
      },
      {
        slug: "sitio-cercado",
        nome: "Sítio Cercado",
        perfil: "populoso",
        texto:
          "O Sítio Cercado é o segundo bairro mais populoso de Curitiba, com mais de 100 mil moradores, na zona sul. O comércio de rua é dos mais fortes da periferia. Na Rua Izaac Ferreira da Cruz e nas ruas próximas há loja, supermercado, banco e feira. Quem mora ali resolve a vida sem ir ao Centro.",
      },
      {
        slug: "taboao",
        nome: "Taboão",
        perfil: "residencial",
        texto:
          "O Taboão é um bairro pequeno da zona norte, vizinho do Abranches e do Pilarzinho, com cerca de 3.500 moradores. É residencial e tem pouca loja. O comércio para em mercado, padaria e prestador de serviço do próprio bairro.",
      },
      {
        slug: "taruma",
        nome: "Tarumã",
        perfil: "residencial",
        texto:
          "O Tarumã fica na zona leste e é conhecido pelo hipódromo do Jockey Club e pelo Colégio Militar. A Avenida Victor Ferreira do Amaral, caminho para Pinhais, tem lojas, concessionárias e restaurantes. Evento no Jockey ou no ginásio do bairro traz um movimento extra, mas só naquele dia.",
      },
      {
        slug: "tatuquara",
        nome: "Tatuquara",
        perfil: "populoso",
        texto:
          "O Tatuquara fica no extremo sul de Curitiba e foi um dos bairros que mais cresceram nas últimas décadas. Já passa de 55 mil moradores. O comércio é local e popular. Mercado, açougue, loja de roupa, material de construção e muito negócio pequeno de família.",
      },
      {
        slug: "tingui",
        nome: "Tingui",
        perfil: "residencial",
        texto:
          "O Tingui é um bairro residencial da zona norte, vizinho do Bacacheri e da Santa Cândida. O comércio é de vizinhança e atende quem mora ali, com mercado, padaria, farmácia e serviço.",
      },
      {
        slug: "uberaba",
        nome: "Uberaba",
        perfil: "populoso",
        texto:
          "O Uberaba tem mais de 70 mil moradores e é um dos maiores bairros da cidade. Fica na zona leste, cortado pela Avenida Comendador Franco, a Avenida das Torres, que leva ao aeroporto. O comércio se divide em dois: lojas maiores na avenida e comércio popular nas ruas de dentro.",
      },
      {
        slug: "umbara",
        nome: "Umbará",
        perfil: "residencial",
        texto:
          "O Umbará fica no sul de Curitiba e ainda tem área rural e chácara ao lado de loteamento recente. É um bairro com tradição nas olarias. O comércio é espalhado e voltado ao morador, com mercado, material de construção e oficina.",
      },
      {
        slug: "vila-izabel",
        nome: "Vila Izabel",
        perfil: "residencial",
        texto:
          "A Vila Izabel fica entre o Água Verde, o Portão e o Batel. É residencial, de classe média, com prédios e casas. O comércio é de vizinhança: padaria, mercado, farmácia, salão e restaurante.",
      },
      {
        slug: "vista-alegre",
        nome: "Vista Alegre",
        perfil: "residencial",
        texto:
          "O Vista Alegre fica a noroeste do Centro e tem o Bosque Alemão, um dos parques que o turista visita. O bairro é residencial e cheio de subida e descida. O comércio fica nas vias que ligam às Mercês e ao Pilarzinho.",
      },
      {
        slug: "xaxim",
        nome: "Xaxim",
        perfil: "populoso",
        texto:
          "O Xaxim é um dos maiores bairros da zona sul, com quase 60 mil moradores. O principal corredor comercial é a Rua Francisco Derosso. Ali ficam lojas de roupa e calçado, supermercados, bancos, clínicas e muita alimentação. É comércio de rua forte, que atende também os bairros vizinhos.",
      },
    ],
  },
]
