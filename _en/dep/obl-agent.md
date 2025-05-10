---
layout: relation
title: 'obl:agent'
shortdef: 'oblique nominal agent of the passive construction'
udver: '2'
---

This subtype of [obl]() is recommended for the agent (or proto-agent) of a passive verb when realized as an oblique nominal (*by*-PP) in the [passive construction](../feat/Voice.html#pass-passive):

~~~ sdparse
The cat was chased by the dog
nsubj:pass(chased, cat)
obl:agent(chased, dog)
case(dog, by)
~~~

~~~ sdparse
We were delighted by the snow
nsubj:pass(delighted, We)
obl:agent(delighted, snow)
case(snow, by)
~~~

<!-- Interlanguage links updated So 10. května 2025, 18:15:57 CEST -->
