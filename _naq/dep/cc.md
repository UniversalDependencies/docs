---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
udver: '2'
---

A `cc` is the relation between a conjunct and an associated [coordinating conjunction](https://universaldependencies.org/u/pos/CCONJ) that precedes it.

~~~ sdparse
ǁîb ge ǃomkha tsî ǁnâuǃāba ge mā . \n He DECL hands and intellect PST give .
cc(ǁnâuǃāba, tsî)
conj(ǃomkha, ǁnâuǃāba)
cc(intellect, and)
conj(hands, intellect)
~~~

~~~ sdparse
Watters , Cowan tsî Donovan \n Watters , Cowan and Donovan
cc(Donovan-5, tsî)
conj(Watters-1, Cowan-3)
conj(Watters-1, Donovan-5)
cc(Donovan-11, and)
conj(Watters-7, Cowan-9)
conj(Watters-7, Donovan-11)
~~~

A coordinating conjunction relation is also used with the the additional _tsî_ "and" + person-gender-number clitic.

~~~ sdparse
Maras tsî Saras tsî ra ge ǃhaebe ra ǂkhawu . \n Mara and Sara and 3F.DU DECL fast IPFV become weak .
cc(Saras, tsî-2)
conj(Maras, Saras)
cc(ra, tsî-4)
conj(Maras, ra)
cc(Sara, and-13)
conj(Mara, Sara)
cc(3F.DU.SBJ, and-15)
conj(Mara, 3F.DU)
~~~

A coordinating conjunction may also appear at the beginning of a sentence. This is also attached as `cc`, even though the sentence lacks multiple conjuncts joined with a [conj](naq-dep/conj) relation.

~~~ sdparse
Tsî nēs ge ǀgui mîǁguiba . \n And this DECL one claim .
cc(mîǁguiba, tsî)
cc(claim, and)
~~~
<!-- Interlanguage links updated So 10. května 2025, 18:15:06 CEST -->
