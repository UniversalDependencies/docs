---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier in oblique case'
udver: '2'
---

nmod denotes the head noun of postpositional phrases.

nmod:obl denotes nominal modifiers (of nominals) that bear a case marker different from accusative or dative.
In the following example, _olajért_ “for oil” is in the causative case, while _élelmiszert_ “food” is in the accusative.

~~~ sdparse
úgynevezett " olajért élelmiszert " programot \n so-called “ for-oil food ” program
amod:att(élelmiszert, úgynevezett)
punct(élelmiszert, "-2)
nmod:obl(élelmiszert, olajért)
punct(élelmiszert, "-5)
nmod:att(programot, élelmiszert)
~~~

<!-- Interlanguage links updated St lis 3 20:58:59 CET 2021 -->
