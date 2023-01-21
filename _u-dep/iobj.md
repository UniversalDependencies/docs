---
layout: relation
title: 'iobj'
shortdef: 'indirect object'
udver: '2'
---

| | WARNING |
|-----------|--------|
| ⚠️ | The traditional term "indirect object", associated with morphosyntactic encoding of certain types of arguments (especially datives/recipients) in a clause, has a wide range of interpretations across languages and linguistic frameworks. In UD, universal-level relations do not distinguish arguments and adjuncts; rather, the distinction is between [core arguments and oblique modifiers](/u/overview/syntax.html#core-arguments-vs-oblique-modifiers). `iobj` must only be used for core arguments, never for obliques, as described below. The naming of this relation may be changed in the next major revision of the UD guidelines. |


In UD, the indirect object of a verb is any nominal phrase that is a core
argument of the verb but is not its subject or (direct) [object](obj).
The prototypical example is the recipient of ditransitive verbs of
exchange:

~~~ sdparse
She gave me a raise
iobj(gave, me)
nsubj(gave, She)
~~~

However, many languages allow other semantic roles as additional objects. The most common case is allowing benefactives, but some languages allow other roles. Examples include instruments, such as in the Kinyarwanda example below, or comitatives. At the other extreme, some languages lack all indirect objects.

~~~ sdparse
Umukoóbwa a-ra-andik-iish-a íbárúwa íkárámu \n girl 1-PRS-write-APPL-ASP letter pen
obj(a-ra-andik-iish-a, íbárúwa)
iobj(a-ra-andik-iish-a, íkárámu)
~~~

In languages distinguishing morphological [cases](u-feat/Case), the recipient will often be marked by the dative case.
However, the `iobj` relation can be used only for a core argument. The morphological dative may signal a core argument
in some languages (such as Basque) but in many others it is just oblique (like the English preposition _to_). For
instance, in many Indo-European languages, the recipient should be attached as [obl]() and not `iobj`, regardless
of the traditional grammar which may label it as “indirect object”.

In the following Czech example, the verb takes two objects. Both are nouns in the accusative case, which is rather
unusual—for most other verbs, one of the arguments would be in the dative and would thus be treated as oblique in UD.
However, a bare accusative signals a core object and a verb with one nominative and two accusatives is ditransitive
in UD. One of the accusatives is direct object (patient), the other is indirect (recipient). It is parallel to how
the English translation would be annotated (where there is no morphological case marking) and also to verbs of giving
in English (consider a similar sentence, _he gave my daughter a class of maths_).

~~~ sdparse
On učí mou dceru matematiku . \n He teaches my daughter.Acc maths.Acc .
obj(učí, matematiku)
iobj(učí, dceru)
obj(teaches, maths.Acc)
iobj(teaches, daughter.Acc)
~~~

Predicates in Basque can cross-reference (by morphological agreement on the auxiliary verb) up to three arguments
in different morphological cases: ergative, absolutive, and dative. The morphological cross-reference is a strong
indicator that all three are core arguments. Therefore, if all three are present, we have a double-object situation
and the dative argument will be `iobj` (while the ergative argument will be [nsubj]() and the absolutive [obj]()).
Even if the absolutive argument is omitted for a verb which licenses three arguments, the dative argument is still
`iobj`.

~~~ sdparse
(Nik)/Case=Erg (zuri)/Case=Dat liburua/Case=Abs eman dizut . \n (I) (you) book given I-have-you-it .
nsubj(eman, (Nik))
iobj(eman, (zuri))
obj(eman, liburua)
aux(eman, dizut)
punct(eman, .-6)
nsubj(given, (I))
iobj(given, (you))
obj(given, book)
aux(given, I-have-you-it)
punct(given, .-13)
~~~

~~~ sdparse
Mariari/Case=Dat eman nion liburua/Case=Abs . \n To-Maria given I-have-her-it book .
iobj(eman, Mariari)
obj(eman, liburua)
aux(eman, nion)
punct(eman, .-5)
iobj(given, To-Maria)
obj(given, book)
aux(given, I-have-her-it)
punct(given, .-11)
~~~

~~~ sdparse
Mariari/Case=Dat eman nion . \n To-Maria given I-have-her-it .
iobj(eman, Mariari)
aux(eman, nion)
punct(eman, .-4)
iobj(given, To-Maria)
aux(given, I-have-her-it)
punct(given, .-9)
~~~

~~~ sdparse
Liburua/Case=Abs eman nion . \n Book given I-have-her-it .
obj(eman, liburua)
aux(eman, nion)
punct(eman, .-4)
obj(given, book)
aux(given, I-have-her-it)
punct(given, .-9)
~~~

If the language has a prototypical `iobj` (occurring in a double object construction with [obj]()),
then morphosyntactic criteria need to be established for when a sole object is [obj]() and when it is `iobj`.[^1]
Depending on the language, potential reasons to consider a sole object in a clause as an `iobj` include:
- It has case marking distinct from that of a prototypical [obj](), e.g. dative rather than accusative
- Another, more patient-like object may be inserted into the clause without affecting the morphosyntax of the object in question
- The verb licenses the object in combination with a [ccomp]() (the [ccomp]() may be analyzed as taking the place of an [obj]())

For example, in English, the verb _teach_ may occur with [obj](), [iobj](), or both:

~~~ sdparse
She teaches the students introductory logic .
iobj(teaches, students)
obj(teaches, logic)
~~~

~~~ sdparse
She teaches introductory logic .
obj(teaches, logic)
~~~

~~~ sdparse
She teaches the first-year students .
iobj(teaches, students)
~~~

~~~ sdparse
She teaches her students that good writing is important .
iobj(teaches, students)
ccomp(teaches, important)
~~~

~~~ sdparse
She teaches her students to write well .
iobj(teaches, students)
xcomp(teaches, write)
~~~

However, not all verbs license two objects (or an object plus [ccomp]()), in which case the sole object should be plain [obj]() even if it has recipient-like semantics:

~~~ sdparse
She questions her students about their interests .
obj(questions, students)
obl(questions, interests)
~~~

~~~ sdparse
She helps her students to succeed .
obj(helps, students)
xcomp(helps, succeed)
~~~

[^1]: This is an amended policy. An explanation of the change will be posted.

<!-- Interlanguage links updated Po lis 14 15:35:28 CET 2022 -->
