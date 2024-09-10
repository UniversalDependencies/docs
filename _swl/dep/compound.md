---
layout: relation
title: 'compound'
shortdef: 'compound'
udver: '2'
---

The `compound` relation is used in Swedish Sign Language for compounds that are separated in the annotations (some phonologically merged compounds are annotated as a single unit) and therefore written as two (or more) separate words. This includes instances of nominal compounds, but also units of nominal and classifier-type elements for which the classifier is the head. The subtype [compound:prt]() is used for verb particles in phrasal verbs, and [compound:svc]() for serial verb constructions.

~~~ sdparse
VIKTIG DÖV(L) FÖRENING POSS VERKSAMHET(J)^HET@b TYCKA PRO1 \n The Deaf club's work is important, I think
compound(FÖRENING, DÖV(L))
~~~
~~~ sdparse
GLAS FORM(YYb)+UTSTRÄCKNING@p TRASIG ENTITET(SS)+FÖRFLYTTA@p>huvud \n The glass jar broke on top of its head
compound(FORM(YYb)+UTSTRÄCKNING@p, GLAS)
~~~
<!-- Interlanguage links updated Ne 5. května 2024, 18:20:54 CEST -->
