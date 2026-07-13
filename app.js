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
    strawplast: { contexto: "No contexto da agência Malazano" },
    realgourmet: { contexto: "No contexto da agência Malazano" },
    maditalia: { contexto: "No contexto da agência Malazano" },
    copagro: { contexto: "No contexto da agência Malazano" }
  };

  /* Sites publicados: tiles gerados das capturas reais (07/2026). ano = quando foi ao ar. */
  var SITES = [
    {
      slug: "metodo-ra360", nome: "Método RA360", area: "Saúde e ortopedia",
      url: "https://metodora360.com.br/", ano: "2026",
      d: [2000, 2000, 2000, 2000, 1711],
      m: [2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 619]
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
      url: "https://khaki-gnu-558745.hostingersite.com/", ano: "2026",
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
          '<button class="g-seta g-prox" type="button" aria-label="Próxima imagem">→</button>' +
          '<span class="numerador" aria-hidden="true"><i class="digito">01</i><i>/</i><i>' + pad2(total) + "</i></span>"
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

  /* ---------- galeria: pilha de provas ---------- */
  function iniciaGaleria(card) {
    var palco = card.querySelector(".palco");
    var imgs = Array.prototype.slice.call(palco.querySelectorAll("img"));
    var legenda = card.querySelector(".legenda");
    var numerador = card.querySelector(".numerador");
    var digito = numerador ? numerador.querySelector(".digito") : null;
    var i = 0;

    posicionaMarcas(palco);
    if ("ResizeObserver" in window) {
      new ResizeObserver(function () { posicionaMarcas(palco); }).observe(palco);
    }
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
      if (digito) {
        digito.textContent = pad2(i + 1);
        if (!reduzMotion.matches) {
          numerador.classList.remove("rolar");
          void numerador.offsetWidth;
          numerador.classList.add("rolar");
        }
      }
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
      x0 = e.clientX; arrastando = true; preAquece();
    });
    palco.addEventListener("pointermove", function (e) {
      if (!arrastando || x0 == null || reduzMotion.matches) return;
      var dx = e.clientX - x0;
      if (Math.abs(dx) < 4) return;
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

    /* teclado */
    palco.setAttribute("tabindex", "0");
    palco.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") { e.preventDefault(); preAquece(); mostra(i - 1); }
      if (e.key === "ArrowRight") { e.preventDefault(); preAquece(); mostra(i + 1); }
    });
  }

  /* ---------- sites publicados: accordion colapsável ---------- */
  function renderSaida() {
    var lista = document.getElementById("saida-lista");
    if (!lista) return;

    lista.innerHTML = SITES.map(function (s, idx) {
      var tiles = function (pfx, larg, alts, cls) {
        return '<div class="tira-fixa ' + cls + '">' + alts.map(function (h, k) {
          return '<img src="assets/sites/tiles/' + s.slug + "-" + pfx + "-" + k + '.webp" width="' + larg +
            '" height="' + h + '" alt="" loading="lazy" decoding="async">';
        }).join("") + "</div>";
      };
      var pid = "painel-" + s.slug;
      return '<div class="site">' +
        '<button class="site-cab" type="button" aria-expanded="false" aria-controls="' + pid + '">' +
          '<span class="site-idx">' + pad2(idx + 1) + "</span>" +
          '<span class="site-nome">' + esc(s.nome) + "</span>" +
          '<span class="site-area etq">' + esc(s.area) + "</span>" +
          '<span class="site-ano">' + esc(s.ano) + "</span>" +
          '<span class="site-toggle" aria-hidden="true"></span>' +
        "</button>" +
        '<div class="site-painel" id="' + pid + '" role="region" aria-label="Prévia do site ' + esc(s.nome) + '">' +
          '<div class="site-painel-in">' +
            '<div class="site-preview" tabindex="0" role="group" aria-label="Página completa do site ' + esc(s.nome) + ', do topo ao rodapé. Role para ver.">' +
              '<span class="site-tag etq">Versão desktop</span>' +
              tiles("d", 1100, s.d, "tira-fixa--d") +
              '<span class="site-tag etq">Versão celular</span>' +
              tiles("m", 480, s.m, "tira-fixa--m") +
            "</div>" +
            '<div class="site-rodape">' +
              '<span class="etq">Você viu a página inteira. Publicado em ' + esc(s.ano) + ".</span>" +
              '<a class="carimbo" href="' + esc(s.url) + '" target="_blank" rel="noopener">Visitar o site ↗</a>' +
            "</div>" +
          "</div>" +
        "</div>" +
      "</div>";
    }).join("");

    iniciaAcordeon();
  }

  function iniciaAcordeon() {
    var botoes = Array.prototype.slice.call(document.querySelectorAll(".site-cab"));
    botoes.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var abrir = btn.getAttribute("aria-expanded") !== "true";
        botoes.forEach(function (o) {
          if (o !== btn) { o.setAttribute("aria-expanded", "false"); o.parentElement.classList.remove("aberto"); }
        });
        btn.setAttribute("aria-expanded", String(abrir));
        btn.parentElement.classList.toggle("aberto", abrir);
        if (abrir) {
          var preview = btn.parentElement.querySelector(".site-preview");
          if (preview) preview.scrollTop = 0;
        }
      });
    });
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
