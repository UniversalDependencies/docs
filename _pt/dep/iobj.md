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
Ela me deu um aumento
iobj(deu, me)
~~~

In general, if there is just one object, it should be labeled
[obj](), regardless of the morphological case or semantic role. For example, in Portuguese, _ensinar_ can take either the subject matter or the recipient as the only object, and in both cases it would be analyzed ad the [obj]():

~~~ sdparse
Ela ensina lógica
dobj(ensina, lógica)
~~~

~~~ sdparse
Ela ensina os alunos do primeiro ano
dobj(ensina, alunos)
~~~

~~~ sdparse
Ela ensina lógica a os alunos do primeiro ano
dobj(ensina, lógica)
iobj(ensina, alunos)
~~~


This is consistent with the analysis of Huddleston and Pullum (2002) “The Cambridge Grammar of the English Language”,
chapter 4 section 4 (p. 251).  As they note, it is no different to the same semantic role being sometimes the subject
and sometimes the object in intransitive/transitive alternations. The one exception is when there is a clausal complement.
Then the clausal complement is regarded as a “clausal direct object” and an object nominal will be an iobj, parallel to
the simple ditransitive case:

~~~ sdparse
Ela disse a os estudante que eles precisam estudar esta noite
iobj(disse, estudantes)
ccomp(told, precisam)
~~~

~~~ sdparse
Ela disse o plano a os estudantes
iobj(disse, estudantes)
dobj(disse, plano)
~~~

If there are two or
more objects, one of them should be [obj]() and the others should be
`iobj`. In such cases it is necessary to decide what is the
most directly affected object _(patient)._ In Portuguese, usually `iobj` comes with a preposition (_a, de, em_) or in olibque case (_me, se, lhe_).

<!-- Interlanguage links updated Út zář 29 20:23:33 CEST 2020 -->
