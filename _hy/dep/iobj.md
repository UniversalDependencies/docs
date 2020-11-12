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
Արամը Արթուրին տանձ տվեց ։ \n Aram gave Arthur a-pear .
iobj(տվեց, Արթուրին)
iobj(gave, Arthur)
~~~

However, Armenian allows other semantic roles as additional objects.
The morphological [Case]() of the objects is dictated by verb valency.

In the following Armenian example, the verb takes two arguments both are nouns in the dative case. One of them is direct object (patient), the other is indirect (addressee). It is parallel to how the English translation would be annotated (where there is no morphological case marking) and also to verbs of giving (cf. a similar sentence, _he introduced my son to the coach_).

~~~ sdparse
Նա իմ որդուն ներկայացրեց մարզիչին ։ \n He introduced my son.Dat to-the-coach.Dat .
obj(ներկայացրեց, որդուն)
iobj(ներկայացրեց, մարզիչին)
obj(introduced, son.Dat)
iobj(introduced, to-the-coach.Dat)
~~~

In general, if there is just one object, it should be labeled
[obj](), regardless of the morphological case or semantic role.
For example, _դասավանդել_ “to teach” can take either the subject matter or the recipient as the only object,
and in both cases it would be analyzed as the [obj]():

~~~ sdparse
Նա դասավանդում է մաթեմատիկա ։ \n He teaches maths.Nom .
obj(դասավանդում, մաթեմատիկա)
obj(teaches, maths.Nom)
~~~

~~~ sdparse
Նա դասավանդում է առաջին կուրսեցիներին ։ \n He teaches first-year students.Dat .
obj(դասավանդում, կուրսեցիներին)
obj(teaches, students.Dat)
~~~

The one exception is when there is a [clausal complement](ccomp).
Then the clausal complement is regarded as a “clausal direct object” and an object nominal will be an `iobj`, parallel to
the simple ditransitive case:

~~~ sdparse
Նա տեղեկացրեց ուսանողներին , որ վաղվա քննությունները հետաձգվում են ։ \n He told the-students , that tomorrow's examinations are canceled .
iobj(տեղեկացրեց, ուսանողներին)
ccomp(տեղեկացրեց, հետաձգվում)
iobj(told, the-students)
ccomp(told, canceled)
~~~

~~~ sdparse
Նա ուսանողներին պատմեց իր ծրագրերից ։ \n He told the-students his some-plans .
iobj(պատմեց, ուսանողներին)
obj(պատմեց, ծրագրերից)
iobj(told, the-students)
obj(told, some-plans)
~~~

If there are two or more objects, one of them should be [obj]() and the others should be
`iobj`. In such cases it is necessary to decide what is the
most directly affected object _(patient)._
<!-- Interlanguage links updated Čt lis 12 09:43:28 CET 2020 -->
