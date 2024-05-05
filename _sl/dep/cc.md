---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
udver: '2'
---

`cc` is the relation between a conjunct and a preceding coordinating conjunction, with the coordinating conjunction being treated as the dependent of the coordinated element that follows it. 

~~~ sdparse
mojstrica poslovne komunikacije in svetovalka \n master of-business communication and consultant
cc(svetovalka,in)
conj(mojstrica,svetovalka)
cc(consultant,and)
conj(master,consultant)
~~~
~~~ sdparse
Meso je lahko belo , modrikasto ali zelenkasto \n Meat can be white , bluish or greenish
cc(zelenkasto,ali)
conj(belo,modrikasto)
conj(belo,zelenkasto)
cc(greenish,or)
conj(white,bluish)
conj(white,greenish)
~~~
~~~ sdparse
na območju od Kočevske Reke do Pirč oz. Broda na Kolpi \n in area from Kočevska Reka to Pirče or Brod na Kolpi
cc(Broda,oz.)
conj(Pirč,Broda)
cc(Brod,or)
conj(Pirče,Brod)
~~~
~~~ sdparse
Vprašanje se morda zdi absurdno , vendar je nekaj vzporednic . \n Question can maybe seem absurd , but there-are some parallels .
cc(je,vendar)
conj(zdi,je)
cc(there-are,but)
conj(seem,there-are)
~~~

A coordinating conjunction may also appear at the beginning of a sentence, when the preceding conjunct is expressed in the preceding sentence or implicitly.

~~~ sdparse
A slednjega se pri Peugeotu gotovo ne bojijo več . \n But of-the-latter REFLEX at Peugeot probably not they-be-afraid anymore . 
cc(bojijo,A)
cc(they-be-afraid,But)
~~~

In case of multi-word coordinating conjunctions, such as **_tako-kot_** (_both-and_), **_niti-niti_**, **_ne-ne_** (_neither-nor_), **_ali-ali_** (_either-or_), **_bodisi-bodisi_**, **_ne le-ampak tudi_**, **_ne-temveč_** only the second word is considered to be `cc`, while the first word is analysed as a preconjunct ([cc:preconj]()).

~~~ sdparse
Tudi zato s tovrstnim nasiljem ne ravnatelji ne učitelji nimajo izkušenj . \n Also because-of-this with such violence neither principals nor teachers have experience .
cc(učitelji,ne-8)
cc:preconj(ravnatelji,ne-6)
conj(ravnatelji,učitelji)
cc(teachers,nor)
cc:preconj(principals,neither)
conj(principals,teachers)
~~~
<!-- Interlanguage links updated Ne 5. května 2024, 18:20:50 CEST -->
