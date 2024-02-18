---
title: "Lokal arbeidsmappe / Untracked"
sidebar:
  # Set a custom order for the link (lower numbers are displayed higher up)
  order: 2
---

Når en ny fil blir lagt til i en mappe som er en del av et Git-prosjekt, vil filen være i lokal arbeidsmappe og er ikke lagt til i Git ennå. Dette betyr at endringene i filen ikke blir fulgt av Git. For at git skal følge med på endringene i filen må filen legges til i Git.

## Hvorfor trenger vi å legge til filer i Git?

Man skulle kanskje tro at Git automatisk følger med på endringene i filene i prosjektet. Dette er ikke tilfelle. Git følger kun med på endringene i filene som er lagt til i Git. Dette er fordi Git er designet for å være raskt og effektivt. Hvis Git skulle følge med på alle endringene i alle filene i prosjektet, ville Git bli tregt og lite effektivt.

## Eksempel

Se for deg at du gjør en oblig på skolen. Du har laget en fil som heter `oblig1.py`. Når du har skrevet ferdig koden og lagret filen, vil filen være i din lokale arbeidsmappe. For at Git skal følge med på endringene i filen, må filen legges til i Git.
