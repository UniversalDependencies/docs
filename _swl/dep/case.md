---
layout: relation
title: 'case'
shortdef: 'case marking'
udver: '2'
---

The `case` relation is used for any preposition in Swedish Sign Language, as well as possessiv markers linking nominal elements. Prepositions are treated as dependents of the noun they attach to or introduce in an "extended nominal projection". Thus, UD does not treat a preposition as a mediator between a modified word and its object. The `case` relation aims at providing a uniform analysis of prepositions and case in morphologically rich languages. 

~~~ sdparse
PEK DYKA-UPP PRO1.FL MEDLEM INUTI REGION FÖRESLÅ OBJPRO1 glosa@& ORDFÖRANDE INUTI VGDI@b@en \n We, the members, showed up in the region and suggested me to be president of the VGDI
case(VGDI@b@en, INUTI)
~~~
~~~ sdparse
VIKTIG DÖV(L) FÖRENING POSS VERKSAMHET(J)^HET@b TYCKA PRO1 \n The Deaf club's work is important, I think
case(VERKSAMHET(J)^HET@b, POSS)
~~~
<!-- Interlanguage links updated Ne 5. května 2024, 18:20:48 CEST -->
