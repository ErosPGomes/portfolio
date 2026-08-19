# Banco de imagens do blog

Esta pasta é o **único lugar de onde a rotina semanal pode tirar a capa de um
artigo**. Ela não gera nem baixa imagem de lugar nenhum.

## Como o Eros alimenta

1. Otimize a foto como já faz (saída em `.webp`, largura de 1600px, proporção
   16:9 de preferência).
2. Nomeie o arquivo de forma descritiva, em minúsculas e sem acento — o nome é
   a única pista que a rotina tem sobre o conteúdo da imagem:
   `notebook-mesa-madeira.webp`, `eros-reuniao-cliente.webp`,
   `loja-fachada-piraquara.webp`. Nada de `IMG_4821.webp`.
3. Jogue os arquivos nesta pasta e faça commit + push. Pode mandar várias de
   uma vez — a rotina consome uma por semana.

Formatos aceitos: `.webp`, `.jpg`, `.png`.

## Como a rotina consome

- Escolhe **um** arquivo que ainda não tenha sido usado. O controle é o campo
  `cover_origem` de cada post em `blog/posts.json`, que guarda o nome do
  arquivo de origem.
- Copia o arquivo escolhido para `blog/<slug>/cover.<ext>`, preservando a
  extensão, e registra no `posts.json`:
  `"cover": "cover.webp"`, `"cover_origem": "notebook-mesa-madeira.webp"`.
- Nunca reutiliza uma origem já registrada. O `tools/build_blog.py` recusa a
  publicação se detectar imagem repetida entre dois posts.
- **Se a pasta estiver vazia** (ou todas as imagens já tiverem sido usadas), a
  rotina cai para `assets/eros-retrato.webp` ou `assets/eros-trabalho.webp`,
  publica normalmente e avisa no relatório que o banco precisa ser
  reabastecido.

## Por que isso substituiu o passo manual no Creative Studio

Antes, o Claude publicava o artigo e o Eros abria o Creative Studio depois só
para subir a capa. Com o banco versionado no GitHub, a rotina resolve a imagem
sozinha e o artigo já nasce completo — sem uma segunda passada manual.
