/* ===================================================================
   data.js — conteúdo editável do portfólio (gerado/editado pelo painel)
   Cada imagem: { src, alt, fit:'contain'|'cover', zoom:Number, x:0-100, y:0-100 }
   - fit  'contain' = mostra a imagem inteira | 'cover' = preenche o quadro
   - zoom 1 = normal; >1 aproxima (recorta dentro do quadro)
   - x/y  posição (%) do enquadramento — útil com cover ou zoom>1
   layout 'full' = card em destaque, largura toda | 'normal' = meia largura (par 6/6)
   offset mantido por compatibilidade com o editor (não escalona mais o grid)
   =================================================================== */
window.PROJETOS = [
  {
    slug: "aigom", titulo: "Aigom", categoria: "Branding Financeiro",
    layout: "normal", offset: false,
    imagens: [
      { src: "assets/aigom-1.jpg", alt: "Pilha de livros da Aigom com a paleta navy, dourado e verde-água", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/aigom-2.jpg", alt: "MUPI noturno com anúncio de gestão patrimonial da Aigom", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/aigom-3.jpg", alt: "Tote bag da Aigom em uso com sistema gráfico de ondas", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/aigom-4.jpg", alt: "Cartões de visita navy da Aigom com tipografia dourada", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/aigom-5.jpg", alt: "Crachá da Aigom com fita dourada sobre fundo azul", fit: "contain", zoom: 1, x: 50, y: 50 }
    ]
  },
  {
    slug: "miraculuz", titulo: "Miraculuz", categoria: "Identidade & Editorial",
    layout: "normal", offset: false,
    imagens: [
      { src: "assets/miraculuz-1.jpg", alt: "Cardápio da Miraculuz fechado e aberto sobre tábua de madeira", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/miraculuz-2.jpg", alt: "Caixa de bolo lilás da Miraculuz com padrão de ícones interno", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/miraculuz-3.jpg", alt: "Macarons coloridos sobre fundo lilás com monograma M da Miraculuz", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/miraculuz-4.jpg", alt: "Fachada lilás da Miraculuz com logotipo aplicado no toldo", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/miraculuz-5.jpg", alt: "Toppers com logo da Miraculuz espetados em cupcakes", fit: "contain", zoom: 1, x: 50, y: 50 }
    ]
  },
  {
    slug: "veronica", titulo: "Verônica Pacheco", categoria: "Marca Pessoal & Luxo",
    layout: "full", offset: false,
    imagens: [
      { src: "assets/veronica-1.jpg", alt: "Totem digital com moldura dourada da marca Verônica Pacheco em hall de mármore com tapete vermelho", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/veronica-2.jpg", alt: "Abrigo de ônibus com anúncio da mentoria: mulher de vermelho destacada em multidão preto e branco, conceito 'follow → be followed'", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/veronica-3.jpg", alt: "Cartões de visita vermelhos com monograma VP sobre seda vermelha", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/veronica-4.jpg", alt: "Ecobags vermelha e preta com padrão de estrelas e monograma da marca", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/veronica-5.jpg", alt: "Placa da marca Verônica Pacheco aplicada em parede de tijolos", fit: "contain", zoom: 1, x: 50, y: 50 }
    ]
  },
  {
    slug: "strawplast", titulo: "Strawplast", categoria: "Embalagem & Key Visual",
    layout: "normal", offset: false,
    imagens: [
      { src: "assets/strawplast-1.jpg", alt: "Key visual da linha Churrasco Premium Strawplast: talheres, steak e o mote 'Churrasco, um ritual que reúne'", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/strawplast-2.jpg", alt: "Arte da sacola da linha churrasco: selo dourado central e talheres sobre madeira queimada", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/strawplast-3.jpg", alt: "Embalagem flow-pack de garfos e facas extrafortes da linha churrasco", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/strawplast-4.jpg", alt: "Embalagem do Kit Churrasco serve 10, frente e verso com infografia", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/strawplast-5.jpg", alt: "Render 3D da caixa Kit Box de garfos e facas para churrasco", fit: "contain", zoom: 1, x: 50, y: 50 }
    ]
  },
  {
    slug: "inove", titulo: "Inove Oftalmologia", categoria: "Identidade & Saúde",
    layout: "normal", offset: false,
    imagens: [
      { src: "assets/inove-1.jpg", alt: "Recepção da clínica Inove Oftalmologia com logotipo aplicado na parede e balcão de atendimento", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/inove-2.jpg", alt: "Jaqueta bomber branca e roxa com logotipo bordado da Inove Oftalmologia", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/inove-3.jpg", alt: "Jaleco branco com logotipo da Inove Oftalmologia e estetoscópio", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/inove-4.jpg", alt: "Plaquinha de sinalização redonda da Inove Oftalmologia pendurada na parede", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/inove-5.jpg", alt: "Estojo de óculos roxo e turquesa com o logotipo da Inove Oftalmologia", fit: "contain", zoom: 1, x: 50, y: 50 }
    ]
  },
  {
    slug: "wener", titulo: "Wener Yamada", categoria: "Marca Pessoal & Social",
    layout: "full", offset: false,
    imagens: [
      { src: "assets/wener-1.jpg", alt: "Kit de social media da marca Wener Yamada: celular e cards do carrossel", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/wener-2.jpg", alt: "Papelaria completa da Wener Yamada: caderno, timbrado, cartão e envelope", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/wener-3.jpg", alt: "Etiqueta têxtil navy e prata sobre tecido laranja", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/wener-4.jpg", alt: "Painel OOH em aeroporto com campanha da Wener Yamada", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/wener-5.jpg", alt: "Logo da Wener Yamada aplicado em encosto de poltrona de avião", fit: "contain", zoom: 1, x: 50, y: 50 }
    ]
  },
  {
    slug: "mochon", titulo: "Mochon Resolve", categoria: "Identidade & Uniformes",
    layout: "full", offset: false,
    imagens: [
      { src: "assets/mochon-2.jpg", alt: "Tapume de obra da Mochon com a tagline 'A vocação de pensar além do óbvio'", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/mochon-1.jpg", alt: "Jaqueta preta com logotipo bordado da Mochon", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/mochon-3.jpg", alt: "Polo cinza da Mochon, frente e verso com tagline nas costas", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/mochon-4.jpg", alt: "Copos-brinde da Mochon empilhados em branco, preto e areia", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/mochon-5.jpg", alt: "Key visual de cobertura de vidro com mensagem da marca Mochon", fit: "contain", zoom: 1, x: 50, y: 50 }
    ]
  },
  {
    slug: "vilarq", titulo: "Vilarq Arquitetura", categoria: "Identidade & Arquitetura",
    layout: "normal", offset: false,
    imagens: [
      { src: "assets/vilarq-1.jpg", alt: "Cartão de visita amarelo da Vilarq segurado à mão sobre fundo rosé", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/vilarq-2.jpg", alt: "Lanyard navy da Vilarq com padrão do símbolo e tagline em amarelo", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/vilarq-3.jpg", alt: "Polo navy com a marca Vilarq bordada no peito e detalhes amarelos", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/vilarq-4.jpg", alt: "Assinatura horizontal da Vilarq Arquitetura com o símbolo de pirâmide e reflexo", fit: "contain", zoom: 1, x: 50, y: 50 }
    ]
  },
  {
    slug: "andina", titulo: "Andina", categoria: "Identidade & Sinalização",
    layout: "normal", offset: false,
    imagens: [
      { src: "assets/andina-1.jpg", alt: "Adesivo oval da Andina aplicado em porta de vidro", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/andina-2.jpg", alt: "Cartões de visita da Andina em flat-lay vermelho e branco", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/andina-3.jpg", alt: "Brinde limpa-vidros com rótulo verde e dourado da Andina", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/andina-4.jpg", alt: "Trio de canecas esmaltadas verdes da Andina", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/andina-5.jpg", alt: "Blocos de orçamento timbrados da Andina", fit: "contain", zoom: 1, x: 50, y: 50 }
    ]
  },
  {
    slug: "maditalia", titulo: "Madeireira Itália", categoria: "Identidade & OOH",
    layout: "normal", offset: false,
    imagens: [
      { src: "assets/maditalia-1.jpg", alt: "Outdoor da Madeireira Itália em contexto urbano", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/maditalia-2.jpg", alt: "Foto real da sinalização da Madeireira Itália instalada em ripado de madeira", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/maditalia-3.jpg", alt: "Cartões da Madeireira Itália sobre fatia de tronco", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/maditalia-4.jpg", alt: "Símbolo da Madeireira Itália entalhado em baixo-relevo na madeira", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/maditalia-5.jpg", alt: "Placa da Madeireira Itália aplicada na fachada da loja", fit: "contain", zoom: 1, x: 50, y: 50 }
    ]
  },
  {
    slug: "karpinski", titulo: "Karpinski Advogados", categoria: "Identidade Jurídica",
    layout: "normal", offset: false,
    imagens: [
      { src: "assets/karpinski-1.jpg", alt: "Papelaria da Karpinski Advogados em vinho e dourado: prancheta, envelopes e cartões com textura de vidro", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/karpinski-2.jpg", alt: "Banners da Karpinski Advogados em fachada de colunas neoclássicas", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/karpinski-3.jpg", alt: "Crachá com lanyard vinho e padrão do brasão monogramado da Karpinski", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/karpinski-4.jpg", alt: "Flâmula de parede vinho com o brasão da Karpinski Advogados", fit: "contain", zoom: 1, x: 50, y: 50 }
    ]
  },
  {
    slug: "copagro", titulo: "Copagro", categoria: "Marca Cooperativa & Embalagem",
    layout: "full", offset: false,
    imagens: [
      { src: "assets/copagro-1.jpg", alt: "Logotipo da Copagro aplicado sobre a lavoura de arroz ao pôr do sol", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/copagro-2.jpg", alt: "Boné trucker verde com o símbolo C da Copagro sobre fundo laranja", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/copagro-3.jpg", alt: "Crachá e cordão da Copagro com o sistema visual verde e laranja", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/copagro-4.jpg", alt: "Garrafa squeeze branca da Copagro com detalhe laranja e verde", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/copagro-5.jpg", alt: "Site da Copagro em notebook com foto de agricultor na lavoura", fit: "contain", zoom: 1, x: 50, y: 50 }
    ]
  },
  {
    slug: "mmmetais", titulo: "MM Metais", categoria: "Identidade Corporativa",
    layout: "normal", offset: false,
    imagens: [
      { src: "assets/mmmetais-1.jpg", alt: "Grade diagonal de cartões azul-royal e brancos da MM Metais", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/mmmetais-2.jpg", alt: "Monograma MM gravado em chapa de metal escovado", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/mmmetais-3.jpg", alt: "Telão da MM Metais em ambiente industrial com operários", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/mmmetais-4.jpg", alt: "Capacete azul com símbolo da MM Metais", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/mmmetais-5.jpg", alt: "Lockup MM Metais em relevo navy sobre laranja texturizado", fit: "contain", zoom: 1, x: 50, y: 50 }
    ]
  },
  {
    slug: "felpo", titulo: "Felpo", categoria: "Identidade de Festival",
    layout: "normal", offset: false,
    imagens: [
      { src: "assets/felpo-1.jpg", alt: "Telas do site do festival Felpo em monitor", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/felpo-2.jpg", alt: "Logotipo Felpo com espiral nas cores dos três países", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/felpo-3.jpg", alt: "Conceito 'A minha pátria é a minha língua' com modelo e informações do evento", fit: "contain", zoom: 1, x: 50, y: 50 },
      { src: "assets/felpo-4.jpg", alt: "Peça editorial 'Três países, três continentes, uma língua' com retrato de turbante", fit: "contain", zoom: 1, x: 50, y: 50 }
    ]
  }
];
