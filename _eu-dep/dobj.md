---
layout: relation
title: 'dobj'
shortdef: 'direct object'
---

This document is a placeholder for the language-specific documentation
for `dobj`.
The direct object of a verb is the noun phrase that denotes the entity acted upon.

Euskal	gizarteak Konstituzioa errefusatu zuela oroitarazi zuen .

He reminded that Basque society refused the Constitution-ABS. 
 
~~~ sdparse
Euskal	gizarteak Konstituzioa errefusatu zuela oroitarazi zuen .\n He reminded that Basque society refused the Constitution-ABS . 

nmod(Euskal-1, gizarteak-2)
nsubj(errefusatu-4, gizarteak-2)
dobj(errefusatu-4, Konstituzioa-3)
aux(errefusatu-4, zuela-5)
ccomp(oroitarazi-6,errefusatu-4)
aux(oroitarazi-6, zuen-7)
~~~

Basque is a morphologically ergative language , and the direct object is always marked with the accusative case. 
