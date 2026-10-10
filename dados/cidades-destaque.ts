// Texto escrito à mão para as 62 maiores cidades: como o comércio local se organiza.
// Só entram aqui informações conhecidas e estáveis de cada cidade.
export const DESTAQUES: Record<string, string> = {
  curitiba:
    "Curitiba não tem um centro comercial só. Tem vários, e cada um vende de um jeito. No calçadão da Rua XV e no Mercado Municipal o varejo é popular e o cliente está com pressa. No Batel a conta é mais alta e quase ninguém paga em dinheiro. Já no Portão, no Boqueirão e no Sítio Cercado o comércio de rua atende quem nem pensa em ir ao Centro. E tem o domingo no Largo da Ordem, com centenas de artesãos e feirantes vendendo em pé, o tipo de venda em que maquininha portátil faz diferença.",
  londrina:
    "Londrina é a segunda maior cidade do Paraná e funciona como capital do Norte do estado. O calçadão da Avenida Paraná é onde está o comércio popular. A Gleba Palhano fica com os restaurantes e as lojas mais caras. O que mantém a cidade girando o ano inteiro, porém, são a UEL e os hospitais: estudante e paciente vêm de toda a região, e com eles vêm bar cheio, lanchonete, república e muito prestador de serviço.",
  maringa:
    "Maringá tem uma coisa que pouca cidade tem: atacado de confecção que atrai lojista de outros estados, em excursão de compras. Quem vende assim sabe que parcelar no cartão para o lojista faz parte da negociação, não é favor. Fora isso, o varejo de rua está na Avenida Brasil, que corta o Centro, e a UEM movimenta o entorno da Zona 7.",
  "ponta-grossa":
    "Ponta Grossa é o maior entroncamento rodoviário e ferroviário do Paraná, e a cidade cresceu em volta disso. O distrito industrial é forte, e o movimento de caminhoneiros e transportadoras é constante. No Centro, o varejo tradicional fica no calçadão da Rua Coronel Cláudio. A UEPG segura o comércio do entorno durante as aulas. Nas férias, quem vende ali sente.",
  cascavel:
    "Cascavel é a capital do Oeste. A Avenida Brasil atravessa a cidade inteira e tem de tudo: loja, banco, restaurante. Mas boa parte de quem compra ali nem mora em Cascavel. Vem de dezenas de municípios vizinhos atrás de clínica, hospital e faculdade. E todo começo de ano tem o Show Rural Coopavel, que traz produtor do país inteiro e deixa bar, hotel e prestador de serviço sem folga.",
  "sao-jose-dos-pinhais":
    "São José dos Pinhais tem o Aeroporto Afonso Pena e as montadoras de veículos da região metropolitana. Por isso a indústria pesa tanto na economia da cidade. O comércio se divide em dois. Um é o do Centro, em volta da Rua XV de Novembro. O outro fica nos bairros grandes à beira das rodovias, onde mercado, oficina e lanchonete vivem do trabalhador das fábricas.",
  "foz-do-iguacu":
    "Em Foz do Iguaçu, o turista manda. As Cataratas enchem hotel, restaurante e van o ano inteiro, e a fronteira com Paraguai e Argentina faz o resto. A fatia enorme da indústria no PIB tem uma explicação só: Itaipu. No comércio do dia a dia, a conta é simples. Turista não anda com dinheiro, então quem não aceita cartão ou Pix perde a venda para o concorrente do lado.",
  colombo:
    "Colombo é a terceira cidade mais populosa da Grande Curitiba, e muita gente dali trabalha na capital. O comércio forte não fica na sede histórica, fica em bairros como o Alto Maracanã. A zona rural é outro mundo: produz hortaliça e mantém o Circuito Italiano de Turismo Rural, com vinícolas e restaurantes coloniais que lotam no fim de semana.",
  guarapuava:
    "Guarapuava vive do agronegócio do Centro-Sul. Grãos, cevada e a maltaria do distrito de Entre Rios ditam o ritmo do dinheiro na cidade. O comércio central está na Rua XV de Novembro, e a Unicentro garante um público universitário que não some. Tem ainda o frio: o inverno de Guarapuava decide o calendário de quem vende roupa e de quem tem restaurante.",
  araucaria:
    "Araucária tem o maior PIB por habitante entre as cidades grandes do Paraná, e o motivo tem nome: a refinaria Presidente Getúlio Vargas, com o polo industrial em volta. É muito emprego formal e salário em data certa. Quem ganha com isso é o comércio de bairro, o restaurante por quilo e todo serviço que atende quem sai do turno.",
  toledo:
    "Toledo é agroindústria. A criação de suínos e aves e os frigoríficos empregam boa parte da cidade. O evento mais famoso é a Festa Nacional do Porco no Rolete, cheia de barraca e expositor. No resto do ano, o comércio do Centro e dos bairros atende dois públicos ao mesmo tempo: o funcionário da indústria e o produtor rural que vem da região.",
  "fazenda-rio-grande":
    "Fazenda Rio Grande foi uma das cidades que mais cresceram na Grande Curitiba nas últimas décadas. Muita gente trabalha na capital e só volta à noite. Então o comércio tem horário próprio: mercado, farmácia, salão, oficina e lanchonete enchem no fim do dia e no sábado. Durante a tarde de um dia de semana, o movimento é outro.",
  paranagua:
    "Paranaguá gira em torno do porto, o maior do Paraná. Caminhoneiro, despachante, trabalhador portuário e empresa de logística sustentam restaurante, posto, oficina e hotel. O turismo entra por outra porta, a do Centro Histórico e do embarque para a Ilha do Mel, e aperta mesmo no verão e nos feriados.",
  "campo-largo":
    "Campo Largo é a capital da louça. As fábricas de porcelana e cerâmica criaram um comércio de lojas de fábrica que traz comprador de Curitiba e de mais longe. A indústria ainda é a maior fatia da economia. O comércio do Centro, por sua vez, atende o trabalhador local e quem está de passagem pela BR-277.",
  apucarana:
    "Apucarana é a capital nacional do boné. São centenas de confecções, bordadeiras e estamparias, muitas delas pequenas e de família, vendendo para o Brasil inteiro. Nesse tipo de negócio o pedido se fecha com lojista e representante, e receber parcelado no cartão ou por Pix é rotina. O comércio do Centro ainda atende as cidades do Vale do Ivaí.",
  pinhais:
    "Pinhais é o menor município do Paraná em área e um dos mais apertados: quase tudo é cidade, colada em Curitiba. Sobra empresa de serviço e comércio em pouco espaço. O resultado é concorrência de porta com porta entre loja, restaurante e prestador, e o cliente escolhe quem dá menos trabalho na hora de pagar.",
  "almirante-tamandare":
    "Almirante Tamandaré fica ao norte de Curitiba e tem tradição na extração de calcário e na produção de cal. Boa parte dos moradores trabalha na capital. O comércio é de bairro, com mercado, material de construção e farmácia, e o horário de pico é o fim da tarde, quando o pessoal volta do serviço.",
  arapongas:
    "Arapongas é o principal polo moveleiro do Paraná. As fábricas de móveis e os fornecedores delas empregam boa parte da cidade, e as feiras do setor trazem lojista do país todo. Em volta disso cresceu um comércio de loja de fábrica, estofado e decoração. Móvel é compra cara, então venda parcelada no cartão ali é regra, não exceção.",
  piraquara:
    "Piraquara guarda os mananciais que abastecem Curitiba. Por causa disso, grande parte do município é área de proteção e quase não tem indústria. A administração pública acaba pesando mais na economia do que em outras cidades do mesmo tamanho. O comércio é de bairro e atende um morador que, na maioria, trabalha na capital ou em Pinhais.",
  sarandi:
    "Sarandi é quase uma continuação de Maringá. As duas são ligadas por avenidas, e muita gente mora em uma e trabalha na outra. O comércio local é feito de negócio pequeno de bairro, como mercado, salão, oficina e loja de roupa. Todos disputam cliente com o varejo maior da vizinha, que fica a poucos minutos.",
  umuarama:
    "Umuarama é a capital do Noroeste do Paraná. Tem tradição na pecuária e um setor de serviços forte. A Unipar e as clínicas da cidade trazem estudante e paciente de toda a região, e isso mantém aluguel, alimentação e comércio aquecidos. As lojas do Centro vendem também para quem vem dos municípios menores em volta.",
  cambe:
    "Cambé é vizinha de Londrina, e as duas formam uma mancha urbana só. A diferença é que em Cambé a indústria pesa mais, com os parques industriais ao longo da BR-369. O comércio é voltado ao morador: mercado, farmácia, material de construção e serviço de bairro. Para compra maior, muita gente ainda vai a Londrina.",
  "campo-mourao":
    "Campo Mourão é a casa da Coamo, uma das maiores cooperativas agrícolas do país, e isso diz muito sobre a cidade. O dinheiro do campo circula por ali, mesmo quando o PIB mostra mais serviço do que lavoura. Como polo do Centro-Oeste do estado, recebe gente das cidades em volta para comprar, estudar e se tratar. Quem tem comércio sente a safra e sente o calendário das faculdades.",
  "francisco-beltrao":
    "Francisco Beltrão é o centro do Sudoeste. Os frigoríficos de aves empregam muita gente, e a Unioeste traz estudante de toda a região. O comércio da cidade vende para bem mais do que os seus moradores: quem vive nos municípios pequenos em volta desce para Beltrão quando precisa de loja grande, médico ou banco.",
  paranavai:
    "Paranavaí é referência do Noroeste. A região planta muita mandioca e laranja, e as fecularias e a indústria de suco fazem o dinheiro girar. A pecuária completa o quadro. O comércio do Centro atende também os municípios vizinhos, que são muitos e pequenos.",
  "pato-branco":
    "Pato Branco fugiu do roteiro comum do interior. Além do agro, a cidade virou polo de tecnologia e de saúde no Sudoeste, puxada pela UTFPR e por empresas de software. Isso dá um público de renda mais alta e mais acostumado a pagar tudo no cartão e no celular.",
  cianorte:
    "Cianorte é a capital do vestuário. As confecções e os shoppings de atacado recebem lojistas em excursão, vindos de vários estados. É venda grande, fechada na hora, e parcelar no cartão para o lojista faz parte do jogo. Fora da moda, o comércio de rua atende a cidade e a região.",
  "telemaco-borba":
    "Em Telêmaco Borba, quase tudo gira em torno do papel e da celulose. A fábrica e as florestas plantadas empregam direto e indireto boa parte da cidade, e é por isso que a indústria passa da metade do PIB. Para o comércio, significa salário formal em dia certo e movimento que acompanha o pagamento.",
  castro:
    "Castro é terra de leite. A bacia leiteira da região e a cooperativa de origem holandesa da colônia Castrolanda fazem da cidade uma referência nacional no setor. O comércio do Centro atende o produtor, o funcionário das cooperativas e quem mora na cidade. Ponta Grossa, ali perto, puxa as compras maiores.",
  rolandia:
    "Rolândia fica colada em Londrina e tem um peso industrial que a vizinha não tem, principalmente em alimentos. A cidade guarda a herança da colonização alemã. O comércio é voltado ao morador e ao trabalhador das fábricas, e disputa cliente com o varejo de Londrina, que fica a poucos minutos.",
  irati:
    "Irati é o polo do Centro-Sul na região dos pinheirais. A agricultura familiar é forte, e a colonização polonesa e ucraniana marca a cidade. A Unicentro mantém um público de estudantes. O comércio serve a cidade e os municípios pequenos em volta, com movimento ligado ao calendário da lavoura.",
  "marechal-candido-rondon":
    "Marechal Cândido Rondon tem cara e sotaque de colonização alemã, e a Oktoberfest da cidade é das mais conhecidas do Paraná. A economia mistura cooperativa, criação de suínos, leite e indústria. A Unioeste traz estudante. É um comércio de cidade organizada, em que a festa e a safra mexem com o caixa.",
  "uniao-da-vitoria":
    "União da Vitória fica na divisa com Santa Catarina e forma uma cidade só com Porto União, do outro lado da linha. Muita gente mora em um estado e compra no outro. A madeira e as esquadrias são a tradição industrial. Para quem vende, o cliente catarinense é tão comum quanto o paranaense.",
  medianeira:
    "Medianeira fica na BR-277, entre Foz do Iguaçu e Cascavel, e tem um peso que não combina com o tamanho. É sede de cooperativas grandes de alimentos e tem campus da UTFPR. O trabalhador da indústria e o estudante sustentam mercado, restaurante, aluguel e serviço. A cidade ainda atende os municípios menores do entorno.",
  ibipora:
    "Ibiporã é vizinha de Londrina, na BR-369. Boa parte dos moradores trabalha ou estuda na cidade grande ao lado. O comércio local vive do dia a dia: mercado, farmácia, padaria, oficina. Para a compra maior, o caminho é Londrina, e o lojista de Ibiporã sabe que precisa ganhar na praticidade.",
  prudentopolis:
    "Prudentópolis tem a maior colônia ucraniana do Brasil, e isso aparece nas igrejas, na comida e nas festas. É também a terra das cachoeiras gigantes, que trazem turista o ano todo. A economia é do campo, com muito feijão. O município é enorme e espalhado, então muita venda acontece longe do Centro.",
  palmas:
    "Palmas é uma das cidades mais frias do Paraná, no alto dos campos do Sul. Vive de pecuária, de madeira e compensados e tem um instituto federal que traz estudante. O inverno manda no comércio de roupa. Pato Branco, a maior cidade da região, fica perto e puxa parte das compras.",
  "campina-grande-do-sul":
    "Campina Grande do Sul fica na Grande Curitiba, cortada pela BR-116. A cidade tem um hospital de porte regional que atende pacientes de vários municípios, e é isso que explica o peso dos serviços na economia. Farmácia, restaurante, pousada e estacionamento vivem desse movimento. O resto é comércio de bairro.",
  paicandu:
    "Paiçandu é vizinha de Maringá, e muita gente dali trabalha na cidade grande. O comércio é de bairro e tem horário de cidade-dormitório: enche no fim da tarde e no sábado. Mercado, salão, oficina e lanchonete são o grosso do movimento.",
  "cornelio-procopio":
    "Cornélio Procópio é uma das cidades de referência do Norte Pioneiro. Tem universidade federal e estadual, o que garante estudante o ano inteiro, e um comércio que atende os municípios pequenos da região. O campo ainda pesa, mas quem movimenta a cidade no dia a dia é o serviço.",
  lapa:
    "A Lapa é cidade histórica. O centro antigo é tombado e a cidade guarda a memória do Cerco da Lapa, o que traz visitante de Curitiba nos fins de semana. Fora do turismo, a economia é de indústria e agricultura. Restaurante, café e loja do Centro Histórico vendem para um público que paga no cartão.",
  "dois-vizinhos":
    "Dois Vizinhos é conhecida como a capital nacional do frango. A avicultura e os frigoríficos dão emprego a boa parte da cidade, e a UTFPR traz estudante. O comércio vive do salário da indústria e do produtor integrado, que recebe por lote entregue.",
  "santo-antonio-da-platina":
    "Santo Antônio da Platina é o polo comercial do Norte Pioneiro. Fica na BR-153 e atende quase vinte municípios pequenos em volta. É para lá que a região vai quando precisa de loja maior, banco ou hospital. Por isso os serviços passam da metade da economia.",
  "sao-mateus-do-sul":
    "São Mateus do Sul tem duas marcas: o xisto, explorado ali há décadas, e a erva-mate, que a região produz como poucas. A indústria do xisto paga salário formal, e a erva-mate espalha renda pelo interior do município. O comércio atende os dois públicos.",
  guaratuba:
    "Guaratuba vive em duas velocidades. No verão e nos feriados, a cidade enche de veranista e o comércio trabalha no limite, com quiosque, restaurante, mercado e aluguel de temporada. No resto do ano, o movimento é o do morador. Quem vende para turista sabe: ele quer pagar no cartão ou no Pix, e rápido.",
  marialva:
    "Marialva é a capital da uva fina. Os parreirais e a festa da uva são a identidade da cidade, que fica ao lado de Maringá. A indústria também pesa. Muito produtor vende direto ao consumidor, na propriedade ou na beira da estrada, e é aí que uma maquininha portátil se paga.",
  jacarezinho:
    "Jacarezinho é uma das cidades mais antigas do Norte Pioneiro, na divisa com São Paulo. Tem tradição universitária e na cana-de-açúcar. Os estudantes mantêm república, bar e lanchonete, e o comércio do Centro atende também as cidades vizinhas.",
  matinhos:
    "Matinhos é praia. A cidade, que inclui o balneário de Caiobá, multiplica de tamanho na temporada, e o comércio fatura em dois meses boa parte do ano. Fora do verão, o campus da UFPR no litoral segura algum movimento. Para ambulante, quiosque e pousada, aceitar cartão e Pix deixou de ser opção faz tempo.",
  "rio-branco-do-sul":
    "Rio Branco do Sul fica ao norte de Curitiba e vive do cimento e do calcário. A fábrica e a mineração respondem pela maior parte da economia. Sobra pouco espaço para serviço. O comércio é pequeno, de bairro, e atende o trabalhador da indústria.",
  "assis-chateaubriand":
    "Assis Chateaubriand é cidade de grão. Soja e milho ocupam quase tudo, e a agropecuária divide com os serviços o topo da economia. O comércio vende para o produtor e para quem trabalha no campo. Toledo, a maior cidade da região, fica perto.",
  mandaguari:
    "Mandaguari nasceu do café e continua ligada ao campo: é sede de uma cooperativa agrícola importante. A indústria cresceu e hoje pesa tanto quanto os serviços. Fica na estrada entre Maringá e Apucarana, e o comércio atende o morador e quem passa.",
  jaguariaiva:
    "Jaguariaíva é cidade de floresta plantada e de papel. A indústria madeireira e papeleira responde pela maior fatia da economia. É emprego formal, com salário em data certa, e o comércio do Centro acompanha esse ritmo.",
  palotina:
    "Palotina é sede de uma das maiores cooperativas agroindustriais do Paraná e tem um setor da UFPR. A cidade é pequena para o tanto que produz: o PIB por habitante fica bem acima da média do estado. Trabalhador da agroindústria e estudante sustentam o comércio.",
  palmeira:
    "Palmeira fica perto de Ponta Grossa e tem na agricultura a base da economia. A Colônia Witmarsum, de origem menonita, é conhecida pelo leite, pelos queijos e pelos cafés coloniais, e recebe visitante no fim de semana. Esse turismo rural vende bastante no cartão.",
  pitanga:
    "Pitanga fica no centro geográfico do Paraná. É cidade de agricultura, longe dos grandes polos, e por isso funciona como referência para os municípios pequenos em volta. O comércio do Centro vende para a cidade e para o interior.",
  ivaipora:
    "Ivaiporã é a cidade de referência do Vale do Ivaí. Para o tamanho que tem, o comércio é grande, porque atende muitos municípios pequenos da região. Loja, clínica, banco e escola puxam os serviços para perto de 60% da economia.",
  "laranjeiras-do-sul":
    "Laranjeiras do Sul fica na BR-277, no caminho entre Guarapuava e Cascavel. É a cidade de referência de uma região de municípios pequenos e de agricultura familiar. Tem campus de universidade federal, que trouxe estudante e aqueceu aluguel e alimentação.",
  guaira:
    "Guaíra é cidade de fronteira: do outro lado do rio fica Salto del Guairá, no Paraguai, e ao lado, o Mato Grosso do Sul. Muita gente passa por ali por causa das compras no país vizinho. Hotel, restaurante, posto e loja vivem desse fluxo, além do morador e do produtor rural.",
  mandaguacu:
    "Mandaguaçu é vizinha de Maringá. Parte dos moradores trabalha na cidade grande, e o campo ainda pesa na economia local. O comércio é o de cidade pequena perto de centro grande: resolve o dia a dia e perde a compra maior para o vizinho.",
  "rio-negro":
    "Rio Negro fica na divisa com Santa Catarina e é cidade gêmea de Mafra, do outro lado do rio. As duas funcionam como uma só para quem mora ali. A indústria tem peso forte na economia. O lojista atende cliente dos dois estados sem nem perceber a diferença.",
  bandeirantes:
    "Bandeirantes é cidade agrícola do Norte Pioneiro, com tradição na cana-de-açúcar e um campus universitário voltado às ciências agrárias. O comércio vive do campo e do estudante, e atende também os municípios pequenos do entorno.",
  itaperucu:
    "Itaperuçu fica ao norte de Curitiba, numa região de mineração de calcário. Muita gente trabalha na capital ou nas cidades vizinhas. O comércio é pequeno e de bairro, e a administração pública pesa na economia mais do que em cidades maiores.",
}
