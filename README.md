# Bender Advocacia - Website

## 📌 Sobre o Projeto
Este repositório contém o código-fonte do site do escritório **Bender Advocacia**. O projeto foi desenvolvido com foco em uma experiência visual moderna e interativa, utilizando animações suaves e componentes modulares para facilitar a manutenção e escalabilidade.

## 🚀 Funcionalidades
✅ **Banner Cinematográfico** - Vídeo de fundo com textos e botões animados que sincronizam perfeitamente com o tempo de reprodução.  
✅ **Navegação Dinâmica** - Cabeçalho (Header) e Rodapé (Footer) carregados modularmente via JavaScript.  
✅ **Animações ao Rolar (Scroll)** - As seções "despertam" e surgem na tela conforme o usuário navega.  
✅ **Formulário de Contato Inteligente** - Integração completa com **EmailJS** para envio de mensagens diretamente pelo site.  
✅ **Botão WhatsApp Interativo** - Botão flutuante com animação de "pulso" para incentivar o contato rápido.  
✅ **Design Totalmente Responsivo** - Layout otimizado para celulares, tablets e desktops.

## 📂 Estrutura do Projeto
```
📁 bender-project
│── 📁 assets          # Imagens, vídeos, ícones e identidade visual
│── 📁 components      # Componentes reutilizáveis (Header, Footer, Botão WhatsApp)
│── 📁 css             # Estilização (styles.css, services.css, sobre-nos.css)
│── 📁 pages           # Páginas internas (Contato, Serviços, Sobre)
│── 📁 scripts         # Lógica JavaScript separada por responsabilidade
│   │── animations.js  # Lógica de animação do banner e scroll reveal
│   │── components.js  # Script para carregar componentes HTML dinamicamente
│   │── script.js      # Configurações globais, menu mobile e EmailJS
│── index.html         # Página inicial (Home)
│── README.md          # Documentação do projeto
```

## 🛠️ Tecnologias Utilizadas
- **HTML5** (Semântico)
- **CSS3** (Flexbox, Grid, Animations)
- **JavaScript (ES6+)** (Fetch API, DOM Manipulation)
- **EmailJS** (Serviço de envio de emails frontend)

## 🎬 Como Funcionam as Animações?

### 🎥 Banner (`animations.js`)
A animação do banner é sincronizada com o tempo do vídeo de fundo (`video.currentTime`):
1.  **Entrada:** Quando o vídeo atinge **1/3** da sua duração, o título, parágrafo e botão aparecem com um efeito de *fade-in* e *slide-up* sequencial.
2.  **Saída:** Quando faltam **0.45 segundos** para o vídeo acabar, os elementos desaparecem suavemente.
3.  **Loop:** O processo se repete a cada loop do vídeo.

### 🔄 Carregamento Modular
Para evitar repetição de código, o `header` e `footer` são arquivos HTML separados carregados via `fetch` pelo `script.js` e `components.js`. Isso facilita a manutenção, pois uma alteração no menu reflete em todas as páginas.

## 🎯 Como Rodar o Projeto?
1.  Clone este repositório:
    ```sh
    git clone https://github.com/rc-ventura/adv-project-html-css-js.git
    ```
2.  Abra a pasta do projeto.
3.  Para testar todas as funcionalidades (especialmente o carregamento de componentes via `fetch`), **é necessário usar um servidor local**.
    - Se estiver usando o **VS Code**, instale a extensão **Live Server** e clique em "Go Live".
    - Ou rode um servidor simples com Python: `python -m http.server`

## 📌 Autor
Desenvolvido por **Ventura** 🚀

## 📜 Licença
Este projeto está sob a licença MIT. Sinta-se livre para usá-lo e melhorá-lo! 🎯
