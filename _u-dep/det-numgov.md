---
layout: relation
title: 'det:numgov'
shortdef: 'pronominal quantifier governing the case of the noun'
udver: '2'
---

Pronominal quantifiers in Slavic languages are labeled `det:numgov` instead of [det]()
because they normally do not agree with the quantified noun in case
(unlike non-quantifying determiners).

The quantifier requires the counted noun to be in its genitive form.
The whole phrase (quantifier + noun) is treated as a singular neuter noun phrase
and it can fill roles where nominative, accusative or vocative noun phrases are expected.

To increase parallelism across languages (and also across morphological cases within one language),
the quantifier is not annotated as the head of the nominal. However, the `det:numgov` label is used
to preserve the information about case conditions.

Czech:

~~~ sdparse
Kolik mužů hrálo karty ? \n How-many men played cards ?
det:numgov(mužů, Kolik)
nsubj(hrálo, mužů)
obj(hrálo, karty)
punct(hrálo, ?-5)
det:numgov(men, How-many)
nsubj(played, men)
obj(played, cards)
punct(played, ?-11)
~~~

See also [nummod:gov]() and [det:nummod]().

<!-- Interlanguage links updated Čt lis 12 09:43:23 CET 2020 -->
