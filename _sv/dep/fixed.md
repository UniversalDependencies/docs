---
layout: relation
title: 'fixed'
shortdef: 'multi-word expression'
udver: '2'
---

The _fixed_ relation is one of the three relations ([compound](), `fixed`, [flat]()) for special kinds of multiword expressions.
It is used for fixed grammaticized expressions that behave like function words or short adverbials. The first word is always
taken as the head, with all subsequent words as direct dependents.

~~~ sdparse
i dag \n today
fixed(i, dag)
~~~

~~~ sdparse
över huvud taget \n at all
fixed(över, huvud)
fixed(över, taget)
~~~

~~~ sdparse
när det gäller \n when it comes to
fixed(när, det)
fixed(när, gäller)
~~~
<!-- Interlanguage links updated Út zář 29 20:31:53 CEST 2020 -->
