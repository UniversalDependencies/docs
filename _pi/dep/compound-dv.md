---
layout: relation
title: 'compound:dv'
shortdef: 'dvandva compound'
udver: '2'
---

Dvandva compounds are those that express a coordinative relation.

For example "the sun and moon":

~~~ sdparse
candima- sūriyā \n moon sun

compound:dv(sūriyā, candima-)
compound:dv(sun, moon)
~~~

Note that the `compound:dv` relation takes the first element as the dependent and the last element of the coordination as the head. So, in the case of more than two co-equal members, all get linked to the last element:

~~~ sdparse
jāti- jarā- maraṇa \n birth aging and-death

compound:dv(maraṇa, jarā-)
compound:dv(maraṇa, jāti-)
compound:dv(and-death, aging)
compound:dv(and-death, birth)
~~~
