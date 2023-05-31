---
layout: relation
title:  'csubj'
shortdef : 'clausal subject'
udver: '2'
---

The `csubj` relation is used for clausal subjects of a clause. The head of the relation is the predicate of the main clause, and the dependent is the predicate of the clausal subject. 

~~~ sdparse
Karkoli že bi ruski predsednik rekel študentom , bi tukaj doživelo uspeh . \n Whatever at-all would Russian president say to-students , would here have success . 
csubj(doživelo,rekel)
csubj(have,say)
~~~
~~~ sdparse
Tako se večkrat zgodi , da so podjetja še vesela , če občani ne zberejo kaj dosti teh odpadkov . \n Like-that it often happens , that are companies even happy , if citizens do-not collect quite a-lot-of this trash .
csubj(zgodi,vesela)
cop(vesela,so)
csubj(happens,happy)
cop(happy,are)
~~~
~~~ sdparse
Vprašanje je , ali jih bomo obdržali na listi . \n Question is , if them we-will keep on list . 
csubj(Vprašanje,obdržali)
cop(Vprašanje,je)
csubj(Question,keep)
cop(Question,is)
~~~
~~~ sdparse
Bilo je	jasno , da ne bo mogel prebrati knjige . \n It-was aux-PAST clear , that not will be-able-to read book .
csubj(jasno,mogel)
cop(jasno,Bilo)
csubj(clear,be-able-to)
cop(clear,It-was)
~~~

The `csubj` relation in Slovenian is also used for non-finite clauses with infinitives.

~~~ sdparse
Podatke iz evidence je/AUX mogoče/ADJ	dobiti samo na podlagi pisne prošnje posameznika . \n Data from record is/AUX possible/ADJ to-get only based on written request of-individual
csubj(mogoče,dobiti)
cop(mogoče,je)
csubj(possible,to-get)
cop(possible,is)
~~~
~~~ sdparse
Mislim , da je zares velik dar srečati takega človeka . \n I-think , that it-is truly great gift to-meet such person .
csubj(dar,srečati)
cop(dar,je)
csubj(gift,to-meet)
cop(gift,it-is)
~~~
~~~ sdparse
Za detektiva bi bil pravi izziv odkriti , kje spi kralj tatov . \n For detective it-would be true challenge to-discover , where sleeps king of-thieves .
csubj(izziv,odkriti)
cop(izziv,bil)
csubj(challenge,to-discover)
cop(challenge,be)
~~~
~~~ sdparse
Te modele je/VERB treba/ADV potem le malenkostno prilagoditi . \n These models are/VERB required then only slightly to-be-adapted .
csubj(je,prilagoditi)
advmod(je,treba)
csubj(are,to-be-adapted)
advmod(are,required)
~~~
<!-- Interlanguage links updated Út 9. května 2023, 20:04:09 CEST -->
