document.addEventListener("DOMContentLoaded", function () {
  function elementoVisivel(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight - 100 && rect.bottom > 100;
  }
  function verificarSecoesVisiveis() {
    document.querySelectorAll("section").forEach(section => {
      if (elementoVisivel(section)) {
        section.classList.add("visivel");
        section.classList.remove("invisivel");
      } else {
        section.classList.add("invisivel");
        section.classList.remove("visivel");
      }
    });
  }
  window.addEventListener("scroll", verificarSecoesVisiveis);
  verificarSecoesVisiveis(); // Garante que aparece ao carregar
});
