
//======================= HEADER E FOOTER ===========================

document.addEventListener("DOMContentLoaded", function () {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
            initializeMenuToggle(); // Agora só será chamado depois que o header carregar
        })
        .catch(error => console.error("Erro ao carregar o header: " + error));

    fetch("footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer-container").innerHTML = data)
        .catch(error => console.error("Erro ao carregar o footer:", error));
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
        console.error("Erro: Elemento '.menu-toggle' ou '.nav-list' não encontrado após o carregamento do header!");
    }
}

//=======================SWIPER===========================

document.addEventListener("DOMContentLoaded", function () {
    // Verifica se existe um carrossel na página antes de inicializar
    const swiperContainer = document.querySelector('.swiper-container');
    if (!swiperContainer) {
        console.warn("Swiper: Nenhum elemento '.swiper-container' encontrado. O carrossel não será inicializado.");
        return;
    }

    // Verifica a quantidade de slides antes de ativar o loop
    const slideCount = document.querySelectorAll('.swiper-slide').length;
    const enableLoop = slideCount > 3; // Só ativa o loop se houver mais de 3 slides

    var swiper = new Swiper('.swiper-container', {
        loop: enableLoop, // Ativa o loop apenas se houver slides suficientes
        slidesPerView: 3,
        spaceBetween: 10,
        autoplay: {
            delay: 3000, // Tempo de troca de slides
            disableOnInteraction: false // Continua o autoplay mesmo se o usuário interagir
        }
    });

   
});


//======================= WHATSS APP ===========================


// document.getElementById("whatsappButton").addEventListener("click", function () {
//     window.open("https://wa.me/5548991826564?text=Olá, gostaria de mais informações!", "_blank");

// });

// function pulseButtonn() {
//     const whatsappButton = document.getElementById("whatsappButton");
   
//    setInterval(() => {
//     whatsappButton.classList.add("pulse-animation");
    
//    // remove a classe após 1 segundo
//     setTimeout(() => {
//         whatsappButton.classList.remove("pulse-animation");
//     }, 1000);
// }, 3000);
// }

// pulseButtonn();




