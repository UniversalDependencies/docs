---
layout: relation
title: 'foreign'
shortdef: 'foreign words'
---

We use `foreign` to label sequences of foreign words. These are given
a linear analysis: the head is the <strong>last</strong> token in the foreign phrase.

`foreign` does not apply to loanwords or to foreign [names](name). 
It applies to quoted foreign text incorporated in a sentence/discourse
of the host language (unless we want to and know how to annotate the
internal structure according to the syntax of the foreign language).

~~~ sdparse
Он придет , когда полетят свиньи ( When pigs fly ) .
foreign(fly, When)
foreign(fly, pigs)
~~~

