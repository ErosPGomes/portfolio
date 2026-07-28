# DNA do blog — Eros Gomes

Leia este arquivo por inteiro antes de escrever qualquer artigo. É a fonte de
verdade estratégica do blog. Atualize-o quando o posicionamento, os cases ou a
lista de localidades mudarem.

## Quem somos

Eros Gomes é designer de marcas e estrategista de comunicação, atuando sob o
próprio nome (site: `https://erosgomes.com.br/`). Mora em Piraquara-PR e atende
Piraquara, Curitiba, região metropolitana e litoral do Paraná (presencial e
remoto), além de clientes no Brasil inteiro. Contato: WhatsApp
`https://wa.me/5541988122525`.

**Regra de marca inegociável**: a autoridade é construída em torno do nome
**EROS GOMES**. **Nunca mencione nome de estúdio, agência ou empresa** nos
textos — nada de "meu estúdio X" ou qualquer nome de empresa como autor. É
sempre "Eros Gomes" (3ª pessoa) ou "eu/meu trabalho" (1ª pessoa).

Serviços: criação de sites e landing pages orientadas à conversão (mais de 40
sites publicados em 2026), web design, identidade visual e logotipo, branding e
posicionamento, design de embalagens e rótulos, apresentações comerciais,
naming, key visual, social media e conteúdo estratégico, vídeos.

Experiência: mais de 10 anos entre estratégia e execução; formado em
Publicidade (UniBrasil, 2017); atua com marcas desde 2018; participou do BNI
(Curitiba) na cadeira de Branding. Forte atuação B2B e industrial.

Cases reais (cite pelo nome do cliente quando fizer sentido — nunca invente
resultado numérico que não esteja documentado aqui): Strawplast (reposicionamento
e embalagens), FS Soluções de Engenharia (posicionamento + identidade + site),
WS Frame (steel frame — posicionamento e vídeo), Plus Sistemas (software,
reposicionamento), Miraculuz Confeitaria (naming e lançamento), Copagro
(branding e rótulos), Hépego Cookies, JNL Gestão Financeira, Santander Holding
Imobiliária (comunicação corporativa).

## Público-alvo

Donos de pequenas e médias empresas, empresas familiares, indústrias e
prestadores de serviço da região de Curitiba e do litoral — negócios
competentes que parecem amadores na comunicação (site desatualizado, landing
page que não converte, identidade inconsistente, materiais que não ajudam a
vender). Leigo a intermediário em marketing/design — nunca presuma jargão
técnico sem explicar.

## Tom de voz

- Português do Brasil. Especialista direto e próximo, sem jargão — como quem
  explica pra um cliente na mesa.
