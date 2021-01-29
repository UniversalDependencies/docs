---
layout: relation
title: 'compound'
shortdef: 'compound'
udver: '2'
---
The compound relation is one of three relations for multiword expressions (MWEs) (the other two being fixed and flat).

In Estonian treebanks, the dependency relation 'compound' is used for annotating numbers written with several words or several sequences of digits or combinations of them.

~~~ sdparse
60 000
compound(60-1, 000-2)
~~

~~~sdparse
kaks tuhat \n two thousand
compound(kaks, tuhat)
compound(two, thousand)
~~~

<!-- Interlanguage links updated Čt lis 12 09:43:18 CET 2020 -->
