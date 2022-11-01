---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
udver: '2'
---

`cc` is the relation between a conjunct and a preceding coordinating conjunction, with the coordinating conjunction being treated as the dependent of the coordinated element that follows it. 

~~~ sdparse
mojstrica poslovne komunikacije in svetovalka
cc(svetovalka,in)
conj(mojstrica,svetovalka)
~~~
~~~ sdparse
Meso je lahko belo , modrikasto ali zelenkasto
cc(zelenkasto,ali)
conj(belo,modrikasto)
conj(belo,zelenkasto)
~~~
~~~ sdparse
na območju od Kočevske Reke do Pirč oz. Broda na Kolpi
cc(Broda,oz.)
conj(Pirč,Broda)
~~~
~~~ sdparse
Vprašanje se morda zdi absurdno , vendar je nekaj vzporednic .
cc(je,vendar)
conj(zdi,je)
~~~

A coordinating conjunction may also appear at the beginning of a sentence, when the preceding conjunct is expressed in the preceding sentence or implicitly.

~~~ sdparse
A slednjega se pri Peugeotu gotovo ne bojijo več .
cc(bojijo,A)
~~~

In case of multi-word coordinating conjunctions, such as **_tako-kot_** (_both-and_), **_niti-niti_**, **_ne-ne_** (_neither-nor_), **_ali-ali_** (_either-or_), only the second word is considered to be `cc`, while the first word is analysed as a preconjunct ([cc:preconj]()).

~~~ sdparse
Tudi zato s tovrstnim nasiljem ne ravnatelji ne učitelji nimajo izkušenj .
cc(učitelji,ne-8)
cc:preconj(ravnatelji,ne-6)
conj(ravnatelji,učitelji)
~~~
