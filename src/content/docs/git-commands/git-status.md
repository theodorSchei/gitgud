---
title: "git status"
sidebar:
  order: 3
---

`git status` er en kommando som gir deg statusen til git-prosjektet. Den viser hvilke filer som er i lokal arbeidsmappe, hvilke filer som er i staging-nivået og hvilke filer som er i local repository-nivået. Denne kommandoen er gull verdt, og gir deg en oversikt over hva som skjer i git-prosjektet.

La oss gå gjennom et eksempel:

```
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   README.md
        new file:   package.json
        new file:   src/components/Card.astro
        new file:   src/layouts/Layout.astro
        new file:   src/pages/index.astro

```

Her ser vi at det er 5 filer som er i staging-nivået (Under changes to be commited). Dette betyr at disse filene er lagt til i git, og endringene i filene vil bli lagret i git-historikken når vi bruker `git commit`.
