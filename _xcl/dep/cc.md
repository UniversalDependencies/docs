---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
udver: '2'
---

For more on coordination, see the [conj]() relation.

A `cc` is the relation between a conjunct and the [coordinating conjunction](xcl-pos/CCONJ) that precedes it.

~~~ sdparse
Նա մկրտեսցէ զ ձեզ ի հոգի ն սուրբ եւ ի հուր ։ \n He shall baptize you with the Holy Ghost, and with fire .
conj(հոգի, հուր)
case(հուր, ի)
cc(հուր, եւ)
conj(Ghost, fire)
case(fire, with)
cc(fire, and)
~~~

A coordinating conjunction may also appear at the beginning of a sentence. This is also called a `cc`, and it depends on the root predicate of the sentence.

~~~ sdparse
Եւ ինքն Յովհաննէս ունէր հանդերձ ի ստեւոյ ուղտու ։ \n And the same John had his raiment of camel's hair .
cc(ունէր, Եւ)
cc(had, And)
~~~

### References

Jensen, Hans. 1959. Altarmenische Grammatik. Heidelberg: Winter.

Klein, Jared. 2017. The syntax of Armenian. In: J. Klein et al. (eds.), _Handbook of comparative and historical Indo-European linguistics_. Berlin, Boston: Walter de Gruyter: 1097‒1115.
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:33 CET -->
