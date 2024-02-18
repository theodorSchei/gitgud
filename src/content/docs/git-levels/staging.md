---
title: "Staging"
sidebar:
  # Set a custom order for the link (lower numbers are displayed higher up)
  order: 3
---

Når git har fått beskjed om å følge med på endringene i en fil, vil filen være i staging-nivået. Dette betyr at git er klar til å følge med på endringene i filen. Staging-nivået er et mellomnivå mellom lokal arbeidsmappe og lokal repository, hvor vi legger til filene og endringene vi ønsker å lagre i git-historikken. På denne måten kan man velge hvilke endringer som skal være med i hver "versjon" av prosjektet.

## Hvordan legge til filer i staging?

For å legge til filer i staging-nivået bruker vi kommandoen `git add`. Denne kommandoen legger til filene i staging-nivået. Når filene er lagt til i staging-nivået er git klar til å følge med på endringene i filene.

## Eksempel

Se for deg at i en skole-oblig så har du to filer: `oblig1.py` hvor du har gjort selve oppgaven og `test.py` hvor du bare skulle teste noe kjapt. Du vil ikke at endringene i `test.py` skal være med i git, så derfor legger du kun til `oblig1.py` i staging-nivået.