- Duas vozes possíveis, escolha uma por post e mantenha consistente do início
  ao fim:
  - **1ª pessoa** ("eu", "no meu processo") — o próprio Eros falando.
  - **3ª pessoa editorial** ("o designer Eros Gomes...", "no projeto que Eros
    fez para a Strawplast...") — o blog comentando sobre o trabalho dele, sem
    nunca usar "eu". Dá uma sensação diferente de autoridade — varie entre os
    posts, não use sempre a mesma.
- Siga `.claude/skills/humanizer/SKILL.md` (neste repo) antes de publicar —
  cobre a regra de abertura variada e os tells de texto gerado por IA a
  remover.

## Localidade por post

Cada post tem uma localidade-alvo — varie entre os posts, não repita a mesma
sempre. Escolha uma (ou combine cidade + região quando fizer sentido) e cite
naturalmente no primeiro parágrafo, em 1-2 H2 e em exemplos concretos — nunca
liste várias cidades seguidas (keyword stuffing):

Piraquara · Pinhais · Quatro Barras · Campina Grande do Sul · Curitiba ·
Região metropolitana de Curitiba · Litoral do Paraná (Matinhos, Paranaguá,
Guaratuba)

## Palavras-chave e SEO

- Uma palavra-chave primária por post (cauda média, realista pra um site
  pequeno rankear), presente no título, na meta description, no primeiro
  parágrafo e em pelo menos um H2.
- Intenção GEO: cada H2 deve responder sua pergunta de forma direta e completa
  nas primeiras 2-3 frases (citável isoladamente por uma IA), só depois
  aprofundar.
- Pelo menos 3 títulos por rodada de ideação devem ter recorte local explícito
  (cidade/região); pelo menos 1 de intenção comercial forte (preço/custo).

## Pilares de conteúdo (para não repetir tema)

Antes de escolher o tema, leia os artigos já publicados (`blog/posts.json` ou
os slugs em `blog/*/index.html`) — nunca repita ângulo já coberto. Pilares:

1. **Sites e landing pages** — custo, prazo, o que diferencia um site
   estratégico de um genérico, erros comuns de PME.
2. **Identidade visual e branding** — quando profissionalizar a marca, sinais
   de que a comunicação não reflete a qualidade real do negócio.
3. **Embalagens e key visual** — percepção de valor no ponto de venda
   (apoiar em cases reais como Strawplast/Copagro quando fizer sentido).
4. **Casos reais** — bastidores de um projeto documentado na lista de cases
   acima (nunca invente detalhe que não esteja aqui).
5. **Comunicação estratégica** — clareza de proposta de valor, por que
   "parecer amador" custa vendas, redesign vs. remendo.

## Regras de estrutura por artigo

- 900 a 2200 palavras. Introdução que situa o problema/dúvida (ou responde
  direto, se abertura = direta); 5-8 seções H2; conclusão que volta à pergunta
  inicial e fecha com um único CTA natural pro WhatsApp/orçamento.
- Pelo menos 2 tabelas markdown reais (comparativo, checklist, faixas de
  preço/prazo) — não decorativas.
- Ao menos 1 lista numerada de passos práticos.
- Seção "Perguntas frequentes" com 4-6 perguntas reais, resposta direta em
  2-4 frases cada.
- Cite 2-4 fontes reais e conhecidas pelo nome (Sebrae, Think with Google,
  IBGE, Nielsen Norman Group etc.) sem link — nunca invente dado preciso; se
  não tiver certeza do número, generalize ("a maioria", "boa parte").
- Zero link externo no corpo.

## Banco de fotos (capa do artigo)

Nunca gere imagem nova nem baixe de fora — reaproveite o que já está commitado
em `assets/`. Fotos disponíveis (nomeadas por projeto/cliente):

- `assets/eros-retrato.webp`, `assets/eros-trabalho.webp` — foto do próprio
  Eros; **use como padrão seguro** quando o tema for genérico ou quando não
  tiver certeza de qual projeto combina com o assunto.
- `assets/strawplast-1..5.jpg`, `assets/copagro-1..5.jpg`,
  `assets/mmmetais-1..5.jpg` — cases industriais/embalagem — bons pra posts
  sobre embalagem, key visual, indústria.
- `assets/miraculuz-1..5.jpg` — case de naming/confeitaria — bom pra posts
  sobre naming ou branding de pequeno negócio.
- Demais pastas (`aigom`, `andina`, `felpo`, `inove`, `karpinski`,
  `maditalia`, `mochon`, `veronica`, `vilarq`, `wener`, cada uma com 4-5
  fotos numeradas) — projetos reais sem descrição documentada aqui. **Não
  invente qual serviço cada um representa.** Se usar uma dessas como capa,
  trate como imagem neutra de "trabalho de design" (composição, mesa,
  apresentação), sem afirmar no texto o que era o projeto.
- `assets/sites/tiles/<slug>-d-N.webp` (desktop) e `-m-N.webp` (mobile) —
  screenshots reais de sites publicados — ótimos pra posts sobre web
  design/landing page (ex.: mostrar como referência visual, sem precisar
  citar o nome do cliente no texto).

Escolha o arquivo mais afim ao tema do post; na dúvida, use
`eros-retrato.webp` ou `eros-trabalho.webp`.

## Como publicar (mecânica do repositório)

Este site é HTML estático (GitHub Pages), **sem build automático de blog** —
diferente do blog da Hépego, aqui a página final já sai pronta, não existe um
script que gera o HTML a partir de markdown. Ao escrever um artigo:

1. Estrutura de referência: veja qualquer `blog/<slug>/index.html` já existente
   pra copiar exatamente o `<head>` (meta tags, JSON-LD `BlogPosting` +
   `BreadcrumbList` + `FAQPage`), header/nav, footer e classes CSS
   (`blog-artigo`, `blog-meta`, `blog-capa`, `blog-cta` etc. — definidas em
   `blog/blog.css`). Não invente markup novo — replique o padrão.
2. Crie `blog/<slug>/index.html` com o artigo completo já renderizado em HTML
   (não deixe markdown cru).
3. Adicione a entrada correspondente em `blog/posts.json` (slug, título,
   descrição, data, palavras, local, cover) e regenere `blog/index.html`
   (listagem) incluindo o novo card, seguindo o mesmo padrão dos cards
   existentes.
4. Atualize `sitemap.xml` com a nova URL (`/blog/<slug>/`).
5. `git add` só os arquivos do artigo + os 3 arquivos atualizados
   (`posts.json`, `blog/index.html`, `sitemap.xml`), commit
   `Blog: publica '<título>'`, `git pull --rebase`, `git push`.

Isso é mais manual que o pipeline da Hépego (que roda via GitHub Actions) —
tome cuidado extra pra manter a listagem e o sitemap sempre sincronizados com
os artigos existentes antes de publicar um novo.
