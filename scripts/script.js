document.addEventListener("DOMContentLoaded", function () {
  //================= ABERTURA MENU HAMBURGER =========================
  
    const menuToggle = document.querySelector(".menu-toggle");
    const navList = document.querySelector(".nav-list");

    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            if (navList) {
                navList.classList.toggle("active");
                menuToggle.classList.toggle("open");
            } else {
                console.error("Erro: Elemento '.nav-list' não encontrado!");
            }
        });
    } else {
        console.error("Erro: Elemento '.menu-toggle' não encontrado!");
    }
});



document.addEventListener("DOMContentLoaded", function () {
    // ==================== 🎬 ANIMAÇÃO DO BANNER ====================
    function animarBanner() {
        const video = document.querySelector(".video-bg");
        const heading = document.getElementById("banner-heading");
        const paragraph = document.getElementById("banner-paragraph");
        const button = document.getElementById("banner-button");
        const banner = document.getElementById("home");

        function esconderBanner() {
            heading.style.opacity = "0";
            paragraph.style.opacity = "0";
            button.style.opacity = "0";
        }
        

        function mostrarBanner() {
            setTimeout(() => {
                heading.style.opacity = "1";
                heading.style.transform = "translateY(0)";
        } , 500);
            
            setTimeout(() => {
                paragraph.style.opacity = "1";
                paragraph.style.transform = "translateY(0)";
            }, 1000);

                setTimeout(() =>{

                 button.style.opacity = "1";
                 button.style.transform = "translateY(0)";
                }, 1200);
        }
    

        // O banner aparece automaticamente ao carregar a página
        banner.classList.add("visivel");
        esconderBanner();

     // 🔹 Mostrar o banner quando o vídeo atingir a metade
        video.addEventListener("timeupdate", function () {
            if (video.currentTime >= video.duration / 3 && heading.style.opacity === "0") {
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
            sections.forEach(section => {
            
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
    }

    // ==================== 🔥 INICIALIZAÇÃO ====================
    animarBanner(); // Chama a animação do banner
    animarSecoes(); // Chama a animação das seções
});

//======================= EMAIL SERVER ===========================
// Inicializa o EmailJS com sua chave pública
emailjs.init("wjGU3ZV13Y3VYsnzZ"); // Substitua pela sua chave pública do EmailJS

// Aguarda o envio do formulário
 document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form")
    
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita recarregar a página

        // Envia o formulário via EmailJS
        emailjs.sendForm("service_7b4mebp", "template_1l6i3vr", form)
            .then(function () {
                alert("Mensagem enviada com sucesso!");
                form.reset();

            }, function (error) {
                alert("Erro ao enviar: " + JSON.stringify(error));
                form.reset();
            });
    });
    
});
