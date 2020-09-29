---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
udver: '2'
---

A nominal modifier. This is the label given to prepositional objects and other types of nominal dependents which are non-core arguments and not verbal modifiers (i.e. neither subject nor object nor oblique). Note that in keeping with Universal Dependencies for other languages, the `nmod` noun attaches directly to the lexeme it modifies (usually a noun), while the preposition is seen as a `case` dependent of the modifying noun.

~~~ sdparse
ⲡ/DET ⲣⲏ/NOUN ϩⲛ/ADP ⲧ/DET ⲡⲉ/NOUN  \n the sun in the sky

det(ⲣⲏ, ⲡ)
nmod(ⲣⲏ, ⲡⲉ)
case(ⲡⲉ, ϩⲛ)
det(ⲡⲉ, ⲧ)
~~~

Note that prepositional arguments of verbs are marked as `obl`, not `nmod`, including prepositional objects of verbs of perception:

~~~ sdparse
ⲁⲣ/PRON ⲥⲱⲧⲙ/VERB ⲉⲣⲟ/ADP ⲓ/PRON \n You have heard me

nsubj(ⲥⲱⲧⲙ, ⲁⲣ)
obl(ⲥⲱⲧⲙ, ⲓ)
case(ⲉⲣⲟ, ⲓ)
~~~
<!-- Interlanguage links updated Út zář 29 20:31:55 CEST 2020 -->
