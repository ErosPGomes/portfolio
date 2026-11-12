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
    slug: "happy-kids", titulo: "Happy Kids", categoria: "Identidade Infantil & Aplicações",
    layout: "normal", offset: false,
    caso: "projetos/happy-kids/",
    imagens: [
      { src: "assets/happy-kids-capa.webp", alt: "Placa circular com o selo Happy Kids em parede curva branca, com sombras de folhas", fit: "cover", zoom: 1, x: 50, y: 50 }
    ]
  },
  {
    slug: "strawplast", titulo: "Strawplast", categoria: "Embalagem & Linha de Produto",
    layout: "normal", offset: false, sangria: true,
    caso: "projetos/strawplast/",
    imagens: [
      { src: "assets/strawplast-capa.webp", alt: "Linha Churrasco Premium da Strawplast sobre degraus de madeira queimada contra parede bronze", fit: "cover", zoom: 1, x: 50, y: 50 }
    ]
  },
  {
    slug: "copagro", titulo: "Copagro", categoria: "Marca Cooperativa & Embalagem",
    layout: "full", offset: false,
    caso: "projetos/copagro/",
    imagens: [
      { src: "assets/copagro-capa.webp", alt: "Silos e armazém da Copagro ao entardecer, com o símbolo amarelo e verde pintado no silo e arrozais à frente", fit: "cover", zoom: 1, x: 50, y: 50 }
    ]
  },
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
    slug: "miraculuz", titulo: "Miraculuz", categoria: "Naming & Identidade",
    layout: "full", offset: false,
    caso: "projetos/miraculuz/",
    imagens: [
      { src: "assets/miraculuz-capa.webp", alt: "Fachada lilás em estilo casa de bonecas com toldo ultravioleta e o logotipo Miraculuz em dourado", fit: "cover", zoom: 1, x: 50, y: 50 }
    ]
  },
  {
    slug: "mochon", titulo: "Mochon", categoria: "Posicionamento & Identidade",
    layout: "full", offset: false,
    caso: "projetos/mochon/",
    imagens: [
      { src: "assets/mochon-capa.webp", alt: "Sede da Mochon: volume em painéis pretos com o logotipo, marquise de esquina com linha de luz âmbar e térreo envidraçado ao entardecer", fit: "cover", zoom: 1, x: 50, y: 50 }
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
