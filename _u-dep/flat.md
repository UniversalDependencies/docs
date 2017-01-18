---
layout: relation
title: 'flat'
shortdef: 'flat multiword expression'
udver: '2'
---

The `flat` relation is one of three relations for multiword expressions multiword expressions (MWEs) in UD 
(the other two being [fixed]() and [compound]()). It is used for exocentric (headless) semi-fixed MWEs like
names (_Hillary Rodham Clinton_) and dates (_24 December_). It contrasts with [fixed](), which applies to
to completely fixed grammaticized MWEs (like _in spite of_), and with [compound](), which applies to
endocentric (headed) MWEs (like _apple pie_).

Flat MWEs are annotated in a flat structure, where all subsequent words in the expression are attached to the 
first one using the fixed label. The assumption is that these expressions do not have any internal syntactic structure 
and that the structural annotation is in principle arbitrary. In practice, however, it is highly desirable to use 
a consistent annotation of all flat MWEs in all languages.

Below we describe some of the most common uses of [flat]() across languages. Note, however, that semantically
equivalent expressions in other languages (or even in the same language) may require a different analysis if it
has a regular compositional syntactic structure.

## Names 

In many languages, there are multiword proper names with no clear internal syntactic structure and no clear 
evidence that one of the words is the syntactic head. Such names are annotated using the `flat` relation, 
with the optional subtype `flat:name`.

~~~ sdparse
Hilary Rodham Clinton
flat(Hilary, Rodham)
flat(Hilary, Clinton)
~~~

~~~ sdparse
Carl XVI Gustaf
flat(Carl-1, Gustaf-3)
flat(Carl-1, XVI-2)
~~~

~~~ sdparse
New York
flat(New, York)
~~~

By contrast, names that have a regular syntactic structure, like _The Lord of the Rings_ and _Captured By
Aliens_, should be annotated with regular syntactic relations.

~~~ sdparse
The Lord of the Rings
det(Lord, The)
nmod(Lord, Rings)
case(Rings, of)
det(Rings, the)
~~~

For organization names with clear syntactic modification structure, the dependencies should 
also reflect the syntactic modification structure using regular syntactic relations, as in:

~~~ sdparse
Natural Resources Conservation Service
amod(Resources-2, Natural-1)
compound(Conservation-3, Resources-2)
compound(Service-4, Conservation-3)
~~~

In addition, regular syntactic relations are used: (i) for a modifying determiner or (ii) to connect 
together the words of a description or name which involve embedded prepositional phrases, sentences, etc.

~~~ sdparse
Le Japon
det(Japon-2, Le-1)
~~~

~~~ sdparse
Ludwig van Beethoven
case(Beethoven, van)
nmod(Ludwig, Beethoven)
~~~

~~~ sdparse
Miguel de Cervantes y Saavedra
conj(Cervantes, Saavedra)
cc(Saavedra, y)
case(Cervantes, de)
nmod(Miguel, Cervantes)
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

In the case of proper entities named after people, e.g. _Leland Stanford Jr. University_, the `flat` relation 
should only be used inside the person name, with the rest of the construction analyzed compositionally using 
normal syntactic relations:

~~~ sdparse
Leland Stanford Jr. University
compound(Leland-1, University-4)
flat(Leland-1, Stanford-2)
flat(Leland-1, Jr.-3)
~~~

## Dates and Complex Numerals

Date expressions come in many shapes and forms across languages. In some cases, they have a very clear syntactic
structure, as in _the 4th of July_, and should be annotated with regular dependency relations. In other cases, they
have a flat structure with no clearly discernible head, as in _1 December 2016_, in which case the `flat` relation 
should be used.

~~~ sdparse
the 4th of July
det(4th, the)
nmod(4th, July)
case(July, of)
~~~

~~~ sdparse
1 December 2016
flat(1, December)
flat(1, 2016)
~~~

The `flat` relation can also be used for other numerals and other numerical expressions that lack phrasal structure.

~~~ sdparse
four thousand
flat(four, thousand)
~~~

## Foreign Phrases

The `flat` relation, with the optional subtype `flat:foreign` should also be used when a foreign phrase
cannot be given a compositional analysis. In this case, it replaces the `foreign` relation, which was used
in v1 but is no longer part of the relation taxonomy.

~~~ sdparse
And then she went : gjiko frac zen .
parataxis(went, gjiko)
flat(gjiko, frac)
flat(gjiko, zen)
~~~
