---
layout: relation
title: 'iobj'
shortdef: 'indirect object'
udver: '2'
---

The indirect object of a verb is any nominal phrase that is a core
argument of the verb but is not its subject or [direct object](obj).
The prototypical example is the recipient of ditransitive verbs of
exchange:

~~~ sdparse
Pavel dal Petrovi dvě hrušky . \n Pavel gave Petr two pears .
iobj(dal, Petrovi)
iobj(gave, Petr)
~~~

However, Czech allows other semantic roles as additional objects.
The morphological [cs-feat/Case]() of the objects is dictated by verb valency.

In the following Czech example, the verb takes two arguments, both are nouns in the accusative case. One of them is direct object (patient), the other is indirect (addressee). It is parallel to how the English translation would be annotated (where there is no morphological case marking) and also to verbs of giving (consider a similar sentence, _he gave my daughter a class of maths_).

~~~ sdparse
On učí mou dceru matematiku . \n He teaches my daughter.Acc maths.Acc .
obj(učí, matematiku)
iobj(učí, dceru)
obj(teaches, maths.Acc)
iobj(teaches, daughter.Acc)
~~~

In general, if there is just one object, it should be labeled
[obj](), regardless of the morphological case or semantic role.
For example, _učit_ “to teach” can take either the subject matter or the recipient as the only object,
and in both cases it would be analyzed as the [obj]():

~~~ sdparse
Učí úvod do logiky . \n He-teaches introduction to logic .
obj(Učí, úvod)
obj(He-teaches, introduction)
~~~

~~~ sdparse
Učí studenty prvního ročníku . \n He-teaches students of-first year .
obj(Učí, studenty)
obj(He-teaches, students)
~~~

The one exception is when there is a clausal complement.
Then the clausal complement is regarded as a “clausal direct object” and an object nominal will be an `iobj`, parallel to
the simple ditransitive case:

~~~ sdparse
Řekla studentům , že dnes večer musí studovat . \n She-told students , that today evening they-needed to-study .
iobj(Řekla, studentům)
ccomp(Řekla, musí)
iobj(She-told, students)
ccomp(She-told, they-needed)
~~~

~~~ sdparse
Řekla studentům svůj plán . \n She-told students her plan .
iobj(Řekla, studentům)
obj(Řekla, plán)
iobj(She-told, students)
obj(She-told, plan)
~~~

If there are two or
more objects, one of them should be [obj]() and the others should be
`iobj`. In such cases it is necessary to decide what is the
most directly affected object _(patient)._

## Diffs

### Prague Dependency Treebank

The manual annotation of the PDT does not distinguish direct and indirect objects.
Therefore most non-clausal dependents labeled `Obj` in PDT are currently labeled `obj`
in the converted data, even if it results in two or more direct objects attached to one verb.
Occasionally a heuristic was used: if there are two objects, one of them accusative and the other dative, then the former is obj and the latter iobj.
But such heuristics do not cover all possible objects, and even ditransitive verbs may occur without one of their objects because of ellipsis.
In future, the valency lexicon <a href="http://ufal.mff.cuni.cz/vallex">Vallex</a>
could be used to identify the main object.
<!-- Interlanguage links updated Pá kvě 14 11:09:07 CEST 2021 -->
