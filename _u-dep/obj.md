---
layout: relation
title: 'obj'
shortdef: 'object'
udver: '2'
---

The object of a verb is the second most core argument of a verb after the subject.
Typically, it is the noun phrase that denotes the entity acted upon or which undergoes a change of state or motion (the proto-patient).

~~~ sdparse
She gave me a raise
obj(gave, raise)
~~~

In languages distinguishing morphological [cases](u-feat/Case), the
object will often be marked by the accusative case. If a verb dictates
another case (dative, genitive…), the fundamental question is whether
such cases qualify as core in the given language. Often these cases
are oblique, regardless of the presence or absence of an adposition.
Consequently they cannot use the `obj` relation and must use [obl](),
even if the traditional grammar calls such dependents “objects”.

If there are two or more objects, one of them should be `obj` and the
others should be [iobj](). In such cases it is necessary to decide what
is the most directly affected object _(patient)._
If there is just one object, it should likely be `obj` 
unless it is morphosyntactically more similar to clear cases 
of [iobj]() in the language than it is to prototypical patient arguments.

<!--In general, if there is just one (core) object, it should be labeled `obj`,
regardless of the morphological case or semantic role that it bears.-->

<!--The one exception is when there is a clausal complement.
Then the clausal complement is regarded as a “clausal object” and an object nominal will be an [iobj]().-->

There is further discussion of the two kinds of object at [iobj]().
If possible, language-specific documentation should be available to help identify the primary (or direct) object.
<!-- Interlanguage links updated Ne 5. května 2024, 18:21:32 CEST -->
