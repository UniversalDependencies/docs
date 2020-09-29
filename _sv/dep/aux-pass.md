---
layout: relation
title: 'aux:pass'
shortdef: 'passive auxiliary'
udver: '2'
---

A passive auxiliary of a clause is a non-main verb of the clause which contains the passive information.

~~~ sdparse
Kennedy blev mördad \n Kennedy was murdered
aux:pass(mördad, blev)
nsubj(mördad, Kennedy)
~~~


Other auxiliaries associated with the same main verb are not labeled `aux:pass` since they do not themselves 
indicate passive voice.

~~~ sdparse
Kennedy har blivit mördad \n Kennedy has been murdered
aux:pass(mördad, blivit)
aux(mördad, har)
nsubj(mördad, Kennedy)
~~~

<!-- Interlanguage links updated Út zář 29 20:23:20 CEST 2020 -->
