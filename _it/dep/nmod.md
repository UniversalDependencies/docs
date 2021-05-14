---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
udver: '2'
---

The <code>nmod</code> relation is used for nominal modifiers. They depend either on another noun (group “noun dependents”) or on a predicate (group “non-core dependents of clausal predicates”).  
In Italian, <code>nmod</code> is used for non-prepositional and prepositional complements; the most common complements are temporal, place and specification. 

~~~ sdparse
Vi sono migliaia di casi di questo genere . 
nmod(migliaia, casi)
nmod(casi, genere)
~~~
~~~ sdparse
Da il '93 dirige il Festival di Taormina 
nmod(dirige, '93)
nmod(Festival, Taormina)
~~~
~~~ sdparse
Esodo controllato a Civitavecchia . 
nmod(Esodo, Civitavecchia)
~~~
~~~ sdparse
E' stato trent' anni fa parlamentare comunista. 
nmod(parlamentare, anni)
~~~



<!-- Interlanguage links updated Pá kvě 14 11:09:09 CEST 2021 -->
