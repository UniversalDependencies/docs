---
layout: relation
title: 'dobj'
shortdef: 'direct object'
---

The direct object (`dobj`) of a verb is the noun phrase that denotes the entity acted upon. Basque is a morphologically ergative language , and the direct object is always marked with the accusative case. 

*Euskal	gizarteak **Konstituzioa-ABS** errefusatu zuela oroitarazi zuen*.

*Basque society   **Constitution-ABS**   refused   that     reminded*    (he/she - elided subject)

*"He/she reminded that Basque society refused the Constitution-ABS"*.

~~~ sdparse
Euskal	gizarteak Konstituzioa errefusatu zuela oroitarazi zuen .\n He reminded that Basque society refused the Constitution-ABS . 

nmod(Euskal-1, gizarteak-2)
nsubj(errefusatu-4, gizarteak-2)
dobj(errefusatu-4, Konstituzioa-3)
aux(errefusatu-4, zuela-5)
ccomp(oroitarazi-6,errefusatu-4)
aux(oroitarazi-6, zuen-7)
~~~


