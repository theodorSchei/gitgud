---
layout: "../layouts/Layout.astro"
title: "Git nivåer"
---

# Git-nivåer

I Git finnes det fire forskjellige nivåer eller "stages" som filene kan være i. Når en ny fil blir lagt til må den først legges til i Git før endringene i filen kan følges. Når filen er lagt til i Git kan endringene i filen lagres i Git-historikken. Deretter kan endringene i filen lastes opp til en ekstern server.

## De fire nivåene

- **Lokal arbeidsmappe / Untracked** - Filen er i lokal arbeidsmappe og er ikke lagt til i Git ennå.
- **Staging** - Filen er lagt til og git er klar til å følge med på endringene i filen.
- **Local repository** - Filen er lagt til i Git og er lagret i git-historikken.
- **Remote repository** - Filen er lagret i en ekstern server.

Det er viktig å forstå forskjellen mellom de fire nivåene for å kunne bruke Git effektivt.

# Lokal arbeidsmappe / Untracked

Når en ny fil blir lagt til i en mappe som er en del av et Git-prosjekt, vil filen være i lokal arbeidsmappe og er ikke lagt til i Git ennå. Dette betyr at endringene i filen ikke blir fulgt av Git. For at git skal følge med på endringene i filen må filen legges til i Git.

## Hvorfor trenger vi å legge til filer i Git?

Man skulle kanskje tro at Git automatisk følger med på endringene i filene i prosjektet. Dette er ikke tilfelle. Git følger kun med på endringene i filene som er lagt til i Git. Dette er fordi Git er designet for å være raskt og effektivt. Hvis Git skulle følge med på alle endringene i alle filene i prosjektet, ville Git bli tregt og lite effektivt.

## Eksempel

Se for deg at du gjør en oblig på skolen. Du har laget en fil som heter `oblig1.py`. Når du har skrevet ferdig koden og lagret filen, vil filen være i din lokale arbeidsmappe. For at Git skal følge med på endringene i filen, må filen legges til i Git.

# Staging

Når git har fått beskjed om å følge med på endringene i en fil, vil filen være i staging-nivået. Dette betyr at git er klar til å følge med på endringene i filen. Staging-nivået er et mellomnivå mellom lokal arbeidsmappe og lokal repository, hvor vi legger til filene og endringene vi ønsker å lagre i git-historikken. På denne måten kan man velge hvilke endringer som skal være med i hver "versjon" av prosjektet.

## Hvordan legge til filer i staging?

For å legge til filer i staging-nivået bruker vi kommandoen `git add`. Denne kommandoen legger til filene i staging-nivået. Når filene er lagt til i staging-nivået er git klar til å følge med på endringene i filene.

## Eksempel

Se for deg at i en skole-oblig så har du to filer: `oblig1.py` hvor du har gjort selve oppgaven og `test.py` hvor du bare skulle teste noe kjapt. Du vil ikke at endringene i `test.py` skal være med i git, så derfor legger du kun til `oblig1.py` i staging-nivået.

# Local repository

Etter at filene er lagt til i staging-nivået, kan endringene i filene lagres i git-historikken. Dette betyr at endringene i filene er lagret i git-historikken og kan hentes frem igjen senere. Når filene er lagret i git-historikken er de i local repository-nivået. Hver "endring" i git-historikken kalles en "commit". En commit er en "versjon" av prosjektet, og består av endringene som er lagret i git-historikken.

## Hvordan lagre endringer til local repository-nivået?

For å lagre endringer til det lokale repositoryet bruker vi kommandoen `git commit`. Denne kommandoen lagrer endringene i staging-nivået i git-historikken. Når endringene er lagret i git-historikken er de i local repository-nivået.

## Eksempel

Du har gjør en oblig i python. Du har blitt ferdig med første oppgave, og ønsker å lagre endingene som en første versjon av prosjektet. Du legger til filen `oblig1.py` i staging-nivået og lagrer endringene i git-historikken ved å bruke `git commit`.

# Remote repository

Remote repository-nivået er en ekstern server hvor filene er lagret som for eksempel GitHub. Dette betyr at filene er lagret på en ekstern server og kan hentes frem igjen senere. Når filene er lagret i en ekstern server er de i remote repository-nivået. Dette er nyttig for å kunne hente frem filene på en annen maskin. Dette er også nyttig for å kunne samarbeide med andre på prosjektet.

## Hvordan flytte endringer fra local til remote repository og tilbake?

For å flytte endringene fra local repository til remote repository bruker vi kommandoen `git push`. Denne kommandoen flytter endringene fra local repository til remote repository. For å hente endringene fra remote repository til local repository bruker vi kommandoen `git pull`. Denne kommandoen henter endringene fra remote repository til local repository.

## Eksempel

Du har nå gjort ferdig hele obligen på skolen og ønsker å laste opp filene til GitHub. Du bruker `git push` for å laste opp filene til GitHub. Senere skal du fikse en feil på obligen hjemme, så du bruker `git pull` for å hente filene fra GitHub til din lokale maskin.
