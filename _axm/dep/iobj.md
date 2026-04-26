---
layout: relation
title: 'iobj'
shortdef: 'indirect object'
udver: '2'
---

The indirect object of a verb is any nominal phrase that is a core argument of the verb but is not its subject or [direct object](obj).
The prototypical example is the recipient of ditransitive verbs of exchange:

~~~ sdparse
Ջուր տուր ծարւած լերդիս : \n J̌owr towr çarwaç lerdis . \n Give water to my thirsty liver .
iobj(տուր, լերդիս)
iobj(Give, liver)
~~~

Middle Armenian allows other semantic roles as additional objects. The morphological [Case]() of the objects is dictated by verb valency.

If there is just one object, it should likely be [obj]() unless it is morphosyntactically more similar to clear cases of [iobj](). This is an amended policy of UD as
described [on the changes page](https://universaldependencies.org/changes.html#sole-iobj).

~~~ sdparse
օձն խայթէ զմարդն \n òjn xayt’ē zmardn \n the snake bites the man
obj(խայթէ, զմարդն)
obj(bites, the-man)
~~~

~~~ sdparse

~~~

When there is a [clausal complement](ccomp), then the clausal complement is regarded as a “clausal direct object” and an object nominal will be an `iobj`, parallel to
the simple ditransitive case:

~~~ sdparse

iobj()
ccomp()
iobj()
ccomp()
~~~

If there are two or more objects, one of them should be [obj]() and the others should be
`iobj`. In such cases it is necessary to decide what is the most directly affected object _(patient)._
<!-- Interlanguage links updated St 12. listopadu 2025, 09:21:59 CET -->
