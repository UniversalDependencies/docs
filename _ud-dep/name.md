---
layout: base
title: 'name'
shortdef: 'name'
---

## name

*name* is one of the three relations for compounding in USD (together with *compound* and *mwe*). It is used for proper nouns constituted of multiple nominal elements. For example, *name* would be used between the words of "Hillary Rodham Clinton", "New York", or "Carl XVI Gustaf" but not to replace the usual relations in a phrasal or clausal name like "The Lord of the Rings", "The king of Sweden", or "Captured By Aliens". Words joined by *name* should all be part of a minimal noun phrase; otherwise regular syntactic relations should be used.

Names are annotated in a flat, head-initial structure, in which all words in the name modify the first one using the *name* label.

~~~ sdparse
Carl XVI Gustaf
name(Carl-1, Gustaf-3)
name(Carl-1, XVI-2)
~~~

Regular syntactic relations are used: (i) for a modifying determiner or (ii) to connect together the words of a description or name which involve embedded prepositional phrases, sentences, etc.

~~~ sdparse
Le Japon
det(Japon-2, Le-1)
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
~~
