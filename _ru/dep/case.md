---
layout: relation
title: 'case'
shortdef: 'case marking'
---

Russian uses a combination of oblique morphological cases and prepositions to express semantic case.
Prepositions in UD are treated as dependents of the noun they attach to. The relation between the noun and the preposition is labeled `case`.

~~~ sdparse
В пятницу.Acc по дороге.Dat к деревне.Dat мы разговаривали o событии.Loc . \n On Friday during the-journey to the-village we talked about the-event .
case(пятницу.Acc, В)
case(Friday, On)
case(дороге.Dat, по)
case(the-journey, during)
case(деревне.Dat, к)
case(the-village, to)
case(событии.Loc, o)
case(the-event, about)
~~~
<!-- Interlanguage links updated Út zář 29 18:41:10 CEST 2020 -->
