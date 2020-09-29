---
layout: relation
title: 'acl:relcl'
shortdef: 'relative clauses'
udver: '2'
---

A relative clause is an instance of <code>acl</code>, characterized by finiteness and usually omission of the modified noun in the embedded clause. The noun can be omitted or, more frequently, substituted by a relative pronoun (*il quale*, *cui*), relative conjunction (*che*), or an adverb (*dove*). 

~~~ sdparse
L' inchiesta che coinvolge Bernard Tapie
acl:relcl(inchiesta, coinvolge)
~~~
~~~ sdparse
La vita , in cui il mutamento avviene
acl:relcl(vita, avviene)
~~~
~~~ sdparse
In un bar di piazza San Giovanni dove hanno fatto irruzione gli agenti
acl:relcl(bar, fatto)
~~~
~~~ sdparse
Tutti gli esseri umani sanno di poter essere più di ciò che sono .
acl:relcl(ciò, sono)
~~~

<code>acl:relcl</code> is also used for case of partitive relative clauses, i.e. propositional phrases introduced by *tra cui*, *fra cui* where the verb of the subordinate clause can be elided.

~~~ sdparse
Persone tra cui molti bambini .
acl:relcl(Persone, bambini)
~~~

<!-- Interlanguage links updated Út zář 29 20:31:40 CEST 2020 -->
