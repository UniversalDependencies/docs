---
layout: relation
title: 'obj:caus'
shortdef: 'agentive object in causative construction'
udver: '2'
---

In Ruuli, verbal valency can be increased by the causative suffix *-isy/-esy*. 
This suffix introduces an additional core argument, commonly the causer of the event, in which case it functions as the syntactic subject, 
while the caused agent functions as the syntactic object and is annotated with the `obj:caus` relation.

~~~ sdparse
Obinisya omaama . \n You_make_dance my_mother .
obj:caus(Obinisya, omaama)
obj:caus(You_make_dance, my_mother)
~~~

In addition, the causative suffix can introduce the instrument that enables carrying out the event, in which case it functions as the syntactic object. 
It is also annotated with the `obj:caus` relation.

~~~ sdparse
Onenesya amaino . \n You_bite_using teeth .
obj:caus(Onenesya, amaino)
obj:caus(You_bite_using, teeth)
~~~
<!-- Interlanguage links updated Po 29. června 2026, 17:01:18 CEST -->
