---
layout: relation
title: 'auxpass'
shortdef: 'passive auxiliary'
---

A passive auxiliary of a clause is a form of the [auxiliary verb](cs-pos/AUX) _быть_ “to be”
used to construct the periphrastic passive voice (in any tense or in the infinitive).

~~~ sdparse
Кеннеди был убит . \n Kennedy was killed .
auxpass(убит, был)
auxpass(killed, was)
~~~

~~~ sdparse
Кеннеди будет убит . \n Kennedy will-be killed .
auxpass(убит, будет)
auxpass(killed, will-be)
~~~

~~~ sdparse
Кеннеди не знал , что его судьба быть убитым . \n Kennedy did-not-anticipate that his fate is to-be killed .
auxpass(убитым, быть)
auxpass(killed, to-be)
~~~

Note that the passive participle may be also used as nominal predicate with [copula](cop).
Hence it may be difficult to distinguish a passive construction from a copula construction.
The former focuses on the process while the latter emphasizes the result.

- Passive:

~~~ sdparse
Контракт был подписан в Белом Доме. \n Contract was signed in White House .
auxpass(подписан, был)
auxpass(signed, was)
~~~

- Copula:

~~~ sdparse
Контракт был подписан красными чернилами . \n Contract was signed in-red ink .
cop(подписан, был)
cop(signed, was)
~~~
