# AGENTS.md — Site Andrey Systems

## Contexto

- Produto: portfólio profissional de Andrey Fabricio, Digital Builder.
- Usuário principal: possíveis clientes e visitantes vindos do Instagram.
- Objetivo: apresentar projetos, soluções e formas de contato com prova real e linguagem honesta.
- Estado: produção pública na Vercel.

## Fonte da verdade

- Código: `origin/main` em `https://github.com/AndreySystems-coder/SITE-ANDREYSYSTEMS-main.git`.
- Dados: arquivos estáticos do repositório; não há banco nem backend.
- Configuração: Vercel Project `site-andrey-systems`; `.vercel/` é metadado local e deve permanecer fora do Git.
- Documentação oficial: `README.md` e este `AGENTS.md`.

## Estrutura principal

| Caminho | Responsabilidade |
| --- | --- |
| `index.html` | Home e portfólio principal |
| `projetos/erp-imppel/index.html` | Case completo do ERP IMPPEL |
| `styles.css` | Layout, design system, responsividade e animações |
| `script.js` | Tema, idioma, navegação, formulário e animações leves |
| `assets/images/` | Imagens reais e mockups dos projetos |
| `robots.txt` / `sitemap.xml` | SEO técnico |

## Comandos

```bash
node server.mjs
git diff --check
```

## Regras que não podem ser quebradas

- Preservar a arquitetura HTML/CSS/JavaScript estática.
- Não migrar para React, Vite ou Next.js sem necessidade técnica comprovada.
- Não inventar clientes, depoimentos, métricas ou resultados financeiros.
- Não usar linguagem que sugira equipe inexistente.
- Manter Instagram `andreyfabricio_` e e-mail `orcamento@andrey.systems`.
- Manter `.vercel/`, tokens, `.env`, backups e temporários fora do Git.
- Preservar PT/EN, tema claro/escuro, formulário, mailto e links principais.

## Validação obrigatória

- Home e `/projetos/erp-imppel/` carregando com HTTP 200.
- CSS, JavaScript, imagens, robots e sitemap carregando conteúdo correto.
- Menu, âncoras, idioma, tema e formulário funcionando.
- Desktop, mobile e viewport de Stories sem overflow horizontal.
- Console sem erros relevantes.
- `git diff --check` antes de commit.
- Após push em `main`, validar a URL pública da Vercel.

## Critério de conclusão

Uma tarefa termina quando o escopo foi implementado, as validações aplicáveis passaram, o diff foi revisado, o Git ficou sincronizado e a URL pública foi testada quando houver publicação.
