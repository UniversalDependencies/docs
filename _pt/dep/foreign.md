---
layout: relation
title: 'foreign'
shortdef: 'foreign words'
---

We use `foreign` to label sequences of foreign words. These are given
a linear analysis: the head is the first token in the foreign phrase.

`foreign` does not apply to loanwords or to foreign [names](flat). 
It applies to quoted foreign text incorporated in a sentence/discourse
of the host language (unless we want to and know how to annotate the
internal structure according to the syntax of the foreign language).

~~~ sdparse
Eu acho que c' est la vie
nsubj(acho-2, Eu-1)
ccomp(acho-2, c'-4)
mark(c'-4, que-3)
foreign(c'-4, est-5)
foreign(c'-4, la-6)
foreign(c'-4, vie-7)
~~~
<!-- Interlanguage links updated Út zář 29 18:41:23 CEST 2020 -->
