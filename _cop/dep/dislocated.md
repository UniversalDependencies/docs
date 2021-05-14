---
layout: relation
title: 'dislocated'
shortdef: 'dislocated elements'
udver: '2'
---

This label is used for arguments or ‘hanging topics’ that are preposed before the verbal complex, and which are referred to again as pronouns governed by the verbal complex, as well as for extraposed arguments realized a second time after the verb. In these cases, the verb governs the closer, pronominal realization of the object as usual, and the 'extra' realization (topicalized or extraposed) is connected to the verb as `dislocated`.

~~~ sdparse
ⲡ/DET ϣⲓⲡⲉ/NOUN ⲙ/ADP ⲡⲉⲓ/DET ⲙⲁ/NOUN ,/PUNCT ⲡ/DET ⲉⲟⲟⲩ/NOUN ⲙ/ADP ⲡⲉⲓ/DET ⲙⲁ/NOUN ⲁ/AUX ⲓ/PRON ⲡⲁⲣⲁⲓⲧⲉⲓ/VERB ⲙⲙⲟ/ADP ⲩ/PRON \n The shame of this place, the glory of this place, I have forsaken them.

det(ϣⲓⲡⲉ, ⲡ-1)
nmod(ϣⲓⲡⲉ, ⲙⲁ-5)
det(ⲙⲁ-5, ⲡⲉⲓ-4)
case(ⲙⲁ-5, ⲙ)
conj(ⲙⲁ-5, ⲉⲟⲟⲩ)
det(ⲉⲟⲟⲩ, ⲡ-7)
nmod(ⲉⲟⲟⲩ, ⲙⲁ-11)
det(ⲙⲁ-11, ⲡⲉⲓ-10)
case(ⲙⲁ-11, ⲙ)
dislocated(ⲡⲁⲣⲁⲓⲧⲉⲓ, ϣⲓⲡⲉ)
case(ⲩ, ⲙⲙⲟ)
obj(ⲡⲁⲣⲁⲓⲧⲉⲓ, ⲩ)
aux(ⲡⲁⲣⲁⲓⲧⲉⲓ, ⲁ) 
nsubj(ⲡⲁⲣⲁⲓⲧⲉⲓ, ⲓ)
~~~

Note how the lexical arguments ‘the shame … the glory’ act as dislocated and are pre-posed, to be referred to again as pronouns by the pronoun object ‘them’, which acts as `obj` (forsaken what? them. What is them? shame + glory). The dislocation is linked to the word governing the ‘duplicate pronoun’, usually the verb (here ⲡⲁⲣⲁⲓⲧⲉⲓ ‘forsake’, which also governs the object pronoun).

This relation is also used for the special construction with ⲛϭⲓ ‘namely’: 

~~~ sdparse
ⲁ ϥ ⲥⲱⲧⲙ ⲛϭⲓ ⲡ ⲇⲓⲁⲃⲟⲗⲟⲥ \n He heard, namely the devil.

dislocated(ⲥⲱⲧⲙ, ⲇⲓⲁⲃⲟⲗⲟⲥ)
det(ⲇⲓⲁⲃⲟⲗⲟⲥ, ⲡ)
case(ⲇⲓⲁⲃⲟⲗⲟⲥ, ⲛϭⲓ)
nsubj(ⲥⲱⲧⲙ, ϥ)
~~~

In this example, a duplicate subject appears, which is coreferent with the pronoun ϥ ‘he’ (the lexical head 'devil' = 'he'). The lexical phrase is mediated by ⲛϭⲓ ‘namely, that is’, which is considered to be a case marker, like a preposition (but with nominative case - it can only mark extraposed subjects). 

If a nominal subject or object is mentioned **before** an auxiliary and is then referred to by a pronoun in the verbal complex (e.g. ⲡⲣⲱⲙⲉ ⲁϥⲥⲱⲧⲙ ‘the man, he heard’), the pronoun is always treated as the subject or object, and the preceding noun is attached to the verb as `dislocated`. 
<!-- Interlanguage links updated Pá kvě 14 11:09:03 CEST 2021 -->
