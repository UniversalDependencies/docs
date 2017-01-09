---
layout: relation
title: 'parataxis'
shortdef: 'parataxis'
---

This label is used to link two main clauses that are listed together as one sentence (either by accident, or because they are not quite independent sentences). It is also used for parenthetical clauses in the middle of other clauses. The dependency goes from the root of the first clause, or in parenthetical cases, the non-parenthetical clause, to the other one:

~~~ sdparse
ⲛ/DET ⲉⲡⲓⲥⲧⲟⲗⲏ/NOUN ⲛⲉ/AUX ⲉⲛⲧ/SCONJ ⲁ/AUX ⲕ/PRON ⲡⲁϩ/VERB ⲟⲩ/PRON ,/PUNCT ⲏ/CONJ ϯ/PRON ⲥⲟⲟⲩⲛ/VERB ⲁⲛ/ADV ⲙⲡⲁⲧ/AUX ⲓ/PRON ϫⲟⲟⲩ/VERB ⲥⲟⲩ/PRON ϫⲉ/CONJ ⲕ/PRON ⲛⲁ/AUX ⲡⲁϩ/VERB ⲟⲩ/PRON \n It’s the letters that you tore, don’t I know before I sent them that you’ll tear them? 

det(ⲉⲡⲓⲥⲧⲟⲗⲏ, ⲛ)
cop(ⲉⲡⲓⲥⲧⲟⲗⲏ, ⲛⲉ)
acl(ⲉⲡⲓⲥⲧⲟⲗⲏ, ⲡⲁϩ-7)
mark(ⲡⲁϩ-7, ⲉⲛⲧ)
aux(ⲡⲁϩ-7, ⲁ)
nsubj(ⲡⲁϩ-7, ⲕ)
dobj(ⲡⲁϩ-7, ⲟⲩ-8)
parataxis(ⲉⲡⲓⲥⲧⲟⲗⲏ, ⲥⲟⲟⲩⲛ)
cc(ⲥⲟⲟⲩⲛ, ⲏ)
nsubj(ⲥⲟⲟⲩⲛ, ϯ)
neg(ⲥⲟⲟⲩⲛ, ⲁⲛ)
acl(ⲥⲟⲟⲩⲛ, ϫⲟⲟⲩ)
aux(ϫⲟⲟⲩ, ⲙⲡⲁⲧ)
nsubj(ϫⲟⲟⲩ, ⲓ)
ccomp(ⲥⲟⲟⲩⲛ, ⲡⲁϩ-21)
dobj(ϫⲟⲟⲩ, ⲥⲟⲩ)
aux(ⲡⲁϩ-21, ⲛⲁ)
nsubj(ⲡⲁϩ-21, ⲕ)
mark(ⲡⲁϩ-21, ϫⲉ)
dobj(ⲡⲁϩ-21, ⲟⲩ-22)
~~~

If both of these clauses are seen as one sentence, there is no other relation to call the connection between the first clause and the second one. Note that this is distinct from two coordinated clauses, e.g. with ⲁⲩⲱ ‘and’, for which `cc` and `conj` should be used.

