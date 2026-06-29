---
layout: relation
title:  'obj'
shortdef : 'direct object'
udver: '2'
---

The object is the noun phrase that denotes the entity acted upon or which undergoes a change of state or motion (the proto-patient).

The `obj` is a tag used for a direct object. Most often the direct object is in the accusative case, but there are verbs that require their objects to be in other cases.

~~~ sdparse
Aš valgau sriubą . \n I eat soup .
obj(valgau, sriubą)
obj(eat, soup)
~~~

_Genitive examples_

Genitive of negation:
~~~ sdparse
Aš nepirkau mašinos . \n I didn't-buy a-car .
obj(nepirkau, mašinos)
obj(didn't-buy, a-car)
~~~

Partitive genitive:
~~~ sdparse
Aš pirkau duonos . \n I bought bread .
obj(pirkau, duonos)
obj(bought, bread)
~~~

Verbs, that require their objects in genitive:
~~~ sdparse
Laukiu svečių . \n I-am-waiting for-guests .
obj(Laukiu, svečių)
obj(I-am-waiting, for-guests)
~~~

_Dative example_
~~~ sdparse
Prezidentas atstovauja Lietuvai . \n The-president represents Lithuania .
obj(atstovauja, Lietuvai)
obj(represents, Lithuania)
~~~

Adjectives, numerals, and similar parts of speech may also be annotated as `obj` when they function as objects in cases where the head noun is omitted: 
~~~ sdparse
Noriu patirti geriausia . \n I-want to-experience the-best .
obj(patirti, geriausia)
obj(to-experience, the-best)
~~~

Quantifying adverbs such as _daug, mažai, daugiau, mažiau_ etc. (_many, little, more, less_), are annotated as `obj` when they function as objects and govern a dependent noun, since they can assume a nominal function in such contexts:
~~~ sdparse
Reikia daugiau klientų . \n We-need more clients .
obj(Reikia, daugiau)
obj(We-need, more)
~~~
<!-- Interlanguage links updated Po 29. června 2026, 18:12:53 CEST -->
