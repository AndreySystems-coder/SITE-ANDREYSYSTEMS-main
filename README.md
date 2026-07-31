# Andrey Systems Portfolio

Portfolio profissional de Andrey Fabricio, Digital Builder.

URL oficial: https://site-andrey-systems.vercel.app

## Objetivo

Apresentar projetos, soluções e formas de contato de Andrey Fabricio de forma clara, visual e profissional. O site também funciona como base visual para gravação dos destaques profissionais do Instagram: Start, Projects, Solutions e Results.

## Stack

- HTML estático
- CSS moderno
- JavaScript puro
- Vercel como hospedagem estática
- Sem React, Vite, Next.js ou backend

## Estrutura

```text
index.html                       Home e portfólio principal
projetos/erp-imppel/index.html   Case completo ERP IMPPEL
styles.css                       Design system, layout, responsividade e animações
script.js                        Tema, idioma, navegação, animações e formulário
assets/images/                   Imagens reais e mockups dos projetos
robots.txt                       Indexação
sitemap.xml                      URLs públicas
server.mjs                       Servidor local simples para testes
```

## Como rodar localmente

```bash
node server.mjs
```

Abrir: http://127.0.0.1:4217

## Deploy

- Projeto Vercel: `site-andrey-systems`
- Framework Preset: `Other`
- Root Directory: `.`
- Build Command: nenhum
- Output Directory: `.`
- Branch de produção: `main`

Pushes em `main` geram Production Deployments automaticamente.

## Contatos oficiais

- Instagram: https://www.instagram.com/andreyfabricio_/
- E-mail: orcamento@andrey.systems

## Atualização

1. Conferir `git status`.
2. Alterar HTML/CSS/JS preservando a arquitetura estática.
3. Validar localmente home, case ERP, links, formulário, idiomas, tema, mobile e SEO.
4. Executar `git diff --check`.
5. Commitar e enviar para `origin/main`.
6. Validar a URL pública da Vercel.

## Animações principais

- Navegação com indicador ativo inspirada em Tubelight Navbar.
- Hero com mockups em profundidade.
- Featured Project com transformação por scroll inspirada em Container Scroll Animation.
- Solution cards com spotlight discreto.
- How I Work com cards visuais compactos.

Todas as animações respeitam `prefers-reduced-motion`.
