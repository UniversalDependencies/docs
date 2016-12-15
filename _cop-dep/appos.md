---
layout: relation
title: 'appos'
shortdef: 'appositional modifier'
---

Marks appositions in all free apposition constructions, as well as the special construction with ⲛϭⲓ ‘namely’. Appositions are preferred to be marked from left to right, including in sentences with nominal subject after the verb (apposition from pronoun to noun). In cases where both a nominal and pronominal realization are given to the same argument with the same function, the tightly bound argument of the verb takes precedence in receiving subject or object marking, with subsequent realizations connected as appositions. Typical cases include normal apposition (two consecutive nominal expressions with same reference and grammatical function) and the ⲛϭⲓ construction.

~~~ sdparse
ⲙⲛ/ADP ⲡⲉⲕ/DET ⲉⲓϣⲧ/NOUN ⲡ/DET ⲇⲓⲁⲃⲟⲗⲟⲥ/NOUN \n with your father, the devil

appos(ⲉⲓϣⲧ, ⲇⲓⲁⲃⲟⲗⲟⲥ)
det(ⲇⲓⲁⲃⲟⲗⲟⲥ, ⲡ)
det(ⲉⲓϣⲧ, ⲡⲉⲕ)
~~~

~~~ sdparse
ⲁ ϥ ⲥⲱⲧⲙ ⲛϭⲓ ⲡ ⲇⲓⲁⲃⲟⲗⲟⲥ \n He heard, namely the devil.

appos(ϥ, ⲇⲓⲁⲃⲟⲗⲟⲥ)
det(ⲇⲓⲁⲃⲟⲗⲟⲥ, ⲡ)
case(ⲇⲓⲁⲃⲟⲗⲟⲥ, ⲛϭⲓ)
~~~

In the first example, *your father* and *the devil*, refer to the same thing, and have the same function (both relate to *with*: *with your father*, i.e. *with the devil*). In the second example, an apposition to the pronoun ϥ ‘he’ is mediated by ⲛϭⲓ ‘namely, that is’, which is considered to be a case marker, like a preposition (but with nominative case). As usual, the apposition goes from left to right, to the lexical head ‘devil’ (he = devil). 

Unusually, if a nominal subject or object is mentioned **before** an auxiliary and is then referred to by a pronoun in the verbal complex (e.g. ⲡⲣⲱⲙⲉ ⲁϥⲥⲱⲧⲙ ‘the man, he heard’), the pronoun is treated as the subject or object, and the preceding noun is labeled `dislocated`. 
