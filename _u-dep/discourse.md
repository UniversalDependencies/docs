---
layout: relation
title: 'discourse'
shortdef: 'discourse element'
udver: '2'
---

This is used for [interjections](u-pos/INTJ) and other discourse [particles](u-pos/PART) and
elements (which are not clearly linked to the structure of the
sentence, except in an expressive way). We generally follow the
guidelines of what the Penn Treebanks count as an INTJ.  They define
this to include: interjections (*oh*, *uh-huh*, *Welcome*), fillers
(*um*, *ah*), and non-adverbial discourse markers (*well*, *like*, but
not *you know* or *actually*).
We also use `discourse` for list enumerators (e.g. *1.*, *(a)* marking an item in a sequence).
(Bullets, by contrast, are considered [punctuation](u-pos/PUNCT) and attach as [punct]().)

These discourse elements are attached to the head of the most relevant nearby unit, often a clause.
<!--
which is why they are grouped with non-core clausal dependents even though they are normally
not dependents of the predicates as such.
-->

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

<!-- Interlanguage links updated Ne 5. května 2024, 18:21:08 CEST -->
