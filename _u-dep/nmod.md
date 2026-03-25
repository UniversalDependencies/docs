---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
udver: '2'
---

The `nmod` relation is used for a nominal dependent of another nominal, except in cases where the dependent modifies a predication. (A nominal is any expression headed by a word tagged NOUN, PRON or PROPN, or some elliptical version of such an expression.)

~~~ sdparse
a room in the hotel
det(room-2, a-1)
nmod(room-2, hotel-5)
case(hotel-5, in-3)
det(hotel-5, the-4)
~~~

In conjunction with the [case]() relation, `nmod` provides a uniform analysis for the possessive alternation (with the option of a subtype like `nmod:poss` to distinguish non-adpositional case):

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
<!-- Interlanguage links updated St 12. listopadu 2025, 09:22:05 CET -->
