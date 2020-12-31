---
layout: relation
title: 'obl:npmod'
shortdef : 'noun phrase as adverbial modifier'
udver: '2'
---

This relation is a subtype of the [obl]() relation, which captures cases where a noun phrase is used as an adverbial modifier in a sentence, without a preposition indicating its oblique status:

Used for non-reflexive pronouns used adverbially (i.e. regular pronouns, not with the inflected modifier ⲙⲙⲓⲛⲙⲙⲟ):

~~~ sdparse
ⲧⲉ/PRON ⲥⲙⲁⲙⲁⲁⲧ/VERB ⲛⲧⲟ/PRON \n you are blessed yourself

nsubj(ⲥⲙⲁⲙⲁⲁⲧ,ⲧⲉ)
obl:npmod(ⲥⲙⲁⲙⲁⲁⲧ,ⲛⲧⲟ)
~~~

Distributive numerals:

~~~ sdparse
ⲡ/DET ϩⲱⲃ/NOUN ⲙ/ADP ⲡ/DET ⲟⲩⲁ/NUM ⲡ/DET ⲟⲩⲁ/NUM \n the act of one by one

det(ϩⲱⲃ,ⲡ-1)
nmod(ϩⲱⲃ,ⲟⲩⲁ-5)
case(ⲟⲩⲁ-5,ⲙ)
det(ⲟⲩⲁ-5,ⲡ-4)
obl:npmod(ⲟⲩⲁ-5,ⲟⲩⲁ-7)
~~~

NPs used to indicate manner, means, extent etc.:

~~~ sdparse
ⲙⲡ/AUX ⲥ/PRON ⲙⲧⲟⲛ/VERB ⲙⲙⲟ/ADP ⲥ/PRON ⲗⲁⲁⲩ/NOUN \n she did not repose (in) anything

obl:npmod(ⲙⲧⲟⲛ,ⲗⲁⲁⲩ)
~~~

