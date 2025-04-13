---
layout: relation
title: 'iobj'
shortdef: 'indirect object'
udver: '2'
---

The indirect object of a verb is any nominal phrase that is a core argument of the verb but is neither its [subject](xcl-dep/nsubj) nor [direct object](xcl-dep/obj).
The prototypical example is the recipient of ditransitive verbs of exchange, which is marked by the dative case:

~~~ sdparse
զ այս ամենայն քեզ տաց ։ \n all these things I will give you
iobj(տաց, քեզ)
iobj(give, things)
~~~

Given that the `iobj` is marked by the bare dative, recipient-like arguments of ditransitive verbs marked by the prepositional construction with ց=/_cʻ=_ “to” + accusative is tagged as an oblique argument with a specialized relation [obl:arg]().

~~~ sdparse
ասէ ց նա եկ զկնի իմ \n He said to him , Follow me !
obl:arg(ասէ, նա)
ccomp(ասէ, եկ)
obl:arg(said, him)
ccomp(said, Follow)
~~~
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:59 CET -->
