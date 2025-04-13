---
layout: relation
title: 'obl:unmarked'
shortdef : 'noun phrase as adverbial modifier'
udver: '2'
---

This relation is a subtype of the [obl]() relation, replacing the deprecated `:npmod` subtype, which captures cases where a noun phrase is used as an adverbial modifier in a sentence, without a preposition indicating its oblique status:

Used for non-reflexive pronouns used adverbially (i.e. regular pronouns):

~~~ sdparse
ⲧⲉ/PRON ⲥⲙⲁⲙⲁⲁⲧ/VERB ⲛⲧⲟ/PRON \n you are blessed yourself

nsubj(ⲥⲙⲁⲙⲁⲁⲧ,ⲧⲉ)
obl:unmarked(ⲥⲙⲁⲙⲁⲁⲧ,ⲛⲧⲟ)
~~~

Inflected modifiers (Scriptorium tag IMOD, cf. Layton 2011: 118-123) are also seen as oblique NPs. For example, ϩⲱⲱ⸗ is used together with an object pronoun to mean ‘also X’ or ‘X for X’s part. Because of its basic modifier semantics, meaning ‘also’, the combination is seen as oblique, so that the function of the phrase is again `obl:unmarked`. Note that ϩⲱⲱ is not a preposition, and the analysis treats it similarly to a possessed noun, so that the pronoun is seen as a determiner `det` and the entire combination is an oblique NP:

~~~ sdparse
ϩⲱⲱ/ADV ⲕ/PRON ⲕ/PRON ⲟⲩⲱϣⲧ/VERB \n you also worship/for your part you worship
obl:npmod(ⲟⲩⲱϣⲧ, ϩⲱⲱ)
det(ϩⲱⲱ, ⲕ-2)
~~~

See also NPs used to indicate manner, means, extent etc.:

~~~ sdparse
ⲙⲡ/AUX ⲥ/PRON ⲙⲧⲟⲛ/VERB ⲙⲙⲟ/ADP ⲥ/PRON ⲗⲁⲁⲩ/NOUN \n she did not repose (in) anything

obl:unmarked(ⲙⲧⲟⲛ,ⲗⲁⲁⲩ)
~~~

<!-- Interlanguage links updated Po 11. listopadu 2024, 20:11:22 CET -->
