# DNA do blog — Eros Gomes

Leia este arquivo por inteiro antes de escrever qualquer artigo. É a fonte de
verdade estratégica do blog. Atualize-o quando o posicionamento, os cases ou a
lista de localidades mudarem.

> Última revisão: 18/08/2026 — alinhamento de posicionamento entre site e blog.

## Posicionamento (regra número um)

O objetivo do blog é **uma coisa só**: construir autoridade para
**Eros Gomes como criador de websites em Piraquara e região metropolitana de
Curitiba**.

Tudo se subordina a isso. Branding, embalagem, naming e key visual continuam
sendo serviços reais e podem virar artigo — mas como **prova de que quem faz o
site entende de marca**, nunca como o assunto principal do blog. Se um artigo
não ajuda alguém a decidir contratar um site, ele não é prioridade.

O site principal já está alinhado a isso: a home abre com criação de sites, a
seção "Sites publicados" é a Folha 01, e existe a página-mãe
`/criacao-de-sites-em-piraquara/`.

## Quem somos

Eros Gomes é designer e criador de sites, atuando sob o próprio nome
(site: `https://erosgomes.com.br/`). **Mora em Piraquara-PR** e atende
Piraquara, Pinhais, Quatro Barras, Campina Grande do Sul, Curitiba, a região
metropolitana e o litoral do Paraná (presencial e remoto), além de clientes no
Brasil inteiro. Contato: WhatsApp `https://wa.me/5541988122525`.

**Regra de marca inegociável**: a autoridade é construída em torno do nome
**EROS GOMES**. **Nunca mencione nome de estúdio, agência ou empresa** nos
textos — nada de "meu estúdio X" ou qualquer nome de empresa como autor. É
sempre "Eros Gomes" (3ª pessoa) ou "eu/meu trabalho" (1ª pessoa). Isso vale
também para o schema: `jobTitle` é sempre `"Designer e criador de sites"` e a
localidade do `PostalAddress` é sempre **Piraquara**, nunca Curitiba.

Serviços, na ordem de prioridade do blog:

1. Criação de sites e landing pages orientadas à conversão (mais de 40 sites
   publicados em 2026) e web design.
2. Identidade visual, logotipo, branding e posicionamento.
3. Embalagens e rótulos, key visual, apresentações comerciais, naming, social
   media e conteúdo estratégico, vídeos.

Faixas de preço e prazo já publicados (mantenha coerente em todo artigo novo):
landing page **R$ 2.500 a R$ 4.500**; site completo **R$ 4.500 a R$ 7.500**.
Prazos: landing page estática **7 a 15 dias**, landing page em WordPress
**15 a 30 dias**, site completo **20 a 40 dias** — sempre contados a partir da
entrega do conteúdo, nunca da assinatura do contrato.

A escolha entre **WordPress** e **código estático** é definida pelo tipo de
manutenção que o projeto vai exigir depois da entrega: WordPress quando o
cliente precisa de autonomia para editar conteúdo com frequência, código
estático quando o conteúdo é estável e a prioridade é desempenho.

**Nunca afirme que domínio, hospedagem, certificado de segurança ou a
configuração de Google Search Console e Analytics estão inclusos no projeto** —
não estão. Podem ser orçados à parte. O que vem incluso é o SEO técnico da
própria página (títulos, dados estruturados, sitemap, imagens otimizadas,
velocidade) e a entrega dos arquivos do projeto ao cliente.

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
page que não converte, dependência total do Instagram, identidade
inconsistente). Leigo a intermediário em marketing/design — nunca presuma
jargão técnico sem explicar.

**Não escreva para designers.** Artigo cujo leitor ideal é colega de profissão
(ferramentas, cursos, tutoriais de Figma) está fora do escopo: não gera cliente
e dilui o sinal temático do domínio.

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

**`Brasil`** é o único valor permitido fora dessa lista, para os poucos posts
de alcance nacional. Ele nunca pode passar de **um quinto** dos artigos
publicados — hoje o blog já está no limite. Na dúvida, escolha uma cidade.
O campo `local` do `posts.json` nunca pode ficar vazio.

## Palavras-chave e SEO

- **Uma palavra-chave primária por post, e nenhuma palavra-chave pode se
  repetir entre dois posts.** Antes de definir o tema, leia o `posts.json`
  inteiro: se a keyword que você pensou já é a primária de um artigo
  existente, o certo é **atualizar aquele artigo**, não criar um novo. Foi
  exatamente esse erro que gerou cinco posts brigando pela mesma busca de
  "site para salão de beleza em Piraquara" — consolidados em um só em
  18/08/2026.
