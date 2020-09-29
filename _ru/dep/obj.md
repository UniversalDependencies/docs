---
layout: relation
title: 'obj'
shortdef: 'object'
---

The object of a verb is the the second most core argument of a verb after the subject. 
Most often it is a direct object is in the [accusative case](ru-feat/Case), a noun phrase that denotes the entity acted upon.
However, in Russian there are many verbs that require their objects be in other cases (except for
nominative and vocative).

Accusative example:

~~~ sdparse
Я купил машину . \n I have-bought car .
obj(купил, машину)
obj(have-bought, car)
~~~

Genitive example:

~~~ sdparse
Я не боюсь этого . \n I-am not afraid of this .
obj(боюсь, этого)
obj(afraid, this)
~~~

Dative example:

~~~ sdparse
Но это не соответствует действительности . \n But this not corresponds to-reality .
obj(соответствует, действительности)
obj(corresponds, to-reality)
~~~

Instrumental example:

~~~ sdparse
Президент руководит страной . \n The President rules the country .
obj(руководит, страной)
obj(rules, country)
~~~

In general, if there is only one object, it should be labeled `obj`,
regardless of the morphological case or semantic role that it bears. If there are two or more
objects, one of them should be `obj` and the others should be
[iobj](). In such cases it is necessary to decide what is the most
directly affected object _(patient)._ The one exception is when there is a clausal complement: 
then the clausal complement is regarded as a “clausal object” and an object nominal will be an iobj.
<!-- Interlanguage links updated Út zář 29 20:43:24 CEST 2020 -->
