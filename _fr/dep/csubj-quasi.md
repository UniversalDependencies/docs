---
layout: relation
title: 'csubj:quasi'
shortdef: 'quasi clausal subject'
udver: '2'
---

FrenchSpoken does not use the usual [expl]() relation. There is instead a subrelation used only for impersonal construction: [nsubj:expl]().
To annotate the other dependent of the predicate (i.e. not the dependent annotated with the `nsubj:expl` relation) we use the `csubj:quasi` relation, when this other dependent is a clause.
When the other dependent is a nominal, we use the [nsubj:quasi]() relation.

~~~ sdparse
Il faut que Pierre parte rapidement. \n Pierre must leave quickly.
nsubj:expl(faut,Il)
csubj:quasi(faut,parte)
mark(parte,que)
~~~

~~~ sdparse
Il est impossible de voir le sommet de la montagne. \n It is impossible to see the top of the mountain.
nsubj:expl(impossible,Il)
cop(impossible,est)
csubj:quasi(impossible,voir)
mark(voir,de)
~~~
