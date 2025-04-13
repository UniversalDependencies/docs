---
layout: relation
title: 'nmod:unmarked'
shortdef : 'noun phrase as adnominal adverbial modifier'
udver: '2'
---

This relation is a subtype of the [nmod]() relation, replacing the deprecated `:npmod` subtype, which captures cases where a noun phrase is used as an adverbial modifier in a sentence, without a preposition indicating its oblique status. The label applies to Layton's category of inflected modifiers (IMODs) when they are modifying a nominal (otherwise use `obl:unmarked` instead). For example, the inflected modifier ⲧⲏⲣ⸗ ‘all of X’ is also seen as `obl:unmarked`, i.e. as syntactically more similar to ‘completely’ than a determiner ‘all’. Like all inflected modifiers, the pronoun is seen as a determiner in this case, similar to a possessive. In the following example, we can think of the meaning as ‘their entirety(-wise)’, or ‘by way of their entirety’.

Example:

~~~ sdparse
ⲛ/DET ⲕⲟⲟⲩⲉ/NOUN ⲧⲏⲣ/ADV ⲟⲩ/PRON \n all the others (lit. the others in their entirety)
nmod:unmarked(ⲕⲟⲟⲩⲉ, ⲧⲏⲣ)
det(ⲧⲏⲣ, ⲟⲩ)
~~~ 

Distributive numerals are also analyzed as `nmod:unmarked`:

~~~ sdparse
ⲡ/DET ϩⲱⲃ/NOUN ⲙ/ADP ⲡ/DET ⲟⲩⲁ/NUM ⲡ/DET ⲟⲩⲁ/NUM \n the act of one by one

det(ϩⲱⲃ,ⲡ-1)
nmod(ϩⲱⲃ,ⲟⲩⲁ-5)
case(ⲟⲩⲁ-5,ⲙ)
det(ⲟⲩⲁ-5,ⲡ-4)
nmod:unmarked(ⲟⲩⲁ-5,ⲟⲩⲁ-7)
~~~
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:11:06 CET -->
