---
layout: relation
title: 'mwe'
shortdef: 'multi-word expression'
---

The multi-word expression (modifier) relation is one of the three
relations ([compound](), `fixed`, [flat]()) for compounding.
It is used for certain fixed grammaticized expressions that behave
like function words or short adverbials. The first word is always
taken as the head, with all subsequent words as direct dependents.

~~~ sdparse
i dag \n today
mwe(i, dag)
~~~

~~~ sdparse
över huvud taget \n at all
mwe(över, huvud)
mwe(över, taget)
~~~

~~~ sdparse
när det gäller \n when it comes to
mwe(när, det)
mwe(när, gäller)
~~~
<!-- Interlanguage links updated Út zář 29 20:31:55 CEST 2020 -->
