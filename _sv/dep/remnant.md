---
layout: relation
title: 'remnant'
shortdef: 'remnant in ellipsis'
---

The remnant relation is used to analyze cases of ellipsis where there is no function word that can be promoted to take the place of the elided content word. For a full discussion of its use, see the universal dependency description ([u-dep/remnant]()).

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
<!-- Interlanguage links updated Út zář 29 20:23:43 CEST 2020 -->
