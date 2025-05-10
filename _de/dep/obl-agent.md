---
layout: relation
title:  'obl:agent'
shortdef : 'agent modifier'
udver: '2'
---

The relation `obl:agent` is used for agents of passive verbs.
In German, the agent is a nominal with the preposition _von_.
(Note however that this preposition can be also used in other functions.)

~~~ sdparse
Das Kloster wurde von schwedischen Truppen zerstört . \n The monastery was by Swedish troops destroyed .
obl:agent(zerstört, Truppen)
obl:agent(destroyed, troops)
case(Truppen, von)
case(troops, by)
~~~
<!-- Interlanguage links updated So 10. května 2025, 18:15:57 CEST -->
