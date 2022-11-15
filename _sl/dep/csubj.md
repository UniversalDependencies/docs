---
layout: relation
title:  'csubj'
shortdef : 'clausal subject'
udver: '2'
---

The `csubj` relation is used for clausal subjects of a clause. The head of the relation is the predicate of the main clause, and the dependent is the predicate of the clausal subject. 

~~~ sdparse
Karkoli že bi ruski predsednik rekel študentom , bi tukaj doživelo uspeh .
csubj(doživelo,rekel)
~~~
~~~ sdparse
Tako se večkrat zgodi , da so podjetja še vesela , če občani ne zberejo kaj dosti teh odpadkov .
csubj(zgodi,vesela)
cop(vesela,so)
~~~
~~~ sdparse
Vprašanje je , ali jih bomo obdržali na listi . 
csubj(Vprašanje,obdržali)
cop(Vprašanje,je)
~~~
~~~ sdparse
Bilo je	jasno , da ne bo mogel prebrati knjige .
csubj(jasno,mogel)
cop(jasno,Bilo)
~~~

The `csubj` relation in Slovenian is also used for non-finite clauses with infinitives.

~~~ sdparse
Podatke iz evidence je/AUX mogoče/ADJ	dobiti samo na podlagi pisne prošnje posameznika .
csubj(mogoče,dobiti)
cop(mogoče,je)
~~~
~~~ sdparse
Mislim , da je zares velik dar srečati takega človeka .
csubj(dar,srečati)
cop(dar,je)
~~~
~~~ sdparse
Za detektiva bi bil pravi izziv odkriti , kje spi kralj tatov .
csubj(izziv,odkriti)
cop(izziv,bil)
~~~
~~~ sdparse
Te modele je/VERB treba/ADV potem le malenkostno prilagoditi .
csubj(je,prilagoditi)
advmod(je,treba)
~~~
<!-- Interlanguage links updated Po lis 14 15:35:19 CET 2022 -->
