/* ===================================================================
   hero.js — vitrine de cases no topo da home
   Fundo em tela cheia com a aplicação ativa; à direita, a fila com as
   próximas. Ao avançar, o primeiro card cresce até virar o fundo.
   Para trocar/adicionar itens, edite a lista HERO abaixo
   (img = imagem grande do case; mini = miniatura em assets/hero/).
   =================================================================== */
(function () {
  "use strict";

  var HERO = [
    { nome: "Mochon", seg: "Posicionamento & identidade", ano: "2024", caso: "projetos/mochon/",
      leg: "Sede com a marquise de luz âmbar ao entardecer",
      txt: "Perguntamos a 42 pessoas o que o logo antigo vendia. Ninguém respondeu vidro. Muitos disseram dedetização.",
      img: "projetos/mochon/img/g13.webp", mini: "assets/hero/mochon-sede.webp", pos: "50% 50%", posM: "30% 50%" },
    { nome: "Miraculuz", seg: "Naming & identidade", ano: "2023–2024", caso: "projetos/miraculuz/",
      leg: "Fachada lilás com toldo ultravioleta e letreiro dourado",
      txt: "Milagre em latim, Luz no sobrenome da dona e uma estrela no pingo do “i”. Um nome que conta a história de quem faz os doces.",
      img: "projetos/miraculuz/img/01_storefront_16x9.webp", mini: "assets/hero/miraculuz-fachada.webp", pos: "50% 50%", posM: "38% 50%" },
    { nome: "Copagro", seg: "Marca cooperativa & embalagem", ano: "2023", caso: "projetos/copagro/",
      leg: "Silos com o símbolo pintado, entre os arrozais",
      txt: "Uma cooperativa de arroz fundada em 1967 ganhou um C que abraça o cooperado. E a abertura dele tem um motivo.",
      img: "projetos/copagro/img/01_silos.webp", mini: "assets/hero/copagro-silos.webp", pos: "50% 50%", posM: "46% 50%" },
    { nome: "Strawplast", seg: "Embalagem & linha de produto", ano: "2023", caso: "projetos/strawplast/",
      leg: "Linha Churrasco Premium em degraus de madeira queimada",
      txt: "Talher preto, grosso, feito para cortar picanha, mas perdido entre pratinhos de festa infantil. A embalagem levou ele para perto da brasa.",
      img: "projetos/strawplast/img/g07.webp", mini: "assets/hero/strawplast-linha.webp", pos: "50% 50%", posM: "50% 50%" },
    { nome: "Happy Kids", seg: "Identidade infantil", ano: "2021", caso: "projetos/happy-kids/",
      leg: "Mural com o padrão de peças geométricas de montar",
      txt: "Círculos, quartos e triângulos que se encaixam como brinquedo. A escola inteira virou um jogo de montar.",
      img: "projetos/happy-kids/img/02_mural-padrao-quente.webp", mini: "assets/hero/happy-kids-mural.webp", pos: "50% 50%", posM: "55% 50%" },
    { nome: "Mochon", seg: "Posicionamento & identidade", ano: "2024", caso: "projetos/mochon/",
      leg: "Papelaria com o traço contínuo do símbolo",
      txt: "O “Resolve” saiu do nome e o alvo vermelho saiu do logo. Veja o que entrou no lugar, do cartão ao stand.",
      img: "projetos/mochon/img/g03.webp", mini: "assets/hero/mochon-papelaria.webp", pos: "50% 50%", posM: "50% 50%" },
    { nome: "Miraculuz", seg: "Naming & identidade", ano: "2023–2024", caso: "projetos/miraculuz/",
      leg: "Cardápio lilás na mesa do café, ao lado de uma fatia de bolo",
      txt: "Num mercado de marrons e tons pastéis, a confeitaria escolheu o ultravioleta. Na vitrine, ninguém confunde.",
      img: "projetos/miraculuz/img/12_menu_3x2.webp", mini: "assets/hero/miraculuz-cardapio.webp", pos: "50% 50%", posM: "34% 50%" },
    { nome: "Copagro", seg: "Marca cooperativa & embalagem", ano: "2023", caso: "projetos/copagro/",
      leg: "Frota com o C que abraça o O, a semente e o cooperado",
      txt: "O arroz que a região conhece mudou de roupa, não de sabor. Até o tubarão cozinheiro das embalagens ficou.",
      img: "projetos/copagro/img/02_caminhao.webp", mini: "assets/hero/copagro-caminhao.webp", pos: "50% 50%", posM: "62% 50%" },
    { nome: "Strawplast", seg: "Embalagem & linha de produto", ano: "2023", caso: "projetos/strawplast/",
      leg: "Caixa de transporte que vira display na gôndola",
      txt: "O repositor rasga o topo e a caixa de transporte vira display. Até o papelão foi desenhado para vender.",
      img: "projetos/strawplast/img/g11.webp", mini: "assets/hero/strawplast-gondola.webp", pos: "50% 50%", posM: "50% 50%" },
    { nome: "Happy Kids", seg: "Identidade infantil", ano: "2021", caso: "projetos/happy-kids/",
      leg: "Fachada à noite com o letreiro iluminado",
      txt: "Um golfinho de Pontal do Paraná salta para fora do círculo do logo. A aventura começa quando se sai do contorno.",
      img: "projetos/happy-kids/img/11_fachada-noturna.webp", mini: "assets/hero/happy-kids-fachada.webp", pos: "50% 50%", posM: "50% 50%" }
  ];

  var DUR = 6500;          /* tempo parado em cada aplicação */
  var VOO = 950;           /* card crescendo até virar fundo */
  var EASE = "cubic-bezier(0.7, 0, 0.2, 1)";
  var reduz = window.matchMedia("(prefers-reduced-motion: reduce)");
  var celular = window.matchMedia("(max-width: 899.98px)");
  var pad2 = function (n) { return (n < 10 ? "0" : "") + n; };

  function carrega(src) {
    return new Promise(function (ok) {
      var im = new Image();
      var feito = false, fim = function () { if (!feito) { feito = true; ok(); } };
      im.onload = im.onerror = fim;
      im.src = src;
      if (im.decode) im.decode().then(fim, fim);
      setTimeout(fim, 2500);
    });
  }

  function inicia() {
    var raiz = document.querySelector(".hc");
    if (!raiz) return;
    var fundos = raiz.querySelector(".hc-fundos");
    var abre = raiz.querySelector(".hc-abre");
    var fundo = raiz.querySelector(".hc-fundo");
    var texto = raiz.querySelector(".hc-texto");
    var etq = raiz.querySelector(".hc-etq-txt");
    var titulo = raiz.querySelector(".hc-titulo a");
    var legenda = raiz.querySelector(".hc-legenda");
    var cta = raiz.querySelector(".hc-cta");
    var fila = raiz.querySelector(".hc-fila");
    var tempo = raiz.querySelector(".hc-tempo span");
    var trilho = raiz.querySelector(".hc-trilho span");
    var contador = raiz.querySelector(".hc-num");
    var total = raiz.querySelector(".hc-total");
    var btnAnt = raiz.querySelector(".hc-ant");
    var btnProx = raiz.querySelector(".hc-prox");
    var btnPausa = raiz.querySelector(".hc-pausa");
    var vivo = raiz.querySelector(".hc-vivo");

    var n = HERO.length, atual = 0, ocupado = false;
    var relogio = null, pausadoUsuario = reduz.matches, fora = false, sobre = false;
    total.textContent = pad2(n);
    raiz.classList.add("hc-js");

    var posDe = function (it) { return celular.matches ? (it.posM || it.pos) : it.pos; };
    fundo.style.objectPosition = posDe(HERO[0]);

    /* ---------- fila de cards ---------- */
    function card(k) {
      var it = HERO[k];
      var b = document.createElement("a");
      b.href = it.caso;
      b.className = "hc-card";
      b.setAttribute("data-k", k);
      b.setAttribute("aria-label", "Ver o case " + it.nome + ": " + it.leg);
      b.innerHTML = '<img src="' + it.mini + '" alt="" width="560" height="312" loading="lazy" decoding="async" style="object-position:' + it.pos + '">' +
        '<span class="hc-card-txt"><span class="hc-card-ano">' + it.ano + '</span><b>' + it.nome + '</b></span>';
      return b;
    }
    function montaFila() {
      var antes = {};
      [].forEach.call(fila.children, function (c) { antes[c.getAttribute("data-k")] = c.getBoundingClientRect(); });
      var frag = document.createDocumentFragment();
      for (var j = 1; j < n; j++) {
        var k = (atual + j) % n;
        var c = fila.querySelector('[data-k="' + k + '"]') || card(k);
        frag.appendChild(c);
      }
      fila.innerHTML = "";
      fila.appendChild(frag);
      if (reduz.matches) return;
      /* FLIP: cada card desliza da posição antiga para a nova */
      [].forEach.call(fila.children, function (c, idx) {
        var r0 = antes[c.getAttribute("data-k")];
        var r1 = c.getBoundingClientRect();
        if (r0) {
          var dx = r0.left - r1.left;
          if (Math.abs(dx) > 1) c.animate([{ transform: "translateX(" + dx + "px)" }, { transform: "none" }],
            { duration: 820, easing: "cubic-bezier(0.22, 1, 0.36, 1)", delay: 60 + idx * 35, fill: "backwards" });
        } else {
          c.animate([{ opacity: 0, transform: "translateX(60px)" }, { opacity: 1, transform: "none" }],
            { duration: 700, easing: "cubic-bezier(0.22, 1, 0.36, 1)", delay: 380, fill: "backwards" });
        }
      });
    }

    /* ---------- texto ---------- */
    function trocaTexto(k) {
      var it = HERO[k];
      etq.textContent = it.seg + " · " + it.ano;
      titulo.textContent = it.nome;
      titulo.href = it.caso;
      legenda.textContent = it.txt || it.leg; /* leg segue como texto alternativo da foto */
      cta.href = it.caso;
      if (abre) abre.href = it.caso;
      cta.setAttribute("aria-label", "Ver o case " + it.nome);
      fundo.alt = it.leg + " — case " + it.nome;
      contador.textContent = pad2(k + 1);
      trilho.style.transform = "scaleX(" + ((k + 1) / n) + ")";
      vivo.textContent = it.nome + ", " + (k + 1) + " de " + n + ": " + it.leg;
      ajustaTitulo();
    }
    /* nome longo (Strawplast, Happy Kids) reduz o corpo até caber na coluna */
    var h2 = raiz.querySelector(".hc-titulo");
    function ajustaTitulo() {
      h2.style.fontSize = "";
      var cabe = h2.clientWidth, mede = titulo.getBoundingClientRect().width;
      if (mede > cabe && cabe > 0) {
        var fs = parseFloat(getComputedStyle(h2).fontSize);
        h2.style.fontSize = Math.floor(fs * cabe / mede * 0.98) + "px";
      }
    }
    window.addEventListener("resize", ajustaTitulo);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(ajustaTitulo);
    var pecas = function () { return [].slice.call(texto.querySelectorAll(".hc-anima")); };
    function textoSai() {
      if (reduz.matches) return Promise.resolve();
      var as = pecas().map(function (el, i) {
        return el.animate([{ transform: "none", opacity: 1 }, { transform: "translateY(-0.5em)", opacity: 0 }],
          { duration: 320, delay: i * 30, easing: "cubic-bezier(0.5, 0, 0.75, 0)", fill: "forwards" }).finished;
      });
      return Promise.all(as);
    }
    function textoEntra() {
      pecas().forEach(function (el, i) {
        el.getAnimations().forEach(function (a) { a.cancel(); });
        if (reduz.matches) return;
        el.animate([{ transform: "translateY(105%)", opacity: 0 }, { transform: "none", opacity: 1 }],
          { duration: 820, delay: 120 + i * 70, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "backwards" });
      });
    }

    /* ---------- relógio ---------- */
    function paraRelogio() { if (relogio) { relogio.cancel(); relogio = null; } }
    function iniciaRelogio() {
      paraRelogio();
      if (pausadoUsuario) { tempo.style.transform = "scaleX(0)"; return; }
      relogio = tempo.animate([{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }], { duration: DUR, easing: "linear", fill: "forwards" });
      relogio.onfinish = function () { vai((atual + 1) % n); };
      ajustaRelogio();
    }
    function ajustaRelogio() {
      if (!relogio) return;
      if (fora || sobre || document.hidden) relogio.pause(); else relogio.play();
    }

    /* ---------- troca ---------- */
    function vai(k, origem) {
      if (ocupado || k === atual) return;
      ocupado = true;
      paraRelogio();
      var it = HERO[k];
      var de = origem || fila.querySelector('[data-k="' + k + '"]');
      var pronto = carrega(it.img);

      if (reduz.matches) {
        pronto.then(function () {
          fundo.src = it.img; fundo.style.objectPosition = posDe(it);
          atual = k; trocaTexto(k); montaFila();
          ocupado = false; iniciaRelogio();
        });
        return;
      }

      var saida = textoSai();
      Promise.all([pronto, saida]).then(function () {
        var rh = fundos.getBoundingClientRect(); /* no celular a foto ocupa só o topo */
        var rc = de ? de.getBoundingClientRect() : { left: rh.right, top: rh.top + rh.height * 0.3, width: rh.width * 0.14, height: rh.height * 0.4 };
        var voo = document.createElement("div");
        voo.className = "hc-voo";
        var im = document.createElement("img");
        im.src = it.img; im.alt = ""; im.style.objectPosition = posDe(it);
        voo.appendChild(im);
        fundos.appendChild(voo);
        if (de) de.style.visibility = "hidden";

        var x = rc.left - rh.left, y = rc.top - rh.top;
        var sx = rc.width / rh.width, sy = rc.height / rh.height;
        /* o quadro cresce com clip-path (sem distorcer a foto) enquanto a foto desfaz um zoom */
        var ins = function (t, r, b, l, raio) { return "inset(" + t + "px " + r + "px " + b + "px " + l + "px round " + raio + "px)"; };
        var a1 = voo.animate([
          { clipPath: ins(y, rh.width - x - rc.width, rh.height - y - rc.height, x, 10) },
          { clipPath: ins(0, 0, 0, 0, 0) }
        ], { duration: VOO, easing: EASE, fill: "forwards" });
        var cx = x + rc.width / 2 - rh.width / 2, cy = y + rc.height / 2 - rh.height / 2;
        var esc = Math.max(sx, sy);
        im.animate([
          { transform: "translate(" + cx + "px," + cy + "px) scale(" + esc + ")" },
          { transform: "none" }
        ], { duration: VOO, easing: EASE, fill: "forwards" });
        fundo.animate([{ transform: "scale(1)", filter: "brightness(1)" }, { transform: "scale(1.08)", filter: "brightness(0.6)" }],
          { duration: VOO, easing: EASE, fill: "forwards" });

        atual = k;
        trocaTexto(k);
        setTimeout(function () { montaFila(); }, 120);
        setTimeout(textoEntra, VOO * 0.45);

        a1.finished.then(function () {
          fundo.getAnimations().forEach(function (a) { a.cancel(); });
          fundo.src = it.img;
          fundo.style.objectPosition = posDe(it);
          var tira = function () { voo.remove(); };
          (fundo.decode ? fundo.decode() : Promise.resolve()).then(tira, tira);
          if (de) de.style.visibility = "";
          respira();
          ocupado = false;
          iniciaRelogio();
          carrega(HERO[(atual + 1) % n].img); /* adianta a próxima */
        });
      });
    }

    /* zoom lento no fundo enquanto o item está parado */
    var resp = null;
    function respira() {
      if (resp) resp.cancel();
      if (reduz.matches) return;
      resp = fundo.animate([{ transform: "scale(1)" }, { transform: "scale(1.06)" }], { duration: DUR + VOO * 2, easing: "linear", fill: "forwards" });
    }

    /* ---------- controles ---------- */
    btnProx.addEventListener("click", function () { vai((atual + 1) % n); });
    btnAnt.addEventListener("click", function () { vai((atual - 1 + n) % n); });
    function marcaPausa() {
      btnPausa.setAttribute("aria-pressed", pausadoUsuario ? "true" : "false");
      btnPausa.setAttribute("aria-label", pausadoUsuario ? "Retomar a troca automática" : "Pausar a troca automática");
      raiz.classList.toggle("hc-pausado", pausadoUsuario);
    }
    btnPausa.addEventListener("click", function () {
      pausadoUsuario = !pausadoUsuario;
      marcaPausa();
      if (!ocupado) iniciaRelogio();
    });
    marcaPausa();

    /* passa o mouse ou o foco nos controles: segura o tempo */
    var zona = raiz.querySelector(".hc-lado");
    zona.addEventListener("mouseenter", function () { sobre = true; ajustaRelogio(); });
    zona.addEventListener("mouseleave", function () { sobre = false; ajustaRelogio(); });
    raiz.addEventListener("focusin", function () { sobre = true; ajustaRelogio(); });
    raiz.addEventListener("focusout", function (e) { if (!raiz.contains(e.relatedTarget)) { sobre = false; ajustaRelogio(); } });
    document.addEventListener("visibilitychange", ajustaRelogio);
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (es) { fora = !es[0].isIntersecting; ajustaRelogio(); }, { threshold: 0.25 }).observe(raiz);
    }

    /* arrastar no celular */
    var x0 = null, y0 = null, arrastou = 0;
    raiz.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
    raiz.addEventListener("touchend", function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0;
      x0 = null;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4) {
        arrastou = Date.now();
        vai(dx < 0 ? (atual + 1) % n : (atual - 1 + n) % n);
      }
    }, { passive: true });
    /* o arrasto não conta como clique na foto */
    raiz.addEventListener("click", function (e) {
      if (Date.now() - arrastou < 400 && e.target.closest("a")) e.preventDefault();
    }, true);

    celular.addEventListener && celular.addEventListener("change", function () { fundo.style.objectPosition = posDe(HERO[atual]); });

    trocaTexto(0);
    montaFila();
    respira();
    iniciaRelogio();
    carrega(HERO[1].img);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", inicia);
  else inicia();
})();
