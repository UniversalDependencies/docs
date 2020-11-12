---
layout: relation
title: 'mark'
shortdef: 'marker'
udver: '2'
---

A marker is the word introducing a finite clause subordinate to another clause. Similar to <code>case</code>, it can be a preposition, a subordinate conjunction or an adverb. Unlike <code>case</code> though, it introduces clauses, not complements. The <code>mark</code> element is a dependent of the subordinate clause head.

~~~ sdparse
Bossi quando parla si copre di ridicolo, dovrebbe bastare questo a punirlo . 
mark(parla, quando)
mark(punirlo, a)
~~~
~~~ sdparse
Abbiamo cercato di presentare una interpretazione diversa. 
mark(presentare, di)
~~~
~~~ sdparse
Nessuno può essere obbligato se non per disposizione di legge .
mark(disposizione, se)
~~~

It is used also on the head of <code>mwe</code> relations when they refer to verbs.

~~~ sdparse
Prima di gettarsi in mare . 
mark(gettarsi, Prima)
mwe(Prima, di)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:29 CET 2020 -->
