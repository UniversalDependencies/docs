---
layout: relation
title: 'obj:advneg'
shortdef: 'fused negation and object pronoun'
udver: '2'
---

In the current version of the Old French treebank, fused words have not been split the way they
should be in Universal Dependencies. One of the contraction types that occur in Old French is
a negation adverb with an enclitic that represents the object pronoun. These contractions are
currently attached to the verb as `obj:advneg`.

Example: <!-- https://books.google.cz/books?id=BaFE2m2TgNgC&pg=PA12&lpg=PA12&dq=pronoun+jes+old+french&source=bl&ots=3QU_xuiRrd&sig=ACfU3U2Edh3zqSF7vZNVrNi1Ol8tZbeFMw&hl=cs&sa=X&ved=2ahUKEwig3oDX_qXwAhWJO-wKHaOqD34Q6AEwEXoECBYQAw#v=onepage&q=pronoun%20jes%20old%20french&f=false -->

_jamais ne les en verrez &gt; jamais <b>nes</b> en verrez_ “you will never see them”

~~~ sdparse
jamais nes en verrez
obj:advneg(verrez, nes)
~~~
<!-- Interlanguage links updated St lis 3 20:59:03 CET 2021 -->
