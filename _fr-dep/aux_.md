---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "fr/dep/aux.html"
---

An auxiliary of a clause is a [non-main verb](sv-pos/AUX) of the
clause.

Exception: An auxiliary verb used to construct the passive
[voice](sv-feat/Voice) is not labeled `aux` but [auxpass]().

~~~ sdparse
On peut nager dans le lac \n One can swim in the lake
aux(nager, peut)
~~~

~~~ sdparse
Quelles conséquences cela a - t - il eu ? \n What consequences did this have ?
aux(eu, a)
~~~