- A palavra-chave primária aparece no título, na meta description, no primeiro
  parágrafo e em pelo menos um H2.
- Intenção GEO/AEO: cada H2 deve responder sua pergunta de forma direta e
  completa nas primeiras 2-3 frases (citável isoladamente por uma IA), só
  depois aprofundar.
- Pelo menos 3 títulos por rodada de ideação devem ter recorte local explícito
  (cidade/região); pelo menos 1 de intenção comercial forte (preço/custo).
- Nunca escreva um título que plante uma dúvida negativa sobre o Eros no índice
  do Google (ex.: "Eros Gomes é confiável?"). A dúvida pode ser respondida
  dentro do artigo, numa pergunta frequente — nunca no `<title>`.

## Links internos (obrigatório)

Nenhum artigo pode ficar isolado. Todo post publicado precisa ter, no fim do
`<article>`, o bloco:

```html
<aside class="blog-relacionados">
  <h2>Leia também</h2>
  <ul>
    <li><a href="/blog/<slug>/">Título do artigo relacionado</a></li>
    ... (3 artigos)
    <li><a href="/criacao-de-sites-em-piraquara/"><strong>Criação de sites em Piraquara: preço, prazo e processo</strong></a></li>
  </ul>
</aside>
```

Regras: 3 artigos do mesmo pilar ou de pilar vizinho, mais o link para a
página-mãe `/criacao-de-sites-em-piraquara/`, que é **sempre** o último item.
Além disso, cite pelo menos **um link contextual no meio do texto** — dentro de
um parágrafo, com âncora natural — apontando para a página-mãe ou para o artigo
mais próximo do assunto. Zero link externo no corpo continua valendo.

## Pilares de conteúdo (para não repetir tema)

Antes de escolher o tema, leia os artigos já publicados (`blog/posts.json`) —
nunca repita ângulo já coberto. Proporção-alvo: **pelo menos 6 de cada 10 posts
no pilar 1**.

1. **Sites e landing pages (prioridade)** — custo, prazo, velocidade, o que
   diferencia um site estratégico de um genérico, erros de PME, site vs. rede
   social, nichos locais ainda não cobertos (barbearia, clínica odontológica,
   pet shop, oficina, restaurante, academia, contabilidade, advocacia...).
2. **Comunicação estratégica** — clareza de proposta de valor, por que
   "parecer amador" custa vendas, redesign vs. remendo.
3. **Identidade visual e branding** — quando profissionalizar a marca, sinais
   de que a comunicação não reflete a qualidade real do negócio.
4. **Casos reais** — bastidores de um projeto documentado na lista de cases
   acima (nunca invente detalhe que não esteja aqui).
5. **Embalagens e key visual** — percepção de valor no ponto de venda
   (apoiar em cases reais como Strawplast/Copagro quando fizer sentido).

## Regras de estrutura por artigo

- 900 a 2200 palavras. Introdução que situa o problema/dúvida (ou responde
  direto, se abertura = direta); 5-8 seções H2; conclusão que volta à pergunta
  inicial e fecha com um único CTA natural pro WhatsApp/orçamento.
- Pelo menos 2 tabelas markdown reais (comparativo, checklist, faixas de
  preço/prazo) — não decorativas.
- Ao menos 1 lista numerada de passos práticos.
- Seção "Perguntas frequentes" com 4-6 perguntas reais, resposta direta em
  2-4 frases cada, **espelhada no JSON-LD `FAQPage`** (as perguntas do HTML e
  do schema precisam ser exatamente as mesmas).
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

### Banco semanal de imagens (`assets/blog/banco/`)

Esta pasta é a **primeira fonte** de capa, à frente das fotos antigas listadas
acima. O Eros alimenta ela com `.webp` otimizados e nomeados de forma
descritiva; a rotina consome uma por semana. As regras completas estão em
`assets/blog/banco/LEIA-ME.md`. Em resumo:

- Escolha um arquivo do banco **que ainda não tenha sido usado**. O controle é
  o campo `cover_origem` de cada post no `blog/posts.json` — leia todos antes
  de escolher.
- Copie o arquivo para `blog/<slug>/cover.<ext>` preservando a extensão e
  registre no `posts.json`: `"cover": "cover.webp"` e
  `"cover_origem": "<nome-do-arquivo-do-banco>"`.
- Use o nome do arquivo para julgar se a imagem combina com o tema. Se nenhuma
  combinar bem, prefira uma neutra de trabalho a forçar uma relação falsa —
  **nunca afirme no texto o que a foto mostra** se você não tem como saber.
