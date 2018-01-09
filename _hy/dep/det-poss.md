---
layout: relation
title: 'det:poss'
shortdef: 'possessive determiner'
udver: '2'
---

Whenever there is a possessive determiner, `det:poss` should be used instead of `det`. All possessive determiners have the feature `Possessive` defined as `Yes`.

~~~ sdparse
Գուցե բացատրես ՞ սրա իմաստը ։ \n Could you explain its meaning ?
det:poss(իմաստը, սրա)
det:poss(meaning, its)
~~~

~~~ sdparse
Նա հենց նոր հայտարարեց իր հրաժարականի մասին ։ \n He has just announced his resignation .
det:poss(հրաժարականի, իր)
det:poss(resignation, his)
~~~
