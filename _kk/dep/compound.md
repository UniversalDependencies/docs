---
layout: relation
title:  'compound'
shortdef : 'compound'
---

`compound` is one of the three UD relations UD for compounding,
together with [fixed]() and [flat]().

Nouns should modify appropriate noun in the compound in order to respect the branching structure.

Most uses of attr will be tagged with compound.

~~~ sdparse
Қазақстан көрші елдерге үлгі бола алады . \n Kazakhstan neighbour countries-to example be can . 
compound(елдерге-3, көрші-2)
nsubj(бола-5, Қазақстан-1)
aux(бола-5, алады-6)
punct(бола-5, .-7)
~~~

Nouns in the izafet construction (e.g. possessive on the final noun) should not get the compound relation,
they should instead be labelled `nmod:poss`, e.g.

~~~ sdparse
Дүниежүзілік экономикалық дағдарыс Иран экономикасын тұралатып тастады . \n Global economic depression Iran-of economy declining threw .
nmod:poss(экономикасын-5, Иран-4)
obj(тастады-7, экономикасын-5)
~~~

Numerical expressions consisting of multiple tokens are annotated
using the `compound` dependency type. The last word of the numerical
expression is the governor, and the number dependencies are chained.

~~~ sdparse
Мұнай экспортынан жыл сайын 16,3 миллиард АҚШ доллары түседі . \n Oil exports-from year per 16,3 milliard USA dollar falls
nmod(доллары-8, АҚШ-7)
nummod(доллары-8, миллиард-6)
nsubj(түседі-9, доллары-8)
compound(миллиард-6, 16,3-5)
punct(түседі-9, .-10)
~~~
<!-- Interlanguage links updated Út zář 29 20:23:23 CEST 2020 -->
