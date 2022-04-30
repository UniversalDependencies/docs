---
layout: relation
title: 'csubj'
shortdef: 'clausal subject'
udver: '2'
---

A clausal subject is a clausal syntactic subject of a clause, i.e.,
the subject is itself a clause. The governor of this relation might
not always be a verb: when the verb is a copular verb, the root of the
clause is the complement of the copular verb. The dependent is the main lexical verb or other 
predicate of the subject clause.

~~~ sdparse
Obžalovanému přitížilo , že neměl alibi . \n To-indictee did-a-disservice , that he-did-not-have alibi .
csubj(přitížilo, neměl)
csubj(did-a-disservice, he-did-not-have)
~~~

~~~ sdparse
Podstatou těchto vazeb je , že se děj rozloží na dvě složky . \n The-essence of-these constructions is , that one the-action splits to two parts .
csubj(Podstatou, rozloží)
cop(Podstatou, je)
csubj(The-essence, splits)
cop(The-essence, is)
~~~
<!-- Interlanguage links updated St lis 3 20:58:48 CET 2021 -->
