//======================= HEADER E FOOTER ===========================

document.addEventListener("DOMContentLoaded", function () {
  fetch("/components/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-container").innerHTML = data;
      initializeMenuToggle(); // Agora só será chamado depois que o header carregar
    })
    .catch((error) => console.error("Erro ao carregar o header: " + error));

  fetch("/components/footer.html")
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
  // Redireciona todos os botões .button relevantes
  document.querySelectorAll(".button").forEach(function (btn) {
    if (btn.textContent.trim() === "Saiba Mais") {
      btn.onclick = function () {
        window.location.href = "sobre.html";
      };
    }
    if (btn.textContent.trim() === "Entre em Contato") {
      btn.onclick = function () {
        window.location.href = "contato.html";
      };
    }
  });
});

//======================= EMAIL SERVER ===========================

// Aguarda o envio do formulário
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  if (!form || typeof emailjs === "undefined") return; // Evita erro se o formulário não existe

  if (!emailjs.init) return;
  emailjs.init("wjGU3ZV13Y3VYsnzZ"); // Substitua pela sua chave pública do EmailJS

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
