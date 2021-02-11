---
layout: relation
title: 'cop'
shortdef: 'copula'
udver: '2'
---

A copula is the relation between the complement of a copular verb and
the copular verb. Copular heads are avoided when possible.

~~~ sdparse
ROOT Hettar er ein royndar setningur . \n This is a random sentence .
root(ROOT, setningur)
cop(setningur, er)
nsubj(setningur, Hettar)
amod(setningur, royndar)
det(setningur, ein)
punct(setningur, .)
~~~

Prepositional phrases are annotated similarly, the only difference being that
the nominal predicate has an additional case marker.

~~~ sdparse
Hon er frá Føroyum . \n She is from the.Faroes .
case(Føroyum, frá)
cop(Føroyum, er)
nsubj(Føroyum, Hon)
punct(Føroyum, .)
~~~

When an adjective or adverb is being predicated of a nominal phrase, the
adjective/adverb is the root, the nominal phrase is the nsubj, and the
copula is attached to the root with the `cop` relation.

~~~ sdparse
Hon er sterk . \n She is strong .
nsubj(sterk, Hon)
cop(sterk, er)
punct(sterk, .)
~~~

~~~ sdparse
Hettar var í gjár . \n It was in yesterday .
nsubj(gjár, Hettar)
cop(gjár, var)
case(gjár, í)
punct(gjár, .)
~~~

Prepositions may also project a cop dependent.

~~~ sdparse
Ljósið er frá . \n The light is on .
cop(frá, er)
nsubj(frá, Ljósið)
punct(frá, .)
~~~

In predicative wh-constructions, the fronted wh-word is the head, and the copula is
another cop.

~~~ sdparse
Hvat er hattar ? \n What is that ?
cop(Hvat, er)
nsubj(Hvat, hattar)
punct(Hvat, ?)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:20 CET 2020 -->
