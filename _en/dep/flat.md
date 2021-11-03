---
layout: relation
title: 'flat'
shortdef: 'flat'
udver: '2'
---

`flat` is one of the three relations for compounding in UD (together
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
flat(Carl-1, Gustaf-3)
flat(Carl-1, XVI-2)
~~~

For organization names with clear syntactic modification structure, the dependencies should reflect the syntactic modification structure using regular syntactic relation, as in:.

~~~ sdparse
Natural Resources Conservation Service
amod(Resources-2, Natural-1)
compound(Conservation-3, Resources-2)
compound(Service-4, Conservation-3)
~~~

In addition, regular syntactic relations are used:
(i) for a modifying English determiner or
(ii) to connect together the words of a description or name which involve English embedded prepositional phrases, sentences, etc.

~~~ sdparse
The king of Sweden
det(king-2, The-1)
nmod(king-2, Sweden-4)
case(Sweden-4, of-3)
~~~



If a name contains a function word in another language than English, we also use the `flat` relation.

~~~ sdparse
Río de la Plata
flat(Río-1, de-2)
flat(Río-1, la-3)
flat(Río-1, Plata-4)
~~~

~~~ sdparse
Ludwig van Beethoven
flat(Ludwig, van)
flat(Ludwig, Beethoven)

~~~

~~~ sdparse
Miguel de Cervantes y Saavedra
flat(Miguel, de)
flat(Miguel, Cervantes)
flat(Miguel, y)
flat(Miguel, Saavedra)
~~~

~~~ sdparse
San Francisco
flat(San, Francisco)
~~~
<!-- Interlanguage links updated St lis 3 20:58:54 CET 2021 -->
