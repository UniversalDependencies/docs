---
layout: relation
title: 'conj'
shortdef: 'conjunct'
udver: '2'
---

A conjunct is the relation between two or more elements connected by a coordinating conjunction, such as _tsî_ "and", _tamas ka io_ "or", etc. We treat coordination asymmetrically: The head of the relation is the first conjunct and other conjuncts depend on it via the `conj` relation.

~~~ sdparse
ǁîb ge ǃomkha tsî ǁnâuǃāba ge mā . \n He DECL hands and intellect PST give .
conj(ǃomkha, ǁnâuǃāba)
conj(hands, intellect)
~~~

~~~ sdparse
Watters , Cowan tsî Donovan \n Watters , Cowan and Donovan
cc(Donovan-5, tsî)
punct(Cowan-3, ,-2)
conj(Watters-1, Cowan-3)
conj(Watters-1, Donovan-5)
cc(Donovan-11, and)
punct(Cowan-9, ,-8)
conj(Watters-7, Cowan-9)
conj(Watters-7, Donovan-11)
~~~

A conjunct relation is also used with the the additional _tsî_ "and" + person-gender-number clitic.

~~~ sdparse
Maras tsî Saras tsî ra ge ra ǀaere . \n Mara and Sara and 3F.DU DECL IPFV collect_firewood .
conj(Maras, Saras)
conj(Maras, ra-5)
conj(Mara, Sara)
conj(Mara, 3F.DU)
~~~

Coordinated clauses are treated the same way as coordination of other constituent types:

~~~ sdparse
Hoaraga khoen ge nî ǃhui te tsî ta ge nî ǂoaǃnâ . \n All people DECL FUT hate me and I DECL will lose .
conj(ǃhui, ǂoaǃnâ)
cc(ǂoaǃnâ, tsî)
conj(hate, lose)
cc(lose, and)
~~~

See [universal/conj](u-dep/conj) for more details on various coordination-related issues.

<!-- Interlanguage links updated So 10. května 2025, 18:15:16 CEST -->
