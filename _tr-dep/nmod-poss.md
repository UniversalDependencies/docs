---
layout: relation
title: 'nmod:poss'
shortdef: 'possessive nominal modifier'
---

This subtype of [nmod]() is used in (genitive-)possessive constructions.
Typically, the head of the construction is a possessive noun phrase,
and the dependent is in genitive [case](tr-feat/Case).
We also use `nmod:poss` in the alternative construction where the modifier is not in genitive case.
So-called "bare noun compounds" are marked using the [compound]() relation.

~~~ sdparse
Ali'nin kitabı   \n Ali's book
nmod:poss(kitabı, Ali'nin)
~~~

~~~ sdparse
Sabah kahvesi \n Morning coffee
nmod:pos(kahvesi, Sabah)
~~~
