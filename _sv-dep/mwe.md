---
layout: relation
title: 'mwe'
shortdef: 'multi-word expression'
---

The multi-word expression (modifier) relation is one of the three
relations ([compound](), `mwe`, [name]()) for compounding.
It is used for certain fixed grammaticized expressions that behave
like function words or short adverbials.

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
