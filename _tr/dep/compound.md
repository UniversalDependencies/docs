---
layout: relation
title: 'compound'
shortdef: 'compound'
udver: '2'
---

The ``compound`` relation is one of three relations
for multi-word expressions (MWEs) (the other two being [fixed]() and [flat]()).

~~~ sdparse
çelik/NOUN yelek/NOUN \n steel vest (bulletproof vest)
compound(yelek, çelik)
~~~

~~~ sdparse
kırmızı/ADJ şarap/NOUN \n red wine
compound(şarap, kırmızı)
~~~

~~~ sdparse
Roma Imparatorluğu \n Roman Empire
compound(Imparatorluğu, Roma)
~~~


It is also used for numbers, where head is the right-most number.

~~~ sdparse
iki yüz bin lira\n two hundred thousand liras
compound(bin, iki)
compound(bin, yüz)
nummod(lira, bin)
~~~

For reduplication, the subtype [compound:redup](compound-redup) is used.

For (light-)verb compounds, the subtype [compound:lvc](compound-lvc) is used.

For non-lexicalized (non-MWE) nominal modification,
e.g., _tahta kapı_ "wood(en) door", [nmod]() relation is used.
