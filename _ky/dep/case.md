---
layout: relation
title: 'case'
shortdef: 'case marking'
udver: '2'
---

The case relation is used for any case-marking element which is
treated as a separate syntactic word (including prepositions,
postpositions, and clitic case markers). Case-marking elements are
treated as dependents of the noun or clause they attach to.

In Kyrgyz, case marking is typically done through suffixation,
in which case the case-marked word will carry the appropriate [Case](ky-feat/Case) feature.
The `case` relation marks postpositions,
and some of the case-like suffixes that are tokenized as separate syntactic tokens (inflectional groups).


~~~ sdparse
жүк ташуучу унааcы толугу менен күйүп кетти. \n The truck was completely burnt.
case(толугу, менен)
~~~

~~~ sdparse
Түштөн кийин сабак бар . \n I have a class _after_ noon (=in the afternoon)
case(Түштөн, кийин)
~~~


For postpositions derived from nouns with possessive suffixes,
``nmod:poss`` relation is used.
In this case, the head is the derived postposition.

~~~ sdparse
Өлкөдө азыктын 4 түрүнүн баасы соода түйүндөрүндө гана турукташты. . \n Prices of 4 types of food in the country have stabilized only at retail outlets.
nmod:poss(түрүнүн , азыктын)
~~~

<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:30 CET -->
