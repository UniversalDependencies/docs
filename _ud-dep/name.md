---
layout: base
title: 'name'
shortdef: 'name'
---

## name

*name* is one of the three relations for compounding in USD (together with *compound* and *mwe*). It is used for proper nouns constituted of multiple nominal elements. For example, *name* would be used between the words of "Hillary Rodham Clinton" or "Carl XVI Gustaf" but not to replace the usual relations in a phrasal or clausal name like "The Lord of the Rings" or "The king of Sweden".

Names are annotated in a flat, head-initial structure, in which all words in the name modify the first one using the *name* label.

~~~ sdparse
Carl XVI Gustaf
name(Carl-1, Gustaf-3)
name(Carl-1, XVI-2)
~~~

But regular syntactic relations in:

~~~ sdparse
The king of Sweden
det(king-2, The-1)
nmod(king-2, Sweden-4)
case(Sweden-4, of-3)
~~~


