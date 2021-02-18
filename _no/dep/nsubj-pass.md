---
layout: relation
title: 'nsubj:pass'
shortdef: 'passive nominal subject'
udver: '2'
---

A passive nominal subject is a noun phrase which is the syntactic subject of a passive clause. In Norwegian, the passive subject is the dependent of a verb with passive marking or a participle with a passive auxiliary attached.

~~~ sdparse
freden bygges også dag for dag \n peace is being built day by day
nsubj:pass(bygges,freden)
~~~

~~~ sdparse
FN ble opprettet for å sikre verdensfreden \n FN was established to secure world peace
nsubj:pass(opprettet,FN)
aux:pass(opprettet,ble)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:33 CET 2020 -->
