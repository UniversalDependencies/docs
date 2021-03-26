---
layout: relation
title:  'csubj:cop'
shortdef : 'clausal copular subject'
udver: '2'
---

A *clausal copular subject* (`csubj:cop`) is a clause that acts as the
subject of another, copular clause. As in all copular clauses, the
predicative acts as the head of the clause and hence it is also the
governor of the copular subject.

<!-- TODO: Replace the Finnish Example with a Turkish one. -->

~~~ sdparse
Oli hauskaa käydä teatterissa . \n Was fun to_go to_theatre .
cop(hauskaa-2, Oli-1)
csubj:cop(hauskaa-2, käydä-3)
nmod(käydä-3, teatterissa-4)
punct(hauskaa-2, .-5)
~~~

<!-- Interlanguage links updated Čt lis 12 09:43:22 CET 2020 -->
