---
layout: relation
title: 'obj:advmod'
shortdef: 'fused adverb and object pronoun'
udver: '2'
---

In the current version of the Old French treebank, fused words have not been split the way they
should be in Universal Dependencies. One of the contraction types that occur in Old French is
an adverb with an enclitic that represents the object pronoun. These contractions are
currently attached to the verb as `obj:advmod`.

Example: <!-- https://books.google.cz/books?id=BaFE2m2TgNgC&pg=PA12&lpg=PA12&dq=pronoun+jes+old+french&source=bl&ots=3QU_xuiRrd&sig=ACfU3U2Edh3zqSF7vZNVrNi1Ol8tZbeFMw&hl=cs&sa=X&ved=2ahUKEwig3oDX_qXwAhWJO-wKHaOqD34Q6AEwEXoECBYQAw#v=onepage&q=pronoun%20jes%20old%20french&f=false -->

_si les pent tuz a l' arbre de mal fust &gt; <b>sis</b> pent tuz a l' arbre de mal fust_

~~~ sdparse
sis pent tuz a l' arbre de mal fust
obj:advmod(pent, sis)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:09:15 CEST 2021 -->
