---
layout: relation
title:  'nmod:poss'
shortdef : 'possessive nominal modifier'
udver: '2'
---

A subtype of [nmod](), `nmod:poss` is used for a possessive modifier preceding its nominal head. The modifier could be a possessive pronoun or a noun with a genitive case clitic (e.g. _'s_). This relation is not used for other pre-head modifiers such as noun compounds or quotative phrases.

~~~ sdparse
Marie 's book
nmod:poss(book, Marie)
case(Marie, 's)
~~~

~~~ sdparse
my book
nmod:poss(book, my)
~~~
<!-- Interlanguage links updated St lis 3 20:58:59 CET 2021 -->
