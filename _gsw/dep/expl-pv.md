---
udver: '2'
layout: relation
title: 'expl:pv'
shortdef: 'expletive possessive'
---

This relation is used for reflexive pronouns that are part of a lexicalized reflexive verb and cannot be replaced by another direct object.

~~~ sdparse
Ich bedanke mich bei Ihnen . \n I thank you .
expl:pv(bedanke, mich)
~~~

~~~ sdparse
Der Saal befindet sich unten . \n The hall is downstairs .
expl:pv(befindet, sich)
~~~

Note that if a reflexive pronoun can be otherwise replaced by a direct / indirect object, then it should be marked accordingly.

~~~ sdparse
Ich freue mich sehr . \n I am very pleased .
obj(freue, mich)
~~~

~~~ sdparse
Ich wasche mir dir Hände . \n I wash my hands .
iobj(wasche, mir)
~~~
<!-- Interlanguage links updated Út zář 29 20:43:18 CEST 2020 -->
