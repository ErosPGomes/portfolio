# site/ — erosgomes.com.br

Este é o site que está **no ar**. Repositório `ErosPGomes/portfolio`, branch
`main`, publicado por GitHub Pages: **todo push vai para o ar em ~1 minuto.**
Não existe ambiente de teste. Para ver antes de publicar, rode local:

```bash
python -m http.server 8000
```

## Onde fica cada coisa

```
site/
├── index.html      ← a home (uma página só; conteúdo dos projetos em data.js)
├── data.js         ← lista de projetos e sites que a home monta
├── app.js          ← monta as galerias da home
├── menu.js         ← menu mobile (usado por todas as páginas)
├── styles.css      ← estilo do site inteiro
│
├── criacao-de-sites-em-piraquara/   ← página de serviço (preço, prazo, FAQ)
│
├── blog/
│   ├── index.html  ← listagem  ⚠ GERADA, não edite na mão
│   ├── posts.json  ← ÍNDICE DE TODOS OS ARTIGOS — fonte de verdade
│   ├── blog.css    ← estilo só do blog
│   ├── DNA.md      ← estratégia do blog (o que escrever e como)
│   ├── ROTINA.md   ← o passo a passo que a rotina semanal executa
│   └── <slug>/     ← uma pasta por artigo: index.html + cover.webp
│
├── assets/
│   ├── blog/banco/ ← fotos disponíveis para capa (+ LEIA-ME)
│   ├── fonts/      ← as duas fontes do site
│   ├── sites/      ← screenshots dos sites publicados
│   └── *.jpg/webp  ← fotos dos projetos e do Eros
│
├── tools/build_blog.py  ← valida e regenera listagem + sitemap
├── sitemap.xml     ← ⚠ GERADO, não edite na mão
├── robots.txt
├── CNAME           ← o domínio. Não mexa.
└── .nojekyll       ← impede o GitHub de processar o site. Não apague.
```

## As três coisas que quebram o site

1. **Editar `blog/index.html` ou `sitemap.xml` na mão.** Os dois são gerados a
   partir do `posts.json`. Qualquer edição manual é perdida no próximo build e,
   pior, deixa a listagem fora de sincronia com os artigos.
   O certo é editar o `posts.json` e rodar:
   ```bash
   python tools/build_blog.py
   ```
2. **Renomear a pasta de um artigo.** O nome da pasta é a URL. Renomear
   significa quebrar um link que o Google já indexou. Se precisar mesmo, o
   caminho é deixar a pasta antiga com um redirecionamento — como foi feito com
   os quatro artigos de salão de beleza consolidados em julho.
3. **Apagar `CNAME` ou `.nojekyll`.** O primeiro derruba o domínio, o segundo
   faz o GitHub tentar processar o site como blog Jekyll e quebrar os caminhos.

## Publicar um artigo novo

O procedimento completo está em `blog/ROTINA.md` — é o mesmo que a rotina
semanal automática segue, e serve igual se você for publicar à mão.

## Pastas que NÃO estão neste repositório

Versões antigas do site, o editor aposentado e os backups ficam em
`../_arquivo/`. Nada de lá está no ar. Veja `../LEIA-ME.md`.
