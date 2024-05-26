# Nettside for å introdusere førsteårsstudenter til Git

[Ta gjerne en titt på løsningen!](https://git.tdor.no/)

## Teknisk
Nettsiden bruker Astro.js for å bygge siden fra markdown-filer. Det er tatt i bruk Astros starlight tema, men med en del konfigurering. For sporing brukes Google Analytics. 

## Struktur

Strukturen på siden ser slik ut:

```text
├── README.md
├── astro.config.mjs
├── package-lock.json
├── package.json
├── public
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── ...
│   ├── components
│   │   ├── CookieFooter.astro
│   │   ├── Experience.astro
│   │   ├── FeedbackNavbar.astro
│   │   ├── LikeThisPage.astro
│   │   ├── SelectCorrect.astro
│   │   └── TrackingHead.astro
│   ├── content
│   │   ├── config.ts
│   │   └── docs
│   │       ├── cookies.mdx
│   │       ├── git-commands
│   │       │   ├── git-add.mdx
│   │       │   ├── git-commit.mdx
│   │       │   ├── git-init.mdx
│   │       │   ├── git-pull.mdx
│   │       │   ├── git-push.mdx
│   │       │   ├── git-status.mdx
│   │       │   └── intro.mdx
│   │       ├── git-levels
│   │       │   ├── intro.mdx
│   │       │   ├── local-repo.mdx
│   │       │   ├── remote-repo.mdx
│   │       │   ├── staging.mdx
│   │       │   └── untracked.mdx
│   │       └── index.mdx
│   └── env.d.ts
└── tsconfig.json
```

Den viktigste mappen her er `src/content/docs/` hvor alt innhold ligger. Hver `.mdx`, `.astro` eller `.md` blir en del av nettsiden, og får egen route basert på filnavn og sti. I disse innholdsfilene er det ofte trekt inn komponenter som f.eks. en tilbakemeldingsknapp. Disse komponentene ligger under `src/components/`. Der ligger det også komponenter som utvider default konfigurasjon i Starlight-temaet. Noe som er kult med astro er at disse komponentene kan skrives med React/Vue/Svelte eller noe annet ønsket rammeverk, man kan til og med blande. Jeg har likevel valgt å skrive Astro-komponenter som bruker vanilla JS.

Grunnen til at det er brukt `.mdx` i stedet for `.astro` eller `.md` for innholdsfilene er for å få sipelheten av vanlig markdown, men fortsatt ha mulighet for å importere gjenbrukbare komponenter.

I toppen av hver innholdsfil er det en seksjon med litt metadata, som trengs under generering av nettsiden. Her er ett eksempel:

```
---
title: Introduksjon
description: Introduksjon til Git
sidebar:
  # Set a custom order for the link (lower numbers are displayed higher up)
  order: 0
---
...
```
I dette eksempeket spesifiseres det at siden skal komme først i sidemenyen, siden det er introsiden. Bortsett fra denne metadataen er det helt vanlige markdownfiler, med en å annen import av komponenter der det trengs:

```js
import LikeThisPage from '../../components/LikeThisPage.astro';

<LikeThisPage />

```

Importering av komponenter ser veldig likt ut som det gjør i JavaScript. Man kan også spesifisere parametre til komponenter:

```js
<SelectCorrect
  question = "Hva gjør 'git add' kommandoen i Git?"
  correct = "Den legger filen i staging-området." 
  wrong1 = "Den lager en ny fil i Git repository."
  wrong2 = "Den flytter alle endringene fra lokalt repository til eksternt repository."
/>
```

Ellers består repoet av mye konfigureringsfiler for å få bygg og tema til å fungere som ønsket.


## Kjøre lokalt

Alle kommandoer kjøres fra roten i prosjektet, i terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Vil du lære mer om astro?

Sjekk ut [dokumentasjonen](https://docs.astro.build), den er dødsbra!
