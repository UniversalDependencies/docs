---
layout: relation
title: 'orphan'
redirect_from: "it/dep/remnant.html"
shortdef: 'remnant in ellipsis'
udver: '2'
---
The <code>orphan</code> relation is used in those cases of head [ellipsis](http://universaldependencies.org/u/dep/orphan.html) described in the UD guidelines, and both in syndetic and asyndetic coordination.

~~~sdparse
La legge deve assicurare ad esse la piena libertà e a i loro bambini un trattamento scolastico equipollente .
nsubj(assicurare, legge)
iobj(assicurare, esse)
obj(assicurare, libertà)
conj(assicurare, bambini)
cc(bambini, e)
orphan(bambini, trattamento)
~~~
~~~sdparse
Il Molise ne ha due , la Valle d' Aosta uno .
nsubj(ha, Molise)
obj(ha, ne)
conj(ha, Valle)
punct(Valle, ,)
orphan(Valle, uno)
~~~

<!-- Interlanguage links updated Út zář 29 18:41:33 CEST 2020 -->
