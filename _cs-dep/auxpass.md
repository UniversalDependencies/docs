---
layout: relation
title: 'auxpass'
shortdef: 'passive auxiliary'
---

A passive auxiliary of a clause is a form of the [auxiliary verb](cs-pos/AUX) _být_ “to be”
used to construct the periphrastic passive voice (in any tense or in the infinitive).

~~~ sdparse
Kennedy byl zabit . \n Kennedy was killed .
auxpass(zabit, byl)
auxpass(killed, was)
~~~

~~~ sdparse
Kennedy bude zabit . \n Kennedy will-be killed .
auxpass(zabit, bude)
auxpass(killed, will-be)
~~~

~~~ sdparse
Kennedy netušil , že jeho osudem je být zabit . \n Kennedy did-not-anticipate that his fate is to-be killed .
auxpass(zabit, být)
auxpass(killed, to-be)
~~~

Note that the passive participle may be also used as nominal predicate with [copula](cop).
Hence it may be difficult to distinguish a passive construction from a copula construction.
The former focuses on the process while the latter emphasizes the result.

- Passive:

~~~ sdparse
Smlouva byla podepsána v Bílém domě . \n Contract was signed in White House .
auxpass(podepsána, byla)
auxpass(signed, was)
~~~

- Copula:

~~~ sdparse
Smlouva byla podepsána červeným inkoustem . \n Contract was signed in-red ink .
cop(podepsána, byla)
cop(signed, was)
~~~
