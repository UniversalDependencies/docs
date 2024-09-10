---
layout: relation
title: 'nmod:unmarked'
shortdef : 'unmarked nominal modifier'
udver: '2'
---

This relation is a subtype of the [nmod]() relation that applies
when a non-possessive modifier within a nominal takes the form of a 
nominal lacking a preposition (a.k.a. a noun phrase). It is 
"unmarked" in that, unlike most `nmod`s, it has no adposition or
genitive marking.

`nmod:unmarked` merges two older subtypes, `nmod:npmod` and `nmod:tmod`.
It has a clause-level countepart: [obl:unmarked]().

Examples include:

(i) temporal modifiers

~~~ sdparse
Are you free for lunch some day this week ?
nmod:unmarked(lunch, day)
det(day, some)
nmod:unmarked(day, week)
det(week, this)
~~~

(ii) rate expressions with meaning equivalent to "per"

~~~ sdparse
IBM earned $ 5 a share
nmod:unmarked($, share)
~~~

(iii) elementary properties

~~~ sdparse
I want that color kitten
nmod:unmarked(kitten, color)
~~~

~~~ sdparse
a pizza the size of the sun
nmod:unmarked(pizza, size)
~~~

(iv) emphatic reflexive pronouns

~~~ sdparse
Einstein himself was in attendance .
nmod:unmarked(Einstein, himself)
~~~

(v) "a couple" as pre-head quantifier

~~~ sdparse
You can have a couple/NOUN cookies .
det(couple, a)
nmod:unmarked(cookies, couple)
~~~

**History:** Prior to release 2.15, case (i) (temporal modifiers)
had a separate subtype called [nmod:tmod](), and [nmod:npmod]()
was used for the non-temporal ones.
