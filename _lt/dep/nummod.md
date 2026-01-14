---
layout: relation
title:  'nummod'
shortdef : 'numeric modifier'
udver: '2'
---

The morphological and syntactic behavior of Lithuanian numerals is complicated, and depends on the type of numeral. Two different relation labels are used to mark _numeric modifiers_ of a noun or NP, when they function as quantifiers.

1) `Nummod` is used to annotate cardinal numerals that agree with the noun in case, number, and gender and modify the meaning of the noun by specifying a quantity (1);
2) When a cardinal numeral governs the noun, it is annotated with [nummod:gov]() (2, 3). The noun is always the head, and the numeral is always attached as its modifier. Note that ordinal numerals should be annotated with [amod](), except when they are written as digits. Numerals written as digits (i.e., ordinals) are annotated with `nummod`. Cardinals are annotated as `nummod` or [nummod:gov]().

~~~ sdparse
Turiu tris obuolius . \n I-have three apples .
nummod(obuolius, tris)
nummod(apples, three)
~~~

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

### Numerals written as digits

In dates, the head of the construction is a day (d.), the nummeral – `nummod`, month and abbreviation of the year – [nmod]() and the numeral marking the year – `nummod`.
~~~ sdparse
Susitinkame 2025 m. lapkričio 24 d. \n We-meet  in-2025 yr. , on-November, on-the-24th day .
nummod(d., 24)
nmod(m., lapkričio)
nummod(m., 2025)
nummod(day, on-the-24th)
nmod(yr., on-November)
nummod(yr., in-2025)
~~~

House number in address is attached as `nummod` to the name of the street.
~~~ sdparse
Gyvenu Donelaičio 5 . \n I live at-Donelaičio 5 .
nummod(Donelaičio, 5-3)
nummod(at-Donelaičio, 5-8)
~~~

### Compound numerals

The tags `nummod` and [nummod:gov]() can be used for compound numerals if a syntactic relation (agreement or government) can be established, for example:

~~~ sdparse
Penki milijonai eurų . \n Five million euros .
nummod(milijonai, Penki)
nummod:gov(eurų, milijonai)
nummod(million, Five)
nummod:gov(euros, million)
~~~

If no syntactic relation can be identified, the tag [compound]() is used (head is the rightmost element), for example:

~~~ sdparse
Trys tūkstančiai šimtas eurų . \n Three thousand one-hundred euros .
nummod(tūkstančiai, Trys)
compound(šimtas, tūkstančiai)
nummod:gov(eurų, šimtas)
nummod(thousand, Three)
compound(one-hundred, thousand)
nummod:gov(euros, one-hundred)
~~~
<!-- Interlanguage links updated St 12. listopadu 2025, 09:22:18 CET -->
