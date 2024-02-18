---
layout: "../layouts/Layout.astro"
title: "Git nivåer"
---

# Git operasjoner

Vi styrer git med kommandoer. Det kan gjøres gjennom terminalen, eller gjennom et GUI-verktøy som for eksempel GitHub Desktop. I denne guiden vil vi fokusere på terminalen. En fordel med å bruke terminalen er at det er likt for alle maskiner og oppsett, og man blir bedre kjent med terminalen.

## De viktigste operasjonene i Git

- **git init** - Initialiserer et nytt git-prosjekt.
- **git clone** - Klone et eksisterende git-prosjekt fra en ekstern server.
- **git status** - Sjekke statusen til git-prosjektet.
- **git add** - Legge til filer i staging-nivået.
- **git commit** - Lagre endringer i git-historikken.
- **git push** - Flytte endringer fra local repository til remote repository.
- **git pull** - Hente endringer fra remote repository til local repository.

# Git init

For å lage et nytt lokalt git-repository så bruker vi kommandoen git init. Dette starter opp git i mappen og betyr at git vil følge med på endringene i filene i mappen.

# git status

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

# git add

`git add` er en kommando som legger til filer i staging-nivået. Dette betyr at git er klar til å følge med på endringene i filene. Når filene er lagt til i staging-nivået er git klar til å følge med på endringene i filene. Dette er nyttig for å kunne velge hvilke endringer som skal være med i hver "versjon" av prosjektet.

## Eksempel

Se for deg at du jobber med en oblig, og er ferdig med første oppgave. Du vil lagre endringene i git-historikken, og legger derfor filen til i staging-nivået:

```bash
git add oblig1.py
```

# git commit

Commits er "versjoner" av prosjektet. Når vi bruker `git commit` lagrer vi endringene i git-historikken. Dette betyr at endringene i filene er lagret i git-historikken og kan hentes frem igjen senere. Dette er nyttig for å kunne hente frem tidligere versjoner av prosjektet. Dersom vi ønsker å se en liste over commits kan vi bruke `git log`.

## Eksempel

Se for deg at du jobber med en oblig og kun mangler siste oppgave. Du har vært flink og har lagret en commit hver gang du har blitt ferdig med en oppgave. Det er 1 time til innlevering og du har i et forsøk på siste oppgave klart å ødelegge hele koden som du har jobbet på i 3 dager. Heldigvis har du lagret en commit etter hver oppgave, og kan derfor hente frem koden fra en tidligere commit. Dagen er reddet, takket være git commits.

# Git push

En ting er å lagre endringene i ditt lokale repository. Det gjør det mulig for deg å hente frem tidligere versjoner av prosjektene dine. Men dersom man ønsker å samarbeide med andre, eller ønsker å hente frem filene på en annen maskin, trenger vi å laste opp filene til en ekstern server (remote repository). Dette kan gjøres ved å bruke `git push`.

## Eksempel

Du har sittet på skolepcen og jobbet med obligen din. Nå er du ferdig og ønsker å laste opp filene til GitHub, så du kan fortsette å jobbe videre hjemmefra. Du bruker `git push` for å laste opp filene til GitHub.

# Git pull

Dersom det er noen andre som har gjort endringer i prosjektet, og du ønsker å hente ned disse endringene til din lokale maskin, kan du bruke `git pull`. Dette henter ned endringer fra remote repostiory til local repository.

## Eksempel

Du samarbeider med en medstudent på en oblig. Du har gjort ferdig din del av prosjektet, og din samarbeidspartner er feridg med sin del. Dere ønsker å sette sammen prosjektet, og du bruker `git pull` for å hente ned filene fra GitHub til din lokale maskin.
