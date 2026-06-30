---
layout: relation
title: 'advcl:emph'
shortdef: 'emphasizing adverbial clause'
udver: '2'
---

The `advcl:emph` relation is used for predicate doubling -- a construction in which the infinitive and the inflected form of the same verb co-occur within a single sentence as part of the information structure marking.

In Chintang, this construction is employed to indicate that a particle takes scope only over the lexical component of the predicate. Speakers achieve this by attaching the particle to the infinitive form of the verb stem, followed by a finite form of the same verb.

The choice of the `advcl:emph` subtype reflects the aim of aligning this annotation with that of information-structural particles, which are annotated using `advmod:emph`.

~~~ sdparse
Akka na thuŋma taʔ thuŋŋaʔã ! \n I TOP to_drink FOC I_drink !
advcl:emph(thuŋŋaʔã, thuŋma)
advcl:emph(I_drink, to_drink)
advmod:emph(thuŋma, taʔ)
advmod:emph(to_drink, FOC)
~~~
<!-- Interlanguage links updated Út 30. června 2026, 10:59:30 CEST -->
