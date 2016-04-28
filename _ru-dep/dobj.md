---
layout: relation
title: 'dobj'
shortdef: 'direct object'
---

The direct object of a verb is the noun phrase that denotes the entity acted upon.
Most often the direct object is in the [accusative case](cs-feat/Case) but
there are verbs that require their objects be in other cases (except for
nominative and vocative).

Accusative example:

~~~ sdparse
Я купил машину . \n I have-bought car .
dobj(купил, машину)
dobj(have-bought, car)
~~~

Genitive example:

~~~ sdparse
Я не боюсь этого . \n I-am not afraid of this .
dobj(боюсь, этого)
dobj(afraid, this)
~~~

Dative example:

~~~ sdparse
Но это не соответствует действительности . \n But this not corresponds to-reality .
dobj(соответствует, действительности)
dobj(corresponds, to-reality)
~~~

Instrumental example:

~~~ sdparse
Президент руководит страной . \n The President rules the country .
dobj(руководит, страной)
dobj(rules, country)
~~~

In general, if there is just one object, it should be labeled `dobj`,
regardless of the morphological case or semantic role that it bears. If there are two or more
objects, one of them should be `dobj` and the others should be
[iobj](). In such cases it is necessary to decide what is the most
directly affected object _(patient)._ The one exception is when there is a clausal complement. Then the clausal complement is regarded as a “clausal direct object” and an object nominal will be an iobj.
