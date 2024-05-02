---
layout: relation
title: 'nummod'
shortdef: 'numeric modifier'
udver: '2'
---

A numeric modifier of a noun is any [number](u-pos/NUM) phrase
that serves to modify the meaning of the noun with a quantity.

~~~ sdparse
Sam ate 3 sheep
nummod(sheep, 3)
~~~

~~~ sdparse
Sam spent forty dollars
nummod(dollars, forty)
~~~

~~~ sdparse
Sam spent $ 40
nummod($, 40)
~~~

Note that indefinite quantifiers such as _few, many_ are tagged
[u-pos/DET]() rather than [u-pos/NUM](). 
Therefore their relation to the quantified noun is not `nummod` but
[det]():

~~~ sdparse
Sam ate many sheep
det(sheep, many)
~~~

Furthermore, a number that serves as a label for an entity rather than denoting quantity
is not `nummod`. For example, in _The meeting will be in room 4_, the number is the name
of a particular room, it is different from the expression _4 rooms_. Note that the label
of the room could also be non-numeric, as in _The meeting will be in room A_. UD analyzes
the number as a nominal (even if keeping the UPOS tag [NUM]() for it). Hence the number
is attached as [nmod]() to the noun it modifies, unless there is clear morphosyntactic
evidence in the language for the opposite direction. See also §3.6.3 of
[de Marneffe et al. (2021)](https://doi.org/10.1162/coli_a_00402).

~~~ sdparse
The meeting will be in room 4
det(meeting, The)
nsubj(room, meeting)
aux(room, will)
cop(room, be)
case(room, in)
nmod(room, 4)
~~~

<!-- Interlanguage links updated Po 6. listopadu 2023, 21:43:12 CET -->
