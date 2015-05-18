---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
---

The `nmod` relation is used for nominal modifiers of nouns or clausal
predicates. `nmod` is a noun functioning as a non-core (oblique)
argument or adjunct. In French, `nmod` is used for prepositional complements as well as for temporal complements not introduced by a preposition.

~~~ sdparse
Le résultat de la course \n The result of the race
nmod(résultat, course)
case(course, de)
~~~

~~~ sdparse
Maman prend bien soin de ses enfants \n Mother takes good care of her children
nmod(soin, enfants)
case(enfants, de)
~~~

~~~ sdparse
Il a grandi en Afrique \n He grew up in Africa
nmod(grandi, Afrique)
case(Afrique, en)
~~~

~~~ sdparse
Il est utilisé pour le service \n It is used for the service
nmod(utilisé, service)
case(service, pour)
~~~

~~~ sdparse
L' an passé, la compagnie a fait pas mal de bénéfices \n Last year, the company made quite a lot of benefit
nmod(fait, an)
~~~
