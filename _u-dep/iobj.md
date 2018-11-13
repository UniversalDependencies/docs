---
layout: relation
title: 'iobj'
shortdef: 'indirect object'
udver: '2'
---

The indirect object of a verb is any nominal phrase that is a core
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


In languages distinguishing morphological [cases](u-feat/Case), the indirect object will often be marked by the dative case. However, verb valency may occasionally dictate that the direct object is in dative, or that the indirect objects shall take various other forms.

In the following Czech example, the verb takes two arguments, both are nouns in the accusative case. One of them is direct object (patient), the other is indirect (addressee). It is parallel to how the English translation would be annotated (where there is no morphological case marking) and also to verbs of giving (consider a similar sentence, _he gave my daughter a class of maths_).

~~~ sdparse
On učí mou dceru matematiku . \n He teaches my daughter.Acc maths.Acc .
obj(učí, matematiku)
iobj(učí, dceru)
obj(teaches, maths.Acc)
iobj(teaches, daughter.Acc)
~~~

In general, if there is just one object, it should be labeled
[obj](), regardless of the morphological case or semantic role. For example, in English, _teach_ can take either the subject matter or the recipient as the only object, and in both cases it would be analyzed as the [obj]():

~~~ sdparse
She teaches introductory logic
obj(teaches, logic)
~~~

~~~ sdparse
She teaches the first-year students
obj(teaches, students)
~~~

This is consistent with the analysis of Huddleston and Pullum (2002) “The Cambridge Grammar of the English Language”,
chapter 4 section 4 (p. 251).  As they note, it is no different to the same semantic role being sometimes the subject
and sometimes the object in intransitive/transitive alternations. 

<!--The one exception is when there is a clausal complement.
Then the clausal complement is regarded as a “clausal object” and an object nominal will be an iobj, parallel to
the simple ditransitive case:

~~~ sdparse
She told the students that they needed to study this evening
iobj(told, students)
ccomp(told, needed)
~~~

~~~ sdparse
She told the students the plan
iobj(told, students)
obj(told, plan)
~~~

If there are two or
more objects, one of them should be [obj]() and the others should be
`iobj`. In such cases it is necessary to decide what is the
most directly affected object _(patient)._ If possible,
language-specific documentation should help identify direct and
indirect objects.
-->
