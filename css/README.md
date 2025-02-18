# Bonini & Bender Advocacia - Website

## 📌 Sobre o Projeto
Este repositório contém o código-fonte do site do escritório **Bonini & Bender Advocacia**, que inclui:
- **Banner animado** com vídeo de fundo e transição de texto.
- **Animação de seções ao rolar a página**.
- **Design responsivo** para garantir boa experiência em diferentes dispositivos.

## 🚀 Funcionalidades
✅ **Banner com animação** - O texto aparece quando o vídeo atinge a metade e desaparece próximo ao final.  
✅ **Seções animadas** - As seções aparecem gradualmente quando o usuário rola a página.  
✅ **Design responsivo** - Adaptação para diferentes telas e dispositivos.  
✅ **Código modular** - Separação clara entre animação do banner e das seções.  

## 📂 Estrutura do Projeto
```
📁 projeto-bonini-bender
│── 📁 assets        # Imagens, vídeos e fontes do projeto
│── 📁 css           # Arquivos de estilo CSS
│── 📁 scripts       # Scripts JavaScript
│── index.html       # Página principal do site
│── README.md        # Documentação do projeto
```

## 🛠️ Tecnologias Utilizadas
- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**

## 🎬 Como Funciona a Animação do Banner?
1. O banner inicia com `opacity: 0`.
2. Quando o vídeo atinge a **metade**, o texto aparece gradualmente.
3. Quando o vídeo está **próximo do fim**, o texto desaparece.
4. O ciclo se repete ao reiniciar o vídeo.

## 📜 Código Principal
### **Animação do Banner (`script.js`)**
```javascript
document.addEventListener("DOMContentLoaded", function () {
    function animarBanner() {
        const video = document.querySelector(".video-bg");
        const heading = document.getElementById("banner-heading");
        const paragraph = document.getElementById("banner-paragraph");
        const button = document.getElementById("banner-button");

        function esconderBanner() {
            heading.style.opacity = "0";
            paragraph.style.opacity = "0";
            button.style.opacity = "0";
        }

        function mostrarBanner() {
            setTimeout(() => heading.style.opacity = "1", 500);
            setTimeout(() => paragraph.style.opacity = "1", 1000);
            setTimeout(() => button.style.opacity = "1", 1200);
        }

        esconderBanner();
        
        video.addEventListener("timeupdate", function () {
            if (video.currentTime >= video.duration / 2 && heading.style.opacity === "0") {
                mostrarBanner();
            }
            if (video.currentTime >= video.duration - 0.45) {
                esconderBanner();
            }
        });
    }

    animarBanner();
});
```

## 🎯 Como Rodar o Projeto?
1. Clone este repositório:
   ```sh
   git clone https://github.com/rc-ventura/projeto-bonini-bender.git
   ```
2. Abra o arquivo `index.html` no navegador.
3. Certifique-se de que os arquivos CSS e JS estão corretamente linkados.

## 📌 Autor
Desenvolvido por **Ventura** 🚀

## 📜 Licença
Este projeto está sob a licença MIT. Sinta-se livre para usá-lo e melhorá-lo! 🎯