- Fotos do próprio Eros (`assets/eros-retrato.webp`, `assets/eros-trabalho.webp`)
  continuam válidas e ajudam a espalhar a imagem dele pela internet, mas não
  como padrão toda semana.
- **Se o banco estiver vazio ou esgotado**, use uma foto do Eros, publique
  normalmente e avise no relatório final que o banco precisa ser reabastecido.
  Nunca gere nem baixe imagem de fora.

## Páginas que não são artigos — não mexa sem motivo

- `/criacao-de-sites-em-piraquara/` — página-mãe de serviço (schema `Service` +
  `FAQPage`). É o destino comercial de todo o blog. Se mudar preço ou prazo,
  mude **aqui primeiro** e depois nos artigos.
- Quatro slugs são **redirecionamentos** para o guia consolidado de salão de
  beleza e não devem voltar a ser artigos, nem entrar no `posts.json` ou no
  sitemap: `salao-de-beleza-piraquara-site-celular`,
  `quanto-custa-site-rapido-salao-de-beleza`, `erro-site-salao-de-beleza-lento`,
  `site-rapido-vs-instagram-salao-beleza`.

## Como publicar (mecânica do repositório)

Este site é HTML estático (GitHub Pages), **sem build automático de blog** —
diferente do blog da Hépego, aqui a página final já sai pronta, não existe um
script que gera o HTML a partir de markdown. Ao escrever um artigo:

1. Estrutura de referência: veja qualquer `blog/<slug>/index.html` já existente
   pra copiar exatamente o `<head>` (meta tags, JSON-LD `BlogPosting` +
   `BreadcrumbList` + `FAQPage`), header/nav, footer e classes CSS
   (`blog-artigo`, `blog-meta`, `blog-capa`, `blog-cta`, `blog-relacionados` —
   definidas em `blog/blog.css`). Não invente markup novo — replique o padrão.
   A ordem da nav é: Sites · Trabalhos · Publicações · Blog · Sobre.
2. Crie `blog/<slug>/index.html` com o artigo completo já renderizado em HTML
   (não deixe markdown cru), incluindo o bloco `blog-relacionados`.
3. Adicione a entrada correspondente em `blog/posts.json` com todos os
   campos: `slug`, `titulo`, `descricao`, `data`, `palavras`, `local`,
   `cover` (nome do arquivo, ex.: `cover.webp`) e `cover_origem` (arquivo do
   banco). O campo `palavras` e o `wordCount` do schema precisam ser a
   **contagem real** do texto do artigo, não uma estimativa.
4. Rode `python tools/build_blog.py` a partir da raiz do site. Ele valida tudo
   (capa existe, wordCount bate, bloco de relacionados presente, imagem não
   repetida, nenhuma pasta órfã) e **regenera sozinho** `blog/index.html` e
   `sitemap.xml`. Se ele apontar problema, corrija — não publique por cima.
   Nunca edite a listagem ou o sitemap na mão.
5. `git add` os arquivos do artigo (incluindo a capa) + os 3 arquivos
   atualizados (`posts.json`, `blog/index.html`, `sitemap.xml`), commit
   `Blog: publica '<título>'`, `git pull --rebase`, `git push`.

Isso é mais manual que o pipeline da Hépego (que roda via GitHub Actions) —
tome cuidado extra pra manter a listagem e o sitemap sempre sincronizados com
os artigos existentes antes de publicar um novo.

## Checklist final antes do commit

- [ ] Palavra-chave primária não colide com nenhum artigo do `posts.json`.
- [ ] Localidade diferente das dos 2 posts mais recentes; campo `local` preenchido.
- [ ] Voz (1ª/3ª pessoa) alternada em relação ao post anterior.
- [ ] Nenhuma menção a nome de estúdio, agência ou empresa como autor.
- [ ] `jobTitle` = "Designer e criador de sites"; localidade do schema = Piraquara.
- [ ] Bloco `blog-relacionados` com 3 artigos + página-mãe, e 1 link contextual no texto.
- [ ] Perguntas do `FAQPage` idênticas às do HTML.
- [ ] `palavras` e `wordCount` batendo com a contagem real.
- [ ] Título sem duplicar o sufixo "· Eros Gomes" e sem dúvida negativa.
- [ ] Capa vinda de `assets/blog/banco/`, ainda não usada, com `cover_origem` registrado.
- [ ] `python tools/build_blog.py` rodou sem apontar nenhum problema.
- [ ] Humanizer aplicado no texto inteiro.
