---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun'
udver: '2'
---

`acl` stands for finite and non-finite clauses that modify a nominal. A relative clause is an instance of acl, characterized by finiteness and usually omission of the modified noun in the embedded clause. The head of the acl relation is the noun that is modified, and the dependent is the head of the clause that modifies the noun.

* With a synthetic verb:

*Hori diote futbolaz **dakiten** entrenatzaileek .*

*The coaches **who know** about football say that .*

~~~ sdparse
Hori diote futbolaz dakiten entrenatzaileek . \n That say football_about know_who coaches_the .

dobj(diote-2, Hori-1)
nsubj(diote-2, entrenatzaileek-5)
nmod(dakiten-4, futbolaz-3)
acl(entrenatzaileek-5, dakiten-4)
punct(diote-2, .-6)
~~~


* With a compound/periphrastic verb:

*Hura da haurraren etorkizuna erabaki **dezakeen** bakarra .*

*He/she is the only one **who can** decide the child's future .*

~~~ sdparse
Hura da haurraren etorkizuna erabaki dezakeen bakarra . \n He/she is child_the_'s future decide can_who the_only_one .

nsubj(bakarra-7, Hura-1)
nmod(etorkizuna-4, haurraren-3)
dobj(erabaki-5, etorkizuna-4)
aux(erabaki-5, dezakeen-6)
acl(bakarra-7, erabaki-5)
cop(bakarra-7, da-2)
punct(bakarra-7, .-8)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:08 CET 2020 -->
