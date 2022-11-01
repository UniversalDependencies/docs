---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
udver: '2'
---

The <code>nmod</code> relation is used for nominal modifiers that depend on another noun or noun phrase and functionally corresponds to an attribute, or genitive complement. 
~~~ sdparse
Vi sono migliaia di casi di questo genere . 
nmod(migliaia, casi)
nmod(casi, genere)
~~~

From **v2**, nominal modifiers that depend on a verb, adverb or adjective are covered by the new [obl]():

~~~ sdparse
Da il '93 dirige il Festival di Taormina 
obl(dirige, '93)
nmod(Festival, Taormina)
~~~

~~~ sdparse
Lei ha la tipica camminata da spia 
nmod(camminata, spia)
~~~

~~~ sdparse
Irene venga a lezione di tolleranza 
obl(venga, lezione)
nmod(lezione, tolleranza)
~~~

~~~ sdparse
Trascorrevo i giorni su una sedia a rotelle 
obl(Trascorrevo, sedia)
nmod(sedia, rotelle)
~~~

<!-- Interlanguage links updated So kvě 14 19:03:45 CEST 2022 -->
