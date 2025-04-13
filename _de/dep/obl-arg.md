---
layout: relation
title:  'obl:arg'
shortdef : 'oblique argument'
udver: '2'
---

The relation `obl:arg` is used for oblique arguments and distinguishes them from
adjuncts, which use the plain [obl]() relation. It is thus possible to preserve
the notion of _object_ as it is defined in the traditional grammar. In German UD,
we currently use `obl:arg` for bare dative and genitive “objects”, but not for
prepositional “objects”.

~~~ sdparse
Meinem Hund konnte nicht geholfen werden . \n My dog.Dat could not helped be .
obl:arg(geholfen, Hund)
obl:arg(helped, dog.Dat)
~~~

~~~ sdparse
Der Inhaber würdigt dem Kunden keines Blickes . \n The owner pays the customer.Dat no attention.Gen .
obl:arg(würdigt, Kunden)
obl:arg(pays, customer.Dat)
obl:arg(würdigt, Blickes)
obl:arg(pays, attention.Gen)
~~~
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:11:16 CET -->
