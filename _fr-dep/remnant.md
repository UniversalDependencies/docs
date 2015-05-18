---
layout: relation
title: 'remnant'
shortdef: 'remnant in ellipsis'
---

The remnant relation is used to analyze cases of ellipsis where there is no function word that can be promoted to take the place of the elided content word. For a full discussion of its use, see the universal dependency description ([u-dep/remnant]()).

Currently this construction is not correctly annotated in the French treebank.

~~~ sdparse
Marie a été à Paris et Miriam à Prague \n Marie went to Paris and Miriam to Prague
nsubj(été-3, Marie-1)
nmod(été-3, Paris-5)
case(Paris-5, à-4)
cc(été-3, et-6)
remnant(Marie-1, Miriam-7)
case(Prague-9, à-8)
remnant(Paris-5, Prague-9)
~~~
