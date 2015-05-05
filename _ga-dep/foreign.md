---
layout: relation
title: 'foreign'
shortdef: 'foreign words'
---

The `foreign` relation can be used to label sequences of foreign words. These are given a linear analysis: the head is the first token in the foreign phrase.

~~~ sdparse
ar oscailt / open : Bealtaine - Meán Fómhair / May - September \n open / open : May - September / May - September
foreign(oscailt,open)
foreign(Bealtaine,May)
foreign(May,September)
~~~
