---
layout: base
title:  'nmod:npmod'
shortdef : 'noun phrase as adverbial modifier'
---

## {{ page.title }} : {{ page.shortdef }}

This relation is a subtype of the [nmod]() relation, which captures
the following cases where something syntactically a noun phrase is
used as an adverbial modifier in a sentence:


(i) a measure phrase, which is the relation between the head of an adjectival/adverbial or prepositional phrase and the head of a measure phrase modifying it:

~~~ sdparse
The director is 65 years old
nmod:npmod(old, years)
~~~

~~~ sdparse
6 feet long
nmod:npmod(long, feet)
~~~


(ii) noun phrases giving an extent to a verb, which are not objects:

~~~ sdparse
Shares eased a fraction
nmod:npmod(eased, fraction)
~~~


(iii) financial constructions involving an adverbial, notably the following construction *$5 a share*, where the second nominal means "per share":

~~~ sdparse
IBM earned $ 5 a share
nmod:npmod($, share)
~~~


(iv) floating reflexives

~~~ sdparse
The silence is itself significant
nmod:npmod(significant, itself)
~~~

and (v) certain other absolutive nominal constructions.

A temporal modifier [nmod:tmod]() is a subclass of npmod which is
distinguished as a separate relation.
