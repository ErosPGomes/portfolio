/* ==================================================================
   EROS GOMES — menu de navegação do celular
   Gaveta lateral: abre no botão do topo e fecha no Esc, no fundo
   escuro, ao tocar num link e ao voltar para a largura de desktop.
   Roda em todas as páginas (home e blog).
   ================================================================== */
(function () {
  "use strict";

  function inicia() {
    var btn = document.querySelector(".menu-btn");
    var menu = document.getElementById("menu-principal");
    if (!btn || !menu) return;

    /* o botão só existe no CSS quando o script rodou */
    document.body.classList.add("js-on");

    var fundo = document.createElement("div");
    fundo.className = "menu-fundo";
    document.body.appendChild(fundo);

    var desktop = window.matchMedia("(min-width: 900px)");
    var aberto = false;

    function focaveis() {
      return Array.prototype.slice.call(menu.querySelectorAll("a[href], button:not([disabled])"));
    }

    function abre() {
      if (aberto) return;
      aberto = true;
      document.body.classList.add("menu-aberto");
      btn.setAttribute("aria-expanded", "true");
      btn.setAttribute("aria-label", "Fechar menu");
      document.documentElement.style.overflow = "hidden";
      document.addEventListener("keydown", teclas);
      var alvo = focaveis()[0];
      if (alvo) alvo.focus();
    }

    function fecha(devolveFoco) {
      if (!aberto) return;
      aberto = false;
      document.body.classList.remove("menu-aberto");
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-label", "Abrir menu");
      document.documentElement.style.overflow = "";
      document.removeEventListener("keydown", teclas);
      if (devolveFoco) btn.focus();
    }

    /* Tab circula entre o botão e os itens da gaveta */
    function teclas(e) {
      if (e.key === "Escape") { e.preventDefault(); fecha(true); return; }
      if (e.key !== "Tab") return;
      var lista = [btn].concat(focaveis());
      var primeiro = lista[0];
      var ultimo = lista[lista.length - 1];
      if (e.shiftKey && document.activeElement === primeiro) {
        e.preventDefault(); ultimo.focus();
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault(); primeiro.focus();
      }
    }

    btn.addEventListener("click", function () { aberto ? fecha(true) : abre(); });
    fundo.addEventListener("click", function () { fecha(false); });

    /* âncoras da mesma página não recarregam: fecha na mão */
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a[href]")) fecha(false);
    });

    var mudou = function (e) { if (e.matches) fecha(false); };
    if (desktop.addEventListener) desktop.addEventListener("change", mudou);
    else if (desktop.addListener) desktop.addListener(mudou);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inicia);
  } else {
    inicia();
  }
})();
