---
layout: relation
title: 'obl:periph'
shortdef: 'oblique peripheral nominal'
udver: '2'
---

In FrenchSpoken, the `obl:periph` relation is used for nominals which are not required by the verb. 
The specificity of an `obl:periph`, compared to an [obl:mod](), is that the `obl:periph` nominal cannot be clefted. In addition, the `obl:periph` nominal cannot be moved inside the core of the sentence, unless it is put in parenthesis.

~~~ sdparse
A mon avis , Pierre devrait rester là. \n In my opinion, Pierre should stay there.
obl:periph(devrait, avis)
~~~

Example from FrenchSpoken :

~~~ sdparse
pour l' Indépendant du midi c'est la gifle \n
obl:periph(gifle, Indépendant)
~~~

We use two other subrelations for `obl`: [obl:comp]() for prepositional core dependents and [obl:mod]() for nominal adjuncts (introduced by a preposition or not) that can be clefted. 
