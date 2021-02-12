---
layout: relation
title:  'nmod'
shortdef : 'nominal modifier'
udver: '2'
---

*Nominal modifiers* are inflected nominals which modify most commonly a verb or a noun phrase. They can occur alone or together with an adposition in an adpositional phrase. Both cases are analyzed similarly, as semantically nominal modifiers and adpositional phrases are similar.

<!-- fname:nmod_alone.pdf -->
~~~ sdparse
Maljakko oli pöydällä . \n The_vase was on_the_table .
nsubj(oli-2, Maljakko-1)
nmod(oli-2, pöydällä-3)
punct(oli-2, .-4)
~~~

<!-- fname:nmod_adpos.pdf -->
~~~ sdparse
Maljakko oli pöydän päällä . \n The_vase was table on_top_of .
nsubj(oli-2, Maljakko-1)
nmod(oli-2, pöydän-3)
case(pöydän-3, päällä-4)
punct(oli-2, .-5)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:30 CET 2020 -->
