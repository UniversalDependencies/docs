layout: relation
title: 'aux:caus'
shortdef: 'causative auxiliary'
udver: '2'
---

The `aux:caus` relation links the infinitive verb (i.e. the governor) and the finite causative [auxiliary](AUX) _տալ_ “to make” in a causative construction.
The syntactical subject of the sentence (i.e. the causer) receives a [nsubj:caus]() link.
The initial agent of the action described by the sentence is demoted and will be anotated with an [iobj:agent]() relation.

~~~ sdparse
զամէնն հնազանդութեամբ բերէ եւ չտայ սպաննել \n “lit: he will bring them all into submission and will not make kill them”
aux-caus(սպաննել, չտայ)
aux-caus(kill, make)
~~~
