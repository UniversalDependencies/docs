---
layout: relation
title: 'parataxis'
shortdef: 'parataxis'
---

This label is used to link two main clauses that are listed together as one sentence (either by accident, or because they are not quite independent sentences). It is also used for parenthetical clauses in the middle of other clauses. The dependency goes from the root of the first clause, or in parenthetical cases, the non-parenthetical clause, to the other one:

~~~ sdparse
ⲛ/ADP ⲧⲉ/DET ⲩⲛⲟⲩ/NOUN ⲇⲉ/PART ⲁ/AUX ⲩ/PRON ⲕⲁ/VERB ⲛⲉⲩ/DET ϣⲛⲏⲩ/NOUN ⲁ/AUX ⲩ/PRON ⲟⲩⲁϩ/VERB ⲟⲩ/PRON ⲛⲥⲱ/ADP ϥ/PRON \n Immediately they left their nets and followed him.

mark(ⲩⲛⲟⲩ,  ⲛ)
det(ⲩⲛⲟⲩ, ⲧⲉ)
advmod(ⲕⲁ, ⲇⲉ) 
aux(ⲕⲁ, ⲁ-5)
nsubj(ⲕⲁ, ⲩ-6)
dobj(ⲕⲁ, ϣⲛⲏⲩ)
det(ϣⲛⲏⲩ, ⲛⲉⲩ)
parataxis(ⲕⲁ, ⲟⲩⲁϩ)
aux(ⲟⲩⲁϩ, ⲁ-10)
nsubj(ⲟⲩⲁϩ, ⲩ-11)
dobj(ⲟⲩⲁϩ, ⲟⲩ)
nmod(ⲟⲩⲁϩ, ϥ)
case(ⲛⲥⲱ, ϥ)

~~~

If both of these clauses are seen as one sentence, there is no other relation to call the connection between the first clause and the second one. Note that this is distinct from two coordinated clauses, e.g. with ⲁⲩⲱ ‘and’, for which `cc` and `conj` should be used.

