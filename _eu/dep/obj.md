---
layout: relation
title: 'dobj'
shortdef: 'direct object'
---

The direct object (`obj`) of a verb is the noun phrase that denotes the entity acted upon. Basque is a morphologically ergative language , and the direct object is always marked with the absolutive case. 

*Euskal	gizarteak **Konstituzioa** errefusatu zuela oroitarazi zuen .*

*(He/she) reminded that Basque society refused the **Constitution** .*

~~~ sdparse
Euskal gizarteak Konstituzioa errefusatu zuela oroitarazi zuen .\n Basque society Constitution_the refused_that reminded . 

nmod(Euskal-1, gizarteak-2)
nsubj(errefusatu-4, gizarteak-2)
dobj(errefusatu-4, Konstituzioa-3)
aux(errefusatu-4, zuela-5)
ccomp(oroitarazi-6,errefusatu-4)
aux(oroitarazi-6, zuen-7)
punct(oroitarazi-6, .-8)
~~~


<!-- Interlanguage links updated Čt lis 12 09:43:34 CET 2020 -->
