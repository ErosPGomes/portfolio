# Rotina semanal de publicação — blog do Eros Gomes

Procedimento executado uma vez por semana (terça de manhã) por um agente de
nuvem, sem contexto de conversas anteriores.

**Atenção aos caminhos:** a raiz do repositório JÁ É a raiz do site — não
existe subpasta `site/` dentro dele. Todos os caminhos citados aqui
(`blog/DNA.md`, `assets/blog/banco/`, `tools/build_blog.py`) são relativos à
raiz do repositório. Na máquina do Eros essa mesma pasta se chama `site/`,
mas isso é só o nome local do clone.

Se qualquer instrução aqui divergir do `blog/DNA.md`, **o DNA.md vence** — ele é
a fonte de verdade estratégica; este arquivo é só a ordem das operações.

---

## Passo 1 — Ler antes de escrever

Leia por inteiro, sem pular:

1. `blog/DNA.md` — posicionamento, público, tom, pilares, regras de estrutura,
   preços, prazos, escopo e checklist final.
2. `.claude/skills/humanizer/SKILL.md` — checklist anti-texto-de-IA.
3. `assets/blog/banco/LEIA-ME.md` — como escolher a capa.

## Passo 2 — Escolher o tema sem canibalizar

Leia `blog/posts.json` **inteiro** (slug, título, data, local, cover_origem).

- Escolha um pilar do DNA.md diferente dos **3 posts mais recentes** e uma
  localidade-alvo diferente das **2 mais recentes**.
- **Regra crítica:** a palavra-chave primária não pode ser igual nem próxima da
  de nenhum artigo já publicado. Em julho de 2026 cinco artigos disputaram a
  mesma busca e precisaram ser consolidados em um só. Se o ângulo já está
  coberto, escolha outro — ou, se o artigo existente estiver mesmo incompleto,
  **melhore aquele artigo** em vez de criar um novo (e diga isso no relatório).
- Defina: palavra-chave primária, título (até 70 caracteres, sem duplicar o
  sufixo "· Eros Gomes", sem plantar dúvida negativa), slug em kebab-case sem
  acento, meta description de 140–160 caracteres, voz (1ª ou 3ª pessoa,
  alternando em relação ao post anterior) e abertura.

## Passo 3 — Escrever

Abra um `blog/<slug>/index.html` existente e **replique exatamente** a
estrutura: `<head>` com meta tags e JSON-LD (`BlogPosting` + `BreadcrumbList` +
`FAQPage`), header, footer e as classes de `blog/blog.css`. Não invente markup.

Siga as regras de estrutura do DNA.md (extensão, H2, tabelas reais, lista
numerada, perguntas frequentes espelhadas no schema, zero link externo).

Inclua o bloco `blog-relacionados` com 3 artigos existentes e a página-mãe
`/criacao-de-sites-em-piraquara/` como último item, mais **pelo menos um link
contextual no meio do texto**.

## Passo 4 — Capa

Escolha em `assets/blog/banco/` um arquivo cujo `cover_origem` ainda não
apareça em nenhum post do `posts.json`. Copie para `blog/<slug>/cover.<ext>`
preservando a extensão. Se o banco estiver vazio ou esgotado, use
`assets/eros-retrato.webp` ou `assets/eros-trabalho.webp` e **avise no
relatório que o banco precisa ser reabastecido**. Nunca gere nem baixe imagem.

## Passo 5 — Humanizar

Releia o texto inteiro aplicando o `humanizer` linha por linha e reescreva o
que não passar. Este passo não é opcional e não é uma revisão superficial: o
blog é publicado de forma automatizada e a única coisa que o separa de parecer
conteúdo de máquina é este passo. Varie de verdade a abertura, o ritmo das
frases e o comprimento dos parágrafos em relação aos últimos artigos.

## Passo 6 — Registrar e validar

Adicione a entrada em `blog/posts.json` com todos os campos: `slug`, `titulo`,
`descricao`, `data` (a data de hoje), `palavras` (**contagem real**, igual ao
`wordCount` do schema), `local`, `cover` e `cover_origem`.

Rode, a partir da raiz do repositório:

```
python tools/build_blog.py
```

Ele valida tudo e regenera `blog/index.html` e `sitemap.xml` sozinho. **Nunca
edite a listagem ou o sitemap na mão.** Se o script apontar problema, corrija e
rode de novo — não publique por cima de um erro.

## Passo 7 — Publicar

`git add` os arquivos do artigo (incluindo a capa) e os três regenerados
(`posts.json`, `blog/index.html`, `sitemap.xml`). Commit com a mensagem
`Blog: publica '<título>'`, depois `git pull --rebase` e `git push`.

Nunca adicione "Claude" ou qualquer co-autor à mensagem de commit.

## Passo 8 — Relatório

Termine com um resumo curto: título e URL publicados, palavra-chave primária,
localidade, voz usada, imagem consumida do banco e quantas sobraram, mais
qualquer coisa que tenha chamado atenção (banco vazio, artigo existente que
mereceria atualização, tema difícil de encontrar sem repetir).

## Se algo impedir a publicação

Não publique um artigo pela metade nem force um tema repetido só para cumprir a
semana. Pare, não faça commit, e explique no relatório o que travou.
