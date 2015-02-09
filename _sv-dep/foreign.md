---
layout: relation
title: 'foreign'
shortdef: 'foreign words'
---

The `foreign` relation can be used to label sequences of foreign words. These are given
a linear analysis: the head is the first token in the foreign phrase.

~~~ sdparse
I anslutning till satsen consensus facit nuptiam
foreign(satsen, consensus)
foreign(consensus, facit)
foreign(facit, nuptiam)
~~~
