---
layout: relation
title: 'obl:pronmod'
shortdef: 'pronominal modifier'
udver: '2'
---

The `obl:pronmod` relation is used in series of constructions with indefinite pronominal meaning: _неизвестно кто_, _непонятно куда_, _бог знает какой_, etc. This is an extension of the class of grammatical indefinite pronouns such as _кое-кто_, _куда-то_, _какой-нибудь_. Usually predicatives and the heads of clauses modify relative pronouns, relative adjectival pronouns and pronominal adverbs. 

~~~ sdparse
Бог знает куда я пришёл . \n I came God knows where .
obl:pronmod(куда, знает)
obl:pronmod(where, knows)
advmod(пришёл, куда)
advmod(came, where)
advmod(знает, Бог)
advmod(knows, God)
~~~
<!-- Interlanguage links updated Ne 5. května 2024, 18:21:40 CEST -->
