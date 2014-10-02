---
layout: entry
title:  'foreign'
shortdef : 'foreign words'
---

We use `foreign` to label sequences of foreign words. These are given
a linear analysis: the head is the first token in the foreign phrase.

~~~ sdparse
I guess that c' est la vie
nsubj(guess-2, I-1)
ccomp(guess-2, c'-4)
mark(c'-4, that-3)
foreign(c'-4, est-5)
foreign(c'-4, la-6)
foreign(c'-4, vie-7)
~~~
