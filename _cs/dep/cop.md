---
layout: relation
title: 'cop'
shortdef: 'copula'
udver: '2'
---

A copula is the relation between the nominal predicate _(přísudek jmenný)_ and
the copular verb _<b>být</b>_ “to be” (or its variants _bývat, bývávat_).
The verb _stát se_ “to become”, despite being counted among copular verbs by some authors,
is not analyzed as `cop`.

We normally take a copula as a dependent of its complement (the nominal predicate).
The nominal predicate is usually a [noun](cs-pos/NOUN), an [adjective](cs-pos/ADJ)
or a <a href="../feat/VerbForm.html#part-participle">participle</a>.

~~~ sdparse
Ondřej je čestný muž . \n Ondřej is honest man .
cop(muž, je)
cop(man, is)
~~~

~~~ sdparse
Ondřej je čestný . \n Ondřej is honest .
cop(čestný, je)
cop(honest, is)
~~~

Note that the passive participle may be also used as nominal predicate with copula.
Hence it may be difficult to distinguish a passive construction from a copula construction.
The former focuses on the process while the latter emphasizes the result.

- Passive: _Smlouva <b>byla</b>.`AUX` podepsána v&nbsp;Bílém domě._ &nbsp; “The contract was signed in the White House.”
- Copula: _Smlouva <b>byla</b>.`VERB` podepsána červeným inkoustem._ &nbsp; “The contract was signed in red ink.”

~~~ sdparse
Smlouva byla podepsána v Bílém domě . \n Contract was signed in White House .
aux:pass(podepsána, byla)
aux:pass(signed, was)
~~~

~~~ sdparse
Smlouva byla podepsána červeným inkoustem . \n Contract was signed in-red ink .
cop(podepsána, byla)
cop(signed, was)
~~~

The nominal predicate may also be expressed using a prepositional phrase.
Phrases expressing the state of the subject are clear predicates, e.g. _Lenka je v kondici_ “Lenka is in shape”.
Under the v2 guidelines, prepositional phrases expressing locations are also considered predicates, to increase parallelism across languages.

Thus the following sentences receive parallel analyses:

- _Lenka je skvělá._ “Lenka is brilliant.”
- _Lenka je v kondici._ “Lenka is in shape.”
- _Lenka je v kuchyni._ “Lenka is in the kitchen.”

In contrast, the following two are no longer parallel:

- _Lenka je v kuchyni._ “Lenka is in the kitchen.”
- _Lenka zůstala v kuchyni._ “Lenka stayed in the kitchen.”

~~~ sdparse
Lenka je v kondici . \n Lenka is in shape .
cop(kondici, je)
cop(shape, is)
case(kondici, v)
case(shape, in)
nsubj(kondici, Lenka-1)
nsubj(shape, Lenka-7)
~~~

~~~ sdparse
Lenka je v kuchyni . \n Lenka is in kitchen .
nsubj(kuchyni, Lenka-1)
nsubj(kitchen, Lenka-7)
cop(kuchyni, je)
cop(kitchen, is)
case(kuchyni, v)
case(kitchen, in)
~~~
<!-- Interlanguage links updated Út zář 29 20:31:48 CEST 2020 -->
