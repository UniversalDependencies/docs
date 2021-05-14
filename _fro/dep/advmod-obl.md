---
layout: relation
title: 'advmod:obl'
shortdef: 'contracted advmod and oblique nominal'
udver: '2'
---

In the current version of the Old French treebank, fused words have not been split the way they
should be in Universal Dependencies. One of the contraction types that occur in Old French is
an adverbial modifier with an oblique pronoun, e.g. _sin_ = _si + en_.
These contractions are are currently attached to the verb as `advmod:obl`.

~~~ sdparse
En ipse verbe sin dimes
advmod:obl(dimes, sin)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:08:49 CEST 2021 -->
