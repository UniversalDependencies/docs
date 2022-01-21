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

From <b>v2</b>, nominal modifiers that depend on a verb, adverb or adjective are covered by the new <code>obl</code> relation:

~~~ sdparse
Da il '93 dirige il Festival di Taormina 
obl(dirige, '93)
nmod(Festival, Taormina)
~~~



<!-- Interlanguage links updated St lis 3 20:58:58 CET 2021 -->
