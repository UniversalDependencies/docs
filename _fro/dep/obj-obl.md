---
layout: relation
title: 'obj:obl'
shortdef: 'fused oblique and object pronoun'
udver: '2'
---

In the current version of the Old French treebank, fused words have not been split the way they
should be in Universal Dependencies. One of the contraction types that occur in Old French is
an oblique dependent with an enclitic that represents the object pronoun. These contractions are
currently attached to the verb as `obj:obl`.

Example: <!-- https://books.google.cz/books?id=BaFE2m2TgNgC&pg=PA12&lpg=PA12&dq=pronoun+jes+old+french&source=bl&ots=3QU_xuiRrd&sig=ACfU3U2Edh3zqSF7vZNVrNi1Ol8tZbeFMw&hl=cs&sa=X&ved=2ahUKEwig3oDX_qXwAhWJO-wKHaOqD34Q6AEwEXoECBYQAw#v=onepage&q=pronoun%20jes%20old%20french&f=false -->

_Ço li deprient la sue pietét Que lur anseint ou le poissent recovrer &gt; Ço li deprient la sue pietét Que lur anseint <b>ol</b> poissent recovrer_

~~~ sdparse
Ço li deprient la sue pietét Que lur anseint ol poissent recovrer
obj:obl(recovrer, ol)
~~~
