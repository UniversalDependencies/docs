---
layout: relation
title: 'csubj'
shortdef: 'clausal subject'
udver: '2'
---

Used to mark the head of a clausal subject. The dependency goes from the predicate that governs the subject, to the local root (i.e. the predicate) of the subject clause. This construction is fairly rare, and the subject clause is often an infinitive clause, as shown below.

~~~ sdparse
ⲛⲉ/AUX ⲡ/DET ⲉⲧ/SCONJ ⲉϣϣⲉ/VERB ⲡⲉ/AUX ⲉ/ADP ⲁⲛⲉⲭⲉ/VERB ⲙⲙⲟ/ADP ⲕ/PRON \n it would be fitting to tolerate you

csubj(ⲡ, ⲁⲛⲉⲭⲉ)
aux(ⲁⲛⲉⲭⲉ, ⲉ)
cop(ⲡ, ⲡⲉ)
acl(ⲡ, ⲉϣϣⲉ)
mark(ⲉϣϣⲉ, ⲉⲧ)
obj(ⲁⲛⲉⲭⲉ, ⲕ)
case(ⲕ, ⲙⲙⲟ)
~~~

Note that this is just like a nominal subject (`nsubj`): what would be fitting? To tolerate you. To tolerate you is fitting.

A relatively frequent case is the predicative 'p-et' construction after a noun predicate, where a subject clause marked by the relative converter follows what looks like an article, but is in fact a truncated copula. In the following example, the postponed clause is `csubj`. Note that the copula ⲡ has xpos=COP and upos=PRON, while the article is DET (xpos=ART).

~~~ sdparse
ⲡ/DET ⲛⲟⲩⲧⲉ/NOUN ⲡ/PRON ⲉⲧ/SCONJ ⲁⲩⲝⲁⲛⲉ/VERB \n It is God who raised them

csubj(ⲛⲟⲩⲧⲉ, ⲁⲩⲝⲁⲛⲉ)
cop(ⲛⲟⲩⲧⲉ, ⲡ-3)
mark(ⲁⲩⲝⲁⲛⲉ, ⲉⲧ)
det(ⲛⲟⲩⲧⲉ, ⲡ-1)
~~~

Compare this to the 'normal' p-et- construction, which does not contain a copula and functions as an argument nominal phrase (and note there is only upos=DET here):


~~~ sdparse
ⲡ/DET ⲉⲛⲧ/SCONJ ⲁ/AUX ϥ/PRON ⲥⲟⲣⲙ/VERB ⲉⲥ/PRON ⲉⲓ/VERB \n The one who lost it is coming

nsubj(ⲉⲓ, ⲡ)
acl(ⲡ, ⲥⲟⲣⲙ)
mark(ⲥⲟⲣⲙ, ⲉⲛⲧ)
nsubj(ⲥⲟⲣⲙ, ϥ)
obj(ⲥⲟⲣⲙ, ⲉⲥ)
aux(ⲥⲟⲣⲙ, ⲁ)
~~~


The small class of mostly Greek origin impersonal verbs also takes subject clauses, such as ⲉⲝⲉⲥⲧⲓ 'it is appropriate', which points from main verb to subordinate verb:

~~~ sdparse
ⲟⲩⲕ ⲉⲝⲉⲥⲧⲓ/VERB ⲉ ⲁⲁ/VERB ϥ \n it is not appropriate to do it

csubj(ⲉⲝⲉⲥⲧⲓ, ⲁⲁ)
~~~
