---
layout: relation
title: 'acl:relcl'
shortdef: 'acl:relcl'
---

A relative clause is an instance of 'acl', characterized by finiteness and usually omission of the modified noun in the embedded clause. The noun can be omitted or, more frequently, substituted by a relative pronoun (*il quale*, *cui*), relative conjunction (*che*), or an adverb (*dove*). 

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
Tutti gli esseri umani sanno di poter essere più di ciò che sono.
acl:relcl(ciò, sono)
~~~

'acl:relcl' is also used when the verb is omitted, for example in case of paritive complements introduced by *tra cui*, *fra cui*.

~~~ sdparse
Persone tra cui molti bambini
acl:relcl(persone, bambini)
~~~

