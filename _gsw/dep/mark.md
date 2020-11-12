---
udver: '2'
layout: relation
title: 'mark'
shortdef: 'marker'
---

The relation `mark` is used for tokens that introduce subordinate clauses, known in German grammars as "Nebensatz".

~~~ sdparse
... , weil ich krank bin . \n ... because I am sick .
mark(krank, weil)
cop(krank, bin)
subj(krank, ich)
~~~

The word "zu" also receives the relation `mark` when it is used to mark an infinitive. 

~~~ sdparse
... , um sein Leben zu retten . \n ... to rescue his life .
mark(retten, um)
mark(retten, zu)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:29 CET 2020 -->
