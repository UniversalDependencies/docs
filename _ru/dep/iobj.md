---
layout: relation
title: 'iobj'
shortdef: 'indirect object'
---

The indirect object of a verb is any nominal phrase that is a core
argument of the verb but is not its subject or [direct object](obj).
The prototypical example is the recipient of ditransitive verbs of
exchange:

~~~ sdparse
Павел дал Петру две груши . \n Pavel gave Peter two pears .
iobj(дал, Петру)
iobj(gave, Peter)
~~~

However, Russian allows other semantic roles as additional objects.
The morphological [ru-feat/Case]() of the objects is dictated by verb valency.

In the following Russian example, the verb takes two arguments. One of them is direct object (patient), the other is indirect (addressee). It is parallel to how the English translation would be annotated (where there is no morphological case marking) and also to verbs of giving (cf. a similar sentence, _he gave my daughter a class of maths_).

~~~ sdparse
Он преподает моей дочери математику . \n He teaches my daughter.Dat maths.Acc .
obj(преподает, математику)
iobj(преподает, дочери)
obj(teaches, maths.Acc)
iobj(teaches, daughter.Dat)
~~~

In general, if there is just one object, it should be labeled
[obj](), regardless of the morphological case or semantic role.
For example, _преподавать_ “to teach” can take either the subject matter or the recipient as the only object,
and in both cases it would be analyzed as the [obj]():

~~~ sdparse
Он преподает математику . \n He teaches maths .
obj(преподает, математику)
obj(teaches, maths)
~~~

~~~ sdparse
Он преподает студентам . \n He teaches students .
obj(преподает, студентам)
obj(teaches, students)
~~~

The one exception is when there is a clausal complement.
Then the clausal complement is regarded as a “clausal direct object” and an object nominal will be an iobj, parallel to
the simple ditransitive case:

~~~ sdparse
Она сказала студентам , что сегодня вечером нужно учиться . \n She told students , that today evening they-needed to-study .
iobj(сказала, студентам)
ccomp(сказала, нужно)
iobj(told, students)
ccomp(told, they-needed)
~~~

~~~ sdparse
Она рассказала студентам свой план . \n She told students her plan .
iobj(рассказала, студентам)
obj(рассказала, план)
iobj(told, students)
obj(told, plan)
~~~

If there are two or more objects, one of them should be [obj]() and the others should be `iobj`. In such cases it is necessary to decide what is the most directly affected object _(patient)_, and the Accusative [ru-feat/Case]() has priority over the Dative, Instrumental, and Genitive cases.

<!-- Interlanguage links updated Út zář 29 20:23:33 CEST 2020 -->
