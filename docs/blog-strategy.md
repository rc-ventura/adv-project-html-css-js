# Plano de Implementação do Blog (Fase 1 e Fase 2)

Este plano detalha a criação da seção de Blog em duas etapas estruturadas: começaremos com a abordagem mais rápida, barata e amigável para SEO (arquivos HTML estáticos) e deixaremos a base preparada para evoluir para um CMS moderno (Painel de Gestão) no futuro.

## Fase 1: Arquivos HTML no Código (Foco Imediato)
Nesta fase, o blog existirá dentro da própria base de código. O foco é obter o SEO perfeito desde o dia 1 sem adicionar custos de infraestrutura.

### 1. Estrutura de Diretórios
- Criar `pages/blog.html`: A vitrine (página principal do blog) que exibirá os cards dos artigos em um grid responsivo.
- Criar a subpasta `pages/blog/`: Onde os artigos individuais vão morar.
- Criar o arquivo `css/blog.css`: Folha de estilo dedicada para a leitura (tipografia confortável, espaçamentos maiores, imagens fluidas).

### 2. Template de Artigo
- Criar `pages/blog/template-post.html`: Um arquivo "molde".
- Estrutura semântica (`<article>`, `<h1>`, `<header>`, etc.) para o Google ler perfeitamente.
- Instruções/comentários no código indicando onde trocar as Meta Tags de SEO (Title, Description) e o conteúdo do texto.

### 3. Integração com o Site Atual
- Adicionar a aba "Blog" no menu superior (`header-container`) para que todas as páginas consigam navegar para lá.
- Garantir que os componentes dinâmicos (header, footer, botão de WhatsApp) carreguem corretamente nos artigos dentro da subpasta `/blog/`.

### Fluxo de Trabalho (Fase 1)
Para postar, você irá duplicar o `template-post.html`, trocar o texto, salvar com um nome novo e adicionar um card direcionando para ele na vitrine (`blog.html`).

---

## Fase 2: Evolução para um CMS Headless (Futuro)
Quando o volume de artigos crescer e você quiser um painel de edição visual (estilo WordPress) sem precisar mexer no código, faremos a transição.

### O que mudará na Fase 2?
1. **Ferramenta:** Integraremos um CMS moderno e gratuito (como Contentful ou Sanity).
2. **Nova Lógica:** Os artigos deixarão de ser arquivos HTML na pasta `/blog/`. O site fará uma requisição (via JavaScript) para o painel do CMS e carregará os textos dinamicamente.
3. **Página de Post Dinâmica:** Criaremos um único `post.html` que será capaz de ler o conteúdo puxado do CMS e renderizar na tela automaticamente.
4. **Novo Fluxo:** Você entrará no site do CMS com login e senha, digitará o post no painel visual, e ao clicar em "Publicar", o site atualizará sozinho.
