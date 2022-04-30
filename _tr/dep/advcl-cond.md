---
layout: relation
title: 'advcl:cond'
shortdef: 'conditional adverbial clause modifier'
---

This relation is not used in UD v2. Documentation is kept as reference.

This relation is a subtype of [advcl]().
It is used for conditional clauses.

~~~ sdparse
Kitabı okusaydın anlardın . \n You would understand if you had read the book
advcl:cond(anlardın, okusaydın)
~~~

In Turkish conditional clauses are formed by a verbal inflection on the head of the clause. 
There are also two redundant words, _eğer_ and _şayet_ that may be included at the beginning or end of the phrase.
Use of these words are only for emphasis or an early signal that a conditional clause follows.
We use [discourse]() (not [mark]()) for marking the relation between these words and head of the conditional clause.
<!-- Interlanguage links updated St lis 3 20:58:35 CET 2021 -->
