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
Irene venga a lezione di tolleranza 
obl(venga, lezione)
nmod(lezione, tolleranza)
~~~


<!-- Interlanguage links updated St lis 3 20:58:58 CET 2021 -->
