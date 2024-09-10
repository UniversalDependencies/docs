---
layout: relation
title: 'advmod'
shortdef: 'adverbial modifier'
udver: '2'
---

An adverbial modification, usually modifying a verb or a noun. This can be an adverb like ⲉⲙⲁⲧⲉ ‘very much’, ⲙⲙⲁⲩ ‘there’, a sentence particle (modifying the main predicate) like ⲅⲁⲣ ‘after all’, or a directional adverbial such as ⲉⲃⲟⲗ ‘out’, as well as Greek adverbs in -ⲱⲥ. 

Example:

~~~ sdparse
ⲙⲛ/VERB ⲗⲁⲁⲩ/NOUN ⲛϩⲏⲧ/ADP ⲟⲩ/PRON ϩⲟⲗⲱⲥ/ADV ⲙⲙⲁⲩ/ADV \n There isn't a thing inside them at all there.
advmod(ⲙⲛ, ϩⲟⲗⲱⲥ)
advmod(ⲙⲛ, ⲙⲙⲁⲩ)
~~~

Occasionally nouns will be used as adverbial modifiers depicting manner or time, as in the following:

~~~ sdparse
ⲛ/AUX ⲧⲉⲧⲛ/PRON ⲥⲟⲣ/VERB ϥ/PRON ⲉⲃⲟⲗ/ADV ⲙⲉⲣⲟⲥ/NOUN ⲙⲉⲣⲟⲥ/NOUN \n ...as you divide it out, limb for limb...
advmod(ⲥⲟⲣ, ⲉⲃⲟⲗ)
advmod(ⲥⲟⲣ, ⲙⲉⲣⲟⲥ-6)
conj(ⲙⲉⲣⲟⲥ-6, ⲙⲉⲣⲟⲥ-7)
~~~ 

Inflected modifiers (Scriptorium tag IMOD, cf. Layton 2011: 118-123) which were previously analyzed as adverbial, are now tagged as obliques with the special subtype `obl:npmod`. 

Finally, this is also the label for negations such as ⲁⲛ, ⲛ, ⲧⲙ etc. which receive the Scriptorium POS tag NEG. The attachment is to the negated element, often from the predicate or verb. Copula sentence negation is attached to the predicate, not to the copula. In circum-negation (ⲛ…ⲁⲛ), both elements are attached to the same element with the neg label.

~~~ sdparse
ⲟⲩ ϩⲱⲃ ⲉ ⲛⲁⲛⲟⲩ ϥ ⲁⲛ ⲡⲉ \n it is not a good deed

det(ϩⲱⲃ, ⲟⲩ)
acl(ϩⲱⲃ, ⲛⲁⲛⲟⲩ)
cop(ϩⲱⲃ, ⲡⲉ)
advmod(ϩⲱⲃ, ⲁⲛ)
mark(ⲛⲁⲛⲟⲩ, ⲉ)
nsubj(ⲛⲁⲛⲟⲩ, ϥ)
~~~

<!-- Interlanguage links updated Ne 5. května 2024, 18:20:37 CEST -->
