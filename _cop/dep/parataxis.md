---
layout: relation
title: 'parataxis'
udver: '2'
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
nmod(ⲕⲁ, ⲩⲛⲟⲩ)

~~~

If both of these clauses are seen as one sentence, there is no other relation to call the connection between the first clause and the second one. Note that this is distinct from two coordinated clauses, e.g. with ⲁⲩⲱ ‘and’, for which `cc` and `conj` should be used.

For more than two clauses, parataxis forms a chain rather than a 'fountain', i.e. unlike `conj` it does not attach all clauses to the first one:

~~~ sdparse
ⲁ/AUX ⲓ/PRON ⲉⲓ/VERB ⲇⲉ/PTC ⲉⲃⲟⲗ/ADV ϩⲙ/ADP ⲡ/DET ⲁⲩⲏⲧ/NOUN ⲙ/ADP ⲙⲟⲛⲁⲭⲟⲥ/NOUN ·/PUNCT ⲁ/AUX ⲓ/PRON ⲕⲱⲧ/VERB ⲛⲁ/ADP ⲓ/PRON ⲛ/ADP ⲟⲩ/DET ⲙⲁ/NOUN ⲛ/ADP ϣⲱⲡⲉ/NOUN ⲙⲁⲩⲁⲁ/ADV ⲧ/PRON ⲁ/AUX ⲓ/PRON ⲟⲩⲱϩ/VERB ⲛϩⲏⲧ/ADP ϥ/PRON ·/PUNCT \n I came away from the house of the monks, I built myself a habitation in a place apart, (and) I took up my abode therein. 


parataxis(ⲉⲓ,ⲕⲱⲧ)
parataxis(ⲕⲱⲧ,ⲟⲩⲱϩ)

~~~

If multiple clauses are listed, but one of them (usually the last) is explicitly coordinated with a conjunction such as ⲁⲩⲱ ‘and’, the entire structure is analyzed as a fountain of `conj` relations emanating from the first clause, similarly to English ‘A, B and C’:

~~~ sdparse
ⲁ/AUX ⲓ/PRON ⲥⲟⲩⲉⲗⲟⲩⲱⲗ/VERB ⲥ/PRON ⲉⲣⲟ/ADP ϥ/PRON ·/PUNCT ⲁ/AUX ⲓ/PRON ϭⲱϫⲉ/VERB ⲛ/ADP ⲛⲁ/DET ϭⲓϫ/NOUN ϩⲙ/ADP ⲡ/DET ⲕⲁϩ/NOUN ·/PUNCT ⲁ/AUX ⲓ/PRON ⲧⲱⲙⲥ/VERB ϥ/PRON ·/PUNCT ⲁⲩⲱ/CCONJ ⲁ/AUX ⲓ/PRON ⲉⲓ/VERB ⲉⲃⲟⲗ/ADV ϩⲙ/ADP ⲡ/DET ⲙⲁ/NOUN ⲉⲧ/SCONJ ⲙⲙⲁⲩ/ADV \n I wrapped the body up in it, I dug a hole in the earth with my hands, I buried him, and I came forth from that place

conj(ⲥⲟⲩⲉⲗⲟⲩⲱⲗ,ϭⲱϫⲉ)
conj(ⲥⲟⲩⲉⲗⲟⲩⲱⲗ,ⲧⲱⲙⲥ)
conj(ⲥⲟⲩⲉⲗⲟⲩⲱⲗ,ⲉⲓ)
cc(ⲉⲓ,ⲁⲩⲱ)

~~~
<!-- Interlanguage links updated Čt lis 12 09:43:37 CET 2020 -->
