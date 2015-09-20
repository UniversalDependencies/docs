---
layout: relation
title: 'mwe'
shortdef: 'multi-word expression'
---

The multi-word expression (modifier) relation is one of the
relations for compounding and it is intended for function words.
In Czech it is used for multi-word prepositions.
The leftmost word is the head and all the other words are attached as its `mwe` modifiers.

~~~ sdparse
Na rozdíl od tebe já se nemám zač stydět . \n In contrast to you I myself have-not of-what to-be-ashamed .
mwe(Na, rozdíl)
mwe(Na, od)
case(tebe, Na)
mwe(In, contrast)
mwe(In, to)
case(you, In)
~~~

Multi-word prepositions usually form a contiguous span of the sentence. In exceptional cases however, they can be interrupted
by emphasizers and other words:

~~~ sdparse
ve srovnání například s úvěry \n in comparison for-example to loans
mwe(ve, srovnání)
mwe(ve, s)
case(úvěry, ve)
advmod:emph(úvěry, například)
mwe(in, comparison)
mwe(in, to)
case(loans, in)
advmod:emph(loans, for-example)
~~~

Another type of interruption is caused by a possessive determiner. For instance, _na základě něčeho_ “based on something”
contains the multi-word preposition _na základě_ “based on”, lit. _on the-basis-of_. This expression is etymologically
a combination of a proper preposition _na_ “on” and the noun _základ_ “basis”; the argument _něčeho_ “something” is in
genitive. If the phrase _na základě_ were not analyzed as a multi-word expression, we would have a normal genitive
modification between two nominals: _základ něčeho_ “basis of-something”. A genitive modifier can be substituted by
a possessive determiner, and this is possible even within the partially frozen multi-word preposition, as with the
relative possessive determiner in the following example:

~~~ sdparse
zákon , na jehož základě byl zřízen fond \n law , on whose basis was created fund
nmod(zřízen, jehož)
nmod(created, whose)
case(jehož, na)
case(whose, on)
mwe(na, základě)
mwe(on, basis)
~~~
