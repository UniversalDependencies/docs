---
layout: relation
title: 'nsubj:obj'
shortdef: 'fused subject and object pronoun'
udver: '2'
---

In the current version of the Old French treebank, fused words have not been split the way they
should be in Universal Dependencies. One of the contraction types that occur in Old French is
a subject pronoun with an enclitic that represents the object pronoun. These fused pronouns are
currently attached to the verb as `nsubj:obj`.

Example: <!-- https://books.google.cz/books?id=BaFE2m2TgNgC&pg=PA12&lpg=PA12&dq=pronoun+jes+old+french&source=bl&ots=3QU_xuiRrd&sig=ACfU3U2Edh3zqSF7vZNVrNi1Ol8tZbeFMw&hl=cs&sa=X&ved=2ahUKEwig3oDX_qXwAhWJO-wKHaOqD34Q6AEwEXoECBYQAw#v=onepage&q=pronoun%20jes%20old%20french&f=false -->

_je les avrai &gt; <b>jes</b> avrai_ “I will have them”

~~~ sdparse
jes avrai \n je les avrai
nsubj:obj(avrai-2, jes)
nsubj(avrai-5, je)
obj(avrai-5, les)
~~~
