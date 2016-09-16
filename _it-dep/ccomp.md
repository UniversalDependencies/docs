---
layout: relation
title: 'ccomp'
shortdef: 'clausal complement'
---

A clausal complement (ccomp) of a verb or adjective is a dependent clause which is a core argument. Such clausal complements may be finite or nonfinite. If the subject of the clausal complement is controlled (that is, must be the same as the higher subject, object or indirect object, with no other possible interpretation) the appropriate relation is xcomp.

* finite clausal complement of verbal head

~~~ sdparse
Le ha detto che il rapimento era avvenuto a scopo di furto
ccomp(detto, avvenuto)
nsubj(avvenuto, rapimento)
mark(avvenuto, che)
~~~
~~~ sdparse
Non so se qualche agenzia organizza viaggi
ccomp(so, organizza)
nsubj(organizza, agenzia)
mark(organizza, se)
~~~
~~~ sdparse
zio Adelio avrebbe preferito studiassero in Italia
ccomp(preferito, studiassero)
aux(preferito, avrebbe)
nsubj(preferito, zio)
~~~

* finite clausal complement of adjectival head

~~~ sdparse
era sicuro che non ci fossero pericoli
ccomp(sicuro, fossero)
mark(fossero, che)
nsubj(fossero, pericoli)
~~~

* infinite clausal complement of verbal head

~~~ sdparse
bisogna avviare un dialogo
ccomp(bisogna, avviare)
dobj(avviare, dialogo)
~~~
~~~ sdparse
si fa per dire
ccomp(fa, dire)
mark(dire, per)
~~~

* infinite clausal complement of essere. In this case, the copula is treated as a head

~~~ sdparse
il problema allora non è domandar si
ccomp(è, domandar)
expl(domandar, si)
neg(è, non)
~~~
