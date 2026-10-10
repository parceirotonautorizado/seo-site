// Texto escrito à mão para as maiores cidades: como o comércio local se organiza.
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
}
