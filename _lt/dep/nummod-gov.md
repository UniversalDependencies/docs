---
layout: relation
title: 'nummod:gov'
shortdef: 'numeric modifier governing the case of the noun'
udver: '2'
---

The morphological and syntactic behavior of Lithuanian numerals is complicated,
and depends on the type of numeral.
Cardinals are annotated as [nummod]() or `nummod:gov`.
When a cardinal numeral governs the noun, it is annotated with `nummod:gov`.

~~~ sdparse
Turiu dešimt obuolių . \n I-have ten apples .
nummod:gov(obuolių, dešimt)
nummod:gov(apples, ten)
~~~

~~~ sdparse
Fondas skyrė dešimt milijonų eurų . \n The-fund allocated ten million euros .
nummod:gov(eurų, milijonų)
nummod:gov(milijonų, dešimt)
nummod:gov(euros, million)
nummod:gov(million, ten)
~~~

**Compound numerals**

The tags [nummod]() and `nummod:gov` can be used for compound numerals if a syntactic relation (agreement or government) can be established, for example:
~~~ sdparse
Penki milijonai eurų . \n Five million euros .
nummod(milijonai, Penki)
nummod:gov(eurų, milijonai)
nummod(million, Five)
nummod:gov(euros, million)
~~~

Also see [nummod]().
<!-- Interlanguage links updated Po 29. června 2026, 18:00:19 CEST -->
