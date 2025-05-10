---
layout: relation
title:  'obl:agent'
shortdef : 'oblique agent in passive construction'
udver: '2'
---

The relation `obl:agent` is used for agents of passive verbs. It is a subtype of [obl](), which covers all oblique nominals.
`obl:agent` is a [semi-mandatory subtype](/u/dep/), i.e. it should be used if the language has passives with oblique agents.

In English, the agent is marked by the preposition *by*:

~~~ sdparse
The cat was chased by the dog
nsubj:pass(chased, cat)
obl:agent(chased, dog)
case(dog, by)
~~~

In Czech, the agent is a nominal in the instrumental [Case]():

~~~ sdparse
Cena byla udělena děkanem fakulty . \n Prize was awarded by-dean of-faculty .
obl:agent(udělena, děkanem)
obl:agent(awarded, by-dean)
~~~

Typical agents are animate but it is not a rule.
Inanimate agents may be sometimes difficult to distinguish from instruments,
which are also coded by the instrumental case.
Instruments are attached using the simple relation [obl]().
Consider the following two examples, the first one is active and the second is passive.

~~~ sdparse
Praštil psa klackem . \n He-hit dog with-a-stick .
obl(Praštil, klackem)
obl(He-hit, with-a-stick)
~~~

~~~ sdparse
Pes byl praštěn klackem . \n Dog was hit with-a-stick .
obl(praštěn, klackem)
obl(hit, with-a-stick)
~~~

However, in passive sentences like _Byl přejet autem_ “He was run over by a car,”
the car could be analyzed as an inanimate agent, but also as an instrument,
which is supported by the plausibility of the active counterpart,
_Přejeli ho autem_ “They ran over him with a car.”
<!-- Interlanguage links updated So 10. května 2025, 18:15:58 CEST -->
