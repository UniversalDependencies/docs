---
layout: relation
title: 'advmod'
shortdef: 'adverbial modifier'
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
ⲛ/AUX ⲧⲉⲧⲛ/PRON ⲥⲟⲣ/VERB ϥ/PRON ⲉⲃⲟⲗ/ADV ⲙⲉⲣⲟⲥ/NOUN ⲙⲉⲣⲟⲥ/NOUN \N ...as you divide it out, limb for limb...
advmod(ⲥⲟⲣ, ⲉⲃⲟⲗ)
advmod(ⲥⲟⲣ, ⲙⲉⲣⲟⲥ-6)
conj(ⲙⲉⲣⲟⲥ-6, ⲙⲉⲣⲟⲥ-7)
~~~ 

Inflected modifiers (Scriptorium tag IMOD, cf. Layton 2011: 118-123) are also seen as adverbial. For example, ϩⲱⲱ⸗ is used together with an object pronoun to mean ‘also X’ or ‘X for X’s part. Because of its basic modifier semantics, meaning ‘also’, the combination is seen as adverbial, so that the function of the phrase is again `advmod`. Note that ϩⲱⲱ is not a preposition, and the analysis treats it similarly to a possessed noun, so that the pronoun is seen as a determiner `det`

~~~ sdparse
ϩⲱⲱ/ADV ⲕ/PRON ⲕ/PRON ⲟⲩⲱϣⲧ/VERB N\ you also worship/for your part you worship
advmod(ⲟⲩⲱϣⲧ, ϩⲱⲱ)
~~~

The same applies to other IMODs: the inflected modifier ⲧⲏⲣ⸗ ‘all of X’ is also seen as advmod, i.e. as syntactically more similar to ‘completely’ than a determiner ‘all’.  Like all inflected modifiers, the pronoun is seen as a determiner in this case, similar to a possessive. In the following example, we can think of the meaning as ‘their entirety(-wise)’, or ‘by way of their entirety’.

Example:

~~~ sdparse
ⲛ/DET ⲕⲟⲟⲩⲉ/NOUN ⲧⲏⲣ/ADV ⲟⲩ/PRON \N all the others (lit. the others in their entirety)
advmod(ⲕⲟⲟⲩⲉ, ⲧⲏⲣ)
~~~ 
