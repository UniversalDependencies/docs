---
layout: relation
title: 'name'
shortdef: 'name'
---

The name relation is one of the three relations for compounding in UD (together
with [compound]() and [fixed]()).
It is used for proper nouns constituted of multiple nominal
elements. For example, `flat` would be used between the words of
_Hillary Rodham Clinton, New York,_ or _Carl XVI Gustaf_ but not to
replace the usual relations in a phrasal or clausal name like _The
king of Sweden_ or the novels _The Lord of the Rings_ and _Captured By
Aliens._

Words joined by `flat` should all be part of a minimal noun phrase;
otherwise regular syntactic relations should be used.  This is
basically similar to the treatment of noun compounds with
[compound](), except that in many cases parts of the name may be
another nominal element such as an adjective _(United Airlines)._

In general, names are annotated in a flat, head-initial structure, in
which all words in the name modify the first one using the `flat`
label.

~~~ sdparse
Carl XVI Gustaf
name(Carl-1, Gustaf-3)
name(Carl-1, XVI-2)
~~~

For names with a clear syntactic modification structure, the dependencies should instead reflect the syntactic modification structure using regular syntactic relations, as in:

~~~ sdparse
Statens veterinärmedicinska anstalt \n The government institute for veterinary medicine
nmod:poss(anstalt, Statens)
amod(anstalt, veterinärmedicinska)
~~~

<!-- Interlanguage links updated Čt lis 12 09:43:30 CET 2020 -->
