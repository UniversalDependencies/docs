---
layout: relation
title: 'name'
shortdef: 'name'
---

`name` is one of the three relations for compounding in UD (together
with [compound]() and [mwe]()).
It is used for proper nouns constituted of multiple nominal
elements. For example, `name` would be used between the words of
_Hillary Rodham Clinton, New York,_ or _Carl XVI Gustaf_ but not to
replace the usual relations in a phrasal or clausal name like _The
king of Sweden_ or the novels _The Lord of the Rings_ and _Captured By
Aliens._
Words joined by `name` should all be part of a minimal noun phrase;
otherwise regular syntactic relations should be used.  This is
basically similar to the treatment of noun compounds with
[compound](), except that in many cases parts of the name may be
another nominal element such as an adjective _(United Airlines)._

In general, names are annotated in a flat, head-initial structure, in
which all words in the name modify the first one using the `name`
label.

~~~ sdparse
Carl XVI Gustaf
name(Carl-1, Gustaf-3)
name(Carl-1, XVI-2)
~~~

For organization names with clear syntactic modification structure, the dependencies should reflect the syntactic modification structure using regular syntactic relation, as in:.

~~~ sdparse
Natural Resources Conservation Service
amod(Resources-2, Natural-1)
compound(Conservation-3, Resources-2)
compound(Service-4, Conservation-3)
~~~

In addition, regular syntactic relations are used:
(i) for a modifying determiner or
(ii) to connect together the words of a description or name which involve embedded prepositional phrases, sentences, etc.

~~~ sdparse
Le Japon
det(Japon-2, Le-1)
~~~

~~~ sdparse
Ludwig van Beethoven
case(Beethoven, van)
~~~

~~~ sdparse
Miguel de Cervantes y Saavedra
conj(Cervantes, Saavedra)
cc(Cervantes, y)
case(Cervantes, de)
~~~

~~~ sdparse
The king of Sweden
det(king-2, The-1)
nmod(king-2, Sweden-4)
case(Sweden-4, of-3)
~~~

~~~ sdparse
Río de la Plata
case(Plata-4, de-2)
det(Plata-4, la-3)
nmod(Río-1, Plata-4)
~~~

In the case of proper entities named after people, e.g. _Leland Stanford Jr. University_, the `name` relation should only be used inside the person name, with the rest of the construction analyzed compositionally using normal syntactic relations:

~~~ sdparse
Leland Stanford Jr. University
compound(University-4, Leland-1)
name(Stanford-2, Leland-1)
name(Jr.-3, Leland-1)
~~~
