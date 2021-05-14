---
layout: relation
title: 'aux:pass'
shortdef: 'passive auxiliary'
udver: '2'
---

A passive auxiliary of a clause is a form of the [auxiliary verb](cs-pos/AUX) _být_ “to be”
used to construct the periphrastic passive voice (in any tense or in the infinitive).

~~~ sdparse
Kennedy byl zabit . \n Kennedy was killed .
aux:pass(zabit, byl)
aux:pass(killed, was)
~~~

~~~ sdparse
Kennedy bude zabit . \n Kennedy will-be killed .
aux:pass(zabit, bude)
aux:pass(killed, will-be)
~~~

~~~ sdparse
Kennedy netušil , že jeho osudem je být zabit . \n Kennedy did-not-anticipate that his fate is to-be killed .
aux:pass(zabit, být)
aux:pass(killed, to-be)
~~~

Note that the passive participle may be also used as nominal predicate with [copula](cop).
Hence it may be difficult to distinguish a passive construction from a copula construction.
The former focuses on the process while the latter emphasizes the result.

- Passive:

~~~ sdparse
Smlouva byla podepsána v Bílém domě . \n Contract was signed in White House .
aux:pass(podepsána, byla)
aux:pass(signed, was)
~~~

- Copula:

~~~ sdparse
Smlouva byla podepsána červeným inkoustem . \n Contract was signed in-red ink .
cop(podepsána, byla)
cop(signed, was)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:08:52 CEST 2021 -->
