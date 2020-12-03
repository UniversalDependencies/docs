---
layout: relation
title: 'nummod:gov'
shortdef: 'numeric modifier governing the case of the noun'
udver: '2'
---

`nummod:gov` differs from [nummod]()
in that the numeral requires the counted noun to be in its genitive form.
The whole phrase (numeral + noun) is treated as a singular neuter noun phrase
and it can fill roles where nominative, accusative or vocative noun phrases are expected.
This construction occurs in many Slavic languages.

To increase parallelism across languages (and also across morphological cases within one language),
the numeral is not annotated as the head of the nominal. However, the `nummod:gov` label is used
to preserve the information about case conditions.

Czech:

~~~ sdparse
Pět mužů hrálo karty . \n Five men played cards .
nummod:gov(mužů, Pět)
nsubj(hrálo, mužů)
obj(hrálo, karty)
punct(hrálo, .-5)
nummod:gov(men, Five)
nsubj(played, men)
obj(played, cards)
punct(played, .-11)
~~~

See also [det:numgov]() and [det:nummod]().

<!-- Interlanguage links updated Čt lis 12 09:43:34 CET 2020 -->
