---
title: "Lokalt repository"
sidebar:
  # Set a custom order for the link (lower numbers are displayed higher up)
  order: 4
---

Etter at filene er lagt til i staging-nivået, kan endringene i filene lagres i git-historikken. Dette betyr at endringene i filene er lagret i git-historikken og kan hentes frem igjen senere. Når filene er lagret i git-historikken er de i local repository-nivået. Hver "endring" i git-historikken kalles en "commit". En commit er en "versjon" av prosjektet, og består av endringene som er lagret i git-historikken.

## Hvordan lagre endringer til local repository-nivået?

For å lagre endringer til det lokale repositoryet bruker vi kommandoen `git commit`. Denne kommandoen lagrer endringene i staging-nivået i git-historikken. Når endringene er lagret i git-historikken er de i local repository-nivået.

## Eksempel

Du har gjør en oblig i python. Du har blitt ferdig med første oppgave, og ønsker å lagre endingene som en første versjon av prosjektet. Du legger til filen `oblig1.py` i staging-nivået og lagrer endringene i git-historikken ved å bruke `git commit`.
