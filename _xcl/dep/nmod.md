---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
udver: '2'
---

The `nmod` relation is used for nominal dependents of another noun or noun phrase and functionally corresponds to an attribute, or genitive complement. 
In UD_Classical_Armenian-CAVaL, it also applies to cases where the head or dependent is a verbal noun (UPOS `Verb`, feature `VerbForm=Vnoun`).
Nominal dependents of verbs, adjectives, and adverbs are tagged as [obl](). 

~~~ sdparse
մերձեալ է արքայութիւն երկնից \n the kingdom of heaven is at hand
nmod(արքայութիւն, երկնից)
nmod(kingdom, heaven)
~~~

~~~ sdparse
ժամանակ աստեղն երեւելոյ \n time the star appeared
nmod(ժամանակ, երեւելոյ)
~~~
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:11:02 CET -->
