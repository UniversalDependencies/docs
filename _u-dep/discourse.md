---
layout: relation
title: 'discourse'
shortdef: 'discourse element'
udver: '2'
---

This is used for [interjections](u-pos/INTJ) and other discourse [particles](u-pos/PART) and
elements (which are not clearly linked to the structure of the
sentence, except in an expressive way). In English, for example, this includes:
interjections (*oh*, *uh-huh*, *Welcome*), fillers (*um*, *ah*),
and non-adverbial discourse markers (*well*, *like*, but not *you know* or *actually*).
We also use `discourse` for list enumerators (e.g. *1.*, *(a)* marking an item in a sequence).
(Bullets, by contrast, are considered [punctuation](u-pos/PUNCT) and attach as [punct]().)

These discourse elements are attached to the head of the most relevant nearby unit, often a clause.

~~~ sdparse
I am 21 , well , will be in November .
nsubj(21, I)
cop(21, am)
parataxis(21, be)
discourse(be, well)
aux(be, will)
obl(be, November)
case(November, in)
punct(21, .)
punct(well, ,-4)
punct(well, ,-6)
~~~

~~~ sdparse
Iguazu is in Argentina :)
discourse(Argentina-4, :)-5)
~~~

~~~ sdparse
5/NUM . Cool for 10 minutes and serve .
discourse(Cool, 5)
punct(5, .-2)
~~~

~~~ sdparse
To enter the stadium , you must not have — ( a ) a weapon ; ( b ) any food ; and ( c ) any drink .
discourse(weapon, a-12)
discourse(food, b)
discourse(drink, c)
conj(weapon, food)
conj(weapon, drink)
cc(drink, and)
~~~

<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:50 CET -->
