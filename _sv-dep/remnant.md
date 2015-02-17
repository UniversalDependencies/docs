---
layout: relation
title: 'remnant'
shortdef: 'remnant in ellipsis'
---

The remnant relation is currently not attested in the Swedish treebank. For a full discussion of its use, see the universal dependency description ([u-dep/remnant]()).

~~~ sdparse
Marie åkte till Paris och Miriam till Prague \n Marie went to Paris and Miriam to Prague
nsubj(åkte, Marie-1)
nmod(åkte-2, Paris-4)
case(Paris-4, till-3)
cc(åkte, och)
remnant(Marie-1, Miriam-6)
case(Prague-8, till)
remnant(Paris-4, Prague-8)
~~~
