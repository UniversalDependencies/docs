---
layout: relation
title: 'nmod:pronmod'
shortdef: 'pronominal modifier'
udver: '2'
---

The `nmod:pronmod` relation is used in series of constructions with indefinite pronominal meaning: _неизвестно кто_, _непонятно куда_, _бог знает какой_, etc. This is an extension of the class of grammatical indefinite pronouns such as _кое-кто_, _куда-то_, _какой-нибудь_. Usually predicatives and the heads of clauses modify relative pronouns, relative adjectival pronouns and pronominal adverbs. 

~~~ sdparse
Бог знает куда я пришёл . \n I came God knows where .
nmod:pronmod(куда, знает)
nmod:pronmod(where, knows)
advmod(пришёл, куда)
advmod(came, where)
advmod(знает, Бог)
advmod(knows, God)
~~~
<!-- Interlanguage links updated Út 30. června 2026, 11:00:36 CEST -->
