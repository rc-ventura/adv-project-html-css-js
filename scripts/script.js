//======================= HEADER E FOOTER ===========================

document.addEventListener("DOMContentLoaded", function () {
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-container").innerHTML = data;
      initializeMenuToggle(); // Agora só será chamado depois que o header carregar
    })
    .catch((error) => console.error("Erro ao carregar o header: " + error));

  fetch("footer.html")
    .then((response) => response.text())
    .then(
      (data) => (document.getElementById("footer-container").innerHTML = data)
    )
    .catch((error) => console.error("Erro ao carregar o footer:", error));
});

// ================== ABERTURA MENU HAMBURGER =========================
function initializeMenuToggle() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navList = document.querySelector(".nav-list");

  if (menuToggle && navList) {
    menuToggle.addEventListener("click", function () {
      navList.classList.toggle("active");
      menuToggle.classList.toggle("open");
    });
  } else {
    console.error(
      "Erro: Elemento '.menu-toggle' ou '.nav-list' não encontrado após o carregamento do header!"
    );
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // ==================== 🎬 ANIMAÇÃO DO BANNER ====================
  function animarBanner() {
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

    // 🔹 Mostrar o banner quando o vídeo atingir a metade
    video.addEventListener("timeupdate", function () {
      if (
        video.currentTime >= video.duration / 3 &&
        heading.style.opacity === "0"
      ) {
        mostrarBanner();
      }
      // 🔹 Esconder o banner quando o vídeo estiver perto do fim
      if (video.currentTime >= video.duration - 0.45) {
        esconderBanner();
      }
    });
  }

  // ==================== 🎯 ANIMAÇÃO DAS SEÇÕES ====================
  function animarSecoes() {
    const sections = document.querySelectorAll("section:not(#home)"); // Exclui o banner

    function elementoVisivel(el) {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight - 100 && rect.bottom > 100;
    }

    function verificarSecoesVisiveis() {
      sections.forEach((section) => {
        // NOVO: Se a seção já está no viewport ao carregar, já mostra
        if (
          elementoVisivel(section) ||
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

    // Chama ao carregar a página para mostrar tudo que já está no viewport
    verificarSecoesVisiveis();
    window.addEventListener("scroll", verificarSecoesVisiveis);
  }

  // ==================== 🔥 INICIALIZAÇÃO ====================
  animarBanner(); // Chama a animação do banner
  animarSecoes(); // Chama a animação das seções

  // Redireciona todos os botões .button relevantes
  document.querySelectorAll('.button').forEach(function(btn) {
    if (btn.textContent.trim() === 'Saiba Mais') {
      btn.onclick = function() {
        window.location.href = 'sobre.html';
      };
    }
    if (btn.textContent.trim() === 'Entre em Contato') {
      btn.onclick = function() {
        window.location.href = 'contato.html';
      };
    }
  });
});

//======================= EMAIL SERVER ===========================
// Inicializa o EmailJS com sua chave pública
emailjs.init("wjGU3ZV13Y3VYsnzZ"); // Substitua pela sua chave pública do EmailJS

// Aguarda o envio do formulário
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  if (!form) return; // Evita erro se o formulário não existe
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita recarregar a página

    // Envia o formulário via EmailJS
    emailjs.sendForm("service_7b4mebp", "template_1l6i3vr", form).then(
      function () {
        alert("Mensagem enviada com sucesso!");
        form.reset();
      },
      function (error) {
        alert("Erro ao enviar: " + JSON.stringify(error));
        form.reset();
      }
    );
  });
});

//======================= WHATSS APP ===========================
(function () {
  if (window.__whatsappButtonInitialized) return;
  window.__whatsappButtonInitialized = true;
  const whatsappButton = document.getElementById("whatsappButton");
  if (whatsappButton) {
    function pulseButton() {
      whatsappButton.classList.add("pulse-animation");
      setTimeout(() => {
        whatsappButton.classList.remove("pulse-animation");
      }, 1000);
    }
    setInterval(pulseButton, 3000);
    whatsappButton.addEventListener("click", function () {
      window.open(
        "https://wa.me/5548991826564?text=Olá, gostaria de mais informações!",
        "_blank"
      );
    });
  }
})();
