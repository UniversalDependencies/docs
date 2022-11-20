---
layout: relation
title: 'dislocated'
shortdef: 'dislocated elements'
udver: '2'
---

The `dislocated` relation is used for dislocated words that appear at the start or end of a sentence and do not fulfill the usual core grammatical relations or serve as an additional explanation for one of the core elements. Typical examples include fronted words at the beginning of a sentence that introduce the topic, and postponed words at the end which add emphasis. 

~~~ sdparse
Marko , on se je udeležil vsakega sestanka . \n Marko , he REFLEX aux-PAST attended every meeting . 
dislocated(udeležil,Marko-1)
nsubj(udeležil,on)
dislocated(attended,Marko-11)
nsubj(attended,he)
~~~

~~~ sdparse
Nikoli jih nismo zares razumeli , otrok . \n Never them we-did-not really understand , children .
dislocated(razumeli,otrok)
obj(razumeli,jih)
dislocated(understand,children)
obj(understand,them)
~~~
<!-- Interlanguage links updated Po lis 14 15:35:24 CET 2022 -->
