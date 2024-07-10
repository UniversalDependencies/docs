---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
udver: '2'
---

## nsubj: nominal subject 
A nominal subject is a noun phrase which is the syntactic subject of a clause.
~~~ sdparse
Ahmad ishlaydi \n Ahmad works
nsubj(ishlaydi, Ahmad)
~~~
 
``nsubj`` is also used for subjects of  adjectival or nominal predicates.
 
~~~ sdparse
Ahmad shifokor \n Ahmad is a doctor
nsubj(shifokor, Ahmad)
~~~

~~~ sdparse
Gul chiroyli \n The flower is beautiful
nsubj(chiroyli, Gul)
~~~
 
For existential sentences, "the thing that exists" is the subject.
This includes possessive existentials.
~~~ sdparse
Beshta olma bor \n There are five apples
nsubj(bor, olma)
~~~

~~~ sdparse
Mening uchta ukam bor \n I have three brothers
nsubj(bor, ukam)
~~~
 
``nsubj`` (without a subtype) is also used
for the grammatical subject of a passivized verb.
The subtype ``nsubj:pass`` is not used.
~~~ sdparse
Xona tozalandi \n The room was cleaned
nsubj(tozalandi, Xona)
~~~


Note that [csubj]() relation used for clausal subjects,
even those with a the verbal noun head.

<!-- Interlanguage links updated Ne 5. května 2024, 18:21:26 CEST -->
