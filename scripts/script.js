
//Menu Hamburger
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navList = document.querySelector(".nav-list");

    if (menuToggle && navList) {
        menuToggle.addEventListener("click", function () {
            navList.classList.toggle("active");
        });
    } else {
        console.error("Elemento '.menu-toggle' ou '.nav-list' não encontrado!");
    }
});

//Banner Dinamico
document.addEventListener("DOMContentLoaded", function () {
    const video = document.querySelector(".video-bg");
    const heading = document.getElementById("banner-heading");
    const paragraph = document.getElementById("banner-paragraph");
    const button = document.getElementById("banner-button");

    // Função para esconder os elementos
    function esconderElementos() {
        heading.style.opacity = "0";
        paragraph.style.opacity = "0";
        button.style.opacity = "0";
    }

    // Função para mostrar os elementos
    function mostrarElementos() {
        setTimeout(() => heading.style.opacity = "1", 500);
        setTimeout(() => paragraph.style.opacity = "1", 1000);
        setTimeout(() => button.style.opacity = "1", 1200);
    }

    // Esconde os elementos no início
    esconderElementos();

    video.addEventListener("timeupdate", function () {
        // Quando o vídeo atingir a metade, mostrar os elementos (apenas se estiverem invisíveis)
        if (video.currentTime >= video.duration / 3 && heading.style.opacity === "0") {
            mostrarElementos();
        }
        
        // Quando o vídeo estiver perto do fim, esconder os elementos novamente
        if (video.currentTime >= video.duration - 0.45) {
            esconderElementos();
        }
    });

    // // Quando o vídeo terminar, reiniciar automaticamente e resetar os elementos
    // video.addEventListener("ended", function () {
    //     esconderElementos();
    //     video.currentTime = 0; // Volta o vídeo ao início
    //     video.play(); // Reinicia o vídeo automaticamente
    // });
});
