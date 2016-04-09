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
В отличие от тебя , мне нечего стыдиться . \n In contrast to you I-have nothing to-be-ashamed .
mwe(В, отличие)
mwe(В, от)
case(тебя, В)
mwe(In, contrast)
mwe(In, to)
case(you, In)
~~~

Multi-word prepositions usually form a contiguous span of the sentence. In exceptional cases however, they can be interrupted
by emphasizers and other words:

~~~ sdparse
в сравнении , например , с долгом \n in comparison for-example to loans
mwe(в, сравнении)
mwe(в, с)
case(долгом, с)
advmod:emph(долгом, например)
mwe(in, comparison)
mwe(in, to)
case(loans, to)
advmod:emph(loans, for-example)
~~~

Another type of interruption is caused by a possessive determiner. For instance, _на основе чего-то_ “based on something”
contains the multi-word preposition _на основе_ “based on”, lit. _on the-basis-of_. This expression is etymologically
a combination of a proper preposition _на_ “on” and the noun _основа_ “basis”; the argument _чего-то_ “something” is in
genitive. If the phrase _на основе_ were not analyzed as a multi-word expression, we would have a normal genitive
modification between two nominals: _основа чего-то_ “basis of-something”. A genitive modifier can be substituted by
a possessive determiner, and this is possible even within the partially frozen multi-word preposition, as with the
relative possessive determiner in the following example:

~~~ sdparse
zákon , na jehož základě byl zřízen fond \n law , on whose basis was created fund
nmod(zřízen, jehož)
nmod(created, whose)
case(jehož, na)
case(whose, on)
mwe(на, основе)
mwe(on, basis)
~~~
