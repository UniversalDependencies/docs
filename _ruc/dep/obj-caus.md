---
layout: relation
title: 'obj:caus'
shortdef: 'agentive object in causative construction'
udver: '2'
---

In Ruuli, valency can be increased by the causative suffix *-isy/-esy*. This suffix introduces an additional object argument corresponding to the participant that is caused or induced to perform the action.

This argument is annotated with the `obj:caus` relation, marking it as the caused agent in the causative event.

~~~ sdparse
Obinisya omaama . \n You_make_dance my_mother .
obj:caus(Obinisya, omaama)
obj:caus(You_make_dance, my_mother)
~~~