---
layout: base
title:  'Nominal Phrases'
permalink: u/overview/nominal-syntax.html
udver: '2'
---

# Nominal Phrases

The head of a nominal phrase is usually a noun, proper noun or pronoun, although in cases of ellipsis it can also be an adjective or even a determiner.

~~~ sdparse
Hon såg den nya filmen . \n She saw the new film .
obj(såg, filmen)
amod(filmen, nya)
det(filmen, den)
~~~
~~~ sdparse
Hon såg Batman . \n She saw Batman .
obj(såg, Batman)
~~~
~~~ sdparse
Hon såg den . \n She saw it .
obj(såg, den)
~~~
~~~ sdparse
Hon såg den nya . \n She saw the new (one) .
obj(såg, nya)
det(nya, den)
~~~

## Non-Core Dependents

The head of a nominal phrase does not take any core arguments but may be associated with different types of modifiers:

1. An `nmod` is a nominal phrase modifying the head of another nominal phrase, with or without a special case marker.
2. An `amod` is an adjective modifying the head of a nominal phrase.
3. A `nummod` is a numeral modifying the head of a nominal phrase.

~~~ sdparse
the Chair 's office
det(Chair-2, the-1)
nmod(office-4, Chair-2)
case(Chair-2, 's-3)
~~~

~~~ sdparse
the office of the Chair
det(office-2, the-1)
nmod(office-2, Chair-5)
case(Chair-5, of-3)
det(Chair-5, the-4)
~~~

## Function Word Dependents
