/**
 * Animação do banner com vídeo
 */
function initBannerAnimation() {
  const banner = document.querySelector(".banner");
  if (!banner) return; // Só executa se existir banner

  const video = banner.querySelector(".video-bg");
  const heading =
    banner.querySelector(".banner-heading") ||
    banner.querySelector("#banner-heading");
  const paragraph =
    banner.querySelector(".banner-paragraph") ||
    banner.querySelector("#banner-paragraph");
  const button =
    banner.querySelector(".banner-button") ||
    banner.querySelector("#banner-button");

  if (!video || !heading || !paragraph || !button) return;

  function esconderBanner() {
    heading.style.opacity = "0";
    paragraph.style.opacity = "0";
    button.style.opacity = "0";
  }

  function mostrarBanner() {
    setTimeout(() => {
      heading.style.opacity = "1";
      heading.style.transform = "translateY(0)";
    }, 500);

    setTimeout(() => {
      paragraph.style.opacity = "1";
      paragraph.style.transform = "translateY(0)";
    }, 1000);

    setTimeout(() => {
      button.style.opacity = "1";
      button.style.transform = "translateY(0)";
    }, 1200);
  }

  // O banner aparece automaticamente ao carregar a página
  banner.classList.add("visivel");
  esconderBanner();

  // Mostrar o banner quando o vídeo atingir 1/3
  video.addEventListener("timeupdate", function () {
    if (
      video.currentTime >= video.duration / 3 &&
      heading.style.opacity === "0"
    ) {
      mostrarBanner();
    }
    // Esconder o banner quando o vídeo estiver perto do fim
    if (video.currentTime >= video.duration - 0.45) {
      esconderBanner();
    }
  });
}

/**
 * Animação de rolagem para seções
 * @param {string} [excludeSelector] - Seletor CSS para excluir elementos da animação (opcional)
 */
function initScrollAnimations(excludeSelector = null) {
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight - 100 && rect.bottom > 100;
  }

  function checkSections() {
    let selector = "section";
    if (excludeSelector) {
      selector += `:not(${excludeSelector})`;
    }

    document.querySelectorAll(selector).forEach((section) => {
      if (
        isElementInViewport(section) ||
        section.getBoundingClientRect().top < window.innerHeight
      ) {
        section.classList.add("visivel");
        section.classList.remove("invisivel");
      } else {
        section.classList.add("invisivel");
        section.classList.remove("visivel");
      }
    });
  }

  // Verifica as seções ao carregar a página
  document.addEventListener("DOMContentLoaded", () => {
    // Inicializa o banner
    initBannerAnimation();

    // Inicializa as animações de rolagem
    checkSections();
  });

  // Verifica as seções ao rolar a página
  window.addEventListener("scroll", checkSections);

  // Retorna a função para que possa ser chamada manualmente se necessário
  return { checkSections };
}

// Inicializa as animações automaticamente com a configuração padrão
// Você pode passar um seletor para excluir elementos específicos, por exemplo: initScrollAnimations('#home');
const scrollAnimations = initScrollAnimations("#home");
