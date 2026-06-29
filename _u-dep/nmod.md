---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
udver: '2'
---

The `nmod` relation is used for a nominal dependent of another nominal, except in cases where the dependent modifies a predication. (A nominal is any expression headed by a word tagged [NOUN](), [PRON]() or [PROPN](), or some elliptical version of such an expression.)

~~~ sdparse
a room in the hotel
det(room-2, a-1)
nmod(room-2, hotel-5)
case(hotel-5, in-3)
det(hotel-5, the-4)
~~~

~~~ sdparse
a preference for lilies
det(preference-2, a-1)
nmod(preference-2, lilies-4)
case(lilies-4, for-3)
~~~

~~~ sdparse
a cup of tea
det(cup-2, a-1)
nmod(cup-2, tea-4)
case(tea-4, of-3)
~~~

~~~ sdparse
Professor Higgins
nmod(Higgins-2, Professor-1)
~~~

In conjunction with the [case]() relation, `nmod` provides a uniform analysis for the possessive alternation (with the option of a subtype like [nmod:poss]() to distinguish non-adpositional case):

~~~ sdparse
the office of the Chair
det(office-2, the-1)
nmod(office-2, Chair-5)
case(Chair-5, of-3)
det(Chair-5, the-4)
~~~

~~~ sdparse
the Chair 's office
det(Chair-2, the-1)
nmod:poss(office-4, Chair-2)
case(Chair-2, 's-3)
~~~

The `nmod` relation is also used when the head nominal is accompanied by an adposition or an oblique case marker:

~~~ sdparse
five days before the funeral
nummod(days-2, five-1)
nmod(funeral-5, days-2)
case(funeral-5, before-3)
det(funeral-5, the-4)
~~~

In this case, the dependent nominal “five days” modifies the entire phrase “before the funeral”, but since UD does not distinguish prepositional phrases from (other) nominals, the correct relation is still `nmod`.

However, `nmod` is not used for [compound]() or apposition ([appos]()) constructions, which may also be nominal–nominal relations.

It contrasts with [obl](), used when the head is not a nominal or cases where the dependent modifies a predication.

~~~ sdparse
we prefer lilies to daisies
obl(prefer-2, daisies-5)
~~~

~~~ sdparse
lilies are preferable to daisies
obl(preferable-3, daisies-5)
~~~

~~~ sdparse
lilies are a good choice in the summer
obl(choice-5, summer-8)
~~~

<!-- Interlanguage links updated Po 29. června 2026, 18:00:04 CEST -->
