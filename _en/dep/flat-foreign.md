---
layout: relation
title:  'flat:foreign'
shortdef: 'foreign words'
udver: '2'
---

We use `flat:foreign` to label sequences of foreign words. These are given
a linear analysis: the head is the first token in the foreign phrase.

~~~ sdparse
I guess that c' est la vie
nsubj(guess-2, I-1)
ccomp(guess-2, c'-4)
mark(c'-4, that-3)
flat:foreign(c'-4, est-5)
flat:foreign(c'-4, la-6)
flat:foreign(c'-4, vie-7)
~~~
<!-- Interlanguage links updated St lis 3 20:58:54 CET 2021 -->
