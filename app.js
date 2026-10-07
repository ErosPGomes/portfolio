/* ==================================================================
   EROS GOMES — Portfólio 3.0 · motor da folha
   Lê data.js (window.PROJETOS) e a config de sites abaixo.
   ================================================================== */
(function () {
  "use strict";

  var esc = function (s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/"/g, "&quot;")
      .replace(/</g, "&lt;").replace(/>/g, "&gt;");
  };
  var pad2 = function (n) { return String(n).padStart(2, "0"); };

  /* Créditos e cotas ficam FORA do data.js para não quebrar o editor. */
  var EXTRAS = {
    maditalia: { contexto: "No contexto da agência Malazano" },
    copagro: { contexto: "No contexto da agência Malazano" }
  };

  /* Sites publicados: tiles gerados das capturas reais (página inteira, fatiadas
     em 2000px; d = desktop 1100px, m = celular 480px). ano = quando foi ao ar.
     url null = sem link público: o site aparece só na prévia. */
  var SITES = [
    {
      slug: "metodo-ra360", nome: "Método RA360", area: "Saúde e ortopedia",
      url: "https://metodora360.com.br/", ano: "2026",
      d: [2000, 2000, 2000, 2000, 1711],
      m: [2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 619]
    },
    {
      slug: "clinica-beaba", nome: "Clínica Beabá", area: "Desenvolvimento infantil",
      url: "https://clinicabeaba.com.br/", ano: "2026",
      d: [2000, 2000, 2000, 873],
      m: [2000, 2000, 2000, 2000, 2000, 2000, 2000, 364]
    },
    {
      slug: "colegio-aurelia", nome: "Colégio Aurélia", area: "Educação infantil e fundamental",
      url: "https://colegioaurelia.com/", ano: "2026",
      d: [2000, 2000, 560],
      m: [2000, 2000, 2000, 2000, 2000, 353]
    },
    {
      slug: "ana-paula-henriques", nome: "Ana Paula Henriques", area: "Psicologia clínica",
      url: "https://anapaulahenriques.com.br/", ano: "2026",
      d: [2000, 2000, 2000, 1452],
      m: [2000, 2000, 2000, 2000, 2000, 2000, 2000, 1025]
    },
    {
      slug: "emanuelle-poli", nome: "Emanuelle Poli", area: "Psicologia infantil",
      url: "https://emanuellepoli.com.br/", ano: "2026",
      d: [2000, 2000, 2000, 2000, 584],
      m: [2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 35]
    },
    {
      slug: "reviva-neuropsicologia", nome: "Reviva Neuropsicologia", area: "Avaliação neuropsicológica",
      url: null, ano: "2026",
      d: [2000, 2000, 2000, 2000, 385],
      m: [2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 1081]
    }
  ];

  var reduzMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* ---------- coreografia de carga: barra de cor + ganho de tinta ---------- */
  function iniciaTinta() {
    var liga = function () { document.body.classList.add("tinta-ok"); };
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(liga);
      setTimeout(liga, 1200);
    } else { liga(); }
  }

  /* ---------- header ---------- */
  function iniciaTopo() {
    var topo = document.querySelector(".topo");
    if (!topo) return;
    var marca = function () { topo.classList.toggle("rolou", window.scrollY > 16); };
    window.addEventListener("scroll", marca, { passive: true });
    marca();
  }

  /* ---------- reveal discreto ---------- */
  function iniciaReveal() {
    var io = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });
    document.querySelectorAll(".rev, .rev-carimbo").forEach(function (el) { io.observe(el); });
  }

  /* ---------- provas: render ---------- */
  function renderProvas() {
    var grade = document.getElementById("provas-grade");
    var projetos = Array.isArray(window.PROJETOS) ? window.PROJETOS : [];
    if (!grade || !projetos.length) return;

    var html = projetos.map(function (p, idx) {
      var full = p.layout === "full";
      var cls = ["card", full ? "full" : "meia", "rev"].join(" ");
      var num = pad2(idx + 1);
      var total = p.imagens.length;
      var extra = EXTRAS[p.slug] || {};

      var imgs = p.imagens.map(function (im, k) {
        var zoom = im.zoom == null ? 1 : im.zoom;
        var x = im.x == null ? 50 : im.x;
        var y = im.y == null ? 50 : im.y;
        var style = "object-fit:" + (im.fit === "cover" ? "cover" : "contain") +
          ";object-position:" + x + "% " + y + "%;--z:" + zoom;
        return '<img class="' + (k === 0 ? "ativa" : "") + '" src="' + esc(im.src) +
          '" alt="' + esc(im.alt) + '" style="' + style +
          '" loading="' + (k === 0 ? "eager" : "lazy") + '" decoding="async">';
      }).join("");

      var setas = total > 1
        ? '<button class="g-seta g-ant" type="button" aria-label="Imagem anterior">←</button>' +
          '<button class="g-seta g-prox" type="button" aria-label="Próxima imagem">→</button>'
        : "";

      return '<article class="' + cls + '" data-slug="' + esc(p.slug) + '">' +
        '<div class="palco-wrap"><span class="faca" aria-hidden="true"></span>' +
        '<figure class="palco" role="group" aria-roledescription="galeria" aria-label="Provas do projeto ' + esc(p.titulo) + '">' +
        imgs +
        '<span class="marcas" aria-hidden="true"><span class="no"></span><span class="nd"></span><span class="so"></span><span class="sd"></span></span>' +
        setas +
        "</figure></div>" +
        '<p class="legenda" aria-live="polite">' + esc(p.imagens[0].alt) + "</p>" +
        '<div class="ficha"><h3><span class="idx">' + num + "</span>" + esc(p.titulo) + "</h3>" +
        '<p class="etq">' + esc(p.categoria) + "</p></div>" +
        (extra.contexto ? '<p class="contexto">' + esc(extra.contexto) + "</p>" : "") +
        "</article>";
    }).join("");

    grade.innerHTML = html;
    var cont = document.getElementById("provas-num");
    if (cont) cont.textContent = "(" + pad2(projetos.length) + ")";
    var dadoProvas = document.getElementById("dado-provas");
    if (dadoProvas) {
      var totalImgs = projetos.reduce(function (s, p) { return s + p.imagens.length; }, 0);
      dadoProvas.textContent = totalImgs;
    }
    var dadoProj = document.getElementById("dado-projetos");
    if (dadoProj) dadoProj.textContent = projetos.length;

    grade.querySelectorAll(".card").forEach(iniciaGaleria);
  }

  /* ---------- cruzes de corte adaptativas ---------- */
  function posicionaMarcas(palco) {
    var img = palco.querySelector("img.ativa");
    var marcas = palco.querySelector(".marcas");
    if (!img || !marcas) return;
    if (!img.naturalWidth) {
      img.addEventListener("load", function () { posicionaMarcas(palco); }, { once: true });
      return;
    }
    var pad = parseFloat(getComputedStyle(palco).getPropertyValue("--palco-pad")) || 22;
    var cw = palco.clientWidth - pad * 2;
    var ch = palco.clientHeight - pad * 2;
    var w, h, x, y;
    var cover = (img.style.objectFit === "cover");
    var zoom = parseFloat(img.style.getPropertyValue("--z")) || 1;
    if (cover) { w = cw; h = ch; x = pad; y = pad; }
    else {
      var escala = Math.min(cw / img.naturalWidth, ch / img.naturalHeight) * zoom;
      w = img.naturalWidth * escala;
      h = img.naturalHeight * escala;
      x = pad + (cw - w) / 2;
      y = pad + (ch - h) / 2;
    }
    var GAP = 3, ARM = 12;
    var pos = {
      no: [x - GAP - ARM, y - GAP - ARM],
      nd: [x + w + GAP, y - GAP - ARM],
      so: [x - GAP - ARM, y + h + GAP],
      sd: [x + w + GAP, y + h + GAP]
    };
    Object.keys(pos).forEach(function (k) {
      var el = marcas.querySelector("." + k);
      if (el) { el.style.left = pos[k][0] + "px"; el.style.top = pos[k][1] + "px"; }
    });
  }

  /* ---------- lightbox: prova em tela cheia ---------- */
  var lightboxEls = null;
  var lbEstado = null;

  function construirLightbox() {
    if (lightboxEls) return lightboxEls;
    var lb = document.createElement("div");
    lb.className = "lightbox";
    lb.setAttribute("role", "dialog");
    lb.setAttribute("aria-modal", "true");
    lb.setAttribute("aria-label", "Prova em tela cheia");
    lb.innerHTML =
      '<button class="lb-fechar" type="button" aria-label="Fechar">' +
        '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>' +
      "</button>" +
      '<button class="lb-seta lb-ant" type="button" aria-label="Prova anterior">←</button>' +
      '<button class="lb-seta lb-prox" type="button" aria-label="Próxima prova">→</button>' +
      '<figure class="lb-figura"><img class="lb-img" alt=""><figcaption class="lb-legenda" aria-live="polite"></figcaption></figure>';
    document.body.appendChild(lb);
    lightboxEls = {
      raiz: lb,
      img: lb.querySelector(".lb-img"),
      legenda: lb.querySelector(".lb-legenda"),
      fechar: lb.querySelector(".lb-fechar"),
      ant: lb.querySelector(".lb-ant"),
      prox: lb.querySelector(".lb-prox")
    };
    lb.addEventListener("click", function (e) { if (e.target === lb) fecharLightbox(); });
    lightboxEls.fechar.addEventListener("click", fecharLightbox);
    lightboxEls.ant.addEventListener("click", function () { navegaLightbox(-1); });
    lightboxEls.prox.addEventListener("click", function () { navegaLightbox(1); });
    return lightboxEls;
  }

  function mostraLightbox() {
    var im = lbEstado.imgs[lbEstado.indice];
    lightboxEls.img.src = im.src;
    lightboxEls.legenda.textContent = (lbEstado.indice + 1) + " de " + lbEstado.imgs.length + ": " + im.alt;
    var multiplas = lbEstado.imgs.length > 1;
    lightboxEls.ant.style.display = multiplas ? "" : "none";
    lightboxEls.prox.style.display = multiplas ? "" : "none";
  }

  function navegaLightbox(dir) {
    lbEstado.indice = (lbEstado.indice + dir + lbEstado.imgs.length) % lbEstado.imgs.length;
    mostraLightbox();
    if (lbEstado.onIndiceMudou) lbEstado.onIndiceMudou(lbEstado.indice);
  }

  function teclasLightbox(e) {
    if (e.key === "Escape") { e.preventDefault(); fecharLightbox(); }
    if (e.key === "ArrowLeft") { e.preventDefault(); navegaLightbox(-1); }
    if (e.key === "ArrowRight") { e.preventDefault(); navegaLightbox(1); }
  }

  function abrirLightbox(imgsDom, indice, onIndiceMudou, origem) {
    var els = construirLightbox();
    lbEstado = {
      imgs: imgsDom.map(function (im) { return { src: im.currentSrc || im.src, alt: im.alt }; }),
      indice: indice,
      onIndiceMudou: onIndiceMudou,
      origem: origem
    };
    mostraLightbox();
    els.raiz.classList.add("aberta");
    document.documentElement.style.overflow = "hidden";
    document.addEventListener("keydown", teclasLightbox);
    els.fechar.focus();
  }

  function fecharLightbox() {
    if (!lightboxEls || !lbEstado) return;
    lightboxEls.raiz.classList.remove("aberta");
    document.documentElement.style.overflow = "";
    document.removeEventListener("keydown", teclasLightbox);
    var origem = lbEstado.origem;
    lbEstado = null;
    if (origem && document.body.contains(origem)) origem.focus();
  }

  /* ---------- galeria: pilha de provas ---------- */
  function iniciaGaleria(card) {
    var palco = card.querySelector(".palco");
    var imgs = Array.prototype.slice.call(palco.querySelectorAll("img"));
    var legenda = card.querySelector(".legenda");
    var i = 0;
    var moveuBastante = false;

    posicionaMarcas(palco);
    if ("ResizeObserver" in window) {
      new ResizeObserver(function () { posicionaMarcas(palco); }).observe(palco);
    }

    /* clique na prova abre em tela cheia (não conta como clique se veio de um arraste) */
    palco.setAttribute("tabindex", "0");
    palco.addEventListener("click", function (e) {
      if (e.target.closest(".g-seta")) return;
      if (moveuBastante) { moveuBastante = false; return; }
      abrirLightbox(imgs, i, function (novo) { mostra(novo); }, palco);
    });
    palco.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        abrirLightbox(imgs, i, function (novo) { mostra(novo); }, palco);
      }
    });

    if (imgs.length < 2) return;

    var preAquecida = false;
    function preAquece() {
      if (preAquecida) return;
      preAquecida = true;
      imgs.forEach(function (im) { im.loading = "eager"; });
    }

    function mostra(n, direcao) {
      i = (n + imgs.length) % imgs.length;
      imgs.forEach(function (im, k) {
        im.classList.toggle("ativa", k === i);
        im.classList.remove("saindo");
        im.style.transform = "";
        im.style.opacity = "";
      });
      if (legenda) legenda.textContent = (i + 1) + " de " + imgs.length + ": " + imgs[i].alt;
      posicionaMarcas(palco);
    }

    var ant = card.querySelector(".g-ant");
    var prox = card.querySelector(".g-prox");
    ant.addEventListener("click", function () { preAquece(); mostra(i - 1, -1); });
    prox.addEventListener("click", function () { preAquece(); mostra(i + 1, 1); });

    /* swipe: a folha do topo segue o dedo e sai da pilha */
    var x0 = null, arrastando = false;
    palco.addEventListener("pointerdown", function (e) {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      if (e.target.closest(".g-seta")) return;
      moveuBastante = false;
      x0 = e.clientX; arrastando = true; preAquece();
    });
    palco.addEventListener("pointermove", function (e) {
      if (!arrastando || x0 == null) return;
      var dx = e.clientX - x0;
      if (Math.abs(dx) > 8) moveuBastante = true;
      if (reduzMotion.matches || Math.abs(dx) < 4) return;
      var img = imgs[i];
      img.style.transform = "translateX(" + dx * 0.6 + "px) rotate(" + dx * 0.004 + "deg) scale(var(--z,1))";
    }, { passive: true });
    function solta(e) {
      if (!arrastando || x0 == null) return;
      arrastando = false;
      var dx = e.clientX - x0;
      x0 = null;
      var img = imgs[i];
      if (Math.abs(dx) > 48) {
        var lado = dx < 0 ? -1 : 1;
        if (reduzMotion.matches) { mostra(i + (lado < 0 ? 1 : -1)); return; }
        img.classList.add("saindo");
        img.style.transform = "translateX(" + lado * 130 + "%) rotate(" + lado * 2 + "deg) scale(var(--z,1))";
        img.style.opacity = "0";
        setTimeout(function () { mostra(i + (lado < 0 ? 1 : -1)); }, 190);
      } else {
        img.style.transform = "";
      }
    }
    palco.addEventListener("pointerup", solta);
    palco.addEventListener("pointercancel", function () { arrastando = false; x0 = null; imgs[i].style.transform = ""; });

    /* teclado: setas trocam a imagem em foco (Enter/Espaço já abrem a tela cheia, tratados acima) */
    palco.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") { e.preventDefault(); preAquece(); mostra(i - 1); }
      if (e.key === "ArrowRight") { e.preventDefault(); preAquece(); mostra(i + 1); }
    });
  }

  /* ---------- sites publicados: vitrine em carrossel (notebook + celular) ---------- */
  function renderSaida() {
    var raiz = document.getElementById("saida-lista");
    if (!raiz) return;
    var total = pad2(SITES.length);

    var tiles = function (s, pfx, larg, alts) {
      return alts.map(function (h, k) {
        return '<img src="assets/sites/tiles/' + s.slug + "-" + pfx + "-" + k + '.webp" width="' + larg +
          '" height="' + h + '" alt="" loading="lazy" decoding="async">';
      }).join("");
    };

    var slides = SITES.map(function (s, idx) {
      var n = pad2(idx + 1);
      var acao = s.url
        ? '<a class="carimbo carimbo--contorno" href="' + esc(s.url) + '" target="_blank" rel="noopener">Visitar o site ↗</a>'
        : "";
      return '<li class="vit-slide" aria-roledescription="slide" aria-label="' + n + " de " + total + ": " + esc(s.nome) + '">' +
        '<figure class="vit-obra">' +
          '<div class="nb">' +
            '<div class="nb-tampa">' +
              '<span class="nb-camera" aria-hidden="true"></span>' +
              '<div class="nb-tela" tabindex="0" role="group" aria-label="Página completa do site ' + esc(s.nome) +
                ' na versão desktop. Role para percorrer do topo ao rodapé.">' + tiles(s, "d", 1100, s.d) + "</div>" +
              '<button class="vit-dica" type="button" aria-label="Percorrer a página do site ' + esc(s.nome) + '">Ver a página inteira ↓</button>' +
            "</div>" +
            '<div class="nb-base" aria-hidden="true"><span></span></div>' +
          "</div>" +
          '<div class="cel">' +
            '<div class="cel-tela" tabindex="0" role="group" aria-label="Página completa do site ' + esc(s.nome) +
              ' na versão celular. Role para percorrer.">' + tiles(s, "m", 480, s.m) + "</div>" +
          "</div>" +
        "</figure>" +
        '<div class="vit-legenda">' +
          '<span class="site-idx">' + n + "</span>" +
          '<div class="vit-texto"><h3 class="vit-nome">' + esc(s.nome) + "</h3>" +
            '<span class="etq">' + esc(s.area) + " · " + esc(s.ano) + "</span></div>" +
          acao +
        "</div>" +
      "</li>";
    }).join("");

    raiz.innerHTML =
      '<div class="vitrine" role="region" aria-roledescription="carrossel" aria-label="Sites publicados">' +
        '<div class="vit-controles">' +
          '<span class="vit-contador" aria-live="polite"><b>01</b> / ' + total + "</span>" +
          '<span class="vit-progresso" aria-hidden="true"><span></span></span>' +
          '<button class="vit-seta" type="button" data-dir="-1" aria-label="Site anterior">←</button>' +
          '<button class="vit-seta" type="button" data-dir="1" aria-label="Próximo site">→</button>' +
        "</div>" +
        '<ul class="vit-trilho" tabindex="0" aria-label="Use as setas do teclado ou deslize para o lado para ver os outros sites">' +
          slides +
        "</ul>" +
      "</div>";

    iniciaVitrine(raiz);
  }

  function iniciaVitrine(raiz) {
    var trilho = raiz.querySelector(".vit-trilho");
    var slides = Array.prototype.slice.call(trilho.children);
    var contador = raiz.querySelector(".vit-contador b");
    var barra = raiz.querySelector(".vit-progresso span");
    var setas = raiz.querySelectorAll(".vit-seta");
    var atual = 0;
    /* destino de um clique ainda em animação: sem ele, dois cliques rápidos
       partiriam do mesmo slide e o carrossel avançaria só uma posição */
    var destino = null;
    var agendado = false;

    function mostra(k) {
      contador.textContent = pad2(k + 1);
      barra.style.width = ((k + 1) / slides.length * 100) + "%";
      setas[0].disabled = k === 0;
      setas[1].disabled = k === slides.length - 1;
    }

    /* o slide ativo é o que tem a borda esquerda mais perto da borda do trilho */
    function calcula() {
      agendado = false;
      var base = slides[0].offsetLeft;
      var melhor = 0, dist = Infinity;
      slides.forEach(function (sl, k) {
        var d = Math.abs(sl.offsetLeft - base - trilho.scrollLeft);
        if (d < dist) { dist = d; melhor = k; }
      });
      /* no fim do trilho o último slide pode não encostar na borda: conta como ativo */
      if (trilho.scrollLeft + trilho.clientWidth >= trilho.scrollWidth - 4) melhor = slides.length - 1;
      if (melhor !== atual) slides[atual].classList.remove("ativa");
      atual = melhor;
      if (destino !== null && atual === destino) destino = null;
      mostra(destino !== null ? destino : atual);
    }

    function vai(k) {
      k = Math.max(0, Math.min(slides.length - 1, k));
      destino = k;
      mostra(k);
      trilho.scrollTo({
        left: slides[k].offsetLeft - slides[0].offsetLeft,
        behavior: reduzMotion.matches ? "auto" : "smooth"
      });
    }
    var passo = function (dir) { vai((destino !== null ? destino : atual) + dir); };

    trilho.addEventListener("scroll", function () {
      if (!agendado) { agendado = true; requestAnimationFrame(calcula); }
    }, { passive: true });

    /* se a pessoa assume o trilho com o dedo, a roda ou o trackpad, o destino do clique deixa de valer */
    ["pointerdown", "wheel", "touchstart"].forEach(function (ev) {
      trilho.addEventListener(ev, function () { destino = null; }, { passive: true });
    });

    Array.prototype.forEach.call(setas, function (b) {
      b.addEventListener("click", function () { passo(Number(b.getAttribute("data-dir"))); });
    });

    trilho.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") { e.preventDefault(); passo(-1); }
      if (e.key === "ArrowRight") { e.preventDefault(); passo(1); }
    });

    /* a tela do notebook: no toque ela só captura o dedo depois de ativada pelo
       botão (senão quem desce a página fica preso rolando o site inteiro);
       no mouse a roda funciona direto. A dica some no primeiro scroll. */
    slides.forEach(function (sl) {
      var tela = sl.querySelector(".nb-tela");
      tela.addEventListener("scroll", function () {
        if (tela.scrollTop > 12) sl.classList.add("rolou");
      }, { passive: true });
      sl.querySelector(".vit-dica").addEventListener("click", function () {
        sl.classList.add("ativa");
        tela.scrollBy({ top: tela.clientHeight * 0.8, behavior: reduzMotion.matches ? "auto" : "smooth" });
        tela.focus({ preventScroll: true });
      });
    });

    window.addEventListener("resize", calcula);
    calcula();
  }

  /* ---------- vídeo: facade do YouTube (só carrega ao clicar) ---------- */
  function iniciaVideo() {
    document.querySelectorAll(".video-player").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var id = btn.getAttribute("data-video");
        var ifr = document.createElement("iframe");
        ifr.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0";
        ifr.title = "Entrevista de Eros Gomes no MS Cast #06";
        ifr.className = "video-iframe";
        ifr.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
        ifr.setAttribute("allowfullscreen", "");
        btn.replaceWith(ifr);
        ifr.focus();
      });
    });
  }

  /* ---------- vai ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    iniciaTinta();
    iniciaTopo();
    renderProvas();
    renderSaida();
    iniciaVideo();
    iniciaReveal();
  });
})();
