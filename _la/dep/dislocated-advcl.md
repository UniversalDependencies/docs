---
layout: relation
title: 'dislocated:advcl'
shortdef: 'dislocated adverbial clause'
udver: '2'
---

Through different subtypes of [`dislocated`](u-dep/dislocated) we more precisely identify which argument has been dislocated in the sentence and how it is realized in this position (nominally or clausally). This information is not directly retrievable otherwise from "basic" dependencies, since the `dislocated` relation always depends on the local head. It is also kept distinct from the use of `dislocated` for topicalisations and similar phenomena, which are not directly related to an argument expressed in the matrix clause.

In the translation of the example, the bold passage corresponds to the dislocated element, and the underlined passage to the dislocating one.

~~~ sdparse
ex hoc aliqua res est intelligens quod est sine materia
obl(intelligens, hoc)
cop(intelligens, est)
mark(materia, quod)
cop(materia, est)
case(materia, sine)
dislocated:advcl(intelligens, materia)
~~~

'a thing is intelligent **because it is without matter**.' (`ITTB dev-s2007`, *Summa Contra Gentiles* lib. 1 cap. 44 n. 5, Thomas Aquinas)

* The dislocation disappears in this translation, as it literally is '<u>for this</u> a thing is intelligent, **since it is without matter**'. The adverbial clause is anticipated by an oblique argument making use of the [demonstrative](la-feat/PronType) neuter singular [determiner](la-upos/DET) (in the ablative case) *hoc* 'this (one)', so this dislocation is asymmetric.

<u>Note:</u> in general, the dislocated element does not need to be of the same form as the corresponding argument appearing in the matrix clause, and there can be alternation between clausal and nominal realisations. The subtype of `dislocated` depends on the type of the dislocated element, not on that of the argument in the matrix clause.  




<!-- Interlanguage links updated Po lis 14 15:35:24 CET 2022 -->
