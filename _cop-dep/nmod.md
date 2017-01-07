---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
---

A nominal modifier. This is the label given to prepositional objects and other types of nominal dependents which are non-core arguments (i.e. neither subject nor object). Note that in keeping with Universal Dependencies for other languages, the `nmod` noun attaches directly to the lexeme it modifies (usually a noun or verb), while the preposition is seen as a `case` dependent of the modifying noun.

~~~ sdparse
ⲡ/DET ⲣⲏ/NOUN ϩⲛ/ADP ⲧ/DET ⲡⲉNOUN  \n the sun in the sky

det(ⲣⲏ, ⲡ)
nmod(ⲣⲏ, ⲡⲉ-5)
case(ⲡⲉ-5, ϩⲛ)
det(ⲡⲉ-5, ⲧ)
~~~

Note also that prepositional arguments of verbs are also marked as `nmod`, including prepositional objects of verbs of perception:

~~~ sdparse
ⲁⲣ/AUX ⲥⲱⲧⲙ/VERB ⲉⲣⲟ/ADP ⲓ/PRON \n You have heard me

nsubj(ⲥⲱⲧⲙ, ⲁⲣ)
nmod(ⲥⲱⲧⲙ, ⲓ)
case(ⲉⲣⲟ, ⲓ)
~~~
