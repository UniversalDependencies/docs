---
layout: relation
title: 'amod'
shortdef: 'adjectival modifier'
udver: '2'
---

Nouns may take adjectival modifiers, which are marked with the dependency type `amod`. Most of the adjectives appear after the noun they modify, though some of them may appear before.

*Epaiketa horrek kezka **handia** piztu du .*

*That trial has caused a **big** concern .*

~~~ sdparse
Epaiketa horrek kezka handia piztu du . \n Trial that concern big_a caused has .

nsubj(piztu-5, Epaiketa-1)
det(Epaiketa-1, horrek-2)
amod(kezka-3, handia-4)
dobj(piztu-5, kezka-3)
aux(piztu-5, du-6)
punct(piztu-5, .-7)
~~~


*Mutikoak heldu ditun dantzaldira atorra **urdin argi** batekin .*

*The boys have arrived to the ball with a **light blue** shirt .*

~~~ sdparse
Mutikoak heldu ditun dantzaldira atorra urdin argi batekin . \n Boys_the arrived have ball_the_to shirt blue light one_with .

nsubj(Mutikoak-1, heldu-2)
aux(heldu-2, ditun-3)
nmod(heldu-2, dantzaldira-4)
nmod(heldu-2, atorra-5)
amod(atorra-5, urdin-6)
amod(urdin-6, argi-7)
det(atorra-5, batekin-8)
punct(heldu-2, .-9)
~~~

***Azkeneko** 400 metroak minutu batean osatu zituen Derartu Tuluk .*

*Derartu Tulu made the **last** 400 meters in one minute .*

~~~ sdparse
Azkeneko 400 metroak minutu batean osatu zituen Derartu Tuluk . \n Last 400 meters_the minute one_in made Derartu Tulu .

amod(metroak-3, Azkeneko-1)
nummod(metroak-3, 400-2)
nobj(osatu-6, metroak-3)
nmod(osatu-6, minutu-4)
nummod(minutu-4, batean-5)
aux(osatu-6, zituen-7)
name(Derartu-8, Tuluk-9)
nsubj(osatu-6, Derartu-8)
punct(osatu-6, .-10)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:08:50 CEST 2021 -->
