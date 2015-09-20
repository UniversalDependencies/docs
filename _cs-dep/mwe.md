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
