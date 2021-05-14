---
layout: relation
title: 'nsubj:advmod'
shortdef: 'fused subject pronoun and adverb'
udver: '2'
---

In the current version of the Old French treebank, fused words have not been split the way they
should be in Universal Dependencies. One of the contraction types that occur in Old French is
a subject pronoun with an enclitic that represents the adverb _en_. These fused pronouns are
currently attached to the verb as `nsubj:advmod`.

Example: <!-- https://books.google.cz/books?id=BaFE2m2TgNgC&pg=PA12&lpg=PA12&dq=pronoun+jes+old+french&source=bl&ots=3QU_xuiRrd&sig=ACfU3U2Edh3zqSF7vZNVrNi1Ol8tZbeFMw&hl=cs&sa=X&ved=2ahUKEwig3oDX_qXwAhWJO-wKHaOqD34Q6AEwEXoECBYQAw#v=onepage&q=pronoun%20jes%20old%20french&f=false -->

_kar jo en irai en l' estree &gt; kar <b>jon</b> irai en l' estree_

~~~ sdparse
kar jon irai en l' estree
nsubj:advmod(irai, jon)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:09:12 CEST 2021 -->
