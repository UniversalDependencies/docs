---
layout: relation
title:  'nmod:npmod'
shortdef : 'noun phrase as adverbial modifier'
udver: '2'
---

**⚠️ DEPRECATED: Beginning with the version 2.15 release,
most English corpora will use the new [nmod:unmarked]() relation instead. ⚠️**

This relation is a subtype of the [nmod]() relation, used when
a prepositionless, non-possessive nominal serves as a modifier
within a larger nominal. For example:

(i) rate expressions with meaning equivalent to "per"

~~~ sdparse
IBM earned $ 5 a share
nmod:npmod($, share)
~~~

(ii) elementary properties

~~~ sdparse
I want that color kitten
nmod:npmod(kitten, color)
~~~

~~~ sdparse
a pizza the size of the sun
nmod:npmod(pizza, size)
~~~

(iii) emphatic reflexive pronouns

~~~ sdparse
Einstein himself was in attendance .
nmod:npmod(Einstein, himself)
~~~

(iv) "a couple" as pre-head quantifier

~~~ sdparse
You can have a couple/NOUN cookies .
det(couple, a)
nmod:npmod(cookies, couple)
~~~

A temporal modifier [nmod:tmod]() is a subclass of npmod which is
distinguished as a separate relation.

<!-- Interlanguage links updated Ne 5. května 2024, 18:21:23 CEST -->
