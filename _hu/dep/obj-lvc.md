---
layout: relation
title: 'obj:lvc'
shortdef: 'object in a light-verb construction'
udver: '2'
---

For light verb constructions, we introduced the additional label `lvc`, which is appended to the normal dependency relation like `obj:lvc`, `nsubj:lvc`, `obl:lvc` etc.

“the apparatus of László Kövér took steps to substantiate the statement of the Prime Minister”

~~~ sdparse
a miniszterelnök kijelentésének igazolására Kövér László apparátusa lépéseket tett \n the prime-minister his-statement-of its-substantiation-under Kövér László his-apparatus steps took
det(miniszterelnök, a)
nmod:att(kijelentésének, miniszterelnök)
nmod:att(igazolására, kijelentésének)
obl(tett, igazolására)
nmod:att(apparátusa, Kövér)
flat:name(Kövér, László)
nsubj(tett, apparátusa)
obj:lvc(tett, lépéseket)
~~~

“it took place after the close of our first edition”

~~~ sdparse
első kiadásunk zárása után került sor \n first our-edition closing after cost row
amod:att(kiadásunk, első)
nmod:att(zárása, kiadásunk)
case(zárása, után)
obl(került, zárása)
nsubj:lvc(került, sor)
~~~

<!-- Van viszont üldözés sítalpakon és sárkányrepülőn, motorcsónakon és olajvezetékben, és még egy atom-tengeralattjáró belseje is fontos szerepet kap, de ott már Bond az idővel is harcban áll, hogy megmenthesse az emberiséget. -->
<!-- There is, however, chasing on skis and kites, speedboats and oil pipelines, and even the inside of a nuclear submarine is given an important role, but there Bond is already fighting over time to save humanity. -->
“Bond is fighting against time”

~~~ sdparse
Bond az idővel harcban áll \n Bond the time-with fight-in stands
nsubj(áll, Bond)
det(idővel, az)
obl(áll, idővel)
obl:lvc(áll, harcban)
~~~

If the verbal part of the light-verb construction is a participle and syntactically it is used
as an attribute of the nominal part, then the relation is reversed (analogously to ordinary
participial attributes) and the relation `amod:attlvc` is used:

“during their visit to the Vatican in mid-November”

~~~ sdparse
november közepén a Vatikánban tett látogatásuk alatt \n November mid-in the Vatican-in done visit-their under
nmod:att(közepén, november)
obl(tett, közepén)
det(Vatikánban, a)
obl(tett, Vatikánban)
amod:attlvc(látogatásuk, tett)
case(látogatásuk, alatt)
~~~

<!-- Interlanguage links updated Pá kvě 14 11:09:16 CEST 2021 -->
