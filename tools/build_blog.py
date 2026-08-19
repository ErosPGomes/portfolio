#!/usr/bin/env python3
"""Regenera a listagem do blog e o sitemap a partir de blog/posts.json.

Uso, sempre a partir da raiz do site:

    python tools/build_blog.py            # regenera e valida
    python tools/build_blog.py --check    # só valida, não escreve nada

O posts.json é a fonte de verdade. Este script existe para que a listagem
(blog/index.html) e o sitemap.xml nunca fiquem fora de sincronia com os
artigos publicados — foi esse descompasso que gerou os problemas de julho
de 2026.
"""
import io
import json
import os
import re
import sys
from datetime import date

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOMINIO = "https://erosgomes.com.br"

# Slugs que são redirecionamentos (consolidação de conteúdo), não artigos.
# Nunca entram no posts.json, na listagem ou no sitemap.
STUBS = {
    "salao-de-beleza-piraquara-site-celular",
    "quanto-custa-site-rapido-salao-de-beleza",
    "erro-site-salao-de-beleza-lento",
    "site-rapido-vs-instagram-salao-beleza",
}

PAGINAS_FIXAS = [
    ("/", "monthly", "1.0"),
    ("/criacao-de-sites-em-piraquara/", "monthly", "0.9"),
    ("/blog/", "weekly", "0.8"),
]

MESES = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho",
         "agosto", "setembro", "outubro", "novembro", "dezembro"]


def caminho(*partes):
    return os.path.join(RAIZ, *partes)


def data_br(iso):
    ano, mes, dia = iso.split("-")
    return f"{int(dia)} de {MESES[int(mes) - 1]} de {ano}"


def ler_posts():
    posts = json.load(io.open(caminho("blog", "posts.json"), encoding="utf-8"))
    posts.sort(key=lambda p: (p["data"], p["slug"]), reverse=True)
    return posts


def validar(posts):
    """Devolve a lista de problemas encontrados."""
    problemas = []
    obrigatorios = ("slug", "titulo", "descricao", "data", "palavras", "local", "cover")

    for p in posts:
        for campo in obrigatorios:
            if not p.get(campo):
                problemas.append(f"{p.get('slug', '?')}: campo '{campo}' vazio")
        if p["slug"] in STUBS:
            problemas.append(f"{p['slug']}: é um redirecionamento, não pode estar no posts.json")

        artigo = caminho("blog", p["slug"], "index.html")
        if not os.path.exists(artigo):
            problemas.append(f"{p['slug']}: pasta do artigo não existe")
            continue
        if not os.path.exists(caminho("blog", p["slug"], p["cover"])):
            problemas.append(f"{p['slug']}: capa '{p['cover']}' não encontrada")

        html = io.open(artigo, encoding="utf-8").read()
        wc = re.search(r'"wordCount":\s*(\d+)', html)
        if wc and int(wc.group(1)) != p["palavras"]:
            problemas.append(
                f"{p['slug']}: wordCount do schema ({wc.group(1)}) != palavras ({p['palavras']})")
        if "blog-relacionados" not in html:
            problemas.append(f"{p['slug']}: sem o bloco 'Leia também' (links internos)")
        if '"jobTitle": "Designer de marcas"' in html:
            problemas.append(f"{p['slug']}: jobTitle desatualizado no schema")
        if "Cross Design" in html:
            problemas.append(f"{p['slug']}: menciona nome de empresa (regra de marca)")

    slugs = {p["slug"] for p in posts}
    if len(slugs) != len(posts):
        problemas.append("há slugs duplicados no posts.json")

    pastas = {d for d in os.listdir(caminho("blog"))
              if os.path.isdir(caminho("blog", d))} - STUBS
    for orfa in sorted(pastas - slugs):
        problemas.append(f"{orfa}: pasta existe mas não está no posts.json")

    origens = [p.get("cover_origem") for p in posts if p.get("cover_origem")]
    repetidas = {o for o in origens if origens.count(o) > 1}
    for o in sorted(repetidas):
        problemas.append(f"imagem do banco reutilizada em mais de um post: {o}")

    return problemas


def gerar_listagem(posts):
    f = caminho("blog", "index.html")
    html = io.open(f, encoding="utf-8").read()
    inicio = html.index('<a class="blog-card"')
    fim = html.rindex("</a>", 0, html.index("</main>")) + len("</a>")

    cards = []
    for p in posts:
        cards.append(
            f'<a class="blog-card" href="/blog/{p["slug"]}/">\n'
            f'        <img class="blog-card-thumb" src="/blog/{p["slug"]}/{p["cover"]}" alt="" loading="lazy">'
            f'<div class="blog-card-corpo">\n'
            f'        <h2>{p["titulo"]}</h2>\n'
            f'        <p>{p["descricao"]}</p>\n'
            f'        <span class="blog-meta">{data_br(p["data"])} · {p["local"]}</span>\n'
            f'        </div>\n'
            f'      </a>')

    io.open(f, "w", encoding="utf-8").write(
        html[:inicio] + "\n      ".join(cards) + html[fim:])
    return len(cards)


def gerar_sitemap(posts):
    hoje = date.today().isoformat()
    urls = [(DOMINIO + p, hoje, cf, pr) for p, cf, pr in PAGINAS_FIXAS]
    for p in posts:
        urls.append((f'{DOMINIO}/blog/{p["slug"]}/', p.get("atualizado") or p["data"],
                     "monthly", "0.7"))

    xml = ['<?xml version="1.0" encoding="UTF-8"?>',
           '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for loc, lastmod, changefreq, prioridade in urls:
        xml += ["  <url>", f"    <loc>{loc}</loc>", f"    <lastmod>{lastmod}</lastmod>",
                f"    <changefreq>{changefreq}</changefreq>",
                f"    <priority>{prioridade}</priority>", "  </url>"]
    xml.append("</urlset>")
    io.open(caminho("sitemap.xml"), "w", encoding="utf-8").write("\n".join(xml) + "\n")
    return len(urls)


def main():
    apenas_checar = "--check" in sys.argv
    posts = ler_posts()

    problemas = validar(posts)
    if problemas:
        print("PROBLEMAS ENCONTRADOS:")
        for p in problemas:
            print("  !", p)
        if apenas_checar:
            return 1
        print("\nCorrija antes de publicar. Nada foi gerado.")
        return 1

    print(f"OK: {len(posts)} artigos validados")
    if apenas_checar:
        return 0

    cards = gerar_listagem(posts)
    urls = gerar_sitemap(posts)
    io.open(caminho("blog", "posts.json"), "w", encoding="utf-8").write(
        json.dumps(posts, ensure_ascii=False, indent=2) + "\n")
    print(f"OK: listagem regenerada ({cards} cards)")
    print(f"OK: sitemap regenerado ({urls} URLs)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
