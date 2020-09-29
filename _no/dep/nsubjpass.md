---
layout: relation
title: 'nsubjpass'
shortdef: 'passive nominal subject'
---

A passive nominal subject is a noun phrase which is the syntactic subject of a passive clause. In Norwegian, the passive subject is the dependent of a verb with passive marking or a participle with a passive auxiliary attached.

~~~ sdparse
freden bygges også dag for dag \n peace is being built day by day
nsubjpass(bygges,freden)
~~~

~~~ sdparse
FN ble opprettet for å sikre verdensfreden \n FN was established to secure world peace
nsubjpass(opprettet,FN)
auxpass(opprettet,ble)
~~~
<!-- Interlanguage links updated Út zář 29 20:23:38 CEST 2020 -->
