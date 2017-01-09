---
layout: relation
title: 'remnant'
shortdef: 'remnant in ellipsis'
---

This (relatively rarely used) function is required when ellipsis of a head word results in two words which do not refer to the same thing in the world (cf. dislocated) to be realized as double dependents of the same head. English examples for this relations are sentences such as:

Mary ate the cake, but John the cookies.

In this case, the absence of a second ‘ate’ forces us to consider two conflicting subjects and objects for the first ‘ate’. The solution is to connect the second member in each set to the first one, using the remnant relation. Coptic examples work using the same logic:

~~~ sdparse
ⲛ/NEG ⲥⲉ/PRON ⲣⲭⲣⲉⲓⲁ/VERB ⲁⲛ/NEG ⲛϭⲓ/PTC ⲛ/ART ⲉⲧ/SCONJ ⲧⲏⲕ/VERB ⲙ/ADP ⲡ/DET ⲥⲁⲓⲛ/NOUN ⲁⲗⲗⲁ/CONJ ⲛ/DET ⲉⲧ/SCONJ ϣⲟⲟⲡ/VERB ⲕⲁⲕⲱⲥ/ADV \n The healthy do not need the doctor, but those who are unwell (need the doctor). 

neg(ⲣⲭⲣⲉⲓⲁ, ⲛ-1)
nsubj(ⲣⲭⲣⲉⲓⲁ, ⲥⲉ)
neg(ⲣⲭⲣⲉⲓⲁ, ⲁⲛ)
dislocated(ⲣⲭⲣⲉⲓⲁ, ⲛ-6)
case(ⲛ-6, ⲛϭⲓ)
cc(ⲣⲭⲣⲉⲓⲁ, ⲁⲗⲗⲁ)
acl(ⲛ-6, ⲧⲏⲕ)
mark(ⲧⲏⲕ, ⲉⲧ-7)
nmod(ⲧⲏⲕ, ⲥⲁⲓⲛ)
case(ⲥⲁⲓⲛ, ⲙ)
det(ⲥⲁⲓⲛ, ⲡ)
remnant(ⲥⲉ, ⲛ-13)
acl(ⲛ-13, ϣⲟⲟⲡ)
mark(ϣⲟⲟⲡ, ⲉⲧ-14)
advmod(ϣⲟⲟⲡ, ⲕⲁⲕⲱⲥ)

~~~

While both subjects are related to need, only the first instance of the subject may be realized on the overt verb need. The second subject is thought of as belonging to an omitted coordinated verb. For this reason, the conjunction but is seen as having the function cc to the first verb.


