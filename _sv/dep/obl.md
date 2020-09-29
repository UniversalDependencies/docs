---
layout: relation
title: 'obl'
shortdef: 'oblique modifier'
udver: '2'
---

The `obl` relation is used for non-core nominal dependents of clausal
predicates. In Swedish, `nmod` is used for prepositional complements/modifiers:

~~~ sdparse
Mamma har hand om barnen \n Mother takes care of the children
obl(har, barnen)
case(barnen, om)
~~~

~~~ sdparse
Han växte upp i en kollektiv miljö \n He grew up in a collective environment
obl(växte, miljö)
case(miljö, i)
~~~

But also for bare nominals used as oblique modifiers:

~~~ sdparse
Hon kom förra helgen \n She came last weekend
obl(kom, helgen)
~~~

One subtype of `obl` is introduced in Swedish: [obl:agent]() for agents of passive verbs.
<!-- Interlanguage links updated Út zář 29 18:41:32 CEST 2020 -->
