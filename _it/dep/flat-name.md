---
layout: relation
title: 'flat:name'
shortdef: 'names'
udver: '2'
---

The `flat:name` relation is a specialization of `flat` used for names.

~~~ sdparse
Ecco l'arringa di Tiziana Maiolo . 
name(Tiziana, Maiolo)
~~~

Names are annotated in a flat, head-initial structure, in which all words in the name modify the first one using the <code>flat:name</code> label. This also works for prepositions or determiners and numerals that are part of the names.

~~~ sdparse
Formula 1/NUM . 
flat:name(Formula, 1)
~~~
~~~ sdparse
Marcello Dell' Utri . 
flat:name(Marcello, Dell')
flat:name(Marcello, Utri)
~~~

Words joined by <code>flat:name</code> should all be part of a minimal noun phrase; otherwise regular syntactic relations should be used. For organization names with clear syntactic modification structure, the dependencies should reflect the syntactic modification structure using regular syntactic relation. 

~~~ sdparse
L' ordine Mauriziano
det(ordine, L')
amod(ordine, Mauriziano)
~~~
~~~ sdparse
Il Ministero di gli Interni 
det(Ministero, Il)
nmod(Ministero, Interni)
det(Interni, gli)
case(Interni, di)
~~~

In addition, regular syntactic relations are used: 

* for a modifying determiner or 
* to connect together the words of a description or name which involve embedded prepositional phrases, sentences, etc.

~~~ sdparse
Mariatersa Di Lascia
name(Mariatersa, Lascia)
case(Lascia, Di)
~~~
~~~ sdparse
Università di Pristina 
name(Università, Pristina)
case(Pristina, di)
~~~


<!-- Interlanguage links updated Út zář 29 20:43:19 CEST 2020 -->
