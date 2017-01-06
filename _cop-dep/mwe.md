---
layout: relation
title: 'mwe'
shortdef: 'multi-word expression'
---

Multi-word expressions are sequences of tokens which form a fixed expression, for which internal grammatical relations are not represented. For Coptic, this often corresponds to multi-token complex prepositions, often with a frozen adverbial modifier such as ⲉⲃⲟⲗ ‘out’. For example in the following example, the complex sequence ⲉⲃⲟⲗ ϩⲛ ‘out of’, has individual tokens which literally mean ‘out in’. 

~~~ sdparse 
ⲁ/AUX ⲩ/PRON ⲛⲧ/VERB ⲟⲩ/PRON ⲉⲃⲟⲗ/ADV ϩⲙ/ADP ⲡⲉⲕ/DET ⲏⲓ/NOUN \n they took them out of your house

aux(ⲛⲧ, ⲁ)
nsubj(ⲛⲧ, ⲩ)
dobj(ⲛⲧ, ⲟⲩ)
nmod(ⲛⲧ, ⲏⲓ)
case(ⲏⲓ, ⲉⲃⲟⲗ)
mwe(ⲉⲃⲟⲗ, ϩⲙ)
det(ⲏⲓ, ⲡⲉⲕ)
~~~

While an interpretation connecting ⲉⲃⲟⲗ to the verb to mean ‘take out’ is possible, that would leave the sense of ‘in’ to mean ‘of’ unexplained. Rather, the combination ⲉⲃⲟⲗ ϩⲛ ‘out of’ is lexicalized as a multiword expression, or `mwe`. By convention, mwe’s point in a chain from left to right, whereas the first token in the chain carries the external function of the expression – in this case a preposition (the label `case`).
