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
ⲛ/AUX ⲧⲉⲧⲛ/PRON ⲥⲟⲣ/VERB ϥ/PRON ⲉⲃⲟⲗ/ADV ⲙⲉⲣⲟⲥ/NOUN ⲙⲉⲣⲟⲥ/NOUN
advmod(ⲥⲟⲣ, ⲉⲃⲟⲗ)
advmod(ⲥⲟⲣ, ⲙⲉⲣⲟⲥ-1)
conj(ⲙⲉⲣⲟⲥ-1, ⲙⲉⲣⲟⲥ-2)
~~~ 
