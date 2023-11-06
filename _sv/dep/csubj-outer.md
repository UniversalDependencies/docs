---
layout: relation
title: 'csubj:outer'
shortdef: 'outer clause clausal subject'
udver: '2'
---

This relation specifies a clausal subject of a copular clause whose predicate is itself a clause, 
to signal that it is not the subject of the nested clause.
See discussion of [Predicate Clauses](/u/overview/complex-syntax.html#predicate-clauses).

~~~ sdparse
-ROOT- Att skiljas är att dö en smula \n To separate is to die a little
root(-ROOT-, dö)
csubj:outer(dö, skiljas)
mark(skiljas, Att)
cop(dö, är)
mark(dö, att)
advmod(dö, smula)
det(smula, en)
~~~

The nominal counterpart of this relation is [nsubj:outer](). When the subject clause is an independent relative clause the wh-head of that clause may be taken as the head of the predicate clause.

~~~ sdparse
-ROOT- Vad hon sa var att han varit sjuk \n What she said was that he had been ill
root(-ROOT-, sjuk)
nsubj:outer(sjuk, Vad)
cop(sjuk, var)
mark(sjuk, att)
nsubj(sjuk, han)
cop(sjuk, varit)
acl:relcl(Vad, sa)
nsubj(sa, hon)
~~~

The `:outer` subtype is *not* intended for most clausal subjects of copular clauses—only those where the predicate is itself a clause. 
Plain [csubj]() (or another subtype) will be appropriate if the copular clause predicate is a nominal, adjective, etc.:

~~~ sdparse
It is very important that your students respect you .
expl(important, It)
csubj(important, respect)
~~~
<!-- Interlanguage links updated Po 6. listopadu 2023, 21:42:44 CET -->
