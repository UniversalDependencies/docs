---
layout: relation
title: 'csubj'
shortdef: 'clausal subject'
---

Used to mark the head of a clausal subject. The dependency goes from the predicate that governs the subject, to the local root (i.e. the predicate) of the subject clause. This construction is fairly rare, and the subject clause is often an infinitive clause, as shown below.

~~~ sdparse
ⲛⲉ/AUX ⲡ/DET ⲉⲧ/SCONJ ⲉϣϣⲉ/VERB ⲡⲉ/AUX ⲉ/ADP ⲁⲛⲉⲭⲉ/VERB ⲙⲙⲟ/ADP ⲕ/PRON \n it would be fitting to tolerate you

csubj(ⲡ, ⲁⲛⲉⲭⲉ)
aux(ⲁⲛⲉⲭⲉ, ⲉ)
cop(ⲡ, ⲡⲉ)
acl(ⲡ, ⲉϣϣⲉ)
mark(ⲉϣϣⲉ, ⲉⲧ)
dobj(ⲁⲛⲉⲭⲉ, ⲕ)
case(ⲕ, ⲙⲙⲟ)
~~~

Note that this is just like a nominal subject (`nsubj`): what would be fitting? To tolerate you. To tolerate you is fitting.
