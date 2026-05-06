---
layout: relation
title:  'obl:arg'
shortdef : 'oblique argument'
udver: '2'
---

The relation `obl:arg` in Lithuanian is used to mark oblique arguments, in order to distinguish them from adjuncts. Oblique arguments are not conditioned by the transitivity of the verb – that is they are not expressed in the accusative case nor in the genitive of negation or the partitive genitive.

~~~ sdparse
Jis davė man knygą . \n He gave me a-book .
obl:arg(davė, man)
obl:arg(gave, me)
~~~

~~~ sdparse
Aš tikiu tavimi . \n I believe in-you .
obl:arg(tikiu, tavimi)
obl:arg(believe, in-you)
~~~

`Obl:arg` is also used to denote the instrumental case of nouns, adjectives, and participles with verbs: _laikyti (to consider), (pa)skelbti (to declare), (pa)skirti (to appoint), (pa)vadinti (to call), pripažinti (to recognize), virsti (to turn into), (pa)versti (to make, to turn into), įvardinti (to name)_:
~~~ sdparse
Aš laikau jį geru žmogumi . \n I consider him a-good person .
obl:arg(laikau, žmogumi)
obl:arg(consider, person)
~~~

~~~ sdparse
Teismas pripažino jį nekaltu . \n The-court declared him innocent .
obl:arg(pripažino, nekaltu)
obl:arg(declared, innocent)
~~~

In impersonal sentences, a dative subject is also marked as `obl:arg`:
~~~ sdparse
Man patinka krepšinis . \n I like basketball .
obl:arg(patinka, Man)
obl:arg(like, I)
~~~

~~~ sdparse
Man buvo šalta . \n I was cold .
obl:arg(šalta, Man)
obl:arg(cold, I)
~~~

Prepositional constructions can be annotated either as [obl]() or `obl:arg`. The label [obl]() is used for prepositional constructions functioning adverbially (for example, _Viską darau dėl tavęs – I do everything because of  you_ – adverbial of cause), whereas `obl:arg` is used to mark arguments traditionally referred to as indirect objects). It is also important to consider that `obl:arg` typically has restricted and [obl]() unrestricted valency. For example:
~~~ sdparse
Aš važiavau į miestą . \n I went to the-city .
obl:arg(važiavau, miestą)
obl:arg(went, the-city)
~~~
<!-- Interlanguage links updated St 6. května 2026, 20:48:04 CEST -->
