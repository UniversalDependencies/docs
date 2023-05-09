---
layout: relation
title: 'advcl'
shortdef: 'adverbial clause modifier'
udver: '2'
---

An adverbial clause modifier is a clause which modifies a verb or other predicate (adjective, etc.) as a modifier, not as a core complement. This includes things, such as a temporal clause, consequence, conditional clause, purpose clause, etc. The head of the advcl relation is the predicate of the main clause, and the dependent is the main predicate of the dependent clause.

~~~ sdparse
Premišljeval je o Jayu in njegovih prijateljih , ko je prečkal temačno parkirišče . \n He thought about Jay and his friends , when he crossed the dark parking lot .
advcl(Premišljeval,prečkal)
advcl(thought,crossed)
~~~
~~~ sdparse
Čeprav so poroke večinoma veseli dogodki , so lahko priprave na to slavje polne težav . \n Although are weddings mostly joyful events , can be preparations for this occasion full of-troubles .
advcl(polne,dogodki)
cop(polne,so-8)
nsubj(polne,priprave)

advcl(full,events)
cop(full,be)
nsubj(full,preparations)
~~~

The `advcl` relation is also used for comparative clauses, with the feature that is being compared acting as the head of the relation. 

~~~ sdparse
Njihovo življenje je malce bolj umirjeno , kot smo ga vajeni . \n Their life is slightly more peaceful than we-are to-it used .
advcl(umirjeno,vajeni)
advcl(peaceful,used)
~~~

Third, the `advcl` relation is also used for optional depictives (descriptive [secondary predicates](https://universaldependencies.org/u/overview/complex-syntax.html#secondary-predicates)), with the main predicate acting as the head of the relation.

~~~ sdparse
Prišla je oblečena v eleganten komplet s svetlomodro bluzo . \n She came dressed in elegant set with sapphire blouse .
advcl(Prišla,oblečena)
advcl(came,dressed)
~~~
~~~ sdparse
Ves blaten sem bil ob srečanju s kagujem nenadoma najsrečnejši človek . \n All muddy I was upon meeting cagou the-happiest man .
advcl(človek,blaten)
advcl(man,muddy)
~~~

<!-- Interlanguage links updated Út 9. května 2023, 20:03:54 CEST -->
