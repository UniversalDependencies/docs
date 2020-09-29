---
layout: relation
title: 'orphan'
redirect_from: "fr/dep/remnant.html"
shortdef: 'remnant in ellipsis'
udver: '2'
---

The `orphan` relation is used to analyze cases of ellipsis where there is no function word that can be promoted to take the place of the elided content word.
For a full discussion of its use, see the universal dependency description ([u-dep/orphan]()).

Currently this construction is not correctly annotated in the French treebank.

~~~ sdparse
Marie a été à Paris et Miriam à Prague \n Marie went to Paris and Miriam to Prague
nsubj(été-3, Marie-1)
nmod(été-3, Paris-5)
case(Paris-5, à-4)
cc(été-3, et-6)
orphan(Marie-1, Miriam-7)
case(Prague-9, à-8)
orphan(Paris-5, Prague-9)
~~~
<!-- Interlanguage links updated Út zář 29 20:43:26 CEST 2020 -->
