---
layout: base
title:  'Tokenization'
permalink: cs/overview/tokenization.html
---

# Tokenization

This document is a placeholder for the language-specific overview of
guidelines for tokenization.

Stažené tvary v češtině

1. předložka + osobní zájmeno "on" ("něj")

proň = pro něj = for him
naň = na něj = on him
oň = o něj = about him
zaň = za něj = behind him

Poznámka: Analogicky stažené tvary předložky a tázacího zájmena "co" se nerozdělují, protože výsledkem je příslovce: proč, nač, oč, zač.

2. příčestí, zájmeno nebo podřadící spojka + pomocné sloveso "být" ve 2. osobě jednotného čísla ("jsi")

udělals = udělal jsi = you have done
tys = ty jsi = you have
ses = jsi se (se jsi) = you have ... yourself
sis = jsi si (si jsi) = you have ... yourself
cos = co jsi = what you have
tos = to jsi = you have ... that
žes = že jsi = that you have

Poznámka: Toto pravidlo se nevztahuje na slova "bys", "abys" a "kdybys". Vypadají sice podobně, ale "bys" je samostatným tvarem pomocného slovesa "být" a "abys" a "kdybys" sice jsou stažené tvary, ale vznikly z "bys", ne ze "jsi".

3. podřadící spojka "aby" nebo "kdyby" + podmiňovací tvar pomocného slovesa "být"

Zdá se mi, že etymologicky jde o spojení "až+by" a "když+by", ale nemám to ověřené v literatuře.
Asi je ale přirozenější vidět v datech "aby+by" a "kdyby+by", jako to bylo v PDT 1.0.
Co na to ostatní?

abych = až bych = so that I would
abys = až bys = so that you would
aby = až by = so that he/she/it/they would
abychom = až bychom = so that we would
abyste = až byste = so that you would
kdybych = když bych = if I would
kdybys = když bys = if you would
kdyby = když by = if he/she/it/they would
kdybychom = když bychom = if we would
kdybyste = když byste = if you would

4. sloveso + spojka "neboť"

dělámť = because I do
děláť = because he/she/it does
dělalť = because he did

Tvary z této skupiny lze považovat za zastaralé.

5. sloveso + spojka "li"

Tato spojka se připojuje ke slovesnému tvaru pomocí spojovníku (bez mezer), ale během tokenizace je nutné ji oddělit jako samostatné syntaktické slovo.

je-li = je + - + li = if he/she/it is
bude-li = bude + - + li = if he/she/it will be
byl-li = byl + - + li = if he was

6. ostatní složeniny s využitím spojovníku, zejména (ale nejen) přídavných jmen, také rozdělujeme

česko-slovenský
česko-německý
německo-český

Rozdělování je v tomto případě výhodné kvůli statistickým modelům, ale není nezbytné pro zachycení syntaxe.
V PDT se to tak nicméně tradičně dělá. Je vhodné na to upozornit, protože tím dostáváme jinak neexistující
tvar přídavného jména "česko-", "německo-" atd., který potřebuje svou vlastní morfologickou značku.
Složeniny bez spojovníku ("středopravý") se nerozdělují.

----------

Chceme tvrdit, že povinně zvratná slovesa jsou "mwe"? Já jsem spíš proti, ale umožnilo by to jednak odlišit závislosti typu AuxT, jednak by nám to dovolilo u "dát se" věšet "se" na "dát" a ne na infinitiv plnovýznamového slovesa.
