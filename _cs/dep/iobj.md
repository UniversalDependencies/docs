---
layout: relation
title: 'iobj'
shortdef: 'indirect object'
udver: '2'
---

The indirect object of a verb is any nominal phrase that is a core
argument of the verb but is not its subject or [direct object](obj).
While in some languages the prototypical example is the recipient of
ditransitive verbs of giving, in Czech the recipient is normally coded using
the dative case, which is not considered core. Not being a core argument,
a dative nominal must be attached as either [obl:arg]() or just [obl]().
<!-- Since UD 2.6, UD_Czech-PDT commit 00ff168f52eb769aa15570b00c1801a7a7151082 on 7.12.2019. -->
(Note that this is a change in the Czech guidelines. Before UD 2.6,
bare dative nominals were considered core arguments in Czech.)

In rare cases, a Czech verb may allow two accusative (core) objects, as in the following example.
One of them is direct object (patient), the other is indirect (addressee). It is parallel to how
the English translation would be annotated (where there is no morphological case marking). The
direct object also matches the direct object of verbs of giving (consider a similar sentence,
_he gave my daughter a class of maths_); however, as noted above, the addressee of such verbs
would be treated as oblique, not `iobj`.

~~~ sdparse
On učí mou dceru matematiku . \n He teaches my daughter.Acc maths.Acc .
obj(učí, matematiku)
iobj(učí, dceru)
obj(teaches, maths.Acc)
iobj(teaches, daughter.Acc)
~~~

In general, if there is just one object, it should be labeled [obj](), regardless of the semantic
role. For example, _učit_ “to teach” can take either the subject matter or the recipient as the
only object, and in both cases it would be analyzed as [obj]():

~~~ sdparse
Učí úvod do logiky . \n He-teaches introduction to logic .
obj(Učí, úvod)
obj(He-teaches, introduction)
nmod(úvod, logiky)
nmod(introduction, logic)
case(logiky, do)
case(logic, to)
~~~

~~~ sdparse
Učí studenty prvního ročníku . \n He-teaches students of-first year .
obj(Učí, studenty)
obj(He-teaches, students)
nmod(studenty, ročníku)
nmod(students, year)
amod(ročníku, prvního)
amod(year, of-first)
~~~

If there are two or more objects, one of them should be [obj]() and the others should be `iobj`.
In such cases it is necessary to decide what is the most directly affected object _(patient)._

<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:58 CET -->
