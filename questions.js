const QUESTIONS = [
  {
    "topic": "Fundamentos",
    "prompt": "Durante uma edição de vídeo, onde ficam temporariamente os dados e as instruções em uso?",
    "options": [
      "Na memória RAM",
      "Somente no pendrive",
      "Na fonte de alimentação",
      "Apenas no monitor"
    ],
    "answer": 0,
    "explanation": "A RAM é a memória de trabalho que mantém dados e instruções disponíveis durante o uso."
  },
  {
    "topic": "Fundamentos",
    "prompt": "Após uma queda de energia, um texto não salvo foi perdido. Que característica da RAM explica isso?",
    "options": [
      "Volatilidade",
      "Armazenamento permanente",
      "Correção ECC",
      "Acesso sequencial obrigatório"
    ],
    "answer": 0,
    "explanation": "A RAM perde seu conteúdo sem alimentação elétrica. Arquivos salvos permanecem no armazenamento."
  },
  {
    "topic": "Fundamentos",
    "prompt": "Ao ligar o computador do laboratório, de onde o sistema operacional é carregado para a RAM?",
    "options": [
      "Do armazenamento, como SSD ou HD",
      "Do teclado",
      "Da memória do monitor",
      "Da fonte"
    ],
    "answer": 0,
    "explanation": "Durante o boot, instruções e dados do sistema são carregados do armazenamento para a memória principal."
  },
  {
    "topic": "Fundamentos",
    "prompt": "Uma turma representa o caminho usual dos dados para execução. Qual sequência está adequada?",
    "options": [
      "Armazenamento → RAM → cache → processador",
      "RAM → SSD → tomada → CPU",
      "Monitor → HD → teclado → CPU",
      "SSD → impressora → RAM → CPU"
    ],
    "answer": 0,
    "explanation": "A RAM e a cache deixam dados e instruções disponíveis para a CPU executar."
  },
  {
    "topic": "Fundamentos",
    "prompt": "Um computador fica lento com muitas abas e usa intensamente o arquivo de troca. Qual upgrade tende a ajudar?",
    "options": [
      "Aumentar a RAM compatível",
      "Trocar apenas o cabo do monitor",
      "Diminuir a capacidade da RAM",
      "Adicionar uma unidade de DVD"
    ],
    "answer": 0,
    "explanation": "Mais RAM pode reduzir a necessidade de transferir páginas para o armazenamento, diminuindo esse gargalo."
  },
  {
    "topic": "Fundamentos",
    "prompt": "Uma estação já tem RAM sobrando, mas a CPU está no limite. Dobrar a RAM garante maior velocidade de cálculo?",
    "options": [
      "Não; depende do gargalo existente",
      "Sim; duplica os núcleos",
      "Sim; dobra o clock da CPU",
      "Sim; elimina qualquer lentidão"
    ],
    "answer": 0,
    "explanation": "Aumentar a capacidade da RAM não aumenta o poder de cálculo do processador."
  },
  {
    "topic": "Fundamentos",
    "prompt": "Ao faltar RAM, o sistema move páginas pouco usadas para um arquivo no SSD. Qual recurso está sendo utilizado?",
    "options": [
      "Arquivo de troca, como apoio à memória virtual",
      "Dual channel",
      "ECC",
      "Registrador RDIMM"
    ],
    "answer": 0,
    "explanation": "O sistema operacional gerencia a movimentação de páginas entre a RAM e o arquivo de troca."
  },
  {
    "topic": "Fundamentos",
    "prompt": "Por que alternar entre programas pode ficar lento quando há muita troca de páginas?",
    "options": [
      "O armazenamento é mais lento que a RAM",
      "O SSD passa a operar como cache da CPU",
      "A RAM deixa de ser volátil",
      "O monitor precisa armazenar as páginas"
    ],
    "answer": 0,
    "explanation": "Acessar dados no SSD ou HD custa mais tempo que acessá-los na RAM."
  },
  {
    "topic": "Fundamentos",
    "prompt": "Ao comparar componentes, qual ordem geral de velocidade corresponde ao material?",
    "options": [
      "Cache > RAM > SSD > HD",
      "HD > SSD > RAM > cache",
      "RAM > cache > HD > SSD",
      "SSD > HD > cache > RAM"
    ],
    "answer": 0,
    "explanation": "A hierarquia aproxima os dados mais usados da CPU usando memórias mais rápidas."
  },
  {
    "topic": "Fundamentos",
    "prompt": "Um aluno chama a pequena placa com vários chips de “pente”. Qual termo deve usar no relatório?",
    "options": [
      "Módulo de memória",
      "Soquete do processador",
      "Canal de vídeo",
      "Arquivo de troca"
    ],
    "answer": 0,
    "explanation": "O módulo é a placa que reúne chips de memória; o soquete é o encaixe que o recebe."
  },
  {
    "topic": "Módulos",
    "prompt": "Uma equipe monta um desktop com slots tradicionais de RAM. Qual formato é mais comum nesse cenário?",
    "options": [
      "DIMM",
      "LPCAMM2 obrigatório",
      "Cartão microSD",
      "SIM de telefonia"
    ],
    "answer": 0,
    "explanation": "DIMM é o formato tradicional de desktops e muitos servidores."
  },
  {
    "topic": "Módulos",
    "prompt": "Um notebook com memória substituível exige um módulo compacto do formato tradicional. Qual é a escolha provável?",
    "options": [
      "SODIMM",
      "DIMM de desktop sem verificar",
      "SSD SATA",
      "RDIMM obrigatório"
    ],
    "answer": 0,
    "explanation": "SODIMM ocupa menos espaço e é comum em notebooks e mini PCs; a compatibilidade ainda deve ser verificada."
  },
  {
    "topic": "Módulos",
    "prompt": "Na comparação com o antigo SIMM, o que distingue os contatos de um DIMM?",
    "options": [
      "Os contatos dos dois lados são eletricamente independentes",
      "Os dois lados sempre têm a mesma conexão elétrica",
      "Ele não possui contatos",
      "Ele usa apenas conexão sem fio"
    ],
    "answer": 0,
    "explanation": "Contatos independentes permitem mais sinais; no SIMM, os contatos dos dois lados tinham a mesma função elétrica."
  },
  {
    "topic": "Módulos",
    "prompt": "Um módulo DDR3 não encaixa em uma placa DDR4. Qual é a conduta correta?",
    "options": [
      "Verificar a geração e usar um módulo compatível, sem forçar",
      "Lixar o entalhe",
      "Forçar até encaixar",
      "Inverter a alimentação"
    ],
    "answer": 0,
    "explanation": "Gerações DDR possuem diferenças físicas e elétricas. O entalhe ajuda a impedir instalações incompatíveis."
  },
  {
    "topic": "Módulos",
    "prompt": "Uma loja anuncia DIMM e DDR5 como se fossem categorias equivalentes. Qual explicação está correta?",
    "options": [
      "DIMM é formato físico; DDR5 é geração da memória",
      "Ambos indicam apenas capacidade",
      "DIMM é uma taxa em MT/s",
      "DDR5 é o tamanho do módulo"
    ],
    "answer": 0,
    "explanation": "Formato, geração, capacidade e taxa são características diferentes e devem ser conferidas separadamente."
  },
  {
    "topic": "Módulos",
    "prompt": "O manual de um desktop pede UDIMM. O que caracteriza esse tipo?",
    "options": [
      "Ausência de registrador adicional do tipo usado em RDIMM",
      "Presença obrigatória de buffers LRDIMM",
      "Uso exclusivo em smartphones",
      "Armazenamento não volátil"
    ],
    "answer": 0,
    "explanation": "UDIMM é um módulo sem o registrador adicional usado por RDIMM, comum em desktops."
  },
  {
    "topic": "Módulos",
    "prompt": "Um servidor precisa de estabilidade com muitos módulos. Qual é a função do registrador de um RDIMM?",
    "options": [
      "Reduzir a carga elétrica dos sinais de controle sobre o controlador",
      "Aumentar a resolução do monitor",
      "Transformar RAM em SSD",
      "Dobrar os núcleos da CPU"
    ],
    "answer": 0,
    "explanation": "O registrador intermedeia sinais de controle, ajudando a manter estabilidade em configurações com mais memória."
  },
  {
    "topic": "Módulos",
    "prompt": "Um projeto de servidor considera LRDIMM de alta capacidade. Qual recurso explica a redução de carga?",
    "options": [
      "Registrador e buffers de dados",
      "Somente um dissipador colorido",
      "Ausência de chips de memória",
      "Arquivo de troca interno"
    ],
    "answer": 0,
    "explanation": "Os buffers ajudam a isolar a carga dos chips em relação ao controlador, favorecendo maior capacidade."
  },
  {
    "topic": "Módulos",
    "prompt": "Uma aplicação exige verificação e correção de erros na RAM. Qual recurso deve ser considerado?",
    "options": [
      "ECC, com suporte do módulo, da placa e da CPU",
      "SODIMM por si só",
      "RGB no módulo",
      "Apenas maior capacidade em GiB"
    ],
    "answer": 0,
    "explanation": "ECC usa bits de verificação. Para o recurso funcionar, a plataforma inteira precisa oferecer suporte."
  },
  {
    "topic": "Módulos",
    "prompt": "Uma equipe projeta um portátil fino com LPCAMM2. Qual tecnologia e prioridade combinam com esse formato?",
    "options": [
      "LPDDR5/LPDDR5X e baixo consumo",
      "DDR3 e uso exclusivo em desktop",
      "Memória magnética e acesso mecânico",
      "HD e armazenamento permanente"
    ],
    "answer": 0,
    "explanation": "LPCAMM2 utiliza LPDDR5 ou LPDDR5X e favorece baixo consumo em portáteis. CAMM2 tem instalação plana e depende do projeto da plataforma."
  },
  {
    "topic": "Frequência DDR",
    "prompt": "Um diagnóstico informa clock de 1.600.000.000 Hz em DDR4. Qual conversão para MHz está correta?",
    "options": [
      "1.600 MHz",
      "160 MHz",
      "16.000 MHz",
      "3.200 MHz"
    ],
    "answer": 0,
    "explanation": "Divida Hz por 1.000.000: 1.600.000.000 ÷ 1.000.000 = 1.600 MHz."
  },
  {
    "topic": "Frequência DDR",
    "prompt": "Um módulo DDR4 opera com clock de 1.600 MHz. Considerando duas transferências por ciclo, qual é a taxa?",
    "options": [
      "3.200 MT/s",
      "800 MT/s",
      "1.600 MT/s",
      "25.600 MT/s"
    ],
    "answer": 0,
    "explanation": "DDR realiza duas transferências por ciclo: 1.600 × 2 = 3.200 MT/s."
  },
  {
    "topic": "Frequência DDR",
    "prompt": "No laboratório, o clock de um módulo DDR4 é 1.200.000.000 Hz. Qual classificação corresponde a ele?",
    "options": [
      "DDR4-2400",
      "DDR4-1200",
      "DDR4-4800",
      "PC4-1200"
    ],
    "answer": 0,
    "explanation": "O clock é 1.200 MHz; multiplicando por 2, temos 2.400 MT/s."
  },
  {
    "topic": "Frequência DDR",
    "prompt": "Um módulo DDR4 tem clock informado como 1.333 MHz. Qual taxa nominal aproximada deve ser associada?",
    "options": [
      "2.666 MT/s",
      "1.333 MT/s",
      "666 MT/s",
      "10.664 MT/s"
    ],
    "answer": 0,
    "explanation": "Usando o valor aproximado do enunciado: 1.333 × 2 = 2.666 MT/s."
  },
  {
    "topic": "Frequência DDR",
    "prompt": "Uma ficha traz clock arredondado de 1.066 MHz. Qual classificação comercial aproximada aparece no material?",
    "options": [
      "DDR4-2133",
      "DDR4-1066",
      "DDR4-4266",
      "DDR4-3200"
    ],
    "answer": 0,
    "explanation": "1.066 × 2 = 2.132 MT/s; o valor nominal comercial aproximado citado é 2.133 MT/s."
  },
  {
    "topic": "Frequência DDR",
    "prompt": "Um módulo DDR4 opera a 1.500 MHz. Qual é sua taxa efetiva?",
    "options": [
      "3.000 MT/s",
      "1.500 MT/s",
      "750 MT/s",
      "12.000 MT/s"
    ],
    "answer": 0,
    "explanation": "A taxa DDR é duas vezes o clock em MHz: 1.500 × 2 = 3.000 MT/s."
  },
  {
    "topic": "Frequência DDR",
    "prompt": "Uma bancada mede clock de 1.800 MHz em DDR4. Qual classificação corresponde à taxa calculada?",
    "options": [
      "DDR4-3600",
      "DDR4-1800",
      "DDR4-7200",
      "DDR4-900"
    ],
    "answer": 0,
    "explanation": "1.800 × 2 = 3.600 MT/s, portanto DDR4-3600."
  },
  {
    "topic": "Frequência DDR",
    "prompt": "Um aluno precisa achar o clock de uma DDR4-3200. Qual valor aproximado em Hz é adequado?",
    "options": [
      "1.600.000.000 Hz",
      "3.200.000.000 Hz",
      "800.000.000 Hz",
      "25.600.000.000 Hz"
    ],
    "answer": 0,
    "explanation": "3.200 ÷ 2 = 1.600 MHz; multiplicando por 1.000.000, obtemos o clock em Hz."
  },
  {
    "topic": "Frequência DDR",
    "prompt": "Ao ler DDR4-3200, uma aluna diz que 3200 é a capacidade em MB. O que esse número representa?",
    "options": [
      "Taxa efetiva de 3.200 MT/s",
      "Capacidade de 3.200 MB",
      "Clock real de 3.200 MHz",
      "Número de chips no módulo"
    ],
    "answer": 0,
    "explanation": "No nome DDRx-y, x é a geração e y é a taxa efetiva em MT/s."
  },
  {
    "topic": "Frequência DDR",
    "prompt": "Um relatório usa MHz e MT/s como se fossem sempre iguais. Como corrigir a explicação para DDR?",
    "options": [
      "MHz mede ciclos por segundo; MT/s mede transferências, duas por ciclo em DDR",
      "MHz mede capacidade e MT/s mede tensão",
      "As unidades sempre têm o mesmo valor em DDR",
      "MT/s mede apenas o número de canais"
    ],
    "answer": 0,
    "explanation": "MHz é frequência de clock; MT/s é taxa de transferências. Em DDR, a taxa numérica em MT/s é o dobro do clock em MHz."
  },
  {
    "topic": "Largura de banda",
    "prompt": "Um módulo transfere 64 bits úteis por operação. Quantos bytes isso representa?",
    "options": [
      "8 bytes",
      "64 bytes",
      "512 bytes",
      "4 bytes"
    ],
    "answer": 0,
    "explanation": "Um byte contém 8 bits: 64 ÷ 8 = 8 bytes."
  },
  {
    "topic": "Largura de banda",
    "prompt": "Uma equipe quer calcular a largura de banda de um caminho útil de 64 bits. Qual fórmula deve usar?",
    "options": [
      "MT/s × 8 = MB/s",
      "MT/s ÷ 64 = MB/s",
      "GiB × 8 = MB/s",
      "MHz + GiB = MB/s"
    ],
    "answer": 0,
    "explanation": "64 bits equivalem a 8 bytes. A taxa em milhões de transferências por segundo multiplicada por 8 resulta em MB/s."
  },
  {
    "topic": "Largura de banda",
    "prompt": "Um único caminho de 64 bits usa DDR4-3200. Qual é a largura de banda teórica?",
    "options": [
      "25.600 MB/s",
      "3.200 MB/s",
      "51.200 MB/s",
      "12.800 MB/s"
    ],
    "answer": 0,
    "explanation": "3.200 × 8 = 25.600 MB/s. Trata-se de um máximo teórico."
  },
  {
    "topic": "Largura de banda",
    "prompt": "Uma estação usa DDR5-5600, considerando 64 bits úteis no total por módulo. Qual largura de banda teórica resulta?",
    "options": [
      "44.800 MB/s",
      "5.600 MB/s",
      "22.400 MB/s",
      "89.600 MB/s"
    ],
    "answer": 0,
    "explanation": "5.600 × 8 = 44.800 MB/s, somando os 64 bits úteis do módulo."
  },
  {
    "topic": "Largura de banda",
    "prompt": "O rótulo de uma memória indica PC4-25600. Qual identificação DDR é equivalente?",
    "options": [
      "DDR4-3200",
      "DDR4-25600",
      "DDR5-3200",
      "DDR4-1600"
    ],
    "answer": 0,
    "explanation": "PC4 indica DDR4; 25.600 ÷ 8 = 3.200 MT/s."
  },
  {
    "topic": "Largura de banda",
    "prompt": "Uma aluna precisa escrever o nome PC correspondente a DDR5-5600. Qual opção deve escolher?",
    "options": [
      "PC5-44800",
      "PC4-44800",
      "PC5-5600",
      "PC5-11200"
    ],
    "answer": 0,
    "explanation": "A geração é 5 e a largura de banda é 5.600 × 8 = 44.800 MB/s."
  },
  {
    "topic": "Largura de banda",
    "prompt": "Uma ficha informa PC5-48000 em um módulo de 64 bits úteis. Qual taxa efetiva está implícita?",
    "options": [
      "6.000 MT/s",
      "48.000 MT/s",
      "3.000 MT/s",
      "384.000 MT/s"
    ],
    "answer": 0,
    "explanation": "48.000 ÷ 8 = 6.000 MT/s, isto é, DDR5-6000."
  },
  {
    "topic": "Largura de banda",
    "prompt": "O cálculo de DDR4-2666 deu 21.328 MB/s, mas a etiqueta diz PC4-21300. Como interpretar?",
    "options": [
      "O rótulo usa uma aproximação comercial da largura de banda",
      "A geração mudou para DDR3",
      "O módulo tem necessariamente defeito",
      "Os 21.300 indicam capacidade em GiB"
    ],
    "answer": 0,
    "explanation": "2.666 × 8 = 21.328 MB/s. Algumas identificações PC usam valores arredondados."
  },
  {
    "topic": "Largura de banda",
    "prompt": "Uma simulação usa caminho de apenas 32 bits a 3.200 MT/s. Qual largura de banda teórica deve mostrar?",
    "options": [
      "12.800 MB/s",
      "25.600 MB/s",
      "102.400 MB/s",
      "3.200 MB/s"
    ],
    "answer": 0,
    "explanation": "32 ÷ 8 = 4 bytes por transferência; 3.200 × 4 = 12.800 MB/s."
  },
  {
    "topic": "Largura de banda",
    "prompt": "Uma compra compara DDR4-3600 e DDR5-4800 em caminhos de 64 bits. Qual a diferença de largura de banda teórica?",
    "options": [
      "9.600 MB/s",
      "1.200 MB/s",
      "38.400 MB/s",
      "28.800 MB/s"
    ],
    "answer": 0,
    "explanation": "DDR4-3600: 28.800 MB/s; DDR5-4800: 38.400 MB/s. Diferença: 9.600 MB/s. Isso não garante a mesma diferença no desempenho real."
  },
  {
    "topic": "Canais",
    "prompt": "Ao explicar o controlador de memória, um aluno pergunta o que é um canal. Qual definição é adequada?",
    "options": [
      "Caminho independente de comunicação entre o controlador e a RAM",
      "Cabo de vídeo ligado ao monitor",
      "Partição obrigatória do SSD",
      "Quantidade de chips de um módulo"
    ],
    "answer": 0,
    "explanation": "Um canal é uma ligação elétrica e lógica controlada pela CPU e pelo projeto da placa-mãe."
  },
  {
    "topic": "Canais",
    "prompt": "Dois módulos DDR4-3200 ocupam canais distintos em dual channel. Qual é a largura de banda teórica total?",
    "options": [
      "51.200 MB/s",
      "25.600 MB/s",
      "6.400 MB/s",
      "102.400 MB/s"
    ],
    "answer": 0,
    "explanation": "Cada canal fornece 25.600 MB/s; dois canais em paralelo somam 51.200 MB/s."
  },
  {
    "topic": "Canais",
    "prompt": "Uma turma compara 1 × 16 GiB com 2 × 8 GiB em uma plataforma dual channel. Qual vantagem a segunda opção pode oferecer?",
    "options": [
      "Mesma capacidade total com maior largura de banda",
      "Dobro da capacidade total",
      "Dobro do clock da CPU",
      "Garantia de dobro de FPS em qualquer jogo"
    ],
    "answer": 0,
    "explanation": "As duas opções têm 16 GiB. Distribuir os módulos em dois canais permite maior fluxo teórico de dados."
  },
  {
    "topic": "Canais",
    "prompt": "Um computador tem quatro slots e quatro módulos. Isso prova que ele está em quad channel?",
    "options": [
      "Não; depende do controlador e do projeto da placa",
      "Sim; cada slot é sempre um canal",
      "Sim; basta ter DDR4",
      "Não; computadores nunca possuem quatro canais"
    ],
    "answer": 0,
    "explanation": "Uma plataforma dual channel pode ter dois slots por canal. Quantidade de slots não determina o número de canais."
  },
  {
    "topic": "Canais",
    "prompt": "Uma placa com quatro slots receberá dois módulos. Qual orientação de instalação é a mais adequada?",
    "options": [
      "Consultar o manual; A2 e B2 são uma combinação comum",
      "Escolher sempre os slots mais próximos da CPU",
      "Usar sempre dois slots vizinhos",
      "Ocupar qualquer slot sem conferir"
    ],
    "answer": 0,
    "explanation": "A2 e B2 são comuns, mas a ordem correta depende da placa-mãe e deve ser confirmada no manual."
  },
  {
    "topic": "Canais",
    "prompt": "Uma plataforma com modo flexível tem 8 GiB em um canal e 16 GiB no outro. Como a capacidade pode operar?",
    "options": [
      "16 GiB em dual channel e 8 GiB em single channel",
      "24 GiB integralmente em dual channel",
      "Apenas 8 GiB ficam disponíveis",
      "Toda a memória deixa de funcionar"
    ],
    "answer": 0,
    "explanation": "8 GiB de cada canal formam 16 GiB em paralelo; os 8 GiB excedentes operam em um canal, conforme suporte da plataforma."
  },
  {
    "topic": "Canais",
    "prompt": "Um laboratório distribui 2 × 8 GiB e 2 × 16 GiB em uma placa dual channel. Como equilibrar os canais?",
    "options": [
      "Colocar 8 + 16 GiB em cada canal, seguindo o manual",
      "Colocar os dois de 16 GiB em um canal e os de 8 GiB no outro",
      "Usar apenas um módulo de cada vez",
      "Considerar automaticamente quad channel"
    ],
    "answer": 0,
    "explanation": "Cada canal fica com 24 GiB; a capacidade total é 48 GiB. A distribuição física deve seguir o manual."
  },
  {
    "topic": "Canais",
    "prompt": "Dois caminhos de 64 bits com DDR5-5600 trabalham em paralelo. Qual total teórico deve constar no relatório?",
    "options": [
      "89.600 MB/s",
      "44.800 MB/s",
      "11.200 MB/s",
      "179.200 MB/s"
    ],
    "answer": 0,
    "explanation": "5.600 × 8 = 44.800 MB/s por caminho; multiplicando por 2, temos 89.600 MB/s."
  },
  {
    "topic": "Canais",
    "prompt": "Após ativar dual channel, um aluno espera que todo programa fique duas vezes mais rápido. Qual explicação está correta?",
    "options": [
      "A largura de banda teórica pode dobrar, mas o desempenho depende da aplicação e de outros gargalos",
      "A capacidade da RAM sempre dobra",
      "O clock da CPU sempre dobra",
      "Qualquer programa passa a executar em metade do tempo"
    ],
    "answer": 0,
    "explanation": "O ganho real depende de quanto a tarefa precisa de largura de banda e de outros limites do sistema."
  },
  {
    "topic": "Canais",
    "prompt": "Antes de comprar RAM para uma workstation com vários canais, o que a equipe deve verificar?",
    "options": [
      "Canais e memórias aceitos pela CPU, manual da placa e distribuição dos módulos",
      "Somente a cor do dissipador",
      "Apenas a quantidade de slots visíveis",
      "Somente a marca do gabinete"
    ],
    "answer": 0,
    "explanation": "CPU e placa definem a plataforma; módulos compatíveis e capacidades equilibradas permitem aproveitar os canais disponíveis."
  }
];
