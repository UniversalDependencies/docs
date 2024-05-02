---
layout: relation
title:  'flat:foreign'
shortdef: 'foreign words'
udver: '2'
---

Some English treebanks use `flat:foreign` to label sequences of foreign words.
These are given a linear analysis: the head is the first token in the foreign phrase.
_Most of the English treebanks, however, use plain [flat]() in such cases._

~~~ sdparse
I guess that c' est la vie
nsubj(guess-2, I-1)
ccomp(guess-2, c'-4)
mark(c'-4, that-3)
flat:foreign(c'-4, est-5)
flat:foreign(c'-4, la-6)
flat:foreign(c'-4, vie-7)
~~~

See the general policy on [Foreign Expressions and Code-Switching](/foreign.html).

<!-- Interlanguage links updated Po 6. listopadu 2023, 21:42:56 CET -->
