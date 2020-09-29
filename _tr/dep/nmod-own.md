---
layout: relation
title: 'nmod:own'
shortdef: 'owner in a possessive existential sentence'
---

**This needs more discussion**

This subtype of [nmod]() is used for marking the owner of a possessive existential sentence.

In Turkish possessive sentences (e.g., "I have a book") resemble existential sentences
where the subject is the entity that "exists", or "owned".
`nmod:own` relation marks the entity that "owns" the subject.
The head of the relation is the predicate,
as opposed to the subject noun phrase
(this allows a uniform analysis in case the subject is dropped).
It should not be confused with [nmod:poss](nmod-poss),
which is used in (genitive-)possessive constructions.

~~~ sdparse
Benim bir kitabım var . \n I have a book
nmod:own(var, Benim)
nsubj(var, kitabım)
~~~

~~~ sdparse
Benim var , ama Ali'nin yok . \n I have (it\/something), but Ali doesn't
nmod:own(var, Benim)
nmod:own(yok, Ali'nin)
~~~
<!-- Interlanguage links updated Út zář 29 20:23:36 CEST 2020 -->
